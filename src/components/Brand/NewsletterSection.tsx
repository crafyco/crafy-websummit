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
        <section className="relative isolate overflow-hidden bg-white m-4 sm:m-24 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            
            {/* Background Gradient Blobs */}
            <div className="absolute -top-40 -left-60 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#9089fc] to-[#c3bfff] opacity-20"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>
            <div className="absolute -bottom-40 -left-20 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#f5507b] opacity-20"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>
            <div className="absolute -top-20 -right-40 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tl from-[#ff80b5] to-[#f5507b] opacity-20"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>
            
            <div>
                <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Subscribe to our Newsletter!
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-600">
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
                            className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 placeholder-gray-500 shadow-sm ring-1 ring-inset ring-gray-900/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                            placeholder="Enter your email"
                            disabled={isSubmitting}
                        />
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-none rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
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