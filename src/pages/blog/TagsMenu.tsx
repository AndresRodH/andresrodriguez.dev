import React from "react"
import { useActiveTagsDispatch, useActiveTags } from "./ActiveTags"
import { BlogPageQuery } from "../../generated"
import Chip from "../../components/Chip"

function TagsMenu({ tags }: { tags: BlogPageQuery["tags"]["group"] }) {
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
          <div>
            {activeTags.map(name => (
              <Chip
                key={name}
                onClick={() => dispatch({ type: "remove", name })}
              >
                {name}
              </Chip>
            ))}
          </div>
        </>
      )}
      <div>
        {tags
          .filter(({ name }) => !activeTags.includes(name))
          .map(({ name, count }) => (
            <Chip key={name} onClick={() => dispatch({ type: "add", name })}>
              {name} {count}
            </Chip>
          ))}
      </div>
    </div>
  )
}

export default TagsMenu
