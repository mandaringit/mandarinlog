import React from "react"
import Disqus from "disqus-react"

const disqusShortname = "mandarinlog"

export const Comment = ({ siteUrl, slug, id, title, category }) => {
  const disqusConfig = {
    url: `${siteUrl}/${category}/${slug}`,
    identifier: id,
    title,
  }
  return (
    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
  )
}

export const CommentCount = ({ siteUrl, slug, id, title, category }) => {
  const disqusConfig = {
    url: `${siteUrl}/${category}/${slug}`,
    identifier: id,
    title,
  }
  return (
    <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
      Commnets
    </Disqus.CommentCount>
  )
}
