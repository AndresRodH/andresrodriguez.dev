// Creating component types: https://styled-system.com/guides/component-types#creating-other-component-types
// Table of functions https://styled-system.com/table
import * as ss from "styled-system"
const { compose } = ss

export const COMMON = listCompose(["color", "space"])
export type CommonProps = ss.ColorProps & ss.SpaceProps

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
export type LayoutProps = ss.DisplayProps &
  ss.SizeProps &
  ss.WidthProps &
  ss.HeightProps &
  ss.MinHeightProps &
  ss.MaxHeightProps &
  ss.MinWidthProps &
  ss.MaxWidthProps &
  ss.OverflowProps &
  ss.VerticalAlignProps

export const FLEX = listCompose([
  "flexBasis",
  "flexDirection",
  "flexWrap",
  "alignContent",
  "alignItems",
  "justifyContent",
  "justifyItems",
])
export type FlexProps = ss.FlexBasisProps &
  ss.FlexDirectionProps &
  ss.FlexWrapProps &
  ss.AlignContentProps &
  ss.AlignItemsProps &
  ss.JustifyContentProps &
  ss.JustifyItemsProps

export const FLEX_ITEM = listCompose([
  "flex",
  "justifySelf",
  "alignSelf",
  "order",
])
export type FlexItemProps = ss.FlexProps &
  ss.JustifySelfProps &
  ss.AlignSelfProps &
  ss.OrderProps

function listCompose(list: string[]) {
  return compose(
    ...list.map(
      //@ts-ignore
      functionName => ss[functionName]
    )
  )
}
