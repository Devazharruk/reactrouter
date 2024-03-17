import React from 'react'
import image from "./Remote1.png"

function Home() {
  return (
    <div className='container d-flex justify-content-lg-between flex-lg-row flex-column  gap-5 text-center  m-top '>

       <div>
        <img style={{width:"400px"}} src={image} alt="" />
       </div>
       <div className='pe-5 '>
           <h1 className='fw-bold'>Download Now</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           <button className='btn bg-orange text-white fw-bold'>Download Now</button>
       </div>
    </div>
  )
}

export default Home