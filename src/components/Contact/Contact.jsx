import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot , faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"

function Contact() {
  return (
    <div className='container m-top d-lg-flex text-center gap-lg-5 '>
      <div className='bg-dark-subtle p-4 rounded-2 w-lg-50 '>
        <h1 className="fw-bold">Get in touch:</h1>
        <p className='fs-4'>Fill in the form to start a conversation</p>
        <div className='d-flex align-items-center '>
          <span className='fs-3 me-3 text-dark-emphasis mb-2'><FontAwesomeIcon icon={faLocationDot} /></span>
          <p>Acme Inc, Street, <br /> State, Postal Code</p>
        </div>
        <div className='d-flex align-items-center '>
          <span className='fs-3 me-3 text-dark-emphasis mb-2 '><FontAwesomeIcon icon={faPhone} /></span>
          <p>+44 1234567890</p>
        </div>
        <div className='d-flex align-items-center '>
          <span className='fs-3 me-3 text-dark-emphasis mb-2'><FontAwesomeIcon icon={faEnvelope} /></span>
          <p>info@acme.org</p>
        </div>
      </div>

      <div className='w-lg-50'>
        <form action="" className='w-100 d-flex flex-column align-items-center mt-5  gap-4 '>
          <input type="text"  className='form-control w-100' placeholder="Full Name"/>
          <input type="email"  className='form-control ' placeholder="Email"/>
          <input type="tel"  className='form-control ' placeholder="Number"/>
          <button type='submit ' className='btn   bg-orange text-light w-25 '>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact