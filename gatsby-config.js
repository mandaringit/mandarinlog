module.exports = {
  siteMetadata: {
    title: "만다린로그",
    author: "MANDARIN",
    description:
      "다양한 오피니언, 리뷰, 해외음악을 이야기하는 개발자의 블로그입니다.",
    siteUrl: "https://mandarinlog.me",
    image: "./logo.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        //
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`, // transformer-reamark 이전에 와야한다.
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`, // 발췌 분리자. 여기까지 발췌한다.
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130262925-2",
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://mandarinlog.me",
        sitemap: "https://mandarinlog.me/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
