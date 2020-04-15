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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     /*
    //      * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
    //      * Example : 'demo.wp-api.org' or 'www.example-site.com'
    //      */
    //     baseUrl: "wooact.com",
    //     // The protocol. This can be http or https.
    //     protocol: "https",
    //     // The rest api route prefix that your WordPress site is using.
    //     // Sometimes this is modified by WordPress plugins.
    //     // If not set, it uses the default of "wp-json"
    //     restApiRoutePrefix: "wp-json",
    //     // Indicates whether the site is hosted on wordpress.com.
    //     // If false, then the assumption is made that the site is self hosted.
    //     // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
    //     // If your site is hosted on wordpress.org, then set this to false.
    //     hostingWPCOM: false,
    //     // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
    //     // This feature is untested for sites hosted on wordpress.com.
    //     // Defaults to true.
    //     useACF: true,
    //   },
    // },
    // {
    //   resolve: "@pasdo501/gatsby-source-woocommerce",
    //   options: {
    //     // Base URL of WordPress site
    //     api: "wooact.com",
    //     // true if using https. false otherwise.
    //     https: true,
    //     api_keys: {
    //       consumer_key: `ck_63a8d41cd440a911bbf616d8eb23fcadabc6544b`,
    //       consumer_secret: `cs_7a399f47ef202eaf9f58ffaf76bca48bcea8dc55`,
    //     },
    //     // Array of strings with fields you'd like to create nodes for...
    //     fields: ["products", "products/categories", "products/attributes"],
    //   },
    // },
  ],
}
