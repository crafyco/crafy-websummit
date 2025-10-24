'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import ClaraSection from '@/components/ClaraSection'
import FeatureRollout from '@/components/FeatureRollout'
import PartnerTopCreators from '@/components/Brand/PartnerTopCreators'
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

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8 pt-6 sm:pt-12 lg:pt-16 pb-12 sm:pb-20">
        <div className="sm:flex sm:justify-center sm:items-center lg:gap-x-12">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all">
                <span className="font-raleway text-sm text-[#4B5563]">Boost your brand</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-semibold leading-tight tracking-tight text-[#111827] lg:text-left">
              Your creative arm, without a team or agency
            </h1>

            {/* Description */}
            <div className="mt-8 space-y-4 lg:text-left">
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
          <div className="hidden lg:block mt-16 sm:mt-24 lg:mt-0">
            <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[16rem] max-w-full drop-shadow-xl">
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect width="316" height="684" rx="36" />
                </clipPath>
              </defs>
              <path fill="#4B5563"
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
              <path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
              <foreignObject width="316" height="684" transform="translate(24 24)" clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
                <Image
                  src="/images/cellphone-background2.jpg"
                  alt="App preview"
                  fill
                  className="object-cover rounded-[19px] shadow-2xl"
                  priority
                />
              </foreignObject>
            </svg>
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
      {/* <PricingSection /> */}

    </div>
  )
}
