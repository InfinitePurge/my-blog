import React from 'react'
import Reveal from '../Animations/Reveal'
import { FaEnvelope } from 'react-icons/fa'


const Contact = () => {
  return (
    <section id='contact' className='bg-transparent border-b-2  border-orange-300 w-[80%] mx-auto py-20 mb-4'>
      <div className='flex flex-col items-center gap-8 mx-auto  px-4 sm:px-6 lg:px-8'>
        <Reveal>
          <h1 className='text-white text-4xl font-bold'>
            Contact me
          </h1>
        </Reveal>
        <Reveal>
          <div className='flex justify-center text-center'>
            <p className='text-white text-xl my-4 max-w-[100%]'>
              Shoot me an email if you want to connect! You can also find me on
              <a
                href="https://www.linkedin.com/in/edvinas-babilas"
                target='_blank'
                rel='noopener noreferrer'
                className="font-medium text-[#ffbd2f] mx-1 underline hover:text-[#ffa500] transition-colors hover:no-underline"
              >
                Linkedin
              </a>
              and
              <a
                href="https://github.com/InfinitePurge"
                target='_blank'
                rel='noopener noreferrer'
                className="font-medium text-[#ffbd2f] mx-1 underline hover:text-[#ffa500] transition-colors hover:no-underline"
              >
                Github
              </a>
              if that's more your speed.
            </p>
          </div>
        </Reveal>
        <h2 className='text-white text-center text-xl my-4 flex'>
          <Reveal>
            <div className="flex items-row">
              <FaEnvelope className='mr-2 mt-1 ' />edvinasbabilas@gmail.com
            </div>
          </Reveal>
        </h2>
      </div>
    </section>
  )
}

export default Contact