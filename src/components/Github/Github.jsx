import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // let data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/pratikpandey09')
     .then(response => response.json())
     .then(data => {
      console.log(data)
        setData(data)
     })
    }, [])
    
  return (
<div className="container flex justify-center h-[500px] bg-[#0A151F]">
      <div className='text-center m-4 bg-gray-300 rounded-2xl  p-4 text-3xl flex flex-col items-center'>
    <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full'/>
     <h1 className='leading-20 font-bold '> Github ~ <br /><a href=""> {data.login}</a></h1>
    </div>
</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/pratikpandey09')
    return response.json()
}