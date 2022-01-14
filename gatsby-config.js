module.exports = {
  pathPrefix: "/Story-Grid-Films",
  siteMetadata: {
    title: `Edmonton Wedding Videographer`,
    description: `Wedding Videographer in Edmonton.`,
    author: `@storygridfilms`,
    siteUrl: `https://storygridfilms.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Lora, Lato"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJYU0lRYjdlWEJBeE81dldGM0hjX3ZAHcWUxSmtLSnI3NjNRRHYyQV9GQzJZAQVBVM3JoTDRPclY0eVVHN2ZAYVXdUMFRWNE02bjFiOHpiLXpPWUxXTGMwYkZA6VFdRblNlRHlpeWZAQUDlWanhCTzRuUQZDZD",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.storygridfilms.com",
        sitemap: "https://www.storygridfilms.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
