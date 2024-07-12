import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../assets/Images/login.png'; // Import your image

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here, then navigate to the homepage
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8 space-y-8 md:space-y-0 md:space-x-8 flex flex-col">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold">Login</h2>
            <p className="mt-2 text-center text-sm mb-8 text-gray-400">
              Or{' '}
              <Link to="/signup" className="font-medium text-blue-500 hover:text-blue-400">
                Sign up for a new account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-gray-700"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-gray-700"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    id="student"
                    name="role"
                    type="radio"
                    value="student"
                    checked={role === 'student'}
                    onChange={() => setRole('student')}
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
                    value="instructor"
                    checked={role === 'instructor'}
                    onChange={() => setRole('instructor')}
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
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-1/2">
          <img src={loginImage} alt="Login" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Login;
