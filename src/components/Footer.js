import React from 'react'

const Footer = () => {
  return (
    <footer className='page-footer'>
        <p>&copy; {new Date().getFullYear()} <span>Isaac Fimbres</span>. Built with</p><a href='https://www.gatsbyjs.com/'>&nbsp;Gatsby</a>
    </footer>
  )
}

export default Footer