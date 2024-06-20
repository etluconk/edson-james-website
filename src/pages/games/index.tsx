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
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

const Container = styled.div`

`