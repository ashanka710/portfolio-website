


import React,{useState} from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

import Navbar from './components/navbar/Navbar'
function App() {
  const [theme,setTheme] = useState('light');
  return (
 <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
     <div>
        <div className='  '>
      <div className="home_section " id="home">
      <div className="container3 mx-auto py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-4 "> 
        <div className="space-y-6">
          <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/ashanka-dongare-3b914225a/" target="_blank" className="home__social-icon">
                        <FaLinkedin />
                    </a>
    
              <a href="https://twitter.com" target="_blank" className="home__social-icon">
                        <FaTwitter />
                    </a>
            <a href="https://github.com/ashanka710/Trainee-plutonium" target="_blank" className="home__social-icon">
                        <FaGithub />
                    </a>
        
          </div>
          <div className="space-y-4">
            <a
              href="#contact"
              className=" bg-blue-500 text-white px-4 py-2 rounded-full inline-block hover:bg-blue-600 transition duration-300 "id='hello'
            >
              Hello!
            </a>
            <h1 className="text-4xl font-bold ">I'am Ashanka 👋</h1>
            <h3 className="text-2xl text-gray-600">Web Developer</h3>
            <p className="text-gray-700"></p>
            <div className="space-x-4">
              <a
                download=""
                href="https://drive.google.com/file/d/10I-dVI7f9ohH5_r9IAW-IE06ZglplO5e/view?usp=sharing"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 shadow-md"
              >
                Download CV<i className="uil uil-download-alt ml-2 shadow-md"></i>
              </a>
              <a
                href="#contact"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 shadow-md"
              >
                Get in touch<i className="uil uil-message ml-2 shadow-md"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          
          <blob className="w-52 fill-current text-primary" />
      <div className='parent'><div className="magicpattern"/></div>
     </div>
      </div>
      <div className="flex justify-center mt-8">
        <a href="#about" className="flex items-center text-primary hover:text-primary-alt">
          <i className="uil uil-mouse-alt text-2xl"></i>
          <span className="ml-2 text-lg">Scroll Down</span>
          <i className="uil uil-arrow-down text-xl ml-2"></i>
        
        </a>
      </div>
      
     <div className='line'>
     
     <hr />
     </div>
     
     <div className="  mx-auto   ">
      <p className="text-lg">
        Hello, my name is <span className="font-bold">Ashanka Dongare</span>. I graduated in 2022 from{' '}
        <span className="font-bold">MS Bidve Engineering College, Latur</span>. After graduation, I joined{' '}
        <span className="font-bold">FunctionUp</span> to enhance my skills and subsequently became a{' '}
        <span className="font-bold">Full Stack Developer</span> specializing in <span className="font-bold">Python</span>. I then joined{' '}
        <span className="font-bold">Idevify Solution</span> in Nagpur, where I contributed to the development of{' '}
        <span className="font-bold">Growbeen.com</span> and the official website of <span className="font-bold">Idevify</span>. I am{' '}
        <span className="font-bold">passionate</span> about web development and continuously strive to improve my{' '}
        <span className="font-bold">skills and knowledge</span> in this field.
      </p>
    </div>
    <div class='parent1'><div class="magicpattern1"/>
    </div>
    </div>
      </div>
      </div>
      </div>
  
   
    
   
   
  )
}

export default App
