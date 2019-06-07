import * as React from "react"

type Tag = {
  name: string
  count: number
}

type Props = {
  tags: Tag[]
  activeTagNames: string[]
  pushTagName: (name: string) => void
  removeTagName: (name: string) => void
}

function TagsMenu({ tags, activeTagNames, pushTagName, removeTagName }: Props) {
  return (
    <div>
      {Boolean(activeTagNames.length) && (
        <>
          ActiveTags:{" "}
          <ul>
            {activeTagNames.map(name => (
              <li key={name} onClick={() => removeTagName(name)}>
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
            <li key={name} onClick={() => pushTagName(name)}>
              {name} {count}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TagsMenu
