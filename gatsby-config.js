/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: { title: `MANDARINLOG` },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-generate-typings`,
      options: {
        dest: `./src/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
};
