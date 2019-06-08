import styled from "styled-components"
import Box from "./Box"
import { boxShadow } from "../utils/styles"

const Card = styled(Box)`
  border-radius: 6px;
  ${boxShadow}
`

export default Card
