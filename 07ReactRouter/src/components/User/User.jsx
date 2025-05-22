import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div className='bg-gray-700 text-white text-center p-4 text-2xl font-bold'>User : {id}</div>
  )
}

export default User