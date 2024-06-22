import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <h1>Music</h1>
        <h2>It's kind of ok.</h2>
        <p>
          I'm still working on the audio player functionality (migrating the website from raw html and css to react, don't worry if you don't what this means). If you want to listen to the music, here's some temporary native audio players. Come back later for an audio player (and more, better, music to listen to)!
        </p>
        <h3>THESE AUDIO PLAYERS ARE TEMPORARY AND GOOFY! BEWARE!</h3>
        <h3>2023</h3>
        <ul>
          <li><audio src="/albums/2023/giants-lift-us-up.mp3" controls /> Giants lift us up</li>
          <li><audio src="/albums/2023/yellow.mp3" controls /> Yellow</li>
          <li><audio src="/albums/2023/blue.mp3" controls /> Blue</li>
        </ul>
        <h3>2022</h3>
        <ul>
          <li><audio src="/albums/2022/water.mp3" controls /> Water</li>
          <li><audio src="/albums/2022/skipping-stones.mp3" controls /> Skipping stones</li>
        </ul>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Edson James - Music</title>

const Container = styled.div`

`