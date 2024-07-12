import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import the icons for dark mode toggle
import { DefaultSidebar } from './Sidenavigation'; // Import the DefaultSidebar component
import courseImage from '../assets/Images/login.png'; // Import a course image

const CoursePage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const courses = [
    {
      id: '1',
      title: 'Database Management Systems',
      author: 'Dr. John Doe',
      description: 'Learn about database design, SQL, and data management techniques.',
      image: 'https://images.unsplash.com/photo-1471107191679-f26174d2d41e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D', // Placeholder image URL
    },
    {
      id: '2',
      title: 'Operating Systems',
      author: 'Prof. Jane Smith',
      description: 'Explore the concepts of operating systems, process management, memory management, and more.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZHl8ZW58MHx8MHx8fDA%3D', // Placeholder image URL
    },
    {
      id: '3',
      title: 'Computer Networks',
      author: 'Dr. Alex Johnson',
      description: 'Understand the fundamentals of networking, protocols, and network design.',
      image: 'https://images.unsplash.com/photo-1581447109200-bf2769116351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8fHww', // Placeholder image URL
    },
  ];

  return (
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
          {courses.map(course => (
            <div key={course.id} className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
              <img src={course.image} alt={course.title} className="h-32 w-full object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p className="text-sm mb-1">by {course.author}</p>
              <p className="text-sm mb-4">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
