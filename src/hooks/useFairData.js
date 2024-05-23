import { useStaticQuery, graphql } from "gatsby"

export const useFairData = slug => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
		  description
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            startDate
            endDate
            description
            location
            boothNumber
            link
            image {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
          fields {
            slug
          }
          html
        }
      }
    }
  `)

  const fair = data.allMarkdownRemark.nodes.find(
    node => node.fields.slug === slug
  )
  const siteTitle = data.site?.siteMetadata?.title
  return { fair, siteTitle }
}
