import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import Heroimage2 from '../assets/components/Heroimage2'
import Form from '../assets/components/Form'

const Contact = () => {
  return (
    <>
        <Navbar/>
        <Heroimage2 heading="CONTACT" text="Let's Connect"/>
        <Form/>
        <Footer/>
    </>
  )
}

export default Contact