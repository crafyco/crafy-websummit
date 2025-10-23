'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useContactForm } from '@/contexts/ContactFormContext';

export function FixedAvatar() {
  const [isLargeMargin, setIsLargeMargin] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { openModal } = useContactForm();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsLargeMargin(false);
      } else if (currentScrollY > lastScrollY) {
        setIsLargeMargin(true);
      } else {
        setIsLargeMargin(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-0 right-0 mr-8 sm:mr-24 sm:mt-8 z-50 
        h-12 w-12 md:h-16 md:w-16
        transition-all duration-300 ease-in-out
        group 
        ${isLargeMargin ? 'mt-12' : 'mt-4'}
      `}
    >
      <div
        className="
          absolute top-1/2 -translate-y-1/2 right-full mr-3
          px-3 py-1 bg-gray-900 text-white text-sm font-medium
          rounded-md shadow-lg whitespace-nowrap
          pointer-events-none
        "
      >
        Get started today...
        <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 
          border-t-4 border-t-transparent
          border-b-4 border-b-transparent
          border-l-4 border-l-gray-900">
        </div>
      </div>

      <div 
        className='flex h-full w-full rounded-full overflow-hidden shadow-md ring-2 ring-white bg-white cursor-pointer hover:scale-105 transition-transform duration-300'
        onClick={openModal}
      >
        <Image
          className="object-cover"
          src="/images/clara_avatar.png"
          width={112}
          height={112}
          alt="Clara"
        />
      </div>
    </div>
  );
}
