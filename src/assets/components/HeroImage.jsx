import "./HeroImage.css"
import React from 'react'
import { Link } from "react-router-dom"
import introimage from "../Assets/31_How-to-Create-a-Programming-Course_.jpg"
const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={introimage} alt="introimage" />
        </div>
        <div className="content">
            <p>Hi I'm KARTHIK K</p>
            <h1>Iam A FULL STACK DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn-light">CONTACTS</Link>
            </div>
        </div>
    </div>
   
  )
}

export default HeroImage