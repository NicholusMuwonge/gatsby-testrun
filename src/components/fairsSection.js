import React from "react"
import moment from "moment"
import FairOverview from "./fair_overview"

const FairsSection = ({ title, fairs }) => {
  return (
    <div>
      <h2 className="m-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-black text-left">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fairs.map(({ node }) => (
          <div key={node.id} className="mt-4">
            <FairOverview
              title={node.frontmatter.title}
              dateRange={`${moment(node.frontmatter.startDate).format(
                "MMMM D, YYYY"
              )} - ${moment(node.frontmatter.endDate).format("MMMM D, YYYY")}`}
              description={node.frontmatter.description}
              url={node.fields.slug}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FairsSection
