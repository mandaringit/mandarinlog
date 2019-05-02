const opinionQuery = `{
  opinions: allMarkdownRemark(
    filter: {
      frontmatter: {
        category: {
          eq: "OPINION"
        }
      }
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          date(fromNow:true,locale:"ko")
          category
        }
        fields{
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const reviewQuery = `{
  reviews: allMarkdownRemark(
    filter: { 
      frontmatter: {
        category: {
          eq:"REVIEW"
        }
      } 
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          date(fromNow:true,locale:"ko")
          category
          star
          platform
          tags
        }
        fields{
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const codeQuery = `{
  codes: allMarkdownRemark(
    filter: { 
      frontmatter: {
        category: {
          eq:"CODE"
        }
      } 
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          date(fromNow:true,locale:"ko")
          category
         stacks
        }
        fields{
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const musicQuery = `{
  musics: allMarkdownRemark(
    filter: { 
      frontmatter: {category: {eq:"MUSIC"}} 
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          date(fromNow:true,locale:"ko")
          category
          album
          albumCategory
          singer
        }
        fields{
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const allQuery = `{
  all: allMarkdownRemark (
    sort: { order: DESC, fields: [frontmatter___date] }
  ){
    edges {
      node {
        objectID: id
        frontmatter {
          title
          date(fromNow:true,locale:"ko")
          category
          platform
          stacks
          tags
          album
          albumCategory
          singer
        }
        fields{
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:100`] }

const queries = [
  {
    query: allQuery,
    transformer: ({ data }) => flatten(data.all.edges),
    indexName: `all`,
    settings,
  },
  {
    query: opinionQuery,
    transformer: ({ data }) => flatten(data.opinions.edges),
    indexName: `opinions`,
    settings,
  },
  {
    query: reviewQuery,
    transformer: ({ data }) => flatten(data.reviews.edges),
    indexName: `reviews`,
    settings,
  },
  {
    query: codeQuery,
    transformer: ({ data }) => flatten(data.codes.edges),
    indexName: `codes`,
    settings,
  },
  {
    query: musicQuery,
    transformer: ({ data }) => flatten(data.musics.edges),
    indexName: `musics`,
    settings,
  },
]

module.exports = queries
