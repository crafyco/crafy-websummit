'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAnalytics } from '@/lib/analytics'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.page(window.location.pathname, 'Home - Crafy')
  }, [analytics])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FAF7F7] via-white to-[#FAF7F7] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[20%] top-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#CB2C30]/10 to-[#ED393D]/5 blur-3xl rounded-full" />
        <div className="absolute right-[15%] bottom-[15%] w-[600px] h-[600px] bg-gradient-to-tl from-[#4F46E5]/10 to-[#9089FC]/5 blur-3xl rounded-full" />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <Image 
          src="/images/logo-horizontal-preta.png" 
          width={180} 
          height={60} 
          alt="Crafy"
          priority
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-6xl w-full">
          {/* Header Text */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="w-2 h-2 bg-[#CB2C30] rounded-full animate-pulse"></span>
              <span className="font-raleway text-sm text-[#6B7280]">Powered by AI</span>
            </div>
            
            <h1 className="font-raleway font-bold text-5xl sm:text-6xl lg:text-7xl text-[#111827] leading-tight">
              Connect brands with{' '}
              <span className="bg-gradient-to-r from-[#CB2C30] to-[#ED393D] bg-clip-text text-transparent">
                creators
              </span>
            </h1>
            
            <p className="font-raleway text-xl sm:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              The AI-powered platform that makes influencer marketing simple, authentic, and measurable.
            </p>
          </div>

          {/* Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Brand Card */}
            <Link 
              href="/brand"
              onClick={() => analytics.click('home-select-brand', 'home-page')}
              className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#CB2C30]/30 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#CB2C30]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#CB2C30] to-[#ED393D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                <h2 className="font-raleway font-bold text-3xl text-[#111827] mb-4">
                  I&apos;m a Brand
                </h2>
                
                <p className="font-raleway text-lg text-[#6B7280] mb-8 leading-relaxed">
                  Find the perfect creators for your campaigns. Launch authentic collaborations that drive real results.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#CB2C30] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway text-[#4B5563]">AI-powered creator matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#CB2C30] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway text-[#4B5563]">Campaign management tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#CB2C30] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway text-[#4B5563]">Performance analytics</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-[#CB2C30] font-raleway font-semibold group-hover:gap-4 transition-all">
                  <span>Explore for Brands</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Creator Card */}
            <Link 
              href="/creator"
              onClick={() => analytics.click('home-select-creator', 'home-page')}
              className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4F46E5]/30 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#9089FC] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h2 className="font-raleway font-bold text-3xl text-[#111827] mb-4">
                  I&apos;m a Creator
                </h2>
                
                <p className="font-raleway text-lg text-[#6B7280] mb-8 leading-relaxed">
                  Connect with brands that match your style. Turn your creativity into sustainable income.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway text-[#4B5563]">Smart brand recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway text-[#4B5563]">Secure payment system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway text-[#4B5563]">Growth opportunities</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-[#4F46E5] font-raleway font-semibold group-hover:gap-4 transition-all">
                  <span>Explore for Creators</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16">
            <p className="font-raleway text-sm text-[#9CA3AF]">
              Join thousands of brands and creators building authentic partnerships
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
