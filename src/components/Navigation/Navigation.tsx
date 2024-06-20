import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HomeIcon from "../svgs/HomeIcon"
import GamesIcon from "../svgs/GamesIcon"
import MusicIcon from "../svgs/MusicIcon"
import FunExtrasIcon from "../svgs/FunExtrasIcon"

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
        <Link to="/"><HomeIcon /></Link>
        <Link to="/games"><GamesIcon /></Link>
        <Link to="/music"><MusicIcon /></Link>
        <Link to="/fun-extras"><FunExtrasIcon /></Link>
    </NavigationContainer>
  )
}

export default Navigation

const NavigationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 35px;
    padding-bottom: 25px;
    border-bottom: solid 3px var(--accent-color);
    background-color: var(--page-color);

    svg {
        margin-left: 15px;
        margin-right: 15px;
        width: 40px;
        height: 40px;
    }

    svg path {
        fill: var(--accent-color)
    }
`