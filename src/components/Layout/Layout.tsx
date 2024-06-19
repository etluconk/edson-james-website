import * as React from "react"
import styled from "styled-components"
import Navigation from "../Navigation"
import "../../global.css"

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SLayout className="s-layout">
        <SContainer>
            <Navigation />
            {children}
        </SContainer>
    </SLayout>
  )
}

export default Layout

const SLayout = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const SContainer = styled.div`
    width: 100%;
    max-width: 480px;
`