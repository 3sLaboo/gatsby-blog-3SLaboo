import React from "react";

import {graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "../components/postList";
import Pagination from "../components/pagination";

const BlogListTemplate = props => {
  const posts = props.data.allMarkdownRemark.edges;
  return (
    <Layout location={props.location}>
      <SEO title="Blog" />
      <PostList title="BLOG" postList={posts}/>
      <Pagination props={props} />
    </Layout>
  )
}

export default BlogListTemplate;

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {frontmatter: {kind: {regex: "/blog/"}}}
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
