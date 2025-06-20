
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState({name:'', email:'', password:''});

    const {name, email, password} = formData;

    const handleChange = e =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users', formData);
            localStorage.setItem('token', res.data.token);
            alert('Signup Successfull')
        } catch (error) {
            console.log(error);
            alert('Signup Failed');
        }
    };
  return (
    <div className='flex bg-gray-700 w-full h-dvh justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-[40%] h-[65%] bg-zinc-500 gap-5 '>
        <input type="text" className='w-[28rem] font-semibold text-lg pl-4 h-10 bg-gray-300 rounded' name='name' required placeholder='Enter Your Name' onChange={handleChange} />
        <input name='email' className='w-[28rem] font-semibold text-lg pl-4 h-10 bg-gray-300 rounded' required placeholder='Enter Your Email' onChange={handleChange} />
        <input type="password" className='w-[28rem] font-semibold text-lg pl-4 h-10 bg-gray-300 rounded' required name="password" placeholder='Enter Your Password' onChange={handleChange} />
        <button type="submit" className='w-[16rem] font-semibold text-lg h-10 bg-green-400 rounded'>Submit</button>
        <section className='w-[20rem] mt-10 rounded h-[2rem] items-center bg-gray-200 flex gap-5 justify-center'>
            <p className=''>Already have an Account? </p>
            <Link className='text-blue-500' to={{
                pathname:'/login'
            }}> Login Here </Link>
                    </section>
      </form>
    </div>
  )
}

export default Signup
