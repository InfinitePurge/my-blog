import React from 'react'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'
import AboutHome from '../Components/AboutHome'
import Footer from '../Components/Footer'
import Experience from '../Components/Experience'

const HomePage = () => {
  return (
    <div className=' bg-gradient-to-b from-black via-orange-500 to-black min-h-screen'>
    <Hero />
    <AboutHome />
    <Cards />
    <Experience />
    <Footer />
    </div>
  )



}

export default HomePage