import React from 'react'
import Reveal from '../Animations/Reveal'
import { FaDownload, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      {/* bg-opacity-95 */}
      <section id='home' className="bg-transparent py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <Reveal>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                WORK IN PROGRESS!!!
              </h1>
            </Reveal>
            <div className="flex flex-col md:flex-row items-center">

              <div className="float-left mr-8">
                <Reveal>
                  <img
                    src="/face.png"
                    alt="Project Image"
                    className="shadow-lg rounded-full w-72 h-72 md:w-96 md:h-70 mx-auto"
                  />
                  <h1 className='text-center'>
                    <span className='text-[#ffbd2f]'> <FaCalendarAlt className='inline-block mr-2'/> Gimimo data: </span>
                    <span className='text-white'>2002-04-18</span>
                  </h1>
                  <h1 className='text-center'>
                    <span className='text-[#ffbd2f]'> <FaMapMarkerAlt className='inline-block mr-2'/> Miestas: </span>
                    <span className='text-white'>Kaunas</span>
                  </h1>
                  <div className='flex justify-center '>
                    <a
                      className="text-white border-2 mt-2 hover:bg-black border-orange-300 rounded-md px-3 py-2 flex items-center gap-2"
                      href="src/assets/edvinas-babilas .pdf"
                      download
                    >
                      Atsisiųsti CV <FaDownload className="inline-block" />
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal>
                <p className="text-xl text-white mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis,
                  suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu,
                  eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Hero