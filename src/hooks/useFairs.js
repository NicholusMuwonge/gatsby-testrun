import { graphql, useStaticQuery } from 'gatsby';
import { filterFairs } from '../helpers';

const useFairs = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
		      description
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___startDate], order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              title
              startDate
              endDate
              description
              link
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;
  const upcomingFairs = filterFairs(edges, "upcoming");
  const pastFairs = filterFairs(edges, "past");
  const {title: siteTitle, description: siteDescription} = data.site?.siteMetadata
  return { upcomingFairs, pastFairs, siteTitle, siteDescription };
};

export default useFairs;
