import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import setupTags from '../utils/setupTags';

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

const Tags = () => {
  const { allContentfulRecipe: { nodes: tags } } = useStaticQuery(query);
  const newTags = setupTags(tags);

  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return <Link key={index} to={`/${text}`} className="tag">
              <h5>{text}</h5>
              <p>{value} {`recipe${value > 1 ? "s" : ""}`}</p>
            </Link>
          })}
        </section>
      </main>
    </Layout>
  )
}

export default Tags;