import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type NavigationProps = {
    title: string;
}

const Navigation: React.FC<NavigationProps> = ({ title }) => {
  return (
    <Container>
        {title}
    </Container>
  )
}

export default Navigation

const Container = styled.div`

`