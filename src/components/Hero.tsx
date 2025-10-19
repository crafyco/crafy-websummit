'use client'

import { Button } from './ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaPrimary: {
    text: string
    trackingId: string
  }
  ctaSecondary?: {
    text: string
    trackingId: string
  }
  heroImage?: string
  showStats?: boolean
}

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  ctaPrimary, 
  ctaSecondary,
  heroImage,
  showStats = false 
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-crafy-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-crafy-red/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-crafy-red/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center rounded-full bg-crafy-red/10 px-3 py-1 text-sm font-medium text-crafy-red">
                {subtitle}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-crafy-gray-900 sm:text-6xl"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg leading-8 text-crafy-gray-600"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-x-6"
            >
              <Button
                size="lg"
                className="group"
                trackingId={ctaPrimary.trackingId}
                trackingLocation="hero"
              >
                {ctaPrimary.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {ctaSecondary && (
                <Button
                  variant="outline"
                  size="lg"
                  className="group"
                  trackingId={ctaSecondary.trackingId}
                  trackingLocation="hero"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {ctaSecondary.text}
                </Button>
              )}
            </motion.div>

            {showStats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 flex items-center gap-x-8 text-sm text-crafy-gray-500"
              >
                <div>
                  <p className="font-semibold text-crafy-gray-900">10K+</p>
                  <p>Marcas ativas</p>
                </div>
                <div>
                  <p className="font-semibold text-crafy-gray-900">50K+</p>
                  <p>Creators conectados</p>
                </div>
                <div>
                  <p className="font-semibold text-crafy-gray-900">1M+</p>
                  <p>Campanhas criadas</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative lg:row-start-1 lg:col-start-2"
          >
            <div className="relative mx-auto max-w-lg">
              {heroImage ? (
                <img
                  className="w-full rounded-2xl shadow-xl"
                  src={heroImage}
                  alt="Crafy Platform"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-crafy-red to-crafy-red-dark rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Play className="h-8 w-8" />
                    </div>
                    <p className="text-lg font-semibold">Veja como funciona</p>
                  </div>
                </div>
              )}
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="text-xs font-semibold text-crafy-gray-600">ROI</p>
                  <p className="text-lg font-bold text-crafy-red">300%</p>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-crafy-red rounded-full shadow-lg flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <p className="text-xs font-semibold">Alcance</p>
                  <p className="text-sm font-bold">1M+</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}