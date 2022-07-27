import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../components/Layout";
import "../assets/css/main.css";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/img/banner.jpg" alt="ingredients" className="hero-img" placeholder="tracedSVG" layout="fullWidth"/>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipe</h1>
              <h4>No fluff, just recipes!</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
    );
}
