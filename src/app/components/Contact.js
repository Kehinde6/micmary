import React from 'react'

function ContactUs() {
  return (
    <div className="bg-[#F8FCE9] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif mb-12 text-center text-[#01A44F]">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-[#01A44F]/10">
            <div className="flex items-center gap-4 mb-4">
              <svg 
                className="w-8 h-8 text-[#01A44F]"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              <h2 className="text-2xl font-semibold text-[#01A44F]">Email</h2>
            </div>
            <a href="mailto:info@micmaryschool.com" 
               className="text-lg text-[#2C5738] hover:text-[#01A44F] transition-colors duration-200 flex items-center gap-2 group">
              info@micmaryschool.com
              <svg 
                className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-[#01A44F]/10">
            <div className="flex items-center gap-4 mb-4">
              <svg 
                className="w-8 h-8 text-[#01A44F]"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <h2 className="text-2xl font-semibold text-[#01A44F]">Location</h2>
            </div>
            <address className="text-lg text-[#2C5738] not-italic group-hover:text-[#01A44F] transition-colors duration-200">
              123 Learning Lane,<br />
              Education City, EC 12345
            </address>
          </div>

          {/* Phone Card */}
          <div className="bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-[#01A44F]/10">
            <div className="flex items-center gap-4 mb-4">
              <svg 
                className="w-8 h-8 text-[#01A44F]"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              <h2 className="text-2xl font-semibold text-[#01A44F]">Phone</h2>
            </div>
            <a href="tel:+12345678901" 
               className="text-lg text-[#2C5738] hover:text-[#01A44F] transition-colors duration-200 flex items-center gap-2 group">
              +1 (234) 567-8901
              <svg 
                className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs