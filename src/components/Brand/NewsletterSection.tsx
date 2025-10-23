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

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            if (!response.ok) {
                throw new Error('Failed to subscribe')
            }

            setIsSubmitted(true)
            setEmail('')

            // Reset after 3 seconds
            setTimeout(() => setIsSubmitted(false), 3000)
        } catch (error) {
            console.error('Newsletter subscription error:', error)
            alert('Failed to subscribe. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative isolate overflow-hidden bg-[#FAF7F7] mx-6 my-16 sm:mx-24 sm:my-24 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32 border border-[#E5E7EB]">
            {/* Background gradients */}
            <div className="absolute -bottom-full -left-1/2 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                <div className="aspect-square w-[1024px] bg-gradient-to-br from-[#ED393D]/70 to-[#CB2C30]/0 opacity-50" />
            </div>
            <div className="absolute -top-full -right-1/2 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                <div className="aspect-square w-[1024px] bg-gradient-to-tl from-[#ED393D]/70 to-[#CB2C30]/0 opacity-50" />
            </div>
            <div className="absolute top-0 left-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                <div className="aspect-square w-[1024px] bg-gradient-to-br from-[#393CED]/70 to-[#CB2C30]/0 opacity-30" />
            </div>
            
            <div>
                <h2 className="mx-auto max-w-3xl text-center font-raleway font-semibold text-4xl sm:text-5xl tracking-tight text-[#111827] sm:text-[#000000]">
                    Subscribe to our Newsletter!
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-center font-raleway text-lg text-[#4B5563] sm:text-[#000000]">
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
                            className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 font-raleway text-sm text-[#6B7280] placeholder:text-[#757575] shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#CB2C30]"
                            placeholder="Enter your email"
                            disabled={isSubmitting}
                        />
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-none rounded-md bg-[#CB2C30] px-3.5 py-2.5 font-raleway font-semibold text-sm text-white shadow-sm hover:bg-[#B32529] transition-all duration-200 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Subscribing...' : 'subscribe'}
                        </Button>
                    </form>
                ) : (
                    <div className="mx-auto mt-10 max-w-md text-center">
                        <div className="rounded-md bg-green-100 border border-green-300 px-4 py-3">
                            <p className="text-green-700 font-medium">
                                ✓ Thank you for subscribing! Check your inbox soon.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}