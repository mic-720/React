import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("olive");

 return(
  <>
    <div className='w-full h-screen ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl text-white' style={{backgroundColor: "red"}}>
          <button className='px-2 py-1' onClick={() => setColor("red")}>red</button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl text-white' style={{backgroundColor: "blue"}}>
          <button className='px-2 py-1' onClick={() => setColor("blue")}>blue</button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl text-white' style={{backgroundColor: "green"}}>
          <button className='px-2 py-1' onClick={() => setColor("green")}>green</button>
        </div>
      </div>
    </div>
  </>
 )
}

export default App
