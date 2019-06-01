import styled from "styled-components"
import { FLEX, FLEX_ITEM } from "../utils/system"
import Box from "./Box"

const Flex = styled(Box)(FLEX)

Flex.defaultProps = {
  display: "flex",
}

Flex.propTypes = {
  ...Box.propTypes,
  ...FLEX.propTypes,
}

const FlexItem = styled(Box)(FLEX_ITEM)

FlexItem.propTypes = {
  ...FLEX_ITEM.propTypes,
}

export default Object.assign(Flex, { Item: FlexItem })
