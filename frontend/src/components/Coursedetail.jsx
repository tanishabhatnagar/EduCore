import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import { DefaultSidebar } from './Sidenavigation';

const CourseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {};

  const [darkMode, setDarkMode] = useState(true);

  if (!course) {
    return <div className="flex justify-center items-center h-screen">Course not found.</div>;
  }

  return (
    <>
      <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <DefaultSidebar darkMode={darkMode} />
        <div className={`flex-1 p-4 overflow-auto lg:ml-[5rem] ml-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="relative w-full h-1/4 mb-4">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/150'; }} 
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold">{course.title}</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <p className="text-xl mb-4">by {course.teacher || 'Unknown'}</p>
          <div className="text-lg mb-4">{course.description}</div>
          <div className="text-lg mb-4">
            {course.information ? course.information : 'No additional information available.'}
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to Courses
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default CourseDetail;
