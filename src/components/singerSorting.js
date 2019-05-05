import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SingerSorting = () => {
  const data = useStaticQuery(MUSIC_SINGER_QUERY)
  const { edges } = data.allMarkdownRemark

  const Singers = []

  edges.map(edge => {
    if (edge.node.frontmatter.singer !== null) {
      if (!Singers.includes(edge.node.frontmatter.singer)) {
        Singers.push(edge.node.frontmatter.singer)
      }
    }
  })

  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]
  return (
    <div>
      {alphabets.map(alphabet => (
        <>
          <div>{alphabet}</div>
          <div>
            {Singers.map(singer =>
              singer[0].toUpperCase() === alphabet ? <div>{singer}</div> : null
            )}
          </div>
        </>
      ))}
    </div>
  )
}

export default SingerSorting

const MUSIC_SINGER_QUERY = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            singer
          }
        }
      }
    }
  }
`
