'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface FeatureCard {
  title: string
  description: string
  hasButton?: boolean
  image: string
}

interface FeatureRolloutProps {
  mode?: 'brand' | 'creator'
}

const brandFeatures: FeatureCard[] = [
  {
    title: 'No need to be a marketing guru',
    description: 'You know you should be creating campaigns, but you don\'t have the time, the team, or honestly, the first clue where to start? Think of us as your outsourced marketing team, without the agency fees or the headache.',
    hasButton: true,
    image: '/images/lara_guru.png'
  },
  {
    title: 'Manage everything in one place',
    description: 'Ditch the spreadsheets and manual follow. From first chat to final payment, it all happens on Crafy. Our platform gives you a simple workflow for approvals, secure contracts, and peace of mind.',
    hasButton: true,
    image: '/images/clara_notebook.png'
  },
  {
    title: 'Turn authentic content into real sales.',
    description: 'People trust people, not ads. Let creators tell your story. They drive more engagement and sales than traditional media, giving you a powerful new channel for customer acquisition.',
    hasButton: true,
    image: '/images/clara_customer.png'
  },
  {
    title: 'Find your perfect match in minutes.',
    description: 'You know creator marketing works, but where do you even find the right people? No more endless scrolling and awkward DMs. Our curated marketplace connects you with vetted creators who are ready to work with brands like yours.',
    hasButton: true,
    image: '/images/clara_magnifying.png'
  }
]

const creatorFeatures: FeatureCard[] = [
  {
    title: 'Run Your Business Like a Pro',
    description: 'Ditch the spreadsheets and manual follow. From first chat to final payment, it all happens on Crafy. Our platform gives you a simple workflow for approvals, secure contracts, and peace of mind.',
    hasButton: true,
    image: '/images/clara_notebook.png'
  },
  {
    title: 'Price Your Worth, Stress-Free',
    description: 'Stop guessing what to charge and getting into awkward negotiations. Our smart tools help you set fair, competitive rates for your work, ensuring you\'re always getting paid what you deserve.',
    hasButton: true,
    image: '/images/clara_influencer.png'
  },
  {
    title: 'Effortless Payments & Secure Contracts',
    description: 'With secure payments and clear agreements, you can finally stop worrying and start creating. Get paid on time, every time, with contracts that protect your work.',
    hasButton: true,
    image: '/images/clara_hello.png'
  }
]

export default function FeatureRollout({ mode = 'brand' }: FeatureRolloutProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const features = mode === 'brand' ? brandFeatures : creatorFeatures

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = index * scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const width = scrollContainerRef.current.offsetWidth
        const newIndex = Math.round(scrollLeft / width)
        setCurrentIndex(newIndex)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="w-full py-16 sm:py-20 lg:py-24">
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-10 lg:px-16"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[70vw] max-w-[1000px] snap-center scroll-ml-6 sm:scroll-ml-10 lg:scroll-ml-16"
          >
            <div className="relative bg-white/95 border border-[#E5E7EB] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Mobile Layout - Vertical */}
              <div className="flex flex-col md:hidden p-6 sm:p-8">
                <h2 className="font-raleway font-semibold text-[32px] sm:text-[36px] leading-[1.2] tracking-[-1px] text-[#111827] mb-4">
                  {feature.title}
                </h2>
                
                <div className="border-t border-[#ABADAF] my-5"></div>
                
                {/* Image Circle - Mobile */}
                <div className="relative w-[200px] h-[200px] mx-auto my-8">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <p className="font-raleway text-[18px] sm:text-[20px] leading-[1.6] text-[#6B7280] mb-8">
                  {feature.description}
                </p>
                
                {feature.hasButton && (
                  <button className="bg-[#CB2C30] rounded-md px-7 py-4 text-center font-raleway font-semibold text-lg text-white shadow-sm hover:bg-[#B32529] w-full transition-all duration-200">
                    Want to know more
                  </button>
                )}
              </div>

              {/* Desktop Layout - Horizontal */}
              <div className="hidden md:flex p-10 lg:p-12 min-h-[550px] lg:min-h-[600px] xl:min-h-[650px] items-center gap-8 lg:gap-12">
                <div className="flex-1">
                  <h2 className="font-raleway font-semibold text-[42px] lg:text-[52px] xl:text-[60px] leading-[1.2] tracking-[-1.2px] text-[#111827] mb-6 lg:mb-8">
                    {feature.title}
                  </h2>
                  
                  <div className="border-t border-[#ABADAF] my-6 lg:my-8"></div>
                  
                  <p className="font-raleway text-[20px] lg:text-[22px] xl:text-[25px] leading-[1.5] text-[#6B7280] mb-10">
                    {feature.description}
                  </p>
                  
                  {feature.hasButton && (
                    <button className="bg-[#CB2C30] rounded-md px-7 py-4 text-center font-raleway font-semibold text-lg lg:text-xl text-white shadow-sm hover:bg-[#B32529] transition-all duration-200">
                      Want to know more
                    </button>
                  )}
                </div>
                
                {/* Image Circle - Desktop */}
                <div className="relative w-[220px] h-[220px] lg:w-[250px] lg:h-[250px] xl:w-[268px] xl:h-[268px] flex-shrink-0">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-[#CB2C30] w-8' 
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
