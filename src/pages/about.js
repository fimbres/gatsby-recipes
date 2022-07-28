import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Recipeslist from '../components/Recipeslist';
import SEO from '../components/SEO';

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        servings
        prepTime
        featured
        cookTime
        content {
          instructions
          ingredients
          tags
        }
        image {
          gatsbyImage(placeholder: BLURRED, layout: CONSTRAINED, height: 400)
        }
      }
    }
  }
`;

const About = () => {
  const { allContentfulRecipe: { nodes: recipes } } = useStaticQuery(query);

  return (
    <Layout>
        <SEO title="About Us"/>
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
          <section className='featured-recipes'>
            <h5>Look at this awesome recipes!</h5>
            <Recipeslist recipes={recipes} />
          </section>
        </main>
    </Layout>
  )
}

export default About;