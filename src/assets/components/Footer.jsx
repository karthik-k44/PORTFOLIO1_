import "./Footer.css"
import React from 'react'
import { Link,NavLink } from "react-router-dom"
import { FaGithub, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footerContainer">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <div>
                      <p>Kozhipra House PO Ponnukara</p>
                      <p>Thrissur Kerala</p>
                    </div>
                </div>
                <div className="phone">
                  <h4>
                    <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                    8606643996
                  </h4>
                </div>
                <div className="email">
                  <h4>
                    <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                    karthikkarunakaran444@gmail.com
                  </h4>
                </div>
            </div>
            <div className="right">
                <h4></h4>
                <p></p>
                <div className="social">
                    <NavLink to="https://www.linkedin.com/in/karthik-k-7340342aa/"><FaLinkedin size={40} style={{color:"white", marginRight:"1rem"}} /></NavLink>
                    <NavLink to="https://www.instagram.com/__karthiee__/"><FaInstagram size={40} style={{color:"white", marginRight:"1rem"}}/></NavLink>
                    <NavLink to="https://github.com/karthik-k44"><FaGithub size={40} style={{color:"white", marginRight:"1rem"}}/></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer