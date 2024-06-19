import * as React from "react"
import styled from "styled-components"

type ComponentProps = {
    title: string;
}

const Component: React.FC<ComponentProps> = ({ title }) => {
  return (
    <Container>
        {title}
    </Container>
  )
}

export default Component

const Container = styled.div`

`