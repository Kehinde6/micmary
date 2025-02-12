import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.jpg'

function Hero() {
  return (
    <div className="min-h-[60vh] flex items-center bg-gradient-to-br from-[#F8FCE9] via-[#F0F7F3] to-[#F8FCE9]">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-[#01A44F] text-5xl md:text-7xl mb-4 font-serif relative">
            MICMARY
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FFF000]/60 rounded-full" />
          </h1>
          <h2 className="text-[#2C5738] text-3xl md:text-6xl font-semibold">
            Education
          </h2>
          <p className="mt-6 text-lg text-[#2C5738]/80 max-w-xl">
            Nurturing minds, building futures, and creating leaders of tomorrow through excellence in education.
          </p>
        </div>

        {/* Hexagon Logo */}
        <div className="hidden md:block">
          <div className="relative w-32 h-32 transform hover:scale-105 transition-transform duration-300">
            {/* Hexagon shape with border */}
            <div className="absolute w-full h-full">
              <div className="bg-[#01A44F] w-full h-full rounded-xl transform rotate-45 shadow-lg"></div>
              <div className="absolute inset-[3px] bg-[#FFF000]/20 rounded-xl transform rotate-45"></div>
              <div className="absolute inset-[6px] bg-[#01A44F] rounded-xl transform rotate-45"></div>
              {/* Centered Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-16">
                  <Image 
                    src={logo} 
                    alt="Logo" 
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero