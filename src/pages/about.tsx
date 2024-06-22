import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import PathText from "../components/PathText"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1><PathText><a href="/">Edson James/</a></PathText>About</h1>
      <h2>Information and places to find me</h2>

      <p>
        Here are my profiles on various websites and things:
      </p>
      <ul>
        <li>
            <a href="https://etluconk.itch.io/">Itch.io</a> - etluconk
        </li>
        <li>
            <a href="https://scratch.mit.edu/users/etluconk">Scratch</a> - etluconk
        </li>
        <li>
            <a href="https://youtube.com/@etluconk">Youtube</a> - Edson James (my display name is currently incorrect, long story)
        </li>
        <li>
            <a href="https://edsonjames.bandcamp.com">Bandcamp</a> - etluconk (this is currently empty)
        </li>
        <li>
            <a href="mailto:edson@edsonjames.com">Email</a> - edson@edsonjames.com
        </li>
        <li>
            Discord - my handle is @etluconk
        </li>
      </ul>
      
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Edson James - About</title>
