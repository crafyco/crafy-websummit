'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { FixedAvatar } from './FixedAvatar'

export default function Header() {
  const pathname = usePathname()
  const isBrandPage = pathname === '/brand'
  const isCreatorPage = pathname === '/creator'

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="w-32 sm:w-48">
              <Image 
                className="object-contain" 
                src="/images/logo-horizontal-preta.png" 
                width={1024} 
                height={1024} 
                alt="Crafy"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Brand/Creator Toggle - Centered */}
        {(isBrandPage || isCreatorPage) && (
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <span className="isolate inline-flex rounded-md shadow-sm bg-white/[0.01]">
              <Link
                href="/brand"
                className={`relative inline-flex items-center rounded-l-md px-3 py-2 font-raleway font-semibold text-xl ring-1 ring-inset focus:z-10 h-11 transition-all duration-200 ${
                  isBrandPage 
                    ? 'bg-[#CB2C30] text-white ring-[#3B82F6]/50' 
                    : 'bg-white text-[#111827] ring-[#D1D5DB] hover:bg-gray-50'
                }`}
              >
                Brand
              </Link>
              <Link
                href="/creator"
                className={`relative inline-flex items-center rounded-r-md px-3 py-2 font-raleway font-semibold text-xl ring-1 ring-inset focus:z-10 h-11 transition-all duration-200 ${
                  isCreatorPage 
                    ? 'bg-[#CB2C30] text-white ring-[#3B82F6]/50' 
                    : 'bg-white text-[#111827] ring-[#D1D5DB] hover:bg-gray-50'
                }`}
              >
                Creator
              </Link>
            </span>
          </div>
        )}
        
        {/* Avatar */}
        <div className="flex items-center lg:flex-1 lg:justify-end">
          <FixedAvatar />
        </div>
      </nav>
    </header>
  )
}