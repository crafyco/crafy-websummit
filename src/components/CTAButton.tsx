'use client'

import { useContactForm } from '@/contexts/ContactFormContext'

export default function CTAButton() {
  const { openModal } = useContactForm()

  return (
    <div className="flex justify-end px-6 py-4 max-w-7xl mx-auto">
      <button 
        onClick={openModal}
        className="bg-[#E9E9E9] rounded-[15px] px-6 py-2 shadow hover:bg-[#d9d9d9] transition-colors"
      >
        <span className="font-raleway text-[20px] text-[#6B7280]">Get started today...</span>
      </button>
    </div>
  )
}
