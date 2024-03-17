import React from 'react'
import image from "./startup.png"

function About() {
  return (
    <div className='container m-top d-lg-flex text-center ' >
      <div>
        <img width="400px" src={image} alt="" />
      </div>
      <div className='p-3'>
        <h2 className='fw-bold text-center '>React development is carried out by passionate developers</h2>
        <p className='text-center mt-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque, consequatur optio harum natus assumenda obcaecati soluta debitis vero facilis ducimus. Magnam, suscipit. Tempore ab rerum odit reiciendis excepturi debitis!</p>
      </div>
    </div>
  )
}

export default About