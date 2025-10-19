'use client'

import { Button } from './ui/button'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  trackingId: string
}

interface PricingProps {
  title?: string
  subtitle?: string
  plans: PricingPlan[]
}

export default function Pricing({ 
  title = "Escolha o plano ideal para você",
  subtitle = "Planos flexíveis para empresas de todos os tamanhos",
  plans 
}: PricingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-24 sm:py-32">
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
          <p className="mt-6 text-lg leading-8 text-crafy-gray-600">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl p-8 shadow-md ring-1 ring-gray-900/10 sm:mx-8 sm:p-10 lg:mx-0 ${
                plan.popular 
                  ? 'bg-white lg:z-10 lg:rounded-b-none' 
                  : 'bg-crafy-gray-50/50'
              } ${
                index === 0 && plans.length === 2 ? 'lg:rounded-r-none' : ''
              } ${
                index === 1 && plans.length === 2 ? 'lg:rounded-l-none' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-crafy-red px-3 py-2 text-center text-sm font-medium text-white">
                  Mais popular
                </div>
              )}
              
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-crafy-gray-900">
                  {plan.name}
                </h3>
              </div>
              
              <p className="mt-4 text-sm leading-6 text-crafy-gray-600">
                {plan.description}
              </p>
              
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-crafy-gray-900">
                  {plan.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-crafy-gray-600">
                  /mês
                </span>
              </p>
              
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-crafy-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-crafy-red" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                className="mt-8 w-full"
                variant={plan.popular ? "default" : "outline"}
                trackingId={plan.trackingId}
                trackingLocation="pricing"
              >
                Começar agora
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-crafy-gray-500">
            Todos os planos incluem 14 dias de teste grátis. Cancele a qualquer momento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}