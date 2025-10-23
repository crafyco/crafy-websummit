'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ContactFormContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined)

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <ContactFormContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactFormContext.Provider>
  )
}

export function useContactForm() {
  const context = useContext(ContactFormContext)
  if (context === undefined) {
    throw new Error('useContactForm must be used within a ContactFormProvider')
  }
  return context
}
