import React, { useState, useEffect } from 'react';
import {
  ShoppingCartIcon,
  BookOpenIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { DefaultSidebar } from './Sidenavigation'; 
import studentImage from '../assets/Images/student.avif';
import { FaSun, FaMoon } from 'react-icons/fa';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

import Img1 from '../assets/Images/random course/pic1.avif';
import Img2 from '../assets/Images/random course/pic2.avif';
import Img3 from '../assets/Images/random course/pic3.avif';
import Img4 from '../assets/Images/random course/pic4.avif';
import Img5 from '../assets/Images/random course/pic5.avif';
import Img6 from '../assets/Images/random course/pic6.avif';
import Img7 from '../assets/Images/random course/pic7.avif';


const StudentPage = ({ studentName = 'Student Name' }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const navigate = useNavigate();

  const imageOptions = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://educore.onrender.com/auth/allcourses');
        console.log('Fetched courses:', response.data);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();

    const fetchMyCourses = async () => {
      try {
        const response = await axios.get('https://educore.onrender.com/auth/mycourses');
        setMyCourses(response.data);
      } catch (error) {
        console.error('Error fetching my courses:', error);
      }
    };

    fetchMyCourses();
  }, []);

  const handleBuyCourse = (course) => {
    navigate('/payment', { state: { course } });
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <DefaultSidebar darkMode={darkMode} />
      <div className={`flex-1 p-4 overflow-auto lg:ml-[5rem] ml-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={studentImage}
              alt="User"
              className="h-24 w-24 rounded-full mr-4"
            />
            <h1 className="text-2xl font-bold">{studentName}</h1>
          </div>
          <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-800 text-white px-4 py-2 rounded transform md:translate-x-0 -translate-x-10"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(course => (
            <div key={course._id} className={`p-4 rounded shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
              <img 
                src={course.image || imageOptions[Math.floor(Math.random() * imageOptions.length)]} 
                alt={course.title} 
                className="h-32 w-full object-cover mb-4 rounded" 
                onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/150'; }} 
              />
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="mb-4">{course.description}</p>
              <p className="mb-4">Price: ₹{course.price}</p>
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
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">My Courses ({myCourses.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myCourses.map(course => (
              <div key={course._id} className={`p-4 rounded shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
                <img 
                  src={course.image || imageOptions[Math.floor(Math.random() * imageOptions.length)]} 
                  alt={course.title} 
                  className="h-32 w-full object-cover mb-4 rounded" 
                  onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/150'; }} 
                />
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="mb-4">{course.description}</p>
                <p className="mb-4">Price: ₹{course.price}</p>
                <div className="flex items-center">
                  <BookOpenIcon className="mr-2 h-5 w-5" />
                  <span>Enrolled</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default StudentPage;
