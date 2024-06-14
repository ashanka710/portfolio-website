import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-center text-lg mb-12">My Introduction</p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
            <img
              src="https://via.placeholder.com/300"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg mb-4">
              Hello, I'm <span className="font-bold">Ashanka Dongare</span>, a passionate web developer with a flair for turning ideas into functional, user-friendly websites.
            </p>
            <div className="flex justify-center md:justify-start mb-4">
              <div className="mr-8">
                <p className="text-3xl font-bold">03+</p>
                <p>years experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold">05+</p>
                <p>certifications</p>
              </div>
            </div>
            <a
              href="#"
              className="bg-lime-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-lime-600 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;