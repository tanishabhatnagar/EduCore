import React, { useState, useEffect } from 'react';
import { PlusIcon, BookOpenIcon, XMarkIcon, TrashIcon } from '@heroicons/react/24/solid';
import { FaSun, FaMoon } from 'react-icons/fa';
import { DefaultSidebar } from './Sidenavigation';
import teacherImage from '../assets/Images/teacher.png';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TeacherPage = ({ teacherName = 'Teacher Name' }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', image: '', price: '' });
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    // Check if user information is available in local storage
    const user = JSON.parse(localStorage.getItem('MyUser'));
    if (!user || !user.name) {
      toast.error('User information is not available. Redirecting to login.');
      navigate('/login'); // Redirect to login if user information is not available
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('MyUser'));
      if (!user || !user.name) {
        throw new Error('User information is not available');
      }
      const response = await axios.post('http://localhost:4000/auth/addcourse', {
        ...newCourse,
        teacher: user.name,
      });

      setCourses([...courses, response.data]);
      setNewCourse({ title: '', description: '', image: '', price: '' });
      setIsModalOpen(false);
      toast.success('Course added successfully');
    } catch (error) {
      console.error('Error adding course:', error);
      toast.error('Error adding course');
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(`http://localhost:4000/auth/deletecourse/${courseId}`);
      setCourses(courses.filter(course => course._id !== courseId));
      toast.success('Course deleted successfully');
    } catch (error) {
      console.error('Error deleting course:', error);
      toast.error('Error deleting course');
    }
  };

  // Array of image URLs for placeholder images
  const imageOptions = [
    'https://tse2.mm.bing.net/th?id=OIP.MU5piosKJNo7b4haTcq90gHaFj&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.EPraBsb2WCzsLy3OvIqVXwHaE9&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.bhmRCm-pRan1kxvTEM-DkQHaEK&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.KXGNKFlkiV2tMRgx6CeerQHaE8&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.gtVaQrpobi85JFEMHv2zAQHaEK&pid=Api&P=0&h=180'
  ];

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.description && newCourse.price) {
      const courseImage = newCourse.image.trim() === '' 
        ? imageOptions[Math.floor(Math.random() * imageOptions.length)] 
        : newCourse.image;

      setCourses([
        ...courses,
        { _id: `${courses.length + 1}`, ...newCourse, image: courseImage }
      ]);
      setNewCourse({ title: '', description: '', image: '', price: '' });
      setIsModalOpen(false);
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <DefaultSidebar darkMode={darkMode} />
      <div className={`flex-1 p-4 overflow-auto lg:ml-[5rem] ml-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={teacherImage}
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
            <div key={course._id} className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
              <img src={course.image} alt={course.title} className="h-32 w-full object-cover mb-4 rounded-lg" />
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{course.title}</h2>
                <button
                  onClick={() => handleDeleteCourse(course._id)}
                  className="text-red-500"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
              <p className="mb-4">{course.description}</p>
              <div className="flex items-center">
                <BookOpenIcon className="mr-2 h-5 w-5" />
                <span>Price: ${course.price}</span>
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
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Course Title"
                  value={newCourse.title}
                  onChange={handleInputChange}
                  className={`p-2 rounded mb-4 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
                  required
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Course Description"
                  value={newCourse.description}
                  onChange={handleInputChange}
                  className={`p-2 rounded mb-4 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Course Price"
                  value={newCourse.price}
                  onChange={handleInputChange}
                  className={`p-2 rounded mb-4 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
                  required
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL (optional)"
                  value={newCourse.image}
                  onChange={handleInputChange}
                  className={`p-2 rounded mb-4 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center w-full"
                >
                  <PlusIcon className="mr-2 h-5 w-5" />
                  Add Course
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default TeacherPage;
