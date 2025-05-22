import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData()
  // const [data,setData] = useState()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://api.github.com/users/mic-720")
  //     const data = await response.json()
  //     setData(data)
  //   }
  //   fetchData()
  // }, []);

  if (!data) return <p>Loading...</p>;
  return (
    <div>
      Github Follwers : {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mic-720")
  return response.json()
}