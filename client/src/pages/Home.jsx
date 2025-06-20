import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-lvh bg-slate-700 p-5 flex flex-col'>
      <header className='w-full h-[20%] flex justify-around ' >
        <img src="./HTML.png" alt="HTML" />
        <img src="./CSS.svg" alt="CSS"  />
      </header>
      <div className='w-full h-[20%] mt-10 p-5 items-center flex flex-col'>
        <p className='text-xl font-semibold  text-white'>Welcome to </p> <br/>
        <p className='text-2xl font-bold text-gray-300'>The Marvel</p>
        <p className='text-5xl font-bold text-gray-300'> DEVELOPERS </p>
      </div>
    </div>
  )
}

export default Home
