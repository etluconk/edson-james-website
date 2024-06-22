import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type PathTextProps = {
  children: React.ReactNode;
}

const PathText: React.FC<PathTextProps> = ({ children }) => {
  return (
    <PathTextContainer>
      {children}
    </PathTextContainer>
  )
}

export default PathText

const PathTextContainer = styled.p`
  display: inline;

  a {
    font-size: 50px;
    font-weight: 300;
    opacity: 0.5;
    display: inline;
  }
`