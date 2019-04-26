import React from "react"
import { Link } from "gatsby"

const PageLink = data => {
  const items = []
  for (let i = 1; i <= data.numPages; i++) {
    if (i === 1) {
      items.push(
        <Link key={i} to={`/${data.route}`}>
          {i}
        </Link>
      )
    } else {
      items.push(
        <Link key={i} to={`/${data.route}/page/${i}`}>
          {i}
        </Link>
      )
    }
  }
  return <div>{items.map(item => item)}</div>
}

export default PageLink
