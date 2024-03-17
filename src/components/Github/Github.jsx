import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()
  return (
    <div className='container m-top'>
      <div className='bg-dark-subtle p-4 rounded-1 text-center '>
        <h1 className='text-orange'>Github Followers: <span>{data.followers}</span></h1>
        <img width="300px" src={data?.avatar_url} alt="" />
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/Devazharruk')
  return response.json()
}