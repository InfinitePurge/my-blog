import React, { useState } from 'react';
import ContactModal from './ContactModal';
import Reveal from '../Animations/Reveal'
import { FaEnvelope } from 'react-icons/fa'


const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section id='contact' className='bg-transparent border-b-2  border-orange-300 w-[80%] mx-auto py-20 mb-4'>
      <div className='flex flex-col items-center gap-8 mx-auto  px-4 sm:px-6 lg:px-8'>
        <Reveal>
          <h1 className='text-white text-4xl font-bold text-center'>
            Susisiekite su manimi
          </h1>
        </Reveal>
        <Reveal>
          <div className='flex justify-center text-center'>
            <p className='text-white text-xl my-4 max-w-[100%]'>
              Susisiekite su manimi per el. pašto adresą arba per socialinius tinklus
              <a
                href="https://www.linkedin.com/in/edvinas-babilas"
                target='_blank'
                rel='noopener noreferrer'
                className="font-medium text-[#ffbd2f] mx-1 underline hover:text-[#ffa500] transition-colors hover:no-underline"
              >
                Linkedin
              </a>
              arba
              <a
                href="https://github.com/InfinitePurge"
                target='_blank'
                rel='noopener noreferrer'
                className="font-medium text-[#ffbd2f] mx-1 underline hover:text-[#ffa500] transition-colors hover:no-underline"
              >
                Github
              </a>
              jei jums tinka tokia forma.
            </p>
          </div>
        </Reveal>
        <Reveal>
        <div>
        <a
                onClick={() => setIsContactModalOpen(true)}
                className="text-white border-2 mt-2 hover:bg-[#ffa500] hover:text-black font-bold border-orange-300 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
            >
                Susisiekimo forma
            </a>
            </div>
            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={() => setIsContactModalOpen(false)} />

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