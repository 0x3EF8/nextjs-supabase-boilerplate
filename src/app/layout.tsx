import { Toaster } from '@/components/layout';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist } from 'next/font/google';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Next.js Supabase Boilerplate',
    template: '%s | Next.js Supabase Boilerplate',
  },
  description:
    'Production-ready Next.js 16 & Supabase boilerplate with TypeScript, Tailwind CSS, and authentication',
  keywords: [
    'Next.js',
    'Supabase',
    'Authentication',
    'TypeScript',
    'Tailwind CSS',
    'Boilerplate',
    'Starter',
  ],
  authors: [{ name: '0x3EF8' }],
  creator: '0x3EF8',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'Next.js Supabase Boilerplate',
    description:
      'Production-ready Next.js 16 & Supabase boilerplate with TypeScript, Tailwind CSS, and authentication',
    siteName: 'Next.js Supabase Boilerplate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Supabase Boilerplate',
    description:
      'Production-ready Next.js 16 & Supabase boilerplate with TypeScript, Tailwind CSS, and authentication',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
