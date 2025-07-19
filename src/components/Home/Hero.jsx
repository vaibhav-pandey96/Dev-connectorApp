import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();
    
        function handleLoginbtn(){
            navigate("login");
        }
        function handleSubmitbtn (){
            navigate("signup");
        }
  return (
    <div className='relative'>
      <img className='w-full h-auto border-2 border-gray-600' src=".\hero.jpg" />
      <div className='absolute backdrop-blur-xs w-[50%] flex flex-col gap-1 md:gap-5 md:p-3 p-1 bottom-3 items-center justify-center left-1 h-[80%]'>
         <p className='lg:text-4xl md:text-3xl text-[15px] font-bold '>Connect with Developers</p>
         <p className='text-white text-center md:text-lg lg:text-lg text-[9px]'>A social network for developers to share, collaborate, and grow their careers. 
            Create Your profile and showcase your work, and connect with devs worldwide.
         </p>
           <span className='w-full flex flex-row justify-evenly mt-5'>
              <button onClick={handleSubmitbtn} className='w-[50%] hover:cursor-pointer lg:w-[30%] p-1 md:text-lg font-semibold lg:text-xl lg:font-bold lg:p-4 text-xs text-white rounded bg-blue-800'>Get Started</button>
              <button onClick={handleLoginbtn} className='w-[30%] hover:cursor-pointer lg:w-[20%] p-1 md:text-lg font-semibold lg:text-xl lg:font-bold lg:p-4 text-xs text-black rounded bg-white'>Login</button>
           </span>
      </div>
      
    </div>
  )
}

export default Hero
