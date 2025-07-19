import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    function handleLoginbtn(){
        navigate("login");
    }
    function handleSubmitbtn (){
        navigate("signup");
    }
  return (
    <div className='w-full h-[5rem] justify-between bg-gray-800 flex p-5 items-center '>
     <span><h3 className='text-blue-600 font-semibold text-2xl hover:cursor-default '>DevConnector</h3></span>
     <span className='flex gap-5'><button onClick={handleLoginbtn} className='text-blue-500 hover:cursor-pointer font-semibold '>Login</button>
     <button onClick={handleSubmitbtn} className='text-white hover:cursor-pointer '>Sign Up</button></span> 
    </div>
  )
}

export default Header
