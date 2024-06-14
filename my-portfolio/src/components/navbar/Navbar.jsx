
// // import Navbar from './navbar/Navbar.css';
// import './Navbar.css';
// import React, { useState, useEffect } from 'react';
// // import './styles.css'; // Make sure to import the styles

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Apply the theme to the body
//     document.body.className = darkMode ? 'dark-mode' : 'light-mode';
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <nav className="nav container">
//       <a href="#" className="nav__logo">Ashanka Dagadu Dongare</a>
//       <div className="nav__menu" id="nav-menu">
//         <ul className="nav__list grid">
//           <li className="nav__item">
//             <a href="#home" className="nav__link">
//               <i className="uil uil-estate nav__icon"></i>Home
//             </a>
//           </li>
//           <li className="nav__item">
//             <a href="#about" className="nav__link">
//               <i className="uil uil-user nav__icon"></i>About
//             </a>
//           </li>
//           <li className="nav__item">
//             <a href="#skills" className="nav__link">
//               <i className="uil uil-file-alt nav__icon"></i>Skills
//             </a>
//           </li>
//           <li className="nav__item">
//             <a href="#services" className="nav__link">
//               <i className="uil uil-briefcase-alt nav__icon"></i>Services
//             </a>
//           </li>
//           <li className="nav__item">
//             <a href="#portfolio" className="nav__link">
//               <i className="uil uil-scenery nav__icon"></i>Portfolio
//             </a>
//           </li>
//           <li className="nav__item">
//             <a href="#contact" className="nav__link">
//               <i className="uil uil-message nav__icon"></i>Contact
//             </a>
//           </li>
//         </ul>
//         <i className="uil uil-times nav__close" id="nav-close"></i>
//       </div>
//       <div className="nav__btns">
//         <i className="uil uil-moon change-theme" id="theme-button" onClick={toggleTheme}></i>
//         <div className="nav__toggle" id="nav-toggle">
//           <i className="uil uil-apps"></i>
//         </div>
//       </div>
//       <button
//         className="theme-switcher bg-gray-800 text-white px-4 py-2 rounded-md"
//         onClick={toggleTheme}
//       >
//         {darkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react'
import './Navbar.css'
import logo_light from '../../accets/th (1).jpeg';
import logo_dark from '../../accets/th.jpeg';
import toogle_light from '../../accets/th (7).jpeg';
import toogle_dark from '../../accets/th (8).jpeg';
import search_icon_light from '../../accets/th (6).jpeg';
import search_icon_dark from '../../accets/th (3).jpeg';
function Navbar({theme , setTheme}) {

  const toggle_mode=()=>{
    theme == 'light' ? setTheme('dark'): setTheme('light');
  }
  return (
    < div className='nav1'>
      <div className='navbar' >
      <img src={theme == 'light' ? logo_light : logo_dark } alt=''  height='30px'  width='30px' className='logo'/>
      
      <ul>
        <li>Home</li>
        <li>products</li>
        <li>Features</li>
        <li>About</li>
        <li>Home</li>
      </ul>
      <div className='search-box'>
        <input  type='text' placeholder='search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt='' height='10px'  width='20px'/>
      </div>

      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt=''  height='30px'  width='30px' className='toggle-icon'/>
    </div>
    </div>
  
  )
}

export default Navbar
