import { AuthButton } from '@/components/auth';
import { ThemeSwitcher } from '@/components/layout';
import { hasEnvVars } from '@/lib/utils';
import { ArrowRight, Check, Code2, Database, Rocket, Shield, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Next.js Supabase
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              {hasEnvVars && <AuthButton />}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full space-y-12">
          {/* Hero Content */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Production-ready starter template</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Build Amazing Apps
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Faster Than Ever
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A modern, production-ready starter with authentication, database access, and beautiful
              UI components. Start building in seconds, not hours.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              {hasEnvVars ? (
                <>
                  <Link
                    href="/auth/sign-up"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 h-11 px-8"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/protected"
                    className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                  >
                    <Shield className="w-4 h-4" />
                    View Demo
                  </Link>
                </>
              ) : (
                <div className="rounded-xl border border-yellow-500/20 bg-yellow-50/50 dark:bg-yellow-950/20 p-6 max-w-md backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                        Setup Required
                      </h3>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-3">
                        Add your Supabase credentials to{' '}
                        <code className="px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900 font-mono text-xs">
                          .env.local
                        </code>
                      </p>
                      <a
                        href="https://supabase.com/docs/guides/getting-started/quickstarts/nextjs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-yellow-700 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-100 transition-colors"
                      >
                        View Setup Guide
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Authentication</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete auth system with email/password, magic links, and social providers. Secure
                by default.
              </p>
            </div>

            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Database</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                PostgreSQL with Row Level Security, real-time subscriptions, and automatic backups.
              </p>
            </div>

            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">UI Components</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Beautiful, accessible components built with Tailwind CSS and Radix UI primitives.
              </p>
            </div>

            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast by Default</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built with Next.js 16 and Turbopack for lightning-fast development and builds.
              </p>
            </div>

            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Type Safe</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full TypeScript support with strict mode enabled for maximum type safety.
              </p>
            </div>

            <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Deploy Anywhere</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                One-click deploy to Vercel, Netlify, or any platform that supports Next.js.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-20 pt-12 border-t">
            <p className="text-center text-sm font-medium text-muted-foreground mb-6">
              Built with industry-leading technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { name: 'Next.js 16', url: 'https://nextjs.org' },
                { name: 'React 19', url: 'https://react.dev' },
                { name: 'Supabase', url: 'https://supabase.com' },
                { name: 'TypeScript', url: 'https://typescriptlang.org' },
                { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
                { name: 'shadcn/ui', url: 'https://ui.shadcn.com' },
              ].map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">Next.js Supabase</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              Built with{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Next.js
              </a>{' '}
              and{' '}
              <a
                href="https://supabase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Supabase
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Docs
              </a>
              <Link
                href="/auth/login"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Login
              </Link>
              <Link
                href="/protected"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Demo
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
