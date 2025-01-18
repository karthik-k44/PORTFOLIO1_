import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import Heroimage2 from '../assets/components/Heroimage2'
import AboutContent from '../assets/components/AboutContent'
const About = () => {
  return (
    <>
      <Navbar/>
      <Heroimage2 heading="ABOUT" text=""/>
      <AboutContent/>
      <Footer/>
    </>
  )
}

export default About