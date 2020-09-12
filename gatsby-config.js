module.exports = {
  siteMetadata: {
    siteUrl: `https://3s-laboo.com`,
    title: `3S Laboo Blog`,
    blogTitle: `3S Laboo`,
    author: {
      name: `Kei Saito`,
      summaryMain: `埼玉在住のフリーランスSEです。\n技術ブログや作品をここで紹介していきます。\nよろしくお願いします。`,
      summary: `埼玉在住のフリーランスSEです。技術ブログや作品をここで紹介していきます。よろしくお願いします。`,
    },
    description: `java,sql,javascript,react,vue等の技術資料を公開しています。`,
    social: {
      twitter: `3Laboo`,
      linkedin: `3s-laboo`,
      github: `3sLaboo`,
      instagram: `3s_laboo`,
      qiita: `3S_Laboo`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/work`,
        name: `work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `3S Laboo Blog`,
        short_name: `3SLabooBlog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/content/assets/icon-maskable.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                let htmlStr = edge.node.html.substr(0,100);
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": htmlStr }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: {frontmatter: {kind: {regex: "/blog/"}}}, 
                  sort: {fields: [frontmatter___date], order: DESC},
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        slug 
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "3S-Laboo's RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://3s-laboo.com`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#444`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://3s-laboo.com',
        sitemap: 'https://3s-laboo.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-theme-material-ui`,
    `gatsby-awesome-pagination`,
    `gatsby-remark-embed-youtube`,
    `gatsby-remark-responsive-iframe`,
    `gatsby-plugin-twitter`,
  ],
}
