import React from "react"
import styled from "styled-components"
import Card from "../components/Card"

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

function WIPLayout({ children }) {
  return (
    <Container>
      <StyledCard>{children}</StyledCard>
    </Container>
  )
}

export default WIPLayout
