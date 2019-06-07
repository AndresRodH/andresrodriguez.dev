import styled from "styled-components"
import { LAYOUT, COMMON, LayoutProps, CommonProps } from "../utils/system"

export type BoxProps = LayoutProps & CommonProps
const Box = styled.div<BoxProps>(LAYOUT, COMMON)

export default Box
