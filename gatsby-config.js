module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wooact-project`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `standalone`,
        icon: `src/images/logo-sm.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index`],
      },
    },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of WordPress site
        api: "statefortyeight.com",
        // true if using https. false otherwise.
        https: true,
        api_keys: {
          consumer_key: `ck_5a54e7f02f4208a7a6095d7a1d508537e79df548`,
          consumer_secret: `cs_15190fac470436592143d55be0509d0a00ad508c`,
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products", "products/categories", "products/attributes"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`muli`],
        display: "swap",
      },
    },
  ],
}
