import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type ShowcaseGridProps = {
  children: React.ReactNode;
}

const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ShowcaseGrid

const Container = styled.div`
  display: grid;
`