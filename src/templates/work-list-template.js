import React from "react";

import {graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "../components/postList";
import Pagination from "../components/pagination";

const WorkListTemplate = props => {
  const posts = props.data.allMarkdownRemark.edges;
  return (
    <Layout location={props.location}>
      <SEO title="Works" />
      <PostList title="WORKS" postList={posts}/>
      <Pagination props={props} />
    </Layout>
  )
}

export default WorkListTemplate;

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {frontmatter: {kind: {regex: "/work/"}}}
      sort  : {fields: [frontmatter___date], order: DESC }
      skip  : $skip
      limit : $limit
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
            kind
          }
        }
      }
    }
  }
`;
