# EBF Website

Modern Next.js website for **ESCP Bachelor's Finance Society (EBF)** with:

- CMS-ready content via **Sanity** (members, events, fund tracker, partners, newsletter subscribers)
- Email workflow via **Resend** (newsletter confirmation + contact forwarding)
- Vercel-friendly deployment setup

## Quick start

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and fill values.

## Sanity model setup

The repository includes example schema files in `sanity/schemas/`:

- `member`
- `event`
- `fundEntry`
- `newsletterSubscriber`

Add them to your Sanity Studio schema entrypoint.

## Production (Vercel)

1. Push this project to GitHub.
2. Import into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

## Notes

- If Sanity variables are absent, the site falls back to local sample content.
- Contact and newsletter endpoints still return success without Resend key (for local dev).
