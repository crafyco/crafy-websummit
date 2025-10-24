import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, LinkIcon } from 'lucide-react'
// import { LinkIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#242222] border-t border-[#334155]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Left - Logo and description */}
          <div className="lg:w-4/12">
            <div className="w-[306px] h-[83px] relative mb-8">
              <Image
                src="/images/logo-horizontal-preta.png"
                alt="Crafy"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="font-raleway text-base leading-6 text-[#D1D5DB] mb-6">
              We connect brands with the ideal creators through intelligent matchmaking. Build partnerships that truly resonate with your audience.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-x-6">
              <Link href="#" className="text-[#D1D5DB] hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#D1D5DB] hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#D1D5DB] hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#D1D5DB] hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          {/* Right - Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Terms of Service */}
            <div className="sm:w-1/3">
              <Link href="/terms" className="no-underline mb-2">
                <h3 className="font-raleway font-semibold text-sm leading-6 text-[#D1D5DB] mb-4 hover:underline">
                  <LinkIcon className="h-4 w-4 inline-block mr-1 text-[#D1D5DB]" />
                  Terms of Service
                </h3>
              </Link>
              <p className="font-raleway text-sm leading-6 text-[#D1D5DB]">
                By using our services, you agree to be bound by these terms.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="sm:w-1/3">
              <Link href="/privacy" className="no-underline mb-2">
                <h3 className="font-raleway font-semibold text-sm leading-6 text-[#D1D5DB] mb-4 hover:underline">
                  <LinkIcon className="h-4 w-4 inline-block mr-1 text-[#D1D5DB]" />
                  Privacy Policy
                </h3>
              </Link>
              <p className="font-raleway text-sm leading-6 text-[#D1D5DB]">
                This policy outlines how we collect, use, and protect your personal information.
              </p>
            </div>
            
            {/* Contact */}
            <div className="sm:w-1/3 space-y-2">
              <h3 className="font-raleway font-semibold text-sm leading-6 text-[#D1D5DB] mb-4">
                Contact
              </h3>
              <p className="font-raleway text-base text-[#D1D5DB]">
                contact@crafyinc.com
              </p>
              {/* <p className="font-raleway text-base text-[#D1D5DB]">
                +123456000
              </p> */}
              <p className="font-raleway text-base leading-6 text-[#D1D5DB]">
                30 N Gould ST STE R, Sheridan, WY 82801
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom - Copyright */}
        <div className="mt-16 pt-8 border-t border-[#9CA3AF]">
          <p className="font-raleway text-sm text-center text-[#9CA3AF]">
            © 2025 Crafy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
