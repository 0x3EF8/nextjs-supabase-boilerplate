import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { InfoIcon } from 'lucide-react';
import Link from 'next/link';

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect('/auth/login');
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 p-8">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Protected Page</h1>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Home
          </Link>
        </div>

        {/* Info Banner */}
        <div className="bg-accent text-sm p-4 rounded-lg text-foreground flex gap-3 items-start">
          <InfoIcon size="20" strokeWidth={2} className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium mb-1">Authentication Required</p>
            <p className="text-muted-foreground">
              This page is only accessible to authenticated users. You&apos;re seeing this because
              you&apos;re signed in.
            </p>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Your User Details</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{data.claims.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">User ID</p>
                <code className="text-xs bg-muted px-2 py-1 rounded">{data.claims.sub}</code>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Session Expires</p>
                <p className="font-medium">
                  {data.claims.exp ? new Date(data.claims.exp * 1000).toLocaleString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Full Claims Data */}
          <details className="group">
            <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground list-none flex items-center gap-2">
              <span className="group-open:rotate-90 transition-transform">▶</span>
              View Full Claims Data
            </summary>
            <pre className="mt-3 text-xs font-mono p-4 rounded-lg border bg-muted overflow-auto max-h-96">
              {JSON.stringify(data.claims, null, 2)}
            </pre>
          </details>
        </div>

        {/* Next Steps */}
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">What&apos;s Next?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">🗄️ Query Your Database</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Use Supabase client to fetch and manage your data.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                await supabase.from(&apos;table&apos;).select()
              </code>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">🔐 Manage Profile</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Update user metadata and preferences.
              </p>
              <Link href="/auth/update-password" className="text-sm text-primary hover:underline">
                Change Password →
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">📊 Build Features</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Create new pages and components for your app.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                src/app/your-page/page.tsx
              </code>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">📚 Learn More</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Explore documentation and resources.
              </p>
              <a
                href="https://supabase.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Supabase Docs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
