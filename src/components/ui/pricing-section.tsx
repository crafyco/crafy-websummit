import { FigmaCard } from "./figma-card"

interface PricingPlan {
  name: string
  price: string
  description?: string
  features: string[]
  popular?: boolean
  buttonText: string
  onSelect?: () => void
}

interface PricingSectionProps {
  title: string
  subtitle: string
  plans: PricingPlan[]
}

export function PricingSection({ title, subtitle, plans }: PricingSectionProps) {
  return (
    <div className="flex justify-center">
      <FigmaCard variant="large">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-crafy-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-xl text-crafy-gray-600">
              {subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border ${
                  plan.popular ? 'border-2 border-crafy-red' : 'border-crafy-gray-200'
                } rounded-xl p-6 space-y-4 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-crafy-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-crafy-gray-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-crafy-red">
                  {plan.price}
                  {plan.price !== 'R$ 0' && <span className="text-lg text-crafy-gray-600">/mês</span>}
                </div>
                {plan.description && (
                  <p className="text-crafy-gray-600">{plan.description}</p>
                )}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-crafy-red rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 ${
                    plan.popular ? 'crafy-button' : 'crafy-button-outline'
                  }`}
                  onClick={plan.onSelect}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </FigmaCard>
    </div>
  )
}