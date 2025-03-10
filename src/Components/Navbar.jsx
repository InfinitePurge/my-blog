import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

const Navbar = (projects) => {
  return (
<nav className="bg-black border-b-2 border-orange-300 sticky top-0 z-50">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-auto min-h-20 items-center justify-between flex-col sm:flex-row py-2">
            <div className="flex w-full items-center justify-between flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-4">
                    <a className='text-white text-2xl transition-all duration-300 ease-in-out hover:text-[#ffbd2f] hover:scale-125 hover:-translate-y-1'
                        href="https://www.facebook.com/edvinas.babilas"
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaFacebook />
                    </a>
                    <a className='text-white text-2xl transition-all duration-300 ease-in-out hover:text-[#ffbd2f] hover:scale-125 hover:-translate-y-1'
                        href="https://www.linkedin.com/in/edvinas-babilas/"
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaLinkedin />
                    </a>
                    <a className='text-white text-2xl transition-all duration-300 ease-in-out hover:text-[#ffbd2f] hover:scale-125 hover:-translate-y-1'
                        href="https://github.com/InfinitePurge?tab=overview&from=2025-03-01&to=2025-03-09"
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub />
                    </a>
                </div>

                <div className="flex items-center">
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link
                            smooth
                            to="#about"
                            className="text-white hover:bg-[#ffbd2f] border-r-2 border-[#ffbd2f]  border-l-2 hover:text-black px-3 py-2 rounded-md text-sm transition-all duration-300"
                        >
                            Apie save
                        </Link>
                        <Link
                            smooth
                            to="#projects"
                            className="text-white hover:bg-[#ffbd2f] border-r-2 border-[#ffbd2f]  border-l-2 hover:text-black px-3 py-2 rounded-md text-sm transition-all duration-300"
                        >
                            Projektai
                        </Link>
                        <Link
                            smooth
                            to="#experience"
                            className="text-white hover:bg-[#ffbd2f] border-r-2 border-[#ffbd2f]  border-l-2 hover:text-black px-3 py-2 rounded-md text-sm transition-all duration-300"
                        >
                            Patirtis
                        </Link>
                        <Link
                            smooth
                            to="#contact"
                            className="text-white hover:bg-[#ffbd2f] border-r-2 border-[#ffbd2f]  border-l-2 hover:text-black px-3 py-2 rounded-md text-sm transition-all duration-300"
                        >
                            Susisiekite
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
  )
}


export default Navbar