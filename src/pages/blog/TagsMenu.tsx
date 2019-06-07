import React from "react"
import { useActiveTagsDispatch, useActiveTags } from "./ActiveTags"

type Tag = {
  name: string
  count: number
}

function TagsMenu({ tags }: { tags: Tag[] }) {
  const activeTags = useActiveTags()
  const dispatch = useActiveTagsDispatch()

  return (
    <div>
      {Boolean(activeTags.length) && (
        <>
          ActiveTags:{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => dispatch({ type: "clear" })}
          >
            Clear
          </span>
          <ul>
            {activeTags.map(name => (
              <li key={name} onClick={() => dispatch({ type: "remove", name })}>
                {name}
              </li>
            ))}
          </ul>
        </>
      )}
      <ul>
        {tags
          .filter(({ name }) => !activeTags.includes(name))
          .map(({ name, count }) => (
            <li key={name} onClick={() => dispatch({ type: "add", name })}>
              {name} {count}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TagsMenu
