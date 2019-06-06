import React from "react"
import { arrayOf, string, shape, number } from "prop-types"

function TagsMenu({ tags }) {
  return (
    <ul>
      {tags.map(tag => (
        <li key={tag.name}>
          {tag.name} {tag.count}
        </li>
      ))}
    </ul>
  )
}

const Tag = shape({
  name: string,
  count: number,
})

TagsMenu.propTypes = {
  tags: arrayOf(Tag).isRequired,
}

export default TagsMenu
