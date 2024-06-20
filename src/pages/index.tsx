import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Edson James</h1>
      <h2>Also known as etluconk!</h2>
      <p>
        I am Edson the 13 year old and I like to play video games an make video games in Seattle, Washington. I also enjoy creating (and listening to) music, and I am learning <a href="https://www.ableton.com/en/live/" target="_blank">Ableton Live.</a>
      </p>
      <p>
        I have always loved drawing pictures, writing words, and composing songs, but 4 years ago I discovered computer programming and my world opened up. Now my favorite thing is creating video game experiences for my friends and family, and applying my passions while doing it. I hope you like what I have put together on this goofy website.
      </p>
      <p>
        I have always loved drawing pictures, writing words, and composing songs, but 4 years ago I discovered computer programming and my world opened up. Now my favorite thing is creating video game experiences for my friends and family, and applying my passions while doing it. I hope you like what I have put together on this goofy website.
      </p>
      <p>
        Here’s some stuff I would like to feature:
      </p>
      <ul>
        <li>
          <a href="/games/tiny-game">Tiny Game</a> - My first game ever made with the godot game engine
        </li>
        <li>
          <a href="/music">My Music</a> - Not very good but not very bad.
        </li>
        <li>
          <a href="https://scratch.mit.edu/users/etluconk" target="_blank">My old Scratch account</a> - My first experience with game development was on this block coding site.
        </li>
      </ul>
      <p>
        You can find more in the navigation bar above; have fun looking around!
      </p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Edson James</title>
