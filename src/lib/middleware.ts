import type { MiddlewareHandler } from "hono";
import { rateLimiter } from "hono-rate-limiter";
import { toCamelCase } from "./utils";

/* -----------------------------------------------------------------------------------------------
 * Rate Limit Middleware (Cloudflare Worker Safe)
 * -----------------------------------------------------------------------------------------------*/

export function rateLimitMiddleware(): MiddlewareHandler {
  const skipPaths = new Set(["/", "/openapi.json"]);

  return async (c, next) => {
    const enable = c.env.ENABLE_RATE_LIMIT === "true";
    const limit = Number(c.env.LIMITED_REQ_COUNT ?? 5);
    const bypassHash = c.env.RATE_LIMIT_BYPASS_KEY_HASH ?? "";

    if (!enable) {
      return next();
    }

    return rateLimiter({
      windowMs: 1_000,
      limit,

      keyGenerator: (c) => {
        const xff = c.req.header("x-forwarded-for");
        const cf = c.req.header("cf-connecting-ip");
        const raw = xff ?? cf ?? "";
        const first = raw.split(",")[0]?.trim();
        return first || "anonymous";
      },

      message: (c) => {
        const rateLimitInfo = c.get("rateLimit");
        const resetMs = rateLimitInfo?.resetTime
          ? Math.max(0, rateLimitInfo.resetTime.getTime() - Date.now())
          : undefined;

        return {
          status: "Failed",
          message:
            "You have exceeded the rate limit. Please try again later.",
          limit: rateLimitInfo?.limit ?? limit,
          remaining: rateLimitInfo?.remaining ?? 0,
          reset: resetMs ? `${resetMs}ms` : undefined,
        };
      },

      skip: (c) => {
        if (bypassHash) {
          const provided = c.req.header("x-ratelimit-bypass") ?? "";
          if (provided === bypassHash) return true;
        }

        const path = c.req.path;
        return skipPaths.has(path) || path.startsWith("/docs");
      },
    })(c, next);
  };
}

/* -----------------------------------------------------------------------------------------------
 * Camel Case Middleware
 * -----------------------------------------------------------------------------------------------*/

export function camelCaseMiddleware(): MiddlewareHandler {
  return async (c, next) => {
    const camel = c.req.query("camel");

    await next();

    if (
      (camel || camel === "") &&
      c.res.headers.get("Content-Type")?.startsWith("application/json")
    ) {
      const obj = await c.res.json();
      const camelCaseResponse = toCamelCase(obj as Record<string, unknown>);
      c.res = new Response(JSON.stringify(camelCaseResponse), c.res);
    }
  };
}
