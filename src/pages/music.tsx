import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <h1>Music</h1>
        <h2>It's kind of ok.</h2>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

const Container = styled.div`

`