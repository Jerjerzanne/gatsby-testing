module.exports = {
  pathPrefix: `/gatsby-testing`,
  siteMetadata: {
    title: 'Maple',
  },
  plugins: [

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-eslint',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/docs`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 10
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      },
    }
  ],

}
