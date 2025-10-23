import { CheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAnalytics } from '@/lib/analytics'

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    priceMonthly: '$0.00',
    description: 'Perfect to start exploring creators and understand the platform.',
    features: [
      'Unlimited creator selection',
      'Creator profiles',
    ],
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    priceMonthly: '$38.00',
    description: 'Advanced tools and AI to scale your campaigns. Billed annually ($198.00).',
    features: [
      'Unlimited creator selection',
      'Creator profiles',
      'Engagement and collab metrics',
      'Favorite list',
      'AI-powered creator matchmaking',
    ],
  },
]

export default function PricingSection() {
  const analytics = useAnalytics()

  const handlePlanSelect = (planName: string) => {
    analytics.click(`pricing-${planName.toLowerCase()}`, 'brand-pricing')
    // Handle plan selection - could navigate to signup/dashboard
    console.log(`Selected plan: ${planName}`)
  }

  return (
    <section className="isolate overflow-hidden bg-[#FAF7F7] py-16 sm:py-24 lg:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <p className="font-raleway font-semibold text-base text-[#ED393D] mb-2">
            Pricing
          </p>
          <h2 className="font-raleway font-semibold text-5xl sm:text-6xl tracking-tight text-[#CB2C30] mb-6">
            Choose the right plan for you
          </h2>
          <p className="font-raleway font-medium text-lg sm:text-xl text-[#9CA3AF] max-w-3xl mx-auto">
            Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier) => (
            <div 
              key={tier.id} 
              className="flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10 shadow-xl ring-1 ring-gray-900/10"
            >
              <div>
                <h3 className="font-raleway font-semibold text-base text-[#CB2C30]">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-x-2">
                  <span className="font-raleway font-semibold text-5xl tracking-tight text-[#111827]">
                    {tier.priceMonthly}
                  </span>
                  <span className="font-raleway font-semibold text-base text-[#4B5563]">
                    /month
                  </span>
                </div>
                <p className="mt-6 font-raleway text-base leading-7 text-[#4B5563]">
                  {tier.description}
                </p>
                <ul role="list" className="mt-10 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon 
                        className="h-5 w-5 flex-none text-[#CB2C30]" 
                        aria-hidden="true" 
                      />
                      <span className="font-raleway text-sm text-[#4B5563]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                onClick={() => handlePlanSelect(tier.name)}
                className="mt-8 w-full rounded-md bg-[#CB2C30] px-3.5 py-2 text-center font-raleway font-semibold text-sm text-white shadow-sm hover:bg-[#B32529] transition-all duration-200"
                trackingId={`pricing-${tier.name.toLowerCase()}`}
                trackingLocation="brand-pricing"
              >
                Get started today
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}