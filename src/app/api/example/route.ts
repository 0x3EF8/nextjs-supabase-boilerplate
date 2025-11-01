/**
 * Example API Route
 *
 * Demonstrates how to create a protected API endpoint with rate limiting
 */

import { createClient } from '@/lib/supabase/server';
import { apiRateLimiter, getClientIp } from '@/lib/rate-limit';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    if (apiRateLimiter.isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          retryAfter: apiRateLimiter.getResetTime(clientIp),
        },
        {
          status: 429,
          headers: {
            'Retry-After': apiRateLimiter.getResetTime(clientIp).toString(),
          },
        }
      );
    }

    // Authentication check
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getClaims();

    if (error || !data?.claims) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Your API logic here
    const responseData = {
      message: 'Hello from the API!',
      user: {
        id: data.claims.sub,
        email: data.claims.email,
      },
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    if (apiRateLimiter.isRateLimited(clientIp)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    // Authentication check
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getClaims();

    if (error || !data?.claims) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse request body
    const body = await request.json();

    // Your POST logic here
    return NextResponse.json({
      message: 'Data received successfully',
      data: body,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
