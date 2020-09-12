import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="About" />
      <h1>About</h1>
      <h2>鋭意製作中</h2>
    </Layout>
  )
}

export default About
