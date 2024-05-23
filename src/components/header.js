import { useStaticQuery, graphql } from "gatsby"
import React from "react"

export const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `)

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  )
}
