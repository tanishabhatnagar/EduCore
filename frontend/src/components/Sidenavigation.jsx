import React, { useState } from 'react';
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
    <Card
      className={`fixed top-0 left-0 h-screen ${
        isHovered ? 'w-[20rem]' : 'w-[5rem]'
      } bg-gray-900 shadow-xl shadow-black/40 transition-all duration-300 ease-in-out border-none z-20`}
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
          {isHovered && <Typography className="ml-2 text-white">Dashboard</Typography>}
        </ListItem>
        <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-6 w-6 text-gray-200" />
          </ListItemPrefix>
          {isHovered && <Typography className="ml-2 text-white">Student</Typography>}
        </ListItem>
        <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
          <ListItemPrefix>
            <InboxIcon className="h-6 w-6 text-gray-200" />
          </ListItemPrefix>
          {isHovered && (
            <>
              <Typography className="ml-2 flex-1 text-white">Inbox</Typography>
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="gray-400"
                  className="rounded-full bg-gray-700 text-gray-300"
                />
              </ListItemSuffix>
            </>
          )}
        </ListItem>
        <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
          <ListItemPrefix>
            <UserCircleIcon className="h-6 w-6 text-gray-200" />
          </ListItemPrefix>
          {isHovered && <Typography className="ml-2 text-white">Profile</Typography>}
        </ListItem>
        <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-6 w-6 text-gray-200" />
          </ListItemPrefix>
          {isHovered && <Typography className="ml-2 text-white">Settings</Typography>}
        </ListItem>
        <ListItem className="flex items-center hover:bg-gray-700 p-2 transition duration-300 ease-in-out">
          <ListItemPrefix>
            <PowerIcon className="h-6 w-6 text-gray-200" />
          </ListItemPrefix>
          {isHovered && <Typography className="ml-2 text-white">Log Out</Typography>}
        </ListItem>
      </List>
    </Card>
  );
}
