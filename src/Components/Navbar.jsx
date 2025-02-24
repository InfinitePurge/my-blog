import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <nav className="bg-black border-b-2 border-orange-300 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <Link className="flex flex-shrink-0 items-center mr-4" to="#home">
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Portfolio</span
              >
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="#about"
                  className="bg-zinc-900 hover:bg-[#ffbd2f] border-orange-300 hover:text-black text-white rounded-md px-3 py-2"
                  >About</Link
                >
                <Link
                  to="#projects"
                  className="bg-zinc-900 hover:bg-[#ffbd2f] border-orange-300 hover:text-black text-white rounded-md px-3 py-2"
                  >Projects</Link
                >
                <Link
                  to="#experience"
                  className="bg-zinc-900 hover:bg-[#ffbd2f] border-orange-300 hover:text-black text-white rounded-md px-3 py-2"
                  >Experience</Link
                >
                <Link
                  to="#contact"
                  className="bg-zinc-900 hover:bg-[#ffbd2f] border-orange-300 hover:text-black text-white rounded-md px-3 py-2"
                  >Contact</Link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}


export default Navbar