'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAnalytics } from '@/lib/analytics'

const carouselItems = [
  {
    title: 'Tap into new audiences, instantly',
    body1:
      "Getting noticed is hard when you're starting from scratch. How do you reach new customers if you don't have a following?",
    body2:
      'Do not build an audience from zero. Borrow one from creators who are already trusted by your ideal customers. Get your message heard, loud and clear.',
    cta: 'Want to know more',
    img: '/images/clara_megafone.png',
  },
  {
    title: 'Find your perfect match',
    body1:
      'No more guessing. Our AI finds creators who truly match your brand voice and audience expectations.',
    body2:
      'Get suggested collaborations that feel organic and perform better across channels.',
    cta: 'Discover matches',
    img: '/images/clara_magnifying.png',
  },
  {
    title: 'Manage everything in one place',
    body1:
      'Briefing, approvals, content delivery and payments—all organized and traceable.',
    body2:
      'Goodbye spreadsheets. Hello, streamlined workflows.',
    cta: 'See how it works',
    img: '/images/clara_notebook.png',
  },
  {
    title: 'No need to be a marketing guru',
    body1:
      "You know you should be creating campaigns, but you don't have the time, the team, or honestly, the first clue where to start?",
    body2:
      'Think of us as your outsourced marketing team, without the agency fees or the headache.',
    cta: 'See how it works',
    img: '/images/clara_guru.png',
  },
  {
    title: 'Turn authentic content into real sales.',
    body1:
      "People trust people, not ads. Let creators tell your story.",
    body2:
      'They drive more engagement and sales than traditional media, giving you a powerful new channel for customer acquisition.',
    cta: 'See how it works',
    img: '/images/clara_customer.png',
  },
]

const claraPillars = [
  {
    icon: '❤️',
    title: 'Matchmaker',
    text:
      'Clara understands your brand, product, and audience—recommending only the creators and audiences that truly align with you.',
  },
  {
    icon: '⏱️',
    title: 'Time-saver',
    text:
      'Ditch the spreadsheets and manual follow-ups. Let Clara help you manage campaigns without the headache.',
  },
  {
    icon: '📈',
    title: 'Effective',
    text:
      'Get big-brand results without the big-brand budget. Creator marketing is one of the most cost‑effective ways to grow.',
  },
]

export default function ClaraSection() {
  const analytics = useAnalytics()

  return (
    <section className="relative bg-[#fbf7f7] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Clara */}
        <div className="flex justify-center sm:flex-row flex-col items-center gap-6">
          <div className="flex justify-center h-32 w-32 sm:h-28 sm:w-28 rounded-full overflow-hidden shadow-md ring-2 ring-white bg-white">
            <Image className="object-cover justify-content-center" src="/images/clara_hello.png" width={136} height={136} alt="Clara" />
          </div>
          <div>
            <h3 className="text-[22px] sm:text-2xl font-extrabold text-crafy-gray-900">Meet “Clara”</h3>
            <p className="mt-1 text-[13px] sm:text-sm text-crafy-gray-600 max-w-2xl">
              Clara is our AI agent, an expert on creators, here to help you craft campaigns effortlessly and fast.
            </p>
          </div>
        </div>

        {/* Three cards */}
        <div className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {claraPillars.map((p, idx) => (
            <div key={p.title} className="relative rounded-xl border border-crafy-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-crafy-red/10 text-[12px]">{p.icon}</span>
                <span className="text-[13px] font-semibold text-crafy-gray-900">{p.title}</span>
              </div>
              <p className="mt-3 text-[12px] leading-5 text-crafy-gray-600">{p.text}</p>

              {/* subtle red glow under the last card */}
              {idx === 2 && (
                <div className="pointer-events-none absolute -bottom-16 right-6 h-28 w-40 rounded-full bg-crafy-red/20 blur-2xl" />
              )}
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="mt-10 sm:mt-12">
          <div className="relative">
            {/* glow decoration */}
            <div className="pointer-events-none absolute -top-6 right-6 h-40 w-40 rounded-full bg-crafy-red/20 blur-3xl" />

            <motion.div
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {carouselItems.map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="snap-start shrink-0 w-[320px] sm:w-[560px] rounded-2xl border border-crafy-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-6 p-8">
                    <div className="flex mr-auto w-1/2 sm:w-full">
                      <h4 className="text-[25px] sm:text-[30px] leading-[1.05] font-extrabold tracking-tight text-crafy-gray-900 overflow-visible whitespace-normal break-words">
                        {card.title}
                      </h4>
                    </div>
                    <div className="flex justify-center h-32 w-32 sm:h-32 sm:w-32 w-[30%] max-w-[30%] sm:w-auto sm:max-w-none rounded-full overflow-hidden shadow-md ring-2 ring-white bg-white">
                      <Image className="object-cover justify-content-center" src={card.img} width={112} height={112} alt="Clara" />
                    </div>
                  </div>
                  <div className="px-8">
                    <hr className="border-crafy-gray-200" />
                  </div>
                  <div className="p-8 pt-5">
                    <p className="text-[15px] text-crafy-gray-700 leading-7">
                      {card.body1}
                    </p>
                    <p className="mt-3 text-[15px] text-crafy-gray-700 leading-7">
                      {card.body2}
                    </p>
                    <Button
                      className="mt-5"
                      trackingId={`brand-carousel-${i}`}
                      trackingLocation="brand-clara"
                      onClick={() => analytics.click(`brand-carousel-${i}`, 'brand-clara')}
                    >
                      {card.cta}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
