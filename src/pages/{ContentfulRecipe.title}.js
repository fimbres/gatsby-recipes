import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';
import Layout from '../components/Layout';

export const query = graphql`
    query getSingleRecipe($title: String) {
        contentfulRecipe(title: { eq: $title }) {
            id
            title
            servings
            prepTime
            featured
            cookTime
            description {
                description
            }
            content {
                instructions
                ingredients
                tags
                tools
            }
            image {
                gatsbyImage(placeholder: BLURRED, layout: CONSTRAINED, height: 400)
            }
        }
    }
`

const RecipeTemplate = ({ data }) => {
    const { title, image, content, cookTime, prepTime, servings, description: { description } } = data.contentfulRecipe;
    const pathToImage = getImage(image);
    const { tags, instructions, ingredients, tools } = content;
    return (
        <Layout>
            <main className='page'>
                <div className='recipe-page'>
                    <section className='recipe-hero'>
                        <GatsbyImage image={pathToImage} alt={title} className="about-img" />
                        <article className='recipe-info'>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div className='recipe-icons'>
                                <article>
                                    <BsClock/>
                                    <h5>Prep Time</h5>
                                    <p>{prepTime} hrs.</p>
                                </article>
                                <article>
                                    <BsClockHistory/>
                                    <h5>cook Time</h5>
                                    <p>{cookTime} hrs.</p>
                                </article>
                                <article>
                                    <BsPeople/>
                                    <h5>Servings</h5>
                                    <p>{servings}</p>
                                </article>
                            </div>
                            <p className='recipe-tags'>
                                Tags: {tags.map((tag, key) => {
                                    return(
                                        <Link to={`/${tag}`} key={key}>
                                            {tag}
                                        </Link>
                                    )
                                })}
                            </p>
                        </article>
                    </section>
                    <section className='recipe-content'>
                        <article>
                            <h4>Instructions</h4>
                            {instructions.map((step, index) => {
                                return (
                                    <div key={index} className="single-instruction">
                                        <header>
                                            <p>Step {index + 1}</p>
                                            <div></div>
                                        </header>
                                        <p>{step}</p>
                                    </div>
                                );
                            })}
                        </article>
                        <article className='second-column'>
                            <div>
                                <h4>Ingredients</h4>
                                {ingredients.map((item, index) => {
                                    return (
                                        <p key={index} className="single-ingredient">
                                            {item}
                                        </p>
                                    );
                                })}
                            </div>
                            <div>
                                <h4>Tools</h4>
                                {tools.map((item, index) => {
                                    return (
                                        <p key={index} className="single-tool">
                                            {item}
                                        </p>
                                    );
                                })}
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export default RecipeTemplate;