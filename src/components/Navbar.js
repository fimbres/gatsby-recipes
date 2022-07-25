import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/company'>Company</Link>
            <Link to='/company/history'>History of the Company</Link>
        </nav>
    </div>
  )
}

export default Navbar