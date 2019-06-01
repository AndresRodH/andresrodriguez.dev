import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/Layout"

function SingleTagTemplate({ pageContext }) {
  const { posts, tagName } = pageContext
  return (
    <Layout title={`Posts about ${tagName}`}>
      <div>
        Posts about <b>{`${tagName}`}</b>
      </div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={"/blog".concat(post.frontmatter.path)}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default SingleTagTemplate
