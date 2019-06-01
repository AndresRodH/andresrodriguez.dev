// Creating component types: https://styled-system.com/guides/component-types#creating-other-component-types
// Table of functions https://styled-system.com/table
import * as ss from "styled-system"
const { compose } = ss

export const COMMON = listCompose(["color", "space"])

export const LAYOUT = listCompose([
  "display",
  "size",
  "width",
  "height",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "overflow",
  "verticalAlign",
])

export const FLEX = listCompose([
  "flexBasis",
  "flexDirection",
  "flexWrap",
  "alignContent",
  "alignItems",
  "justifyContent",
  "justifyItems",
])

export const FLEX_ITEM = listCompose([
  "flex",
  "justifySelf",
  "alignSelf",
  "order",
])

function listCompose(list) {
  return compose(...list.map(functionName => ss[functionName]))
}
