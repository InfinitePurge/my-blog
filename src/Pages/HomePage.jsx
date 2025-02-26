import React from 'react'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'
import AboutHome from '../Components/AboutHome'
import Footer from '../Components/Footer'
import Experience from '../Components/Experience'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
    <div className=' bg-gradient-to-b from-black via-orange-500 to-black min-h-screen'>
    <Hero />
    <AboutHome />
    <Cards />
    <Experience />
    <Contact />
    <Footer />
    </div>
  )



}

export default HomePage