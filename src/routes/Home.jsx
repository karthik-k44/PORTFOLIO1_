import React from 'react'
import Navbar from '../assets/components/Navbar'
import HeroImage from '../assets/components/HeroImage'
import Footer from '../assets/components/Footer'
import Work from '../assets/components/Work'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home