'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureSectionProps {
  title: string
  subtitle?: string
  features: Feature[]
  layout?: 'grid' | 'list'
}

export default function FeatureSection({ 
  title, 
  subtitle, 
  features, 
  layout = 'grid' 
}: FeatureSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-crafy-gray-600">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`mx-auto mt-16 max-w-2xl sm:mt-20 ${
            layout === 'grid' 
              ? 'lg:mt-24 lg:max-w-none grid gap-8 lg:grid-cols-3' 
              : 'space-y-8'
          }`}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="crafy-card group cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-crafy-red/10 group-hover:bg-crafy-red/20 transition-colors">
                    <Icon className="h-6 w-6 text-crafy-red" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-crafy-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-crafy-gray-600 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}