import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <>
        <div className="Form">
            <form action="">
                <label htmlFor="">Your Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Subject</label>
                <input type="text" />
                <label htmlFor="">Message</label>
                <textarea rows="6" placeholder="" id=""/>

                <button  className="btn">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Form