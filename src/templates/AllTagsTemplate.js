import React from "react"
import { Link } from "gatsby"
import Base from "../layouts/Base"

function AllTagsTemplate({ pageContext }) {
  const { tags } = pageContext

  return (
    <Base title="Blog Tags">
      <div>
        <ul>
          {tags.map((tagName, index) => (
            <li key={index}>
              <Link to={`/blog/tags/${tagName}`}>{tagName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Base>
  )
}

export default AllTagsTemplate
