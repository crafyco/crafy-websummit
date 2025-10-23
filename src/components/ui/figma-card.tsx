import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface FigmaCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "large" | "medium" | "sidebar"
}

export function FigmaCard({ children, className, variant = "default" }: FigmaCardProps) {
  const variants = {
    default: "w-full max-w-4xl min-h-[400px] lg:min-h-[700px]",
    large: "w-full max-w-4xl min-h-[400px] lg:min-h-[700px]",
    medium: "w-full max-w-3xl min-h-[350px] lg:min-h-[651px]", 
    sidebar: "w-full max-w-sm min-h-[300px] lg:min-h-[656px]"
  }

  return (
    <div 
      className={cn(
        // Base styles from Figma
        "relative bg-white/95 border border-gray-200/80 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl",
        // Responsive padding
        "p-4 sm:p-6 lg:p-8",
        // Hover effects
        "hover:shadow-xl transition-shadow duration-300",
        // Responsive adjustments
        "box-border",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  )
}

interface FigmaLayoutProps {
  children: ReactNode
  className?: string
}

export function FigmaLayout({ children, className }: FigmaLayoutProps) {
  return (
    <div 
      className={cn(
        "relative min-h-screen w-full bg-[#FAF7F7] py-8 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {children}
      </div>
    </div>
  )
}