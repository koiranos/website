module.exports = {
  siteMetadata: {
    title: `StyleQ`,
    description: `Bringing stylists to you quicker than you ever imagined`,
    author: `@josephrexme`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `styleq`,
        short_name: `styleq`,
        start_url: `/`,
        background_color: `#e62175`,
        theme_color: `#e62175`,
        display: `standalone`,
        icon: `src/assets/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        generateMatchPathRewrites: true,
        mergeLinkHeaders: true,
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154163112-1",
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
