<h1 align="center">VergeLyrics Music API</h1>

<p align="center">
  A lightweight, Cloudflare Workers-powered API built with Hono.
</p>

<hr/>

<h2>🚀 Overview</h2>

<p>
This project provides an unofficial API wrapper for JioSaavn, built using
<strong>Hono</strong> and deployed on <strong>Cloudflare Workers</strong>.
It exposes endpoints for songs, albums, playlists, artists, search, radio, and more.
</p>

<hr/>

<h2>⚙️ Tech Stack</h2>

<ul>
  <li>Hono (Edge-first web framework)</li>
  <li>Cloudflare Workers</li>
  <li>TypeScript</li>
  <li>Wrangler</li>
</ul>

<hr/>

<h2>📦 Installation</h2>

<pre><code>git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
</code></pre>

<hr/>

<h2>🔧 Development</h2>

<pre><code>npm run dev
</code></pre>

<p>
This will start a local development server using Wrangler.
</p>

<hr/>

<h2>🌍 Deployment</h2>

<pre><code>npm run deploy
</code></pre>

<p>
Make sure your <code>wrangler.toml</code> is properly configured.
</p>

<hr/>

<h2>🔐 Environment Variables</h2>

<p>Add the following to your <code>wrangler.toml</code>:</p>

<pre><code>[vars]
ENABLE_RATE_LIMIT = "true"
LIMITED_REQ_COUNT = "5"
RATE_LIMIT_BYPASS_KEY_HASH = ""
</code></pre>

<hr/>

<h2>📚 API Documentation</h2>

<ul>
  <li><strong>API Docs:</strong> <code>/docs</code></li>
  <li><strong>OpenAPI JSON:</strong> <code>/openapi.json</code></li>
</ul>

<hr/>

<h2>📌 Available Endpoints</h2>

<ul>
  <li><code>/song</code> – Get song details</li>
  <li><code>/album</code> – Get album details</li>
  <li><code>/playlist</code> – Get playlist details</li>
  <li><code>/artist</code> – Get artist details</li>
  <li><code>/search</code> – Search content</li>
  <li><code>/radio</code> – Create radio stations</li>
  <li><code>/modules</code> – Browse modules</li>
  <li><code>/show</code> – Show & episodes</li>
  <li><code>/get</code> – Trending & featured content</li>
  <li><code>/ping</code> – Health check</li>
</ul>

<hr/>

<h2>⚡ Rate Limiting</h2>

<p>
Rate limiting is configurable using environment variables.
By default, requests are limited per IP.
</p>

<p>
To bypass rate limiting, send:
</p>

<pre><code>x-ratelimit-bypass: YOUR_SECRET_HASH</code></pre>

<hr/>

<h2>❗ Error Handling</h2>

<p>
All errors follow a consistent JSON format:
</p>

<pre><code>{
  "status": "Failed",
  "message": "Error message",
  "data": null
}
</code></pre>

<hr/>

<h2>📄 License</h2>

<p>
This project is for educational purposes only.
It is not affiliated with JioSaavn.
</p>

<hr/>

<h2>👨‍💻 Author</h2>

<p>
Made with ❤️ using Cloudflare Workers.
</p>

<hr/>

<p align="center">
  ⭐ If you found this useful, consider giving the repository a star.
</p>
