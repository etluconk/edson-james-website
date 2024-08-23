import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <h1>Games</h1>
        <h2>They're video games! What more do I have to say?</h2>
        <p>
          Video games are really hard to make. A lot of the older projects in here are really slow for what they are. (cough cough, Kensei in Space) I am always improving, but progress isn't a straight line. Be prepared for bugs, crashes, and really strange easter eggs I should probably remove because of brainrot. Good luck, and here they are:
        </p>
        <ul>
          <li>
            <a href="/games/Tiny-Game">Tiny Game</a> - Speedrunning precision platformer I made as a challenge for my friends.
          </li>
          <li>
            <a href="/games/Kensei-in-Space">Kensei in Space</a> - Very nice little game I made for my friend Kensei's birthday. Very very very very hard to get full completion.
          </li>
          <li>
            <a href="/games/Bang-Bang-Shoot">Bang Bang Shoot!</a> - I made this in two days. Based on an old schoolgame from Seattle I played a bunch when I was really little. Completely broken. Do not play it.
          </li>
          <li>
            <a href="/games/Space-Turkey">Space Turkey</a> - "Game" I made for my parents' friend Luz. Cringy but funny.
          </li>
          <li>
            <a href="/games/Slush">Slush</a> - Game jam game I made for the Acerola Jam 0 that I couldn't submit because of a game-breaking bug I discovered right after the deadline D: Fun though!!
          </li>
          <li>
            <a href="/games/Ker-Plonk">Ker-plonk</a> - A test. Very bad. Don't play it.
          </li>
        </ul>
        <p>
          Note: These projects take a bit to load on the web, and may not work at all if you're on a mac. On newer macs it should load eventually though.
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Edson James - Games</title>

const Container = styled.div`
  iframe {
    width: 100%;
    height: 300px;
  }
`