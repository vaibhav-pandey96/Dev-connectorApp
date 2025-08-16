import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log('Token:', res.data.token);
      localStorage.setItem('token', res.data.token);
      alert('Login Succesfull')
      navigate("/feed");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Login Failed');
    }
  };

  return (
    <div className='flex w-full h-screen bg-slate-900 justify-center items-center pt-10'>
    <form onSubmit={handleSubmit} className='flex lg:gap-10 flex-col justify-center pt-15 gap-5 items-center md:w-[65%] xl:w-[50%] lg:w-[60%] w-[80%] bg-neutral-500  h-[90%]'>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className='w-[85%]   lg:w-[75%] md:h-15 md:text-2xl font-semibold lg:text-3xl text-sm  pl-4 h-10 bg-gray-300 rounded'
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className='w-[85%]  lg:w-[75%]  md:h-15 md:text-2xl font-semibold lg:text-3xl text-sm pl-4 h-10 bg-gray-300 rounded'
      />
      <button type="submit"
      className='w-[30%] lg:w-[25%] md:h-12 md:text-3xl font-semibold lg:text-4xl lg:h-15 text-sm h-7 bg-green-400 rounded'>
      Login</button>
      <section className=' bg-gray-300 flex w-[65%] xl:w-[53%] lg:w-[60%] md:h-[3rem] justify-center lg:h-[4rem] h-[2rem] rounded'>
        <span className='flex items-center md:text-xl text-xs gap-2 xl:gap-5 lg:font-medium lg:text-2xl'> <p>Don't have an Account? </p> <Link className='text-blue-600' to={{pathname:'/signup'}}> SignUp</Link> </span>
      </section>
    </form>
    </div>
  );
}

export default Login;
