import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <h1>Fun Extras</h1>
        <h2>Goofy little thingies</h2>
        <p>
            The following topics aren’t really organized in any particular order; I just didn’t know where else to put them on the website.

            -

            When I was 7 I made a comic called Super Cats featuring feline superheros Flash Cat, Flame Cat, Aqua Cat, Whiskers, and more. The comic’s story consists of multiple extremely underwhelming battles against the villians Lazer Beam, Flame Girl, and the Living Gatorade bottle (this one never quite hit the copying machine). You can read the first 2 of the series right on this website:
        </p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>