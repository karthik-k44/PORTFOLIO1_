import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import Heroimage2 from '../assets/components/Heroimage2'
import Work from '../assets/components/Work'

const Project = () => {
  return (
      <>
          <Navbar/>
          <Heroimage2 heading="PROJECTS" text="My recent Projects"/>
          <Work/>
          <Footer/>
      </>
  )
}

export default Project