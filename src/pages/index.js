import React from "react"
import Layout from "../components/layout"
import useFairs from "../hooks/useFairs"
import FairsSection from "../components/fairsSection"
import Seo from "../components/seo"

const IndexPage = ({location}) => {
  const { upcomingFairs, pastFairs, siteTitle, siteDescription } = useFairs()

  const fairs = [
    { title: "Upcoming Fairs", fairs: upcomingFairs },
    { title: "Past Fairs", fairs: pastFairs },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} description={siteDescription} />
      <h1 className="py-8 text-4xl font-bold leading-none tracking-tight text-gray-400 md:text-5xl lg:text-5xl dark:text-[#0083bf] text-center">
        Fairs
      </h1>
      {fairs.map(({ title, fairs }) => (
        <>
        <FairsSection key={title} title={title} fairs={fairs} />
        </>
        
      ))}
    </Layout>
  )
}

export default IndexPage
