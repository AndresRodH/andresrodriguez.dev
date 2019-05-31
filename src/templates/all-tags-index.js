import React from "react"
import { Link } from "gatsby"

function AllTagsTemplate({ pageContext }) {
  const { tags } = pageContext

  return (
    <div>
      <div>
        <ul>
          {tags.map((tagName, index) => (
            <li key={index}>
              <Link to={`/blog/tags/${tagName}`}>{tagName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AllTagsTemplate
