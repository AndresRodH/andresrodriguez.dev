import React from "react"
import styled from "@emotion/styled"
import Card from "../components/Card"
import { animated, useSpring, config } from "react-spring"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
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

const Default: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    config: config.slow,
    from: { opacity: 0 },
  })
  return (
    <Container>
      <AnimatedCard style={props}>
        <span style={{ flex: 1, paddingBottom: 16 }}>WORK IN PROGRESS</span>
        <span role="img" aria-label="work-in-progress">
          👨🏻‍🏭
        </span>
      </AnimatedCard>
    </Container>
  )
}

export default Default
