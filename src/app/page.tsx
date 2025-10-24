'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterSection from '@/components/Brand/NewsletterSection'
import { useAnalytics } from '@/lib/analytics'
import BrandPage from './brand/BrandPage'
import CreatorPage from './creator/CreatorPage'


export default function Home() {
  const analytics = useAnalytics()
  const [mode, setMode] = useState('brand')

  useEffect(() => {
    analytics.page(window.location.pathname, 'Brand Page - Crafy')
  }, [analytics])

  return (
    <div className="relative w-full min-h-screen bg-[#FAF7F7]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-[14.68%] top-[1585px] w-[1155px] h-[678px] bg-gradient-to-tr from-[#cb2c30] to-[#ed393d] opacity-25 blur-3xl"
          aria-hidden="true"
        />
      </div>

      <Header />

      <div className="flex flex-col items-center justify-center px-6 pt-6 gap-1 text-[#6B7280] ">
        <h5 className="">
          I&apos;m a
        </h5>

        <div className="flex column justify-center pb-8 ">
          <div className="flex p-1 space-x-1 bg-white rounded-full ring-1 ring-gray-900/10">
            <button
              type="button"
              className={`px-8 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ease-in-out ${mode === 'brand'
                  ? 'bg-[#CB2C30] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
                }`}
              onClick={() => setMode('brand')}
            >
              Brand
            </button>
            <button
              type="button"
              className={`px-8 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ease-in-out ${mode === 'creator'
                  ? 'bg-[#CB2C30] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
                }`}
              onClick={() => setMode('creator')}
            >
              Creator
            </button>
          </div>
        </div>
      </div>
      
      {
        (mode === 'brand') ? (<BrandPage />) : (<CreatorPage />)
      }

      <NewsletterSection />

      <Footer />
    </div>
  )
}