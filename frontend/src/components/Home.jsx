import React from 'react';
import { DefaultSidebar } from './Sidenavigation';

function Home() {
  return (
    <div className="flex">
      <DefaultSidebar />
      <div className="flex-1 bg-gray-900 text-white p-6 h-screen">
        {/* Your main content goes here */}
        
      </div>
    </div>
  );
}

export default Home;
