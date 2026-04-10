# VideoClipper Phase 1.1

This fixes the first Vercel deploy issue by doing three things:

1. Upgrades Next.js to a patched secure version.
2. Forces the auth-aware pages to render dynamically.
3. Keeps the real Supabase auth foundation intact.

## Required environment variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Routes

- `/`
- `/auth/login`
- `/auth/signup`
- `/dashboard`

## Phase scope

This is still Phase 1 only:
- real auth
- protected dashboard
- premium shell
- no upload yet
