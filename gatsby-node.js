const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);
const {paginate} = require(`gatsby-awesome-pagination`);

exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions;
  const result = await graphql(
    `
      {
        blog:allMarkdownRemark(
          filter: {frontmatter: {kind: {regex: "/blog/"}}}
          sort:   {fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        work:allMarkdownRemark(
          filter: {frontmatter: {kind: {regex: "/work/"}}}
          sort:   {fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    throw result.errors;
  }
  const blogs = result.data.blog.edges;
  const works = result.data.work.edges;
  paginate({
    createPage,
    items: blogs,
    itemsPerPage: 10,
    pathPrefix: '/blog',
    component: path.resolve('./src/templates/blog-list-template.js'),
  });
  paginate({
    createPage,
    items: works,
    itemsPerPage: 10,
    pathPrefix: '/works',
    component: path.resolve('./src/templates/work-list-template.js'),
  });

  blogs.forEach((post, index) => {
    const previous = index === blogs.length - 1 ? null : blogs[index + 1].node;
    const next = index === 0 ? null : blogs[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
  works.forEach((post, index) => {
    const previous = index === works.length - 1 ? null : works[index + 1].node;
    const next = index === 0 ? null : works[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
