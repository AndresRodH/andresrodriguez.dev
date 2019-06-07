import React from "react"

type Tag = {
  name: string
  count: number
}

type Props = {
  tags: Tag[]
  activeTagNames: string[]
  pushActiveTagName: (name: string) => void
  removeActiveTagName: (name: string) => void
  clearActiveTags: () => void
}

function TagsMenu({
  tags,
  activeTagNames,
  pushActiveTagName,
  removeActiveTagName,
  clearActiveTags,
}: Props) {
  return (
    <div>
      {Boolean(activeTagNames.length) && (
        <>
          ActiveTags:{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => clearActiveTags()}
          >
            Clear
          </span>
          <ul>
            {activeTagNames.map(name => (
              <li key={name} onClick={() => removeActiveTagName(name)}>
                {name}
              </li>
            ))}
          </ul>
        </>
      )}
      <ul>
        {tags
          .filter(({ name }) => !activeTagNames.includes(name))
          .map(({ name, count }) => (
            <li key={name} onClick={() => pushActiveTagName(name)}>
              {name} {count}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TagsMenu
