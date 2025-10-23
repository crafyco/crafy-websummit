import { FigmaCard } from "./figma-card"

interface HeroSectionProps {
  title: string
  description: string
  primaryButton: {
    text: string
    onClick?: () => void
  }
  secondaryButton?: {
    text: string
    onClick?: () => void
  }
}

export function HeroSection({ title, description, primaryButton, secondaryButton }: HeroSectionProps) {
  return (
    <div className="flex justify-center">
      <FigmaCard variant="large">
        <div className="flex flex-col h-full justify-center items-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-crafy-gray-900">
            {title}
          </h1>
          <p className="text-xl text-crafy-gray-600 max-w-2xl">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              className="crafy-button text-lg px-8 py-4"
              onClick={primaryButton.onClick}
            >
              {primaryButton.text}
            </button>
            {secondaryButton && (
              <button 
                className="crafy-button-outline text-lg px-8 py-4"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        </div>
      </FigmaCard>
    </div>
  )
}