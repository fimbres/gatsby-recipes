import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FiAlignJustify } from 'react-icons/fi';

import logo from '../assets/img/logo-simple.png';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt="logo" style={{width: 70}}/>
          </Link>
          <button className='nav-btn' onClick={() => setShow(!show)}>
            <FiAlignJustify/>
          </button>
        </div>
        <div className={`nav-links ${show ? "show-links" : ""}`}>
            <Link to='/recipes' className='nav-link' activeClassName='active-link'>Recipes</Link>
            <Link to='/tags' className='nav-link' activeClassName='active-link'>Tags</Link>
            <Link to='/about' className='nav-link' activeClassName='active-link'>About</Link>
            <div className='contact-link'>
              <Link to='/contact' className='btn'>Contact</Link>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;