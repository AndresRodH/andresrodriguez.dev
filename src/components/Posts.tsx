import React from "react"
import { navigate } from "gatsby"
import Card from "../components/Card"
import Grid from "./Grid"
import { rhythm } from "../utils/typography"
import { PostsContext } from "./BlogContentProvider"

function Posts() {
  const posts = React.useContext(PostsContext)

  return (
    <Grid
      gridTemplateColumns={`repeat(auto-fill, minmax(${rhythm(10)}, 1fr))`}
      gridGap={rhythm(1)}
    >
      {posts.map(({ node: { frontmatter, excerpt } }) => {
        const { path, title } = frontmatter
        return (
          <Card
            key={title}
            as="article"
            onClick={() => navigate("/blog".concat(path))}
          >
            <h3>{title}</h3>
            <p>{excerpt}</p>
          </Card>
        )
      })}
    </Grid>
  )
}

export default Posts
