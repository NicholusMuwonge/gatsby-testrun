import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const FairDescription = ({
  description,
  htmlContent,
  link,
  fairImage,
  title,
}) => {
  return (
    <div>
      <div className="leading-6 font-normal py-4">{description}</div>

      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-500" />

      <GatsbyImage
        image={fairImage}
        alt={title}
        className="mb-4 w-full rounded-2xl"
      />

      <div
        className="prose mb-4"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <div className="mb-8">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 underline"
        >
          Read more about this event.
        </a>
      </div>
    </div>
  )
}

export default FairDescription
