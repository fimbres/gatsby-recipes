import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import "../assets/css/main.css";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is the home page"/>
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/img/banner.jpg" alt="ingredients" className="hero-img" placeholder="tracedSVG" layout="fullWidth"/>
          <div className="hero-container">
            <div className="hero-text">
              <h1>CLS Recipes</h1>
              <h4>No fluff, just recipes!</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
    );
}
