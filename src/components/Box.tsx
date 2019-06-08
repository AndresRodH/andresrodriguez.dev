import styled from "styled-components"
import { LAYOUT, COMMON, LayoutProps, CommonProps } from "../utils/system"

export type BoxProps = LayoutProps & CommonProps
const Box = styled.div<BoxProps>(LAYOUT, COMMON, props => ({
  color: props.theme.text,
}))

export default Box
