import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type ShowCaseGridItemProps = {
  children: React.ReactNode;
}

const ShowCaseGridItem: React.FC<ShowCaseGridItemProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ShowCaseGridItem

const Container = styled.div`
  display: block;
`