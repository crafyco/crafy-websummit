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
    <section className="isolate overflow-hidden" id="pricing">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base/7 font-semibold text-crafy-red">
            Pricing
          </h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-crafy-gray-900 sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-pretty text-lg font-medium text-crafy-gray-600 sm:text-xl/8">
            Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>
      </div>
      
      <div className="flow-root pb-10 sm:pb-16">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div 
                  key={tier.id} 
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3 className="text-base/7 font-semibold text-crafy-red">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-base/7 font-semibold text-gray-600">
                        /month
                      </span>
                    </div>
                    <p className="mt-6 text-base/7 text-gray-600">
                      {tier.description}
                    </p>
                    <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon 
                            className="h-6 w-5 flex-none text-crafy-red" 
                            aria-hidden="true" 
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    onClick={() => handlePlanSelect(tier.name)}
                    className="mt-8 w-full rounded-md bg-crafy-red px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-crafy-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crafy-red"
                    trackingId={`pricing-${tier.name.toLowerCase()}`}
                    trackingLocation="brand-pricing"
                  >
                    Get started today
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}