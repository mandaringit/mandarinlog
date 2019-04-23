---
title: "맥북이 사고싶다"
date: "2019-04-18"
category: "OPINION"
featuredImage: "./macbook.jpg"
keywords: ["맥북"]
---

나는 맥북이 사고싶다..

## 맥루머 사이트

This example uses the default pruning method.

gatsby-transformer-remark allows you to get an excerpt from a markdown post. By default, it will prune the first 140 characters, but you can optionally specify a pruneLength in the graphql query.

```javascript
{
  allMarkdownRemark {
    edges {
      node {
        excerpt(pruneLength: 280)
      }
    }
  }
}
```