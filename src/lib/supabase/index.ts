/**
 * Supabase Utilities
 *
 * Centralized exports for Supabase clients and middleware
 */

export { createClient as createBrowserClient } from './client';
export { updateSession } from './middleware';
export { createClient as createServerClient } from './server';
