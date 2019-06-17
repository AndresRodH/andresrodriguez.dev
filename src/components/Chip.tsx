import React from "react"
import styled from "styled-components"
import { ReactLogo } from "styled-icons/boxicons-logos/ReactLogo"
import Flex from "./Flex"

const ChipContent = styled(Flex)`
  flex-shrink: 2;
  font-size: 12px;
  height: 32px;
  align-items: center;
  padding: 0 12px;
  border: 1px solid ${props => props.theme.backgroundDark};
  border-radius: 16px;
  text-transform: uppercase;
  align-items: center;
`

const Chip: React.FC<{ onClick: () => void }> = ({ onClick, children }) => (
  <ChipContent onClick={onClick}>
    <ReactLogo size="18px" />
    <Flex.Item>{children}</Flex.Item>
  </ChipContent>
)

export default Chip
