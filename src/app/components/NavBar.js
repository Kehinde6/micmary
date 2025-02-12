"use client"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.jpg'

export default function NavBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 lg:px-12 py-4 shadow-md border-b border-[#01A44F]/10">
      {/* Logo and Text */}
      <div className="font-cursive text-xl md:text-2xl mb-6 md:mb-0">
        <Link href="/" className="flex items-center group">
          <div className="relative transform transition-transform duration-300 group-hover:scale-105">
            <Image src={logo} alt="Logo" width={50} height={50} className="rounded-lg shadow-sm" />
          </div>
          <h1 className="ml-3 text-[#01A44F] font-semibold text-2xl group-hover:text-[#018A42] transition-colors duration-300">
            Micmary School
          </h1>
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-black hover:text-[#01A44F] transition-colors duration-300 relative group py-2"
        >
          About Us
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#01A44F] group-hover:w-full transition-all duration-300" />
        </button>
        <button 
          onClick={() => scrollToSection('admissions')}
          className="text-black hover:text-[#01A44F] transition-colors duration-300 relative group py-2"
        >
          Admissions
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#01A44F] group-hover:w-full transition-all duration-300" />
        </button>
        <button 
          onClick={() => scrollToSection('programs')}
          className="text-black hover:text-[#01A44F] transition-colors duration-300 relative group py-2"
        >
          Programs
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#01A44F] group-hover:w-full transition-all duration-300" />
        </button>
      </div>
    </nav>
  )
}