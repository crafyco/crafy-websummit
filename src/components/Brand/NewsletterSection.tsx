'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAnalytics } from '@/lib/analytics'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const analytics = useAnalytics()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    analytics.click('newsletter-subscribe', 'brand-newsletter')

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <section className="relative isolate overflow-hidden bg-crafy-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
      <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Subscribe to our Newsletter!
      </h2>
      <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
        Stay updated with the latest news! Sign up with your email to receive exclusive updates directly in your inbox.
      </p>
      
      {!isSubmitted ? (
        <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={handleSubmit}>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white placeholder-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      ) : (
        <div className="mx-auto mt-10 max-w-md text-center">
          <div className="rounded-md bg-green-500/20 border border-green-500/30 px-4 py-3">
            <p className="text-green-300 font-medium">
              ✓ Thank you for subscribing! Check your inbox soon.
            </p>
          </div>
        </div>
      )}

      {/* Background decoration */}
      <svg 
        viewBox="0 0 1024 1024" 
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" 
        aria-hidden="true"
      >
        <circle 
          cx="512" 
          cy="512" 
          r="512" 
          fill="url(#newsletter-gradient)" 
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient 
            id="newsletter-gradient" 
            cx="0" 
            cy="0" 
            r="1" 
            gradientUnits="userSpaceOnUse" 
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#ed393d" />
            <stop offset="1" stopColor="#cb2c30" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  )
}