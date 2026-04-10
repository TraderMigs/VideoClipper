# VideoClipper Phase 1

Phase 1 delivers the real app foundation:
- Next.js app shell
- Supabase email/password auth
- protected dashboard route
- dark glass UI foundation

## Required environment variables

Use the values from your Supabase project:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

## Supabase auth setup required

In Supabase Authentication URL settings, add:
- Site URL: your Vercel production domain
- Redirect URL: your Vercel production domain/auth/callback
- For local testing in Vercel preview, add preview URLs later if needed
