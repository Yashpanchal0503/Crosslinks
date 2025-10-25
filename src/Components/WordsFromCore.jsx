import React from 'react'
import { testimonials } from './testimonial.js'
import { AnimatedTestimonials } from './Testimonial.jsx'

const WordsFromCore = () => {
  return (
    <div  className=" border-b-2 border-lime-400 bg-black text-white py-12 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Header */}
      <div className="relative mb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent inline-block">
          WORDS FROM CORE
        </h1>
        <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-40 h-[3px] bg-gradient-to-r from-lime-300 to-green-500 rounded-full"></span>
      </div>

      <AnimatedTestimonials testimonials={testimonials} autoplay='YES'/>
    </div>
  )
}

export default WordsFromCore