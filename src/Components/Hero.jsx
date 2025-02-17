import React from 'react'
import Reveal from '../Animations/Reveal'

const Hero = () => {
  return (
    <>
    {/* bg-opacity-95 */}
    <section id='home' className="bg-transparent py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <Reveal>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Place Holder
            </h1>
          </Reveal>
          <Reveal>
            <p className="my-4 text-xl text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, 
              suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, 
              eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit 
            </p>
          </Reveal>
        </div>
      </div>
    </section>
    </>
  )
}


export default Hero