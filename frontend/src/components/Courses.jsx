import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { DefaultSidebar } from './Sidenavigation';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const CoursePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    teacher: '', // Initially empty
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('My User')); // Retrieve user from localStorage
      const response = await axios.post('http://localhost:4000/auth/addcourse', {
        ...formData,
        teacher: user.name, // Set teacher name from localStorage
      });

      console.log('New course added:', response.data); // Check the data returned from the server

      setCourses([...courses, response.data]);
      setFormData({
        title: '',
        description: '',
        price: '',
        teacher: user ? user.name : '', // Reset form with teacher's name
      });

      toast.success('Course added successfully');
    } catch (error) {
      console.error('Error adding course:', error);
      toast.error('Error adding course');
    }
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
          <form onSubmit={handleFormSubmit} className="mb-4">
            <div className="mb-4">
              <label className="block mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-2 rounded"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Course
            </button>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div key={course._id} className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
                <img src={course.image || 'https://via.placeholder.com/150'} alt={course.title} className="h-32 w-full object-cover mb-4 rounded-lg" />
                <h2 className="text-xl font-bold">{course.title}</h2>
                <p className="text-sm mb-1">by {course.teacher || 'Unknown'}</p>
                <p className="text-sm mb-4">{course.description}</p>
                <p className="text-sm mb-4">Price: ${course.price}</p>
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
