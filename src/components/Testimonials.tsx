'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    company: string
    avatar: string
  }
  rating: number
}

interface TestimonialsProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
}

export default function Testimonials({ title, subtitle, testimonials }: TestimonialsProps) {
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
    <section className="bg-crafy-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
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
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-crafy-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="col-span-1 rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <blockquote className="text-crafy-gray-900">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-crafy-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p>&ldquo;{testimonial.content}&rdquo;</p>
              </blockquote>
              
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-crafy-gray-50 flex items-center justify-center overflow-hidden">
                  {testimonial.author.avatar ? (
                    <img 
                      className="h-10 w-10 rounded-full object-cover" 
                      src={testimonial.author.avatar} 
                      alt={testimonial.author.name} 
                    />
                  ) : (
                    <span className="text-sm font-semibold text-crafy-gray-600">
                      {testimonial.author.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-crafy-gray-600">
                    {testimonial.author.role} @ {testimonial.author.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}