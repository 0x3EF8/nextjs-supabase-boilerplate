/**
 * Application Routes
 *
 * Centralized route definitions for type-safe navigation
 */

export const ROUTES = {
  // Public routes
  HOME: '/',

  // Auth routes
  AUTH: {
    LOGIN: '/auth/login',
    SIGN_UP: '/auth/sign-up',
    SIGN_UP_SUCCESS: '/auth/sign-up-success',
    FORGOT_PASSWORD: '/auth/forgot-password',
    UPDATE_PASSWORD: '/auth/update-password',
    ERROR: '/auth/error',
    CONFIRM: '/auth/confirm',
  },

  // Protected routes
  PROTECTED: {
    DASHBOARD: '/protected',
  },

  // API routes
  API: {
    EXAMPLE: '/api/example',
  },
} as const;

/**
 * Route helpers
 */
export const isAuthRoute = (pathname: string) => pathname.startsWith('/auth');
export const isProtectedRoute = (pathname: string) => pathname.startsWith('/protected');
export const isPublicRoute = (pathname: string) =>
  pathname === ROUTES.HOME || isAuthRoute(pathname);
