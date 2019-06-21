import React from "react"
import { TagsContext } from "./BlogContentProvider"
import Chip from "./Chip"
import styled, { css, DefaultTheme } from "styled-components"
import Grid from "./Grid"

function getTagChipStyles(isActive: boolean, theme: DefaultTheme) {
  if (isActive)
    return css`
      &::before {
        content: "#";
      }
    `
  return css`
    color: ${theme.text};
    background-color: ${theme.background};
    border: 1px solid #9e9e9e;

    &:hover {
      background-color: #bdbdbd;
    }
  `
}

const TagChip = styled(Chip)<{ isActive: boolean }>`
  ${props => getTagChipStyles(props.isActive, props.theme)}
`

function TagsMenu() {
  const { tags, toggle, clear } = React.useContext(TagsContext)
  return (
    <Grid gridGap="8px">
      {Object.entries(tags).map(([tagName, { isActive }]) => (
        <TagChip
          key={tagName}
          label={tagName}
          isActive={isActive}
          onClick={() => toggle(tagName)}
        />
      ))}
      <span onClick={clear}>Clear</span>
    </Grid>
  )
}

export default TagsMenu
