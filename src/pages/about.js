import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
        <main className='page'>
          <section className='about-page'>
            <article>
              <h2>About our recipes!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Link to='/contact' className='btn'>Contact</Link>
            </article>
            <StaticImage src="../assets/img/banner.jpg" alt='Ingredients' className='about-img' placeholder='blurred'/>
          </section>
        </main>
    </Layout>
  )
}

export default About;