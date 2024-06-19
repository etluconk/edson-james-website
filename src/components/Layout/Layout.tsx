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
        <Navigation />
        {children}
    </SLayout>
  )
}

export default Layout

const SLayout = styled.main`

`