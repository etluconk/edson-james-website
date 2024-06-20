import * as React from "react"
import styled from "styled-components"

type ComponentProps = {
    title: string;
}

const AudioPlayer: React.FC<ComponentProps> = ({ title }) => {
  return (
    <Container>
        {title}
    </Container>
  )
}

export default AudioPlayer

const Container = styled.div`

`