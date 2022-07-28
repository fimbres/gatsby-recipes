import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Recipeslist from '../components/Recipeslist';

export const query = graphql`
  query ($tag: String) {
    allContentfulRecipe(filter: {content: {tags: {eq: $tag}}}) {
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
`

const TagTemplate = ({ data, pageContext }) => {
    const recipes = data.allContentfulRecipe.nodes;

    return (
        <Layout>
            <main className='page'>
                <h2>{pageContext.tag}</h2>
                <div className='tag-recipes'>
                    <Recipeslist recipes={recipes}/>
                </div>
            </main>
        </Layout>
    )
}

export default TagTemplate;