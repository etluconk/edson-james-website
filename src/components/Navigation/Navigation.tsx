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
    width: calc(100% - 60px);
    max-width: 680px;

    display: flex;
    justify-content: center;
    padding-top: 35px;
    padding-bottom: 25px;
    border-bottom: solid 3px rgb(var(--accent-color));
    background-color: var(--page-color);

    position: fixed;

    svg {
        margin-left: 15px;
        margin-right: 15px;
        width: 40px;
        height: 40px;
    }

    svg path {
        fill: rgb(var(--accent-color));
    }
`