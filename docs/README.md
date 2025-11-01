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
- 🔐 **Complete Authentication** - Sign up, login, password reset
- 💾 **Supabase** - PostgreSQL database with Row Level Security
- 🎨 **Tailwind CSS 4** - Modern styling with dark/light mode
- 🧩 **shadcn/ui** - Beautiful, accessible components
- 📝 **TypeScript** - Full type safety
- ✅ **Form Validation** - React Hook Form + Zod
- 🛡️ **Rate Limiting** - Built-in protection
- 🧪 **Testing Ready** - Vitest + Testing Library setup
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

\`\`\`
src/
├── app/ # Next.js App Router pages
│ ├── api/ # API routes
│ ├── auth/ # Authentication pages
│ └── protected/ # Protected pages
├── components/ # React components
│ └── ui/ # Reusable UI components
├── lib/ # Utilities and helpers
│ ├── supabase/ # Supabase client setup
│ ├── env.ts # Environment validation
│ ├── rate-limit.ts # Rate limiting
│ └── utils.ts # Helper functions
├── config/ # App configuration
├── hooks/ # Custom React hooks
└── types/ # TypeScript types
\`\`\`

## 🧰 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run linters and type check
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm test` - Run tests (after installing test dependencies)

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

## 🧪 Testing (Optional Setup)

Install test dependencies:

\`\`\`bash
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
\`\`\`

Add test script to `package.json`:

\`\`\`json
"scripts": {
"test": "vitest",
"test:ui": "vitest --ui"
}
\`\`\`

## � Documentation

- **[Setup Guide](docs/SETUP.md)** - Complete setup checklist
- **[Project Structure](docs/STRUCTURE.md)** - Codebase organization
- **[Contributing Guide](docs/CONTRIBUTING.md)** - How to contribute

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

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](docs/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 Support

- 📖 [Documentation](docs/)
- 🐛 [Report Bug](https://github.com/0x3EF8/nextjs-supabase-boilerplate/issues)
- 💡 [Request Feature](https://github.com/0x3EF8/nextjs-supabase-boilerplate/issues)
- 💬 [Discussions](https://github.com/0x3EF8/nextjs-supabase-boilerplate/discussions)

## ⭐ Show Your Support

If you find this project helpful, please consider giving it a star on GitHub!

---

<div align="center">
  <p>>///<</p>
  <p>
    <a href="https://github.com/0x3EF8">GitHub</a>
  </p>
</div>
