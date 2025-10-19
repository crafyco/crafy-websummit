'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { useAnalytics } from '@/lib/analytics'

interface NewsletterProps {
  title?: string
  description?: string
}

export default function Newsletter({ 
  title = "Fique por dentro das novidades",
  description = "Receba as últimas atualizações sobre marketing de influência e novos recursos da Crafy."
}: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const analytics = useAnalytics()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Track newsletter signup attempt
    analytics.form('newsletter', true, { email: email.includes('@') })
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-crafy-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-crafy-gray-600">
            {description}
          </p>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mt-8 flex gap-x-4 justify-center max-w-md mx-auto"
          >
            <label htmlFor="email-address" className="sr-only">
              Email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting || isSubmitted}
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-crafy-gray-900 shadow-sm ring-1 ring-inset ring-crafy-gray-300 placeholder:text-crafy-gray-400 focus:ring-2 focus:ring-inset focus:ring-crafy-red sm:text-sm sm:leading-6 disabled:opacity-50"
              placeholder="Seu melhor email"
            />
            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted || !email}
              trackingId="newsletter-signup"
              trackingLocation="newsletter"
              className="flex-none"
            >
              {isSubmitting ? 'Enviando...' : isSubmitted ? 'Enviado!' : 'Inscrever-se'}
            </Button>
          </motion.form>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-green-600"
            >
              ✓ Obrigado! Você receberá nossas novidades em breve.
            </motion.p>
          )}
          
          <p className="mt-4 text-sm text-crafy-gray-500">
            Nós respeitamos sua privacidade. Sem spam, apenas conteúdo relevante.
          </p>
        </motion.div>
      </div>
    </section>
  )
}