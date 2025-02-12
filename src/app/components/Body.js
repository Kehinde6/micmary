import React from 'react'
import Image from 'next/image'

function Body() {
  return (
    <div className="bg-[#F8FCE9] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div id="about" className="mb-16 sm:mb-24 transform hover:scale-[1.02] transition-transform duration-300">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#01A44F] to-[#018A42]">
            Leap into Learning
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl text-[#2C5738]">
            Nestled in the heart of the city, Micmary is 
            a vibrant oasis offering exceptional 
            Montessori education, creche facilities and 
            a pre-school program that is unrivalled. 
            Ignite the spark of learning with our 
            innovative and comprehensive approach to 
            education.
          </p>
        </div>

        {/* Vision, Mission, and Values Section */}
        <div className="mb-24 space-y-8">
          <div className="bg-[#01A44F] text-white hover:bg-[#018A42] transition-all duration-300 transform hover:-translate-y-1 rounded-3xl p-8 shadow-lg border border-[#01A44F]/20">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="mr-3 animate-pulse">🎯</span> Our Vision
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              To instill in our pupils a culture of work and faith that promotes self-confidence to positively face life's challenges now and in the future.
            </p>
          </div>

          <div className="bg-white hover:bg-[#F7F9F8] transition-all duration-300 transform hover:-translate-y-1 rounded-3xl p-8 shadow-lg border border-[#01A44F]/10">
            <h2 className="text-3xl font-bold mb-4 flex items-center text-[#01A44F]">
              <span className="mr-3 animate-pulse">🚀</span> Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-[#2C5738]">
              To groom the child in fine academic, social, moral and civic skills and etiquette needed for purposeful living and problem-solving.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFF000]/10 to-[#FFF000]/5 hover:from-[#FFF000]/15 hover:to-[#FFF000]/10 transition-all duration-300 transform hover:-translate-y-1 rounded-3xl p-8 shadow-lg border border-[#FFF000]/20">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-[#01A44F]">
              <span className="mr-3 animate-pulse">⭐</span> Core Values: STEPS
            </h2>
            <ul className="text-lg space-y-4 text-[#2C5738]">
              {['Stewardship', 'Trust', 'Engagement', 'Professionalism', 'Services'].map((value, index) => (
                <li key={index} className="flex items-center hover:translate-x-2 transition-transform duration-200 group">
                  <span className="font-bold text-2xl text-[#01A44F] mr-3 group-hover:scale-110 transition-transform duration-200">
                    {value[0]}
                  </span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Grid Section */}
        <div id="programs" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: 'Montessori',
              description: 'A nurturing environment for holistic development.',
              image: '/monte.jpg',
              icon: '📚'
            },
            {
              title: 'Creche',
              description: 'Homely and safe for infants.',
              image: '/caleb2.jpeg',
              icon: '👶'
            },
            {
              title: 'Pre-school',
              description: 'Learning made fun and engaging',
              image: '/girl.png',
              icon: '🎨'
            },
            {
              title: 'Clubs',
              description: 'Empowering children outside the classroom.',
              image: '/swim.png',
              icon: '🌟'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white hover:bg-[#F7F9F8] transition-all duration-300 transform hover:-translate-y-1 rounded-3xl p-8 shadow-lg border border-[#01A44F]/10 group">
              <h2 className="text-3xl font-bold mb-3 flex items-center text-[#01A44F]">
                <span className="mr-3 group-hover:rotate-12 transition-transform duration-300">{item.icon}</span>
                {item.title}
              </h2>
              <p className="text-lg mb-6 text-[#2C5738]">{item.description}</p>
              <div className="aspect-video bg-[#F0F7F3] rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Body