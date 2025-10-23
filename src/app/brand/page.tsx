'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClaraSection from '@/components/ClaraSection'
import FeatureRollout from '@/components/FeatureRollout'
import PartnerTopCreators from '@/components/Brand/PartnerTopCreators'
import PricingSection from '@/components/Brand/PricingSection'
import NewsletterSection from '@/components/Brand/NewsletterSection'
import { useAnalytics } from '@/lib/analytics'
import { useContactForm } from '@/contexts/ContactFormContext'

export default function BrandPage() {
  const analytics = useAnalytics()
  const { openModal } = useContactForm()

  useEffect(() => {
    analytics.page(window.location.pathname, 'Brand Page - Crafy')
  }, [analytics])

  return (
    <div className="relative w-full min-h-screen bg-[#FAF7F7]">
      {/* Background gradient blurred */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute left-[14.68%] top-[1585px] w-[1155px] h-[678px] bg-gradient-to-tr from-[#cb2c30] to-[#ed393d] opacity-25 blur-3xl"
          aria-hidden="true"
        />
      </div>

      <Header />
      
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8 pt-6 sm:pt-12 lg:pt-16 pb-12 sm:pb-20">
        <div className="lg:flex lg:items-center lg:gap-x-12">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all">
                <span className="font-raleway text-sm text-[#4B5563]">Boost your brand</span>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-semibold leading-tight tracking-tight text-[#111827] text-center lg:text-left">
              Your creative arm, without a team or agency
            </h1>
            
            {/* Description */}
            <div className="mt-8 space-y-4 text-center lg:text-left">
              <p className="text-lg sm:text-xl font-raleway font-medium text-[#6B7280] leading-relaxed">
                Crafy connects you to content creators who think and communicate as part of your team, taking your message to the right audience.
              </p>
              <p className="text-lg sm:text-xl font-raleway font-bold text-[#6B7280] leading-relaxed">
                No monthly fees, no long contracts: you just pay when you use, and we take care of the creativity, strategy and growth.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <button 
                onClick={openModal}
                className="rounded-md bg-[#CB2C30] px-7 py-4 text-center font-raleway font-semibold text-lg lg:text-xl text-white shadow-sm hover:bg-[#B32529] transition-all duration-200"
              >
                Want to know more
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="mt-16 lg:mt-0 lg:shrink-0 lg:grow flex justify-center">
            <div className="relative w-[276px] h-[546px]">
              <Image
                src="/images/cellphone-background2.jpg"
                alt="App preview"
                fill
                className="object-cover rounded-[19px] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clara Section */}
      <ClaraSection mode="brand" />

      {/* Feature Rollout */}
      <FeatureRollout mode="brand" />

      {/* Partner with top creators */}
      <PartnerTopCreators />

      {/* Pricing Section */}
      <PricingSection />

      {/* Newsletter */}
      <NewsletterSection />

      <Footer />
    </div>
  )
}
