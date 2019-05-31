import React from "react"
import { graphql, Link } from "gatsby"

function AllTagsTemplate({ data, pageContext }) {
  const { tags } = pageContext

  return (
    <div>
      <div>
        <ul>
          {tags.map((tagName, index) => (
            <li key={index}>
              <Link to={`/tags/${tagName}`}>{tagName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AllTagsTemplate
