import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import { animated, useSpring, config } from "react-spring"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
`

const StyledCard = styled(Card)`
  padding: 40px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 48px;
  font-weight: bold;
  flex-direction: column;
`

const AnimatedCard = animated(StyledCard)

function WIPLayout({ children }) {
  const props = useSpring({
    opacity: 1,
    config: config.slow,
    from: { opacity: 0 },
  })
  return (
    <Container>
      <AnimatedCard style={props}>{children}</AnimatedCard>
    </Container>
  )
}

export default WIPLayout
