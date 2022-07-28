import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TagsList from './TagsList';
import Recipeslist from './Recipeslist';

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title}) {
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
          gatsbyImage(placeholder: BLURRED, layout: CONSTRAINED, height: 500)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const { allContentfulRecipe: { nodes: recipes } } = useStaticQuery(query);
    return (
        <div>
            <h4>All Recipes</h4>
            <TagsList recipes={recipes}/>
            <Recipeslist recipes={recipes}/>
        </div>
    )
}

export default AllRecipes;