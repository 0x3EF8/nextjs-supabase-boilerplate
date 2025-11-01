<div align="center">
  <h1>Next.js + Supabase Boilerplate</h1>
  <p>A production-ready, modern full-stack starter with authentication, database, and beautiful UI</p>
  
  <p>
    <a href="#features">Features</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#contributing">Contributing</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
  </p>
</div>

---

## ✨ Features

- ⚡ **Next.js 16** with App Router and Turbopack
- 🔐 **Complete Authentication** - Sign up, login, password reset, email confirmation
- 💾 **Supabase** - PostgreSQL database with Row Level Security
- 🎨 **Tailwind CSS 4** - Modern styling with dark/light mode
- 🧩 **shadcn/ui** - Beautiful, accessible Radix UI components
- 📝 **TypeScript** - Full type safety with strict mode
- ✅ **Form Validation** - React Hook Form + Zod 4.x
- 🛡️ **Rate Limiting** - Built-in API protection
- 🎯 **ESLint + Prettier** - Code quality and formatting
- 🌐 **Middleware** - Authentication and session management
- 🎨 **Modern UI** - Gradient effects, icons, and animations
- 📱 **Responsive** - Mobile-first design

## 📋 Prerequisites

- Node.js 18.18+ and npm 9+
- A [Supabase](https://supabase.com) account and project

## 🛠️ Getting Started

### 1. Clone and Install

\`\`\`bash
git clone https://github.com/0x3EF8/nextjs-supabase-boilerplate.git
cd nextjs-supabase-boilerplate
npm install
\`\`\`

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings → API
3. Copy your project URL and anon/public key

### 3. Configure Environment Variables

Copy the example environment file:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` and add your Supabase credentials:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
my-app/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/
│   │   │   └── example/              # Example protected API route
│   │   ├── auth/                     # Authentication pages
│   │   │   ├── confirm/              # Email confirmation handler
│   │   │   ├── error/                # Auth error page
│   │   │   ├── forgot-password/      # Password reset request
│   │   │   ├── login/                # Login page
│   │   │   ├── sign-up/              # Sign up page
│   │   │   ├── sign-up-success/      # Post-signup success page
│   │   │   └── update-password/      # Password update page
│   │   ├── protected/                # Protected pages (requires auth)
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── error.tsx                 # Global error boundary
│   │   ├── favicon.ico
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout with metadata
│   │   ├── loading.tsx               # Global loading UI
│   │   ├── opengraph-image.png       # OG image for social sharing
│   │   ├── page.tsx                  # Home page
│   │   └── twitter-image.png
│   ├── components/
│   │   ├── auth/                     # Authentication components
│   │   │   ├── auth-button.tsx
│   │   │   ├── forgot-password-form.tsx
│   │   │   ├── login-form.tsx
│   │   │   ├── logout-button.tsx
│   │   │   ├── sign-up-form.tsx
│   │   │   ├── update-password-form.tsx
│   │   │   └── index.ts
│   │   ├── layout/                   # Layout components
│   │   │   ├── theme-switcher.tsx    # Dark/light mode toggle
│   │   │   ├── toaster.tsx           # Toast notifications
│   │   │   └── index.ts
│   │   ├── ui/                       # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── spinner.tsx
│   │   │   └── index.ts
│   │   └── index.ts                  # Central barrel export
│   ├── lib/
│   │   ├── supabase/                 # Supabase client setup
│   │   │   ├── client.ts             # Browser client
│   │   │   ├── config-check.ts       # Config validation
│   │   │   ├── middleware.ts         # Auth middleware utilities
│   │   │   ├── server.ts             # Server-side client
│   │   │   └── index.ts
│   │   ├── env.ts                    # Environment validation (Zod)
│   │   ├── rate-limit.ts             # API rate limiting
│   │   ├── utils.ts                  # Utility functions (cn, etc.)
│   │   └── index.ts
│   ├── constants/
│   │   ├── metadata.ts               # App metadata & SEO
│   │   ├── routes.ts                 # Type-safe route definitions
│   │   └── index.ts
│   └── hooks/
│       └── index.ts                  # Custom React hooks
├── docs/                             # Documentation
│   ├── CHANGELOG.md
│   ├── LICENSE
│   └── SETUP.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   │   └── ci.yml                    # GitHub Actions CI/CD
│   └── pull_request_template.md
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── middleware.ts                     # Next.js middleware (auth)
├── .editorconfig
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── components.json                   # shadcn/ui config
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🧰 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run eslint` - Run ESLint checks
- `npm run eslint:fix` - Auto-fix linting issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Remove build artifacts and node_modules

## 🔐 Authentication

The boilerplate includes:

- Email/password sign up and login
- Email confirmation
- Password reset flow
- Protected routes with middleware
- Session management

### Protected Routes

Add authentication to any page:

\`\`\`tsx
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function ProtectedPage() {
const supabase = await createClient();
const { data, error } = await supabase.auth.getClaims();

if (error || !data?.claims) {
redirect('/auth/login');
}

return <div>Protected content</div>;
}
\`\`\`

## 🗄️ Database

Use Supabase client to interact with your database:

\`\`\`tsx
const supabase = await createClient();
const { data, error } = await supabase
.from('your_table')
.select('\*');
\`\`\`

## 🎨 UI Components

Built with shadcn/ui. Add new components:

\`\`\`bash
npx shadcn@latest add button
\`\`\`

[Browse components](https://ui.shadcn.com/docs/components)

## 📚 Documentation

- **[Setup Guide](docs/SETUP.md)** - Complete setup checklist
- **[Changelog](docs/CHANGELOG.md)** - Version history and updates

## �🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/0x3EF8/nextjs-supabase-boilerplate)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Settings
4. Deploy automatically!

### Environment Variables for Production

Required for all platforms:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### Other Platforms

Works with any Next.js-compatible platform:

- **Netlify** - Auto-deploy from Git
- **Railway** - Full-stack deployment
- **AWS Amplify** - Scalable hosting
- **Self-hosted** - Docker or Node.js

## � Project Stats

- **Bundle Size**: Optimized with Turbopack
- **Type Safety**: 100% TypeScript coverage
- **Code Quality**: ESLint + Prettier configured

## 🛣️ Roadmap

- [ ] Add OAuth providers (Google, GitHub)
- [ ] Implement user profiles and avatars
- [ ] Add real-time features with Supabase
- [ ] Create admin dashboard
- [ ] Add i18n support

## 🙏 Acknowledgments

Built with these amazing technologies:

- [Next.js](https://nextjs.org) - React framework
- [Supabase](https://supabase.com) - Backend as a service
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com) - Beautiful components
- [TypeScript](https://www.typescriptlang.org) - Type safety

## 📄 License

This project is licensed under the MIT License - see the [docs/LICENSE](docs/LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/)
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `chore:` for maintenance tasks
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request with a clear description

## 💬 Support

- 📖 [Documentation](docs/)
- 🐛 [Report Bug](https://github.com/0x3EF8/nextjs-supabase-boilerplate/issues)
- 💡 [Request Feature](https://github.com/0x3EF8/nextjs-supabase-boilerplate/issues)
- 💬 [Discussions](https://github.com/0x3EF8/nextjs-supabase-boilerplate/discussions)

## ⭐ Show Your Support

If you find this project helpful, please consider giving it a star on GitHub!

---

<div align="center">
  <p>Built with ❤️ by developers, for developers</p>
  <p>
    <a href="https://github.com/0x3EF8">GitHub</a>
  </p>
</div>
