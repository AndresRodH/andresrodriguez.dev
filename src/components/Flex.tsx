import styled from "styled-components"
import { FLEX, FLEX_ITEM, FlexProps, FlexItemProps } from "../utils/system"
import Box from "./Box"

const Flex = styled(Box)<FlexProps>(FLEX)

Flex.defaultProps = {
  display: "flex",
}

const FlexItem = styled(Box)<FlexItemProps>(FLEX_ITEM)

export default Object.assign(Flex, { Item: FlexItem })
