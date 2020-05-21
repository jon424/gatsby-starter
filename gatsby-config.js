module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Blog',
    author: {
      name: 'Kyle Mathews',
      summary: 'who lives and works in San Francisco building useful things.',
    },
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
    social: {
      twitter: 'kylemathews',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],

        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'High Contrast'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },

          {resolve: 'gatsby-remark-prismjs' },
          {resolve: 'gatsby-remark-copy-linked-files' },
          {resolve: 'gatsby-remark-smartypants' },
       
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Blog',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    { resolve: 'gatsby-transformer-remark' }
   
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
