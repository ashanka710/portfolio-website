import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-yellow-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Profile"
            className="relative z-10 rounded-full w-32 h-32 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mt-4">I'm Ashanka</h1>
        <p className="text-xl mt-2">Web Developer</p>
        <div className="mt-6 space-x-4">
          <a
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
          >
            Download CV
          </a>
          <a
            href="#"
            className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;