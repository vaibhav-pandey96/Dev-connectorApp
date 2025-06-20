import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Login Failed');
    }
  };

  return (
    <div className='flex w-full h-lvh bg-slate-900 justify-center items-center pt-10'>
    <form onSubmit={handleSubmit} className='flex flex-col justify-center pt-15 gap-5 items-center w-[40%] bg-neutral-500  h-[60%]'>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className='w-[28rem] font-semibold text-lg pl-4 h-10 bg-gray-300 rounded'
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className='w-[28rem] font-semibold text-lg pl-4 h-10 bg-gray-300 rounded'
      />
      <button type="submit"
      className='w-[16rem] font-semibold text-lg pl-4 h-10 bg-green-400 rounded'>
      Login</button>
      <section className='mt-10 bg-gray-300 w-[20rem] h-[2rem] rounded'>
        <span className='flex gap-4 justify-center pt-1'> <p>Don't have an Account? </p> <Link className='text-blue-600' to={{pathname:'/signup'}}> SignUp</Link> </span>
      </section>
    </form>
    </div>
  );
}

export default Login;
