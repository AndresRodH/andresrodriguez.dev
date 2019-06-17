import styled from "styled-components"
import Box from "./Box"
import { boxShadow } from "../utils/styles"

const Card = styled(Box)`
  border-radius: 8px;
  background-color: ${props => props.theme.backgroundLight};
  ${boxShadow}
`

export default Card
