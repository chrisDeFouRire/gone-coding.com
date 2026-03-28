# gone-coding.com

Portfolio website for [Gone Coding Ltd.](https://gone-coding.com) — a software engineering company based in Hong Kong.

Built with [Astro](https://astro.build), React, TailwindCSS v4, and shadcn/ui. Deployed to Cloudflare Workers.

## Products

| Product | Description |
|---|---|
| [SSLBoard](https://sslboard.com) | Certificate Lifecycle Management |
| [QCReady](https://qcready.com) | Quality control automation |
| [SSLCalendar](https://sslcalendar.com) | SSL certificate expiration calendar |
| [EzS3](https://ezs3.net) | S3 bucket management |
| [TwinBrix](https://twinbrix.app) | Building blocks tool |

## Development

```sh
npm install       # install dependencies
npm run dev       # start dev server
npm run build     # production build to ./dist/
npm run preview   # preview production build locally
npm run check     # run astro type checking
```

## Deployment

Static site deployed via Cloudflare Workers. Build with `npm run build`, then deploy with `npx wrangler deploy`. See `wrangler.jsonc` for configuration.

## Project structure

```
src/
├── components/     # React components (ThemeToggle, UI)
├── content/blog/   # Blog posts (Markdown)
├── layouts/        # Astro layouts
├── pages/          # Routes (index, blog/)
├── styles/         # Global CSS (TailwindCSS)
└── content.config.ts
public/             # Static assets (favicon, OG images, blog thumbnails)
```
