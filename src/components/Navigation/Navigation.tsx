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
    border-bottom: solid 2px rgb(var(--accent-color));
    background-color: rgb(var(--page-color));

    svg {
        margin-left: 10px;
        margin-right: 10px;
    }

    svg path {
        fill: rgb(var(--accent-color))
    }
`