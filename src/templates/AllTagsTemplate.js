import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/Layout"

function AllTagsTemplate({ pageContext }) {
  const { tags } = pageContext

  return (
    <Layout title="Blog Tags">
      <div>
        <ul>
          {tags.map((tagName, index) => (
            <li key={index}>
              <Link to={`/blog/tags/${tagName}`}>{tagName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default AllTagsTemplate
