module.exports = {
  siteMetadata: {
    siteUrl: "https://www.honai.me",
    title: "Honai Ueoka",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    "gatsby-transformer-remark",
  ],
}
