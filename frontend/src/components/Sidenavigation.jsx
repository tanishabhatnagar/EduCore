import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';

export function DefaultSidebar({ darkMode }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const userRole = localStorage.getItem('UserRole');
    if (userRole === 'student') {
      navigate('/student');
    } else if (userRole === 'instructor') {
      navigate('/instructor');
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear all items in localStorage
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div>
      <Card
        className={`fixed top-0 left-0 h-screen ${
          isHovered ? 'w-[20rem]' : 'w-[5rem]'
        } ${darkMode ? 'bg-gray-950' : 'bg-gray-100'} shadow-xl transition-all duration-300 ease-in-out border-none z-20 lg:block hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`mb-2 p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${!isHovered && 'hidden'}`}>
          <Typography variant="h5" className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>
            Sidebar
          </Typography>
        </div>
        <List className="flex flex-col space-y-2">
          <ListItem className={`flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <PresentationChartBarIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/" className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>
                Dashboard
              </Link>
            )}
          </ListItem>
          <ListItem
            className={`flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}
            onClick={handleProfileClick}
          >
            <ListItemPrefix>
              <UserCircleIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            {isHovered && (
              <span className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>Profile</span>
            )}
          </ListItem>
          <ListItem className={`flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <Cog6ToothIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/course" className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>
                Courses
              </Link>
            )}
          </ListItem>
          <ListItem className={`flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <ArrowLeftOnRectangleIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            {isHovered && (
              <button onClick={handleLogout} className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>
                Logout
              </button>
            )}
          </ListItem>
        </List>
      </Card>

      <div className={`fixed bottom-0 left-0 w-full ${darkMode ? 'bg-gray-950' : 'bg-gray-100'} shadow-xl border-t z-20 lg:hidden block`}>
        <List className="flex flex-row justify-around p-2">
          <ListItem className="flex flex-col items-center">
            <ListItemPrefix>
              <PresentationChartBarIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <Link to="/" className={`${darkMode ? 'text-white' : 'text-black'} text-xs`}>
              Dashboard
            </Link>
          </ListItem>
          <ListItem className="flex flex-col items-center" onClick={handleProfileClick}>
            <ListItemPrefix>
              <UserCircleIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <span className={`${darkMode ? 'text-white' : 'text-black'} text-xs`}>Profile</span>
          </ListItem>
          <ListItem className="flex flex-col items-center">
            <ListItemPrefix>
              <Cog6ToothIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <Link to="/course" className={`${darkMode ? 'text-white' : 'text-black'} text-xs`}>
              Courses
            </Link>
          </ListItem>
          <ListItem className="flex flex-col items-center">
            <ListItemPrefix>
              <ArrowLeftOnRectangleIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <button onClick={handleLogout} className={`${darkMode ? 'text-white' : 'text-black'} text-xs`}>
              Logout
            </button>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
