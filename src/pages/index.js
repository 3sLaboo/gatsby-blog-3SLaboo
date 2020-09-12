import React from "react";
import {useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "../components/postList";

const BlogIndex = ({location}) => {
  const indexData = useStaticQuery(graphql`
    query IndexDataQuery {
      blog: allMarkdownRemark(filter: {frontmatter: {kind: {regex: "/blog/"}}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 6) {
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
      work: allMarkdownRemark(filter: {frontmatter: {kind: {regex: "/work/"}}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 6) {
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
  `);

  const blogs = indexData.blog.edges;
  const works = indexData.work.edges;
  return (
    <Layout location={location}>
      <SEO title="Top" />
      <PostList title="BLOG" listUrl="/blog" postList={blogs}/>
      <PostList title="WORKS" listUrl="/works" postList={works}/>
    </Layout>
  )
}

export default BlogIndex
