import "./WorkCard.css"
import React from 'react'
import pro1 from "../Assets/Screenshot 2025-01-17 200120.png"
import { NavLink } from "react-router-dom"
const WorkCard = (props) => {
  return (
    <>
                <div className="project-card">
                        <img src={props.imgsrc} alt="image" />
                        <h2 className="project-title">{props.title}</h2>
                        <div className="pro-details">
                            <p>{props.text}</p>
                        </div>
                        <div className="pro-btns">
                            <NavLink to="url.com" className="btn"> View </NavLink>
                            <NavLink to={props.source} className="btn"> Source </NavLink>
                        </div>
                </div>
    </>
  )
}

export default WorkCard