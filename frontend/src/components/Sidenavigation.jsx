import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';

export function DefaultSidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Card
        className={`fixed top-0 left-0 h-screen ${
          isHovered ? 'w-[20rem]' : 'w-[5rem]'
        } bg-gray-950 shadow-xl shadow-black/40 transition-all duration-300 ease-in-out border-none z-20 lg:block hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`mb-2 p-4 border-b border-gray-700 ${!isHovered && 'hidden'}`}>
          <Typography variant="h5" color="white" className="font-semibold">
            Sidebar
          </Typography>
        </div>
        <List className="flex flex-col space-y-2 text-white">
          <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/home" className="ml-2 text-white">
                Dashboard
              </Link>
            )}
          </ListItem>
          <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/student" className="ml-2 text-white">
                Student
              </Link>
            )}
          </ListItem>
          <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/instructor" className="ml-2 text-white">
                Instructor
              </Link>
            )}
          </ListItem>
          <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            {isHovered && <Typography className="ml-2 text-white">Settings</Typography>}
          </ListItem>
          <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            {isHovered && (
              <Link to="/signup" className="ml-2 text-white">
                Logout
              </Link>
            )}
          </ListItem>
        </List>
      </Card>

      {/* Horizontal navigation for mobile screens */}
      <Card className="fixed bottom-0 left-0 right-0 h-[5rem] bg-gray-900 shadow-xl shadow-black/40 border-none z-20 lg:hidden block">
        <List className="flex flex-row justify-around text-white">
          <ListItem className="flex flex-col items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            <Link to="/home" className="mt-1 text-white">
              Dashboard
            </Link>
          </ListItem>
          <ListItem className="flex flex-col items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            <Link to="/student" className="mt-1 text-white">
              Student
            </Link>
          </ListItem>
          <ListItem className="flex flex-col items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            <Link to="/instructor" className="mt-1 text-white">
              Instructor
            </Link>
          </ListItem>
          <ListItem className="flex flex-col items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            <Typography className="mt-1 text-white">Settings</Typography>
          </ListItem>
          <ListItem className="flex flex-col items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-6 w-6 text-gray-200" />
            </ListItemPrefix>
            <Link to="/signup" className="mt-1 text-white">
              LogOut
            </Link>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
