'use client'

import Image from 'next/image'

interface ClaraSectionProps {
  mode?: 'brand' | 'creator'
}

const cards = {
  brand: [
    {
      title: 'Matchmaking',
      description: 'Our Clara understands your brand, product, and audience—recommending only the creators and audiences that truly align with you.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      )
    },
    {
      title: 'Customization',
      description: 'Set your own preferences and let Clara suggest only the most relevant connections.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      )
    },
    {
      title: 'Data Analysis',
      description: 'Access performance metrics to make the best decision for your campaigns.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    }
  ],
  creator: [
    {
      title: 'Matchmaker',
      description: 'Clara understands your audience and content niche recommending brands and campaigns that truly align with you.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      )
    },
    {
      title: 'Seller',
      description: 'Clara negotiates for you. She will make excellent and fair agreements for your service and value.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
      )
    },
    {
      title: 'Creative',
      description: 'Endless creativity for you to engage with your community and create the best campaigns for your clients.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      )
    }
  ]
}

export default function ClaraSection({ mode = 'brand' }: ClaraSectionProps) {
  const currentCards = cards[mode]
  const description = mode === 'creator' 
    ? 'Clara is your AI sidekick and content planner. Need ideas? Our AI agent is here 24/7 to spark inspiration and help refine your campaign concepts.'
    : 'Clara is our AI agent, an expert on creators, here to help you craft campaigns effortlessly and fast.'

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8 py-12 sm:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            <Image
              src="/images/clara_avatar.png"
              alt="Clara Avatar"
              fill
              className="object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="font-raleway font-extrabold text-3xl sm:text-4xl text-[#111827] mb-4">
            Meet &quot;Clara&quot;
          </h2>
          <p className="font-raleway text-lg text-[#6B7280]">
            {description}
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {currentCards.map((card, index) => (
          <div 
            key={index}
            className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-10 h-10 text-[#CB2C30]">
              {card.icon}
            </div>
            <h3 className="font-raleway font-semibold text-lg text-[#111827]">
              {card.title}
            </h3>
            <p className="font-raleway text-sm text-[#6B7280] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
