import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
        <Link to="/">Home</Link>
        <Link to="/games">Video Games</Link>
        <Link to="/music">Music</Link>
        <Link to="/fun-extras">Fun Extras</Link>
    </NavigationContainer>
  )
}

export default Navigation

const NavigationContainer = styled.div`
    [aria-current="page"] {
        background-color: red;
    }
`