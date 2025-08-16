
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const navigate = useNavigate();

  const { name, email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users', formData);
      localStorage.setItem('token', res.data.token);
      alert('Signup Successfull');
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert('Signup Failed');
    }
  };
  return (
    <div className='flex bg-gray-700 w-full h-screen justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col xl:w-[45%] justify-center items-center lg:w-[60%] w-[80%] h-[65%] bg-zinc-500 gap-5 '>
        <input type="text" className='w-[80%]  lg:w-[60%] font-semibold lg:text-lg pl-4 h-10 bg-gray-300 rounded' name='name' required placeholder='Enter Your Name' onChange={handleChange} />
        <input name='email' className='w-[80%] lg:w-[60%] font-semibold lg:text-lg pl-4 h-10 bg-gray-300 rounded' required placeholder='Enter Your Email' onChange={handleChange} />
        <input type="password" className='w-[80%] lg:w-[60%] font-semibold lg:text-lg pl-4 h-10 bg-gray-300 rounded' required name="password" placeholder='Enter Your Password' onChange={handleChange} />
        <button type="submit" className='w-[35%] md:w-[17%] font-semibold lg:text-lg h-10 bg-green-400 rounded'>Submit</button>
        <section className='md:w-[60%] lg:w-[45%] w-[80%] xl:mt-10 rounded md:h-[3rem] lg:h-[2rem] items-center bg-gray-200 flex md:gap-5 gap-3 justify-center '>
          <p className='text-xs lg:text-sm md:text-lg'>Already have an Account? </p>
          <Link className='text-blue-500 lg:text-sm text-xs font-semibold md:text-lg p-1' to={{
            pathname: '/login'
          }}> Login Here </Link>
        </section>
      </form>
    </div>
  )
}

export default Signup
