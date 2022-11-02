/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  plugins: [
     'gatsby-plugin-postcss',
      // Your other plugins...
      `gatsby-plugin-mdx`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `${__dirname}/content/posts`,
        },
      },
      // Your other plugins...
  ],
  siteMetadata : {
    title: `Lorem ipsum dolor`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.`,
    copyright:`© 2022 Comany Name`,
  },
}