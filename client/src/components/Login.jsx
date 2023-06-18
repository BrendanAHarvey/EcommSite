import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import  AuthContext  from '../authentication/AuthContext';
// import loginImg from '../assets/blackGuyLoginImg.png';

const Login = () => {

  const api = axios.create({
    baseURL: 'http://localhost:5000/api'
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', { email, password });
      const { isAuthenticated } = response.data;

      if (isAuthenticated) {
        setIsAuthenticated(true);
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.log(err);
      setError('Server error');
    };
  };


  return (
      <div className='flex bg-black h-screen'>
        
        <div className="flex min-h-full flex-1 flex-col justify-center w-3/4 px-6 py-12 lg:px-8">
          
        <div className='flex justify-center'>
          <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>NINETY</h1>
          <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>3</h1>
        </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white text-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white text-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F2CD5C] sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white text-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-[#F2CD5C] text-600 hover:text-[#F49D1A] hover:text-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F49D1A] focus:ring-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#F2CD5C] bg-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#F49D1A] hover:bg-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F49D1A] focus-visible:outline-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="/registration" className="font-semibold leading-6 text-[#F2CD5C] text-600 hover:text-[#F49D1A] hover:text-500">
                Register here
              </a>
            </p>
          </div>
        </div>

        {/* <img className='w-1/4' src={loginImg} alt="loginImg" /> */}

      </div>
  )
}

export default Login