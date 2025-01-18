import "./AboutContent.css"

import React from 'react'
import { Link } from "react-router-dom"
import prop1 from "../Assets/react5.jpeg"
import prop2 from "../Assets/react7.jpeg"

const AboutContent = () => {
  return (
    <>
        <div className="about">
            <div className="left">
               <h1>Who Am I</h1> 
               <p>
               Hi, I'm Karthik. I completed my Bachelor of Computer Applications (BCA) at Don Bosco College, Mannuthy, in 2023. I am currently diving deep into the world of web development as I learn Full Stack Development, aiming to build creative and user-friendly web applications.
              I am passionate about coding, learning new technologies, and bringing ideas to life through functional and aesthetic designs. 
               </p>
               <Link to="/contact"> <button className="btn">Contact</button> </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    {/* <div className="img-stack top">
                        <img src={prop1} alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={prop2} alt="true" />
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutContent