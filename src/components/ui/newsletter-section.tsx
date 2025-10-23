import { FigmaCard } from "./figma-card"

interface NewsletterSectionProps {
  title: string
  description: string
  buttonText: string
  placeholder?: string
  disclaimer?: string
  onSubmit?: (email: string) => void
}

export function NewsletterSection({ 
  title, 
  description, 
  buttonText, 
  placeholder = "seu@email.com",
  disclaimer = "Newsletter semanal com insights exclusivos",
  onSubmit 
}: NewsletterSectionProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    if (onSubmit && email) {
      onSubmit(email)
    }
  }

  return (
    <div className="flex justify-center">
      <FigmaCard variant="large">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-crafy-gray-900">
            {title}
          </h2>
          <p className="text-xl text-crafy-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <input 
              type="email" 
              name="email"
              placeholder={placeholder}
              required
              className="px-4 py-3 border border-crafy-gray-300 rounded-lg focus:ring-2 focus:ring-crafy-red focus:border-transparent outline-none w-full sm:w-80"
            />
            <button type="submit" className="crafy-button px-8 py-3 whitespace-nowrap">
              {buttonText}
            </button>
          </form>
          <p className="text-sm text-crafy-gray-500">{disclaimer}</p>
        </div>
      </FigmaCard>
    </div>
  )
}