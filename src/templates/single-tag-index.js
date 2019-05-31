import React from "react"
import { Link } from "gatsby"

function SingleTagTemplate({ pageContext }) {
  const { posts, tagName } = pageContext
  return (
    <div>
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
    </div>
  )
}

export default SingleTagTemplate
