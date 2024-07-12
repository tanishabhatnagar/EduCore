import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupImage from '../assets/Images/signup.png'; 
import {Toaster,toast} from "react-hot-toast";
import { registerRoute } from '../utils/APIRoutes';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role: '', // Ensure role is part of state
  });

  const navigate = useNavigate();

  const handleValidation = () => {
    const { email, name, password, role } = values;
    if (!email || !name || !password || !role) {
      toast.error('All fields are required');
      return false;
    }
    
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { email, name, password, role } = values;
      try {
        const { data } = await axios.post(registerRoute, {
          name,
          email,
          password,
          role,
        });
        if (data.status === false) {
          toast.error(data.message);
        } else if (data.status === true) {
          localStorage.setItem('My User', JSON.stringify(data.user));
          navigate('/');
        }
      } catch (error) {
        console.log(values)
        toast.error('Error registering user');
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-8 flex flex-col space-y-6">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold">Sign Up</h2>
              <p className="mt-2 text-center text-sm text-gray-400">
                Or{' '}
                <Link to="/login" className="font-medium text-blue-500 hover:text-blue-400">
                  Login to your account
                </Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-gray-700"
                    placeholder="Name"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                   
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-gray-700"
                    placeholder="Email address"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-gray-700"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      id="student"
                      name="role"
                      type="radio"
                      value='student'
                      checked={values.role === 'student'}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="student" className="ml-2 block text-sm text-gray-400">
                      Student
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="instructor"
                      name="role"
                      type="radio"
                      value='instructor'
                      checked={values.role === 'instructor'}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="instructor" className="ml-2 block text-sm text-gray-400">
                      Instructor
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:block w-1/2">
            <img src={signupImage} alt="Signup" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <Toaster/>
    </>
  );
}

export default Signup;
