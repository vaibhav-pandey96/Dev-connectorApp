import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate ();
    const handleSubmitbtn = () => {
        navigate("signup");
    }
  return (
    <div className='w-full h-auto p-5 bg-red-300 flex flex-col items-center justify-evenly'>
        <section className='text-center flex flex-col md:gap-5 gap-2'>
            <h2 className='text-lg font-bold md:text-5xl'>What is DevConnector?</h2>
            <p className='text-xs mb-3 md:mb-5 md:text-2xl'>DevConnector is a full stack developer community platform where coder from
                around the world can connect, share posts, build profiles, and grow their network.
                Whether you're a beginner or seasoned developer. DevConnector provides the tools and 
                community to help you succeed in your development journey.
            </p>
        </section>
        <section className='text-center md:mb-6 mb-3 flex flex-col md:gap-4 gap-2'> 
             <h2 className='text-xl font-bold md:text-5xl'>Features Section</h2>
             <p className='flex md:text-2xl items-center gap-4 text-xs'><FaCheck /> Build a developer profile</p>
             <p className='flex md:text-2xl items-center gap-4 text-xs'><FaCheck />Share posts and insights</p>
             <p className='flex md:text-2xl items-center gap-4 text-xs'><FaCheck />Grow your network</p>
             <p className='flex md:text-2xl items-center gap-4 text-xs'><FaCheck />Collaborate with peers</p>
        </section>
          
      <section className='flex flex-col items-center gap-3 md:gap-5'>
        <p className='font-medium text-sm md:text-3xl'>Sign Up now and start connecting with developers!</p>
        <button onClick={handleSubmitbtn} className='text-white text-sm md:w-[9rem] md:h-[4rem] md:text-3xl w-[6rem] p-0.5 rounded h-[2rem] bg-blue-800'>Sign Up</button>
      </section>
    </div>
  )
}

export default About
