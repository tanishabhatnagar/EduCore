import React, { useState } from 'react';
import {
  ShoppingCartIcon,
  BookOpenIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { DefaultSidebar } from './Sidenavigation'; 
import studentImage from '../assets/Images/student.avif'; // Import the student image

const StudentPage = ({ studentName = 'Student Name' }) => {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  // Static data for courses and purchased courses
  const courses = [
    {
      id: '1',
      title: 'Course 1',
      description: 'Description for Course 1',
      price: 4999,
      image: 'https://plus.unsplash.com/premium_photo-1664372145591-f7cc308ff5da?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image URL
    },
    {
      id: '2',
      title: 'Course 2',
      description: 'Description for Course 2',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1471107191679-f26174d2d41e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D', // Placeholder image URL
    },
    {
      id: '3',
      title: 'Course 3',
      description: 'Description for Course 3',
      price: 3999,
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZHl8ZW58MHx8MHx8fDA%3D', // Placeholder image URL
    },
  ];

  const [myCourses, setMyCourses] = useState([
    {
      id: '2',
      title: 'Course 2',
      description: 'Description for Course 2',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1581447109200-bf2769116351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8fHww', // Placeholder image URL
    },
  ]);

  const handleBuyCourse = (course) => {
    navigate('/payment', { state: { course } });
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <DefaultSidebar />
      <div className={`flex-1 p-4 overflow-auto lg:ml-[5rem] ml-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={studentImage} // Use the imported student image
              alt="User"
              className="h-24 w-24 rounded-full mr-4"
            />
            <h1 className="text-2xl font-bold">{studentName}</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Toggle Dark Mode
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(course => (
            <div key={course.id} className={`p-4 rounded shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
              <img src={course.image} alt={course.title} className="h-32 w-full object-cover mb-4 rounded" />
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
              <div key={course.id} className={`p-4 rounded shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
                <img src={course.image} alt={course.title} className="h-32 w-full object-cover mb-4 rounded" />
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
    </div>
  );
};

export default StudentPage;
