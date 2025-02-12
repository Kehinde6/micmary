"use client"
import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "We welcome children as young as 6 months all the way up to 6 years."
    },
    {
      question: "What are your operating hours?",
      answer: "We're open from sunrise to sundown - Quite literally! You can drop your child off as early as 7:00 AM and pick them up as late as 6:00 PM."
    },
    {
      question: "What extra-curricular activities do you offer?",
      answer: "From chess to charades, karate to kazoo lessons, we offer a wide range of clubs and extracurricular activities to keep your child engaged and entertained."
    },
    {
      question: "How can I enroll my child?",
      answer: "Just hit the 'Admissions' button and follow the steps. Easy Peasy Lemon Squeezy!"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#FAFFF9] to-[#F0F7F3] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif mb-12 text-center text-[#01A44F]">
          Frequently Asked Questions
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white hover:bg-[#F7F9F8] backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 rounded-2xl p-6 shadow-lg border border-[#01A44F]/10"
            >
              <button
                className="text-xl font-semibold w-full text-left focus:outline-none flex justify-between items-center group"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-[#01A44F] group-hover:text-[#018A42] transition-colors duration-200">
                  {faq.question}
                </span>
                <span 
                  className={`transition-transform duration-300 text-[#01A44F] ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 animate-fadeIn">
                  <p className="text-[#2C5738] leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#01A44F]/10">
                    <button 
                      className="text-sm text-[#01A44F] hover:text-[#018A42] transition-colors duration-200 flex items-center gap-2"
                      onClick={() => window.location.href='/contact'}
                    >
                      <span>Have more questions?</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
