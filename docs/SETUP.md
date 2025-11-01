# Setup Checklist

Follow this checklist to set up your Next.js + Supabase application.

## Prerequisites

- [ ] Node.js 18.18+ installed
- [ ] npm 9+ installed
- [ ] Supabase account created

## 1. Environment Setup

- [ ] Copy `.env.example` to `.env.local`

  ```bash
  cp .env.example .env.local
  ```

- [ ] Update `.env.local` with your Supabase credentials:
  - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
  - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` - Your Supabase anon/public key
  - `NEXT_PUBLIC_APP_URL` - Your app URL (optional for local dev)

**Where to find Supabase credentials:**

1. Go to [supabase.com](https://supabase.com)
2. Open your project
3. Click "Settings" → "API"
4. Copy "Project URL" and "anon/public" key

## 2. Install Dependencies

- [ ] Run npm install
  ```bash
  npm install
  ```

## 3. Configure Supabase Authentication

- [ ] Enable Email Auth in Supabase:
  1. Go to Authentication → Providers
  2. Enable "Email"
  3. Configure email templates (optional)

- [ ] Set up Email Confirmation:
  1. Go to Authentication → URL Configuration
  2. Set Site URL to your domain
  3. Add redirect URLs for development and production

## 4. Database Setup (Optional)

- [ ] Create your database tables in Supabase SQL Editor
- [ ] Set up Row Level Security (RLS) policies
- [ ] Add sample data (if needed)

Example table:

```sql
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  display_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table profiles enable row level security;

-- Policy: Users can view their own profile
create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);

-- Policy: Users can update their own profile
create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);
```

## 5. Run Development Server

- [ ] Start the dev server

  ```bash
  npm run dev
  ```

- [ ] Open [http://localhost:3000](http://localhost:3000)
- [ ] Test authentication flow

## 6. Customization

- [ ] Update `package.json` metadata (name, description, author, repository)
- [ ] Update `src/app/layout.tsx` metadata
- [ ] Replace placeholder text in `src/app/page.tsx`
- [ ] Update README.md with your project details
- [ ] Add your logo/favicon to `src/app`

## 7. Git Setup

Initialize your repository:

```bash
git init
git add .
git commit -m "Initial commit: Next.js + Supabase boilerplate"

# Add your remote repository
git remote add origin https://github.com/0x3EF8/nextjs-supabase-boilerplate.git
git push -u origin main
```

## 8. Deployment (Optional)

### Vercel (Recommended)

- [ ] Push code to GitHub/GitLab/Bitbucket
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Import your repository
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy!

### Environment Variables for Production

Make sure to add these to your hosting platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_APP_URL` (your production URL)

## 9. Testing (Optional)

- [ ] Install test dependencies

  ```bash
  npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
  ```

- [ ] Add test script to package.json
- [ ] Write tests for critical functionality
- [ ] Run tests
  ```bash
  npm test
  ```

## 10. Production Readiness

- [ ] Run production build locally

  ```bash
  npm run build
  npm start
  ```

- [ ] Test all authentication flows
- [ ] Test protected routes
- [ ] Check for console errors
- [ ] Test mobile responsiveness
- [ ] Run linter
  ```bash
  npm run lint
  ```

## Additional Features to Consider

- [ ] Add OAuth providers (Google, GitHub, etc.)
- [ ] Implement user profiles
- [ ] Add email templates
- [ ] Set up error monitoring (Sentry)
- [ ] Add analytics
- [ ] Implement real-time features
- [ ] Add admin dashboard
- [ ] Set up CI/CD pipeline

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

---

✅ **Setup Complete!** You're ready to start building your application.
