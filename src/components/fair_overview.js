import { Link } from "gatsby"
import React from "react"

const FairOverview = ({ title, dateRange, description, url }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row-reverse md:h-80">
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold text-[#0083bf] mb-2">{title}</h2>
        <div className="text-gray-600 mb-4">{dateRange}</div>
        <div className="text-gray-700 mb-6">{description}</div>
        <Link
          href={url}
          className="bg-[#019ed9] text-white px-4 py-2 rounded-md inline-block"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default FairOverview
