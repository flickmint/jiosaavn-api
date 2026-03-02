import { Hono } from "hono";
import { config } from "../lib/config";

export const home = new Hono().get("/", (c) =>
  c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>VL Music API</title>

<meta name="description" content="VL Music API by VergeLyrics" />
<meta property="og:url" content="${config.urls.siteUrl}" />
<meta property="og:title" content="VL Music API" />
<meta property="og:description" content="Modern Unofficial JioSaavn API" />

<script src="https://cdn.tailwindcss.com"></script>

<style>
  body {
    background: radial-gradient(circle at 20% 20%, #1f1f2e, #0e0e14 60%);
  }

  .glass {
    backdrop-filter: blur(14px);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
  }

  .gradient-text {
    background: linear-gradient(90deg, #a855f7, #ec4899, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .animate-bg {
    background-size: 300% 300%;
    animation: gradientMove 10s ease infinite;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
</head>

<body class="min-h-screen text-white flex flex-col items-center justify-center px-6">

<!-- HERO -->
<div class="text-center mb-16">
  <h1 class="text-5xl md:text-6xl font-extrabold gradient-text animate-bg">
    VL Music API
  </h1>
  <p class="mt-6 text-neutral-400 text-lg max-w-xl mx-auto">
    A fast, modern, unofficial JioSaavn API built with Hono and powered by Cloudflare Workers.
  </p>
</div>

<!-- CARDS -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

  <!-- Docs -->
  <a href="${config.urls.docsUrl}" target="_blank"
     class="glass card-hover transition-all duration-300 rounded-2xl p-8">
    <div class="text-sm uppercase tracking-widest text-purple-400 font-semibold">
      Documentation
    </div>
    <h2 class="text-2xl font-bold mt-3">Explore API Docs</h2>
    <p class="mt-3 text-neutral-400">
      View complete OpenAPI reference and usage examples.
    </p>
  </a>

  <!-- GitHub -->
  <a href="https://github.com/vergelyrics/music" target="_blank"
     class="glass card-hover transition-all duration-300 rounded-2xl p-8">
    <div class="text-sm uppercase tracking-widest text-green-400 font-semibold">
      Open Source
    </div>
    <h2 class="text-2xl font-bold mt-3">View Source Code</h2>
    <p class="mt-3 text-neutral-400">
      Fully open-source and community driven.
    </p>
  </a>

  <!-- Issues -->
  <a href="https://github.com/vergelyrics/music/issues" target="_blank"
     class="glass card-hover transition-all duration-300 rounded-2xl p-8">
    <div class="text-sm uppercase tracking-widest text-pink-400 font-semibold">
      Contribute
    </div>
    <h2 class="text-2xl font-bold mt-3">Report Bugs / Request Features</h2>
    <p class="mt-3 text-neutral-400">
      Found an issue? Want improvements? Open an issue or PR.
    </p>
  </a>

  <!-- Author -->
  <a href="https://github.com/vergelyrics" target="_blank"
     class="glass card-hover transition-all duration-300 rounded-2xl p-8">
    <div class="text-sm uppercase tracking-widest text-blue-400 font-semibold">
      Maintainer
    </div>
    <h2 class="text-2xl font-bold mt-3">VergeLyrics</h2>
    <p class="mt-3 text-neutral-400">
      Modified version of original unofficial API for educational purposes.
    </p>
  </a>

</div>

<!-- FOOTER -->
<footer class="mt-20 text-neutral-500 text-sm text-center">
  <p>© 2026 VergeLyrics. Built with Hono + Cloudflare Workers.</p>
</footer>

</body>
</html>`)
);
