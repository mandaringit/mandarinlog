import React from "react"
import {
  PostLinkBox,
  InfoBox,
  Bagde,
  TitleContainer,
  PostGridItem,
  Title,
} from "./FeaturedSharedStyle"

const FeaturedContentCard = ({ edges }) => {
  return (
    <>
      {edges.map(edge => {
        const { slug } = edge.node.fields
        const { category, title } = edge.node.frontmatter
        const lowerCaseCategory = category.toLowerCase()
        const {
          src,
        } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
        return (
          <PostGridItem key={slug}>
            <PostLinkBox to={`/${lowerCaseCategory}/${slug}`} imageurl={src}>
              <InfoBox>
                <TitleContainer>
                  <Bagde>{category}</Bagde>
                  <Title>{title}</Title>
                </TitleContainer>
              </InfoBox>
            </PostLinkBox>
          </PostGridItem>
        )
      })}
    </>
  )
}

export default FeaturedContentCard
