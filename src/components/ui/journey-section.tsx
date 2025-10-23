import { FigmaCard } from "./figma-card"

interface JourneyStep {
  number: number
  title: string
  description: string
}

interface JourneySectionProps {
  title: string
  subtitle: string
  steps: JourneyStep[]
}

export function JourneySection({ title, subtitle, steps }: JourneySectionProps) {
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center space-y-4">
                <div className="w-16 h-16 bg-crafy-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-crafy-gray-900">{step.title}</h3>
                <p className="text-crafy-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FigmaCard>
    </div>
  )
}