import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* 네이버 사이트인증 */}
        <meta
          name="naver-site-verification"
          content="5675da56d439f0abb0316180f93208f73dcb418c"
        />
        {/* 빙 사이트인증 */}
        <meta name="msvalidate.01" content="2297B21A8C05A3FC8454BCEFB3CB6BC6" />
        {props.headComponents}
        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(window.adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-8604026265944417",enable_page_level_ads: true});',
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
