import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Header() {
  const { title, description } = useSiteMetadata()

  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  )
}

export default Header
