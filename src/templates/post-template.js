import React from "react";
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {Link, graphql} from "gatsby";

import {rhythm, scale} from "../utils/typography";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, pageContext, location }) => {

  const useStyles = makeStyles((theme) => ({
    date: {
      ...scale(1 / 5),
      marginBottom: rhythm(1),
    },
    hr: {
      marginBottom: rhythm(1),
    },
    navi: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
  }));

  const styleClass = useStyles();

  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  return (
    <Layout location={location} title={siteTitle}>
      <Box>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1>
              {post.frontmatter.title}
            </h1>
            <p className={styleClass.date}>
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr className={styleClass.hr}/>
        </article>
        <nav>
          <ul className={styleClass.navi}>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  {'<<'}{previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}{'>>'}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Box>
    </Layout>
  )
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY年MM月DD日")
        description
      }
    }
  }
`;