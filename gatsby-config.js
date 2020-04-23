module.exports = {
  siteMetadata: {
    title: `Lene's`,
    author: {
      name: `Leonardo Vizzotto`,
      summary: `I'm only studying stuff`,
    },
    description: `A blog to learn how to use Gatsby and React.js.`,
    siteUrl: `https://___FUTURE_URL___.com`,
    social: {
      twitter: `@_Vizzotto`,
      github: `LeonardoVizzotto`,
      stackOverflow: `9240961/leonardo-vizzotto`,
      linkedin: `leonardo-vizzotto`
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lene's`,
        short_name: `Lene's`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@styles": "src/styles",
          "@templates": "src/templates",
          "@utils": "src/utils",
          "@posts": "content/posts",
          "@assets": "src/assets",
          "@hooks": "src/hooks"
        },
        extensions: [
          "js",
        ],
      }
    }
  ],
}
