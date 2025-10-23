'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClaraSection from '@/components/ClaraSection'
import FeatureRollout from '@/components/FeatureRollout'
import NewsletterSection from '@/components/Brand/NewsletterSection'
import { useAnalytics } from '@/lib/analytics'
import { useContactForm } from '@/contexts/ContactFormContext'

export default function CreatorPage() {
  const analytics = useAnalytics()
  const { openModal } = useContactForm()

  useEffect(() => {
    analytics.page(window.location.pathname, 'Creator Page - Crafy')
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
            {/* Powered by AI Badge */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all">
                <span className="font-raleway font-semibold text-sm text-[#4F46E5]">Powered by AI</span>
                <div className="h-4 w-px bg-gray-900/10" />
                <span className="font-raleway text-sm text-[#4B5563]">Boost your brand</span>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-semibold leading-tight tracking-tight text-[#111827] text-center lg:text-left">
              Find your next big opportunity
            </h1>
            
            {/* Description */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-lg sm:text-xl font-raleway font-bold text-[#6B7280] leading-relaxed">
                Text
              </p>
              <p className="mt-4 text-lg sm:text-xl font-raleway font-medium text-[#6B7280] leading-relaxed">
                Crafy connects you with the right brands, simplifies campaigns, and ensures you get paid. Show who you are, collaborate with purpose, and turn your creativity into income. Powered by AI, Crafy helps you showcase your profile, connect with partners, and grow your opportunities.
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
            <div className="relative w-[280px] h-[568px]">
              <Image
                src="/images/phone-creator-new.png"
                alt="App preview"
                fill
                className="object-contain rounded-[19px] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clara Section */}
      <ClaraSection mode="creator" />

      {/* Feature Rollout */}
      <FeatureRollout mode="creator" />

      {/* Newsletter */}
      <NewsletterSection />

      <Footer />
    </div>
  )
}
