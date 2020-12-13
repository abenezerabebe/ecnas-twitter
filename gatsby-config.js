module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "yfYHUJKuTTwwVgIr2Lvu0wtt",
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft"
      }
    }
  ],
  siteMetadata: {
    title: "ECNAS Tweets"
  }
};
