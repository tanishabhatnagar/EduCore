import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { DefaultSidebar } from './Sidenavigation';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ShoppingCartIcon } from '@heroicons/react/24/solid'; // Import the shopping cart icon

const CoursePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/auth/allcourses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleBuyCourse = (course) => {
    navigate('/payment', { state: { course } });
  };

  return (
    <>
      <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <DefaultSidebar darkMode={darkMode} />
        <div className={`flex-1 p-4 overflow-auto lg:ml-[5rem] ml-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Courses</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div key={course._id} className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
                <img src={course.image || 'https://via.placeholder.com/150'} alt={course.title} className="h-32 w-full object-cover mb-4 rounded-lg" />
                <h2 className="text-xl font-bold">{course.title}</h2>
                <p className="text-sm mb-1">by {course.teacher || 'Unknown'}</p>
                <p className="text-sm mb-4">{course.description}</p>
                <p className="text-sm mb-4">Price: ${course.price}</p>
                <button
                  onClick={() => handleBuyCourse(course)}
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                >
                  <ShoppingCartIcon className="mr-2 h-5 w-5" />
                  Buy Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default CoursePage;
