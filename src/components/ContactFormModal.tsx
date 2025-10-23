'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { useAnalytics } from '@/lib/analytics'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    userType: 'brand' as 'brand' | 'creator'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const analytics = useAnalytics()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      analytics.click('contact-form-submit', 'contact-modal')
      setIsSubmitted(true)
      
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          userType: 'brand'
        })
      }, 2000)
    } catch (err) {
      setError('Failed to submit form. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="font-raleway font-bold text-3xl text-[#111827] mb-2">
              Get Started with Crafy
            </h2>
            <p className="font-raleway text-lg text-[#6B7280]">
              Fill out the form below and we&apos;ll get back to you soon.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway font-semibold text-xl text-[#111827] mb-2">
                Thank you for your interest!
              </h3>
              <p className="font-raleway text-[#6B7280]">
                We&apos;ll contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type */}
              <div>
                <label className="font-raleway font-medium text-sm text-[#111827] mb-2 block">
                  I am a
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value="brand"
                      checked={formData.userType === 'brand'}
                      onChange={(e) => setFormData({ ...formData, userType: e.target.value as 'brand' | 'creator' })}
                      className="w-4 h-4 text-[#CB2C30] border-gray-300 focus:ring-[#CB2C30]"
                    />
                    <span className="ml-2 font-raleway text-[#111827]">Brand</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value="creator"
                      checked={formData.userType === 'creator'}
                      onChange={(e) => setFormData({ ...formData, userType: e.target.value as 'brand' | 'creator' })}
                      className="w-4 h-4 text-[#CB2C30] border-gray-300 focus:ring-[#CB2C30]"
                    />
                    <span className="ml-2 font-raleway text-[#111827]">Creator</span>
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="font-raleway font-medium text-sm text-[#111827] mb-2 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 font-raleway text-[#111827] focus:ring-2 focus:ring-[#CB2C30] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="font-raleway font-medium text-sm text-[#111827] mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 font-raleway text-[#111827] focus:ring-2 focus:ring-[#CB2C30] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="font-raleway font-medium text-sm text-[#111827] mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 font-raleway text-[#111827] focus:ring-2 focus:ring-[#CB2C30] focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="font-raleway font-medium text-sm text-[#111827] mb-2 block">
                  Company / Channel Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 font-raleway text-[#111827] focus:ring-2 focus:ring-[#CB2C30] focus:border-transparent"
                  placeholder="Your company or channel"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="font-raleway font-medium text-sm text-[#111827] mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 font-raleway text-[#111827] focus:ring-2 focus:ring-[#CB2C30] focus:border-transparent resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              {error && (
                <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3">
                  <p className="text-red-700 font-raleway text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-md border border-gray-300 px-6 py-3 font-raleway font-semibold text-[#111827] hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-md bg-[#CB2C30] px-6 py-3 font-raleway font-semibold text-white hover:bg-[#B32529] transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
