import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';

export function DefaultSidebar({ darkMode }) {
  const [isHovered, setIsHovered] = useState(false);

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
          <ListItem className={`flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <ShoppingBagIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/student" className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>
                Student
              </Link>
            )}
          </ListItem>
          <ListItem className={`flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <ShoppingBagIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/instructor" className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>
                Instructor
              </Link>
            )}
          </ListItem>
          <ListItem className={`flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <ShoppingBagIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/course" className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>
                Courses
              </Link>
            )}
          </ListItem>
          <ListItem className={`flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <ShoppingBagIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/signup" className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>
                Logout
              </Link>
            )}
          </ListItem>
        </List>
      </Card>

      {/* Horizontal navigation for mobile screens */}
      <Card className={`fixed bottom-0 left-0 right-0 h-[5rem] ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} shadow-xl border-none z-20 lg:hidden block`}>
        <List className="flex flex-row justify-around">
          <ListItem className={`flex flex-col items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <PresentationChartBarIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <Link to="/" className={`mt-1 ${darkMode ? 'text-white' : 'text-black'}`}>
              Dashboard
            </Link>
          </ListItem>
          <ListItem className={`flex flex-col items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <ShoppingBagIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <Link to="/student" className={`mt-1 ${darkMode ? 'text-white' : 'text-black'}`}>
              Student
            </Link>
          </ListItem>
          <ListItem className={`flex flex-col items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <ShoppingBagIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <Link to="/instructor" className={`mt-1 ${darkMode ? 'text-white' : 'text-black'}`}>
              Instructor
            </Link>
          </ListItem>
          <ListItem className={`flex flex-col items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <Cog6ToothIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <Typography className={`mt-1 ${darkMode ? 'text-white' : 'text-black'}`}>Courses</Typography>
          </ListItem>
          <ListItem className={`flex flex-col items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} p-2 transition duration-300 ease-in-out`}>
            <ListItemPrefix>
              <ShoppingBagIcon className={`h-6 w-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
            </ListItemPrefix>
            <Link to="/signup" className={`mt-1 ${darkMode ? 'text-white' : 'text-black'}`}>
              LogOut
            </Link>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
