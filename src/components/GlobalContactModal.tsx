'use client'

import { useContactForm } from '@/contexts/ContactFormContext'
import ContactFormModal from './ContactFormModal'

export default function GlobalContactModal() {
  const { isOpen, closeModal } = useContactForm()

  return <ContactFormModal isOpen={isOpen} onClose={closeModal} />
}
