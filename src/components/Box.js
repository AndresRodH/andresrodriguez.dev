import styled from "styled-components"
import { LAYOUT, COMMON } from "../utils/system"

const Box = styled.div(LAYOUT, COMMON)

Box.propTypes = {
  ...LAYOUT.propTypes,
  ...COMMON.propTypes,
}

export default Box
