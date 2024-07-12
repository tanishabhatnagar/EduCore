import React, { useState } from 'react';
import { PlusIcon, BookOpenIcon, XMarkIcon, TrashIcon } from '@heroicons/react/24/solid';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons for light/dark mode toggle
import { DefaultSidebar } from './Sidenavigation'; 
import teacherImage from '../assets/Images/teacher.png'; // Import the teacher image

const TeacherPage = ({ teacherName = 'Teacher Name' }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', image: '' });
  const [courses, setCourses] = useState([
    {
      id: '1',
      title: 'Course 1',
      description: 'Description for Course 1',
      image: 'https://images.unsplash.com/photo-1471107191679-f26174d2d41e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D', // Placeholder image URL
    },
    {
      id: '2',
      title: 'Course 2',
      description: 'Description for Course 2',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZHl8ZW58MHx8MHx8fDA%3D', // Placeholder image URL
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.description && newCourse.image) {
      setCourses([
        ...courses,
        { id: `${courses.length + 1}`, ...newCourse }
      ]);
      setNewCourse({ title: '', description: '', image: '' });
      setIsModalOpen(false);
    }
  };

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <DefaultSidebar darkMode={darkMode} />
      <div className={`flex-1 p-4 overflow-auto lg:ml-[5rem] ml-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={teacherImage} // Use the imported teacher image
              alt="User"
              className="h-24 w-24 rounded-full mr-4"
            />
            <h1 className="text-2xl font-bold">{teacherName}</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Courses</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            <PlusIcon className="mr-2 h-5 w-5" />
            Add Course
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(course => (
            <div key={course.id} className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
              <img src={course.image} alt={course.title} className="h-32 w-full object-cover mb-4 rounded-lg" />
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{course.title}</h2>
                <button
                  onClick={() => handleDeleteCourse(course.id)}
                  className="text-red-500"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
              <p className="mb-4">{course.description}</p>
              <div className="flex items-center">
                <BookOpenIcon className="mr-2 h-5 w-5" />
                <span>Added</span>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`p-6 rounded-lg shadow-lg w-full max-w-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Add New Course</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                className={`p-2 rounded mb-4 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
              />
              <input
                type="text"
                placeholder="Course Description"
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                className={`p-2 rounded mb-4 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newCourse.image}
                onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })}
                className={`p-2 rounded mb-4 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
              />
              <button
                onClick={handleAddCourse}
                className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center w-full"
              >
                <PlusIcon className="mr-2 h-5 w-5" />
                Add Course
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherPage;
