import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='container m-top bg-dark-subtle text-center fs-2 py-4 fw-bold '>User : {userid}</div>
  )
}

export default User