import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../components/Layout";
import "../assets/css/main.css";

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <StaticImage src="../assets/img/banner.jpg" alt="utils" placeholder="tracedSVG" layout="fullWidth" />
    </Layout>
    );
}
