import styled from "styled-components"
import { GRID, GRID_ITEM, GridProps, GridItemProps } from "../utils/system"
import Box from "./Box"

const Grid = styled(Box)<GridProps>(GRID)

Grid.defaultProps = {
  display: "grid",
}

const GridItem = styled(Box)<GridItemProps>(GRID_ITEM)

export default Object.assign(Grid, { Item: GridItem })
