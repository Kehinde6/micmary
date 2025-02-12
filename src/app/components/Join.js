import React from 'react'

function Join() {
  return (
    <div id="admissions" className="bg-gradient-to-b from-[#F8FCE9] to-[#F0F7F3] text-[#01A44F] py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-[#01A44F] text-center">Join Us</h1>
          <div className="w-24 h-0.5 bg-[#FFF000]/60 mt-4 rounded-full" />
        </div>
        
        <p className="text-base sm:text-lg leading-relaxed mb-12 text-center text-[#2C5738] px-4 sm:px-0">
          Been hunting for a school that will nurture your child(ren)'s curiosity and propel them towards a brighter future?
          Your search ends here! Become a part of Micmary and watch as we mold your child into a confident and
          compassionate leader of tomorrow. Don't dawdle, spots fill up faster than a leopard on a caffeine rush!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
          <button className="bg-[#01A44F]/90 text-white px-8 py-3 rounded-md hover:bg-[#01A44F] transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-[#FFF000]/10">
            Admissions
          </button>
          <button className="bg-white/80 backdrop-blur-sm text-[#01A44F] px-8 py-3 rounded-md hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-[#01A44F]/20">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Join