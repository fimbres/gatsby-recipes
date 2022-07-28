import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`


const SEO = ({title, description}) => {
    const { site } = useStaticQuery(query);
    const metaDescription = description || site.siteMetaData?.description || "";
  return (
    <Helmet title={`CLS Recipes | ${title}`} meta={[{ name: 'description', content: metaDescription}]}></Helmet>
  )
}

export default SEO;