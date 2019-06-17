import React from "react"
import { navigate } from "gatsby"
import { BlogPageQuery } from "../generated"
import Card from "./Card"

function PostCard({
  title,
  path,
  tags,
}: BlogPageQuery["posts"]["edges"][0]["node"]["frontmatter"]) {
  return (
    <Card as="article" onClick={() => navigate("/blog".concat(path))}>
      {title}
      {tags && tags[0]}
    </Card>
  )
}

export default PostCard