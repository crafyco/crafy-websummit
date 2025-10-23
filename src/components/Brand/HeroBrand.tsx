'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_CRAFY_APP_URL || 'http://localhost:8000'

export default function HeroBrand() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 sm:pt-7 lg:px-8">
        <div className="sm:flex w-full justify-center items-center gap-12">
          {/* Left copy */}
          <div>
            {/* Toggle */}
            <div className="mb-[50px] flex justify-center items-center">
              <div className="inline-flex rounded-md shadow-sm ring-1 ring-inset ring-crafy-gray-300">
                <Link href="/brand" className="px-3 py-1.5 text-sm font-semibold rounded-l-md bg-crafy-gray-900 text-white">
                  Brand
                </Link>
                <Link href="/creator" className="px-3 py-1.5 text-sm font-semibold rounded-r-md bg-white text-crafy-gray-900 hover:bg-crafy-gray-50">
                  Creator
                </Link>
              </div>
            </div>

            {/* Badges */}
            <div className="flex mt-6 items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-crafy-gray-100 px-3 py-1 text-xs font-medium text-crafy-gray-700">Boost your brand</span>
            </div>

            {/* Heading */}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-crafy-gray-900 max-w-xl">
              Your creative arm, without a team or agency
            </h1>

            {/* Copy */}
            <p className="mt-4 text-base sm:text-lg text-crafy-gray-600 max-w-2xl">
              Crafy connects you to content creators who think and communicate as part of your team, taking your message to the right audience.
            </p>
            <p className="mt-2 text-base sm:text-lg text-crafy-gray-600 max-w-2xl">
              No monthly fees, no long contracts; you just pay when you use, and we take care of the creativity, strategy and growth.
            </p>

            {/* CTA */}
            <div className="flex w-full justify-center mt-6">
              <Button asChild size="lg" trackingId="brand-hero-know-more" className='w-full' trackingLocation="brand-hero">
                <a href={`${APP_URL}/brand/register`} target="_blank" rel="noopener noreferrer">
                  Want to know more
                </a>
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            {/* Small chip and avatar at top-right of phone */}
            {/* <div className="absolute -top-6 right-0 hidden sm:flex items-center gap-3">
              <div className="rounded-full bg-crafy-gray-100 px-3 py-1 text-xs text-crafy-gray-600">Get started today...</div>
              <div className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-white shadow">
                <Image src="/avatar-placeholder.svg" alt="avatar" width={32} height={32} />
              </div>
            </div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-full max-w-sm"
            >
              <div className="relative w-[18rem] sm:w-[20rem]">
                {/* Phone frame */}
                <svg viewBox="0 0 366 729" role="img" className="hidden sm:block mx-auto w-full drop-shadow-xl">
                  <title>App screenshot</title>
                  <defs>
                    <clipPath id="phone-clip">
                      <rect width="316" height="684" rx="36" />
                    </clipPath>
                  </defs>
                  <path fill="#4B5563" d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
                  <path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
                  <foreignObject width="316" height="684" transform="translate(24 24)" clipPath="url(#phone-clip)">
                    <img src="/images/cellphone-background2.jpg" alt="Crafy app" />
                  </foreignObject>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
