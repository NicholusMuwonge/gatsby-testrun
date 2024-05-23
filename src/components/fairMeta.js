import React from "react"

const FairMeta = ({ location, date }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <div>
          <h3 className="text-lg">{location}</h3>
          <div className="text-[#00000099]">{date}</div>
        </div>
      </div>
    </div>
  )
}

export default FairMeta
