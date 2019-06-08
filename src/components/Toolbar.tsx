import styled from "styled-components"
import Flex from "./Flex"
import { boxShadow } from "../utils/styles"
import { rhythm } from "../utils/typography"

const Toolbar = styled(Flex).attrs({
  p: `0 ${rhythm(0.5)}`,
})`
  background-color: ${props => props.theme.background};
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.text};
  svg {
    fill: ${props => props.theme.text};
  }
  ${boxShadow};
`

export default Toolbar
