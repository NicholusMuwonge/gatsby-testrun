import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="self-center">
        <h1 className="py-4 text-4xl font-bold leading-none tracking-tight text-[#0163a2] md:text-5xl lg:text-6xl dark:text-[#0083bf] text-start">
          404
        </h1>
        <h2 className="text-6xl font-bold leading-none tracking-tight text-[#0163a2] md:text-5xl lg:text-4xl dark:text-[#0083bf] text-start">
          Page not found
        </h2>
        <p className="py-4">
          We are sorry, the page you requested could not be found. Please go
          back to the homepage.
        </p>

        <Link
          to="/"
          className="bg-[#009ed9] text-white px-4 py-2 rounded-md inline-block"
        >
          Back to all events
        </Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
