/**
 * Supabase Configuration Verification
 *
 * This file checks if your Supabase environment is properly configured.
 * Import this in any page to see the configuration status.
 */

export function checkSupabaseConfig() {
  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  const urlIsPlaceholder = process.env.NEXT_PUBLIC_SUPABASE_URL === 'your-project-url';
  const keyIsPlaceholder =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY === 'your-publishable-or-anon-key';

  return {
    configured: hasUrl && hasKey && !urlIsPlaceholder && !keyIsPlaceholder,
    hasUrl,
    hasKey,
    urlIsPlaceholder,
    keyIsPlaceholder,
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    keyPreview: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.substring(0, 20) + '...',
  };
}

export function getSetupInstructions() {
  const config = checkSupabaseConfig();

  if (config.configured) {
    return {
      status: 'success',
      message: '✅ Supabase is properly configured!',
      nextSteps: [
        'Your environment variables are set up correctly.',
        'You can now query your Supabase database.',
        'Visit /test-connection to verify the connection.',
      ],
    };
  }

  if (!config.hasUrl || config.urlIsPlaceholder) {
    return {
      status: 'error',
      message: '❌ NEXT_PUBLIC_SUPABASE_URL is not configured',
      nextSteps: [
        '1. Go to https://database.new and create a Supabase project',
        '2. Copy your Project URL from Settings → API',
        '3. Add it to .env.local: NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co',
        '4. Restart your dev server (npm run dev)',
      ],
    };
  }

  if (!config.hasKey || config.keyIsPlaceholder) {
    return {
      status: 'error',
      message: '❌ NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY is not configured',
      nextSteps: [
        '1. Go to your Supabase project Settings → API',
        '2. Copy the "anon/public" key',
        '3. Add it to .env.local: NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJ...',
        '4. Restart your dev server (npm run dev)',
      ],
    };
  }

  return {
    status: 'error',
    message: '❌ Unknown configuration issue',
    nextSteps: [
      'Check your .env.local file',
      'Ensure no extra spaces or quotes around values',
      'Restart your dev server after making changes',
    ],
  };
}

// For debugging in the browser console
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).checkSupabaseConfig = () => {
    const config = checkSupabaseConfig();
    // eslint-disable-next-line no-console
    console.log('🔍 Supabase Configuration Check:');
    // eslint-disable-next-line no-console
    console.log('Configuration:', config);
    // eslint-disable-next-line no-console
    console.log('\nInstructions:', getSetupInstructions());
  };
}
