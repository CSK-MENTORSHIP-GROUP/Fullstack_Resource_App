import React from 'react';

interface NavbarProps {
 
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      {/* Logo with Image */}
      <div className="flex items-center space-x-2">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4E0BAQEXrqU1CyZH_A/company-logo_200_200/company-logo_200_200/0/1710864081477/computer_society_of_kirinyaga_logo?e=1748476800&v=beta&t=9eC7c9VDMGuxV52izKkD-9cKoROeUePl4dakhxf4Jn0" 
          alt="CSK Resource Hub Logo" 
          className="h-8 w-auto"
        />
        <div className="flex flex-col">
          <span className="font-bold text-xl">CSK</span>
          <span className="text-sm text-gray-300">Resource Hub</span>
        </div>
      </div>

      {/* Navigation Links (You can expand this as needed) */}
      <div className="flex items-center space-x-4">
        {/* <a href="#" className="hover:text-gray-300">Home</a> */}
        {/* <a href="#" className="hover:text-gray-300">Resources</a> */}
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white p-2 rounded-md focus:outline-none"
        />
        <button className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Sign In / Sign Up Buttons */}
     
    </nav>
  );
};

export default Navbar;