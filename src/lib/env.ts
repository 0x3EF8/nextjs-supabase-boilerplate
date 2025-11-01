/**
 * Environment Variables Schema
 *
 * Validates and types all environment variables used in the application.
 * This ensures type safety and fails fast if required variables are missing.
 */

import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url('Invalid Supabase URL'),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1, 'Supabase publishable key is required'),

  // App Configuration
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),

  // Node Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// Validate environment variables
function validateEnv() {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map((err) => `  - ${err.path.join('.')}: ${err.message}`);

      throw new Error(
        `❌ Invalid environment variables:\n${missingVars.join('\n')}\n\n` +
          '💡 Please check your .env.local file and ensure all required variables are set.\n' +
          '📖 See .env.example for reference.'
      );
    }
    throw error;
  }
}

// Export validated environment variables (only validate in production/build)
export const env =
  process.env.NODE_ENV === 'production' || process.env.npm_lifecycle_event === 'build'
    ? validateEnv()
    : (process.env as z.infer<typeof envSchema>);

// Type-safe environment variable access
export type Env = z.infer<typeof envSchema>;
