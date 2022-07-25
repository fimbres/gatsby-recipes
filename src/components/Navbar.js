import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/recipes'>Recipes</Link>
            <Link to='/tags'>Tags</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar