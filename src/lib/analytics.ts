import { track } from '@vercel/analytics';
import posthog from 'posthog-js';

// Initialize PostHog (only on client-side)
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || 'dev', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

export const analytics = {
  // Track page views
  page: (url: string, title?: string) => {
    if (typeof window !== 'undefined') {
      // PostHog tracking
      posthog.capture('$pageview', {
        $current_url: url,
        page_title: title,
      });

      // Vercel Analytics
      track('Page View', { url, ...(title && { title }) });

      // Development logging
      if (process.env.NODE_ENV === 'development') {
        console.log('🔍 Analytics - Page View:', { url, title });
      }
    }
  },

  // Track button clicks
  click: (element: string, location?: string, metadata?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined') {
      const eventData = { 
        element, 
        ...(location && { location }), 
        ...metadata 
      };

      // PostHog tracking
      posthog.capture('button_click', eventData);

      // Vercel Analytics
      track('Button Click', eventData as Record<string, string | number | boolean>);

      // Development logging
      if (process.env.NODE_ENV === 'development') {
        console.log('🔍 Analytics - Click:', eventData);
      }
    }
  },

  // Track form submissions
  form: (formName: string, success: boolean, metadata?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined') {
      const eventData = { form_name: formName, success, ...metadata };

      // PostHog tracking
      posthog.capture('form_submit', eventData);

      // Vercel Analytics
      track('Form Submit', eventData);

      // Development logging
      if (process.env.NODE_ENV === 'development') {
        console.log('🔍 Analytics - Form:', eventData);
      }
    }
  },

  // Track custom events
  event: (eventName: string, properties?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined') {
      // PostHog tracking
      posthog.capture(eventName, properties);

      // Vercel Analytics
      track(eventName, properties);

      // Development logging
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔍 Analytics - ${eventName}:`, properties);
      }
    }
  },

  // Identify user (for PostHog)
  identify: (userId: string, properties?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined') {
      posthog.identify(userId, properties);

      // Development logging
      if (process.env.NODE_ENV === 'development') {
        console.log('🔍 Analytics - Identify:', { userId, properties });
      }
    }
  },
};

// React hook for analytics
export function useAnalytics() {
  return analytics;
}