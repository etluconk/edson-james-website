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
        <SContainer>
            {children}
        </SContainer>
    </SLayout>
  )
}

export default Layout

const SLayout = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

const SContainer = styled.div`
    overflow: hidden;
    max-width: 680px;
    width: calc(100% - 60px);
    padding-top: 150px;
    padding-left: 30px;
    padding-right: 30px;

    h1 {
        color: rgb(var(--accent-color));
        font-family: 'IBM Plex Mono';
        font-weight: 300;
        font-size: 50px;
        margin-bottom: 5px;
    }

    h2 {
        color: var(--content-color);
        font-family: 'IBM Plex Mono';
        font-style: italic;
        font-weight: 300;
        font-size: 30px;
        margin-bottom: 50px;
        margin-top: 0px;
    }

    h3 {
        color: rgb(var(--accent-color));
        font-family: 'IBM Plex Mono';
        font-weight: 300;
        font-size: 25px;
        margin-bottom: 5px;
    }

    h3 a {
        font-weight: 400;
        font-size: 25px;
    }

    h1::selection, h2::selection, h3::selection {
        color: var(--page-color);
    }

    p, a {
        color: var(--content-color);
        font-family: 'IBM Plex Mono';
        font-weight: 400;
        font-size: 18px;
        text-align: justify;
    }

    a, a:visited {
        color: rgb(var(--accent-color));
        text-decoration: none;
    }

    a:hover {
        color: var(--page-color);
        background-color: rgb(var(--accent-color));
    }

    a::selection {
        color: var(--page-color);
    }

    p::selection {
        color: var(--page-color)
    }

    li::selection {
        color: var(--page-color)
    }

    ul {
        list-style-type: none;
    }
    
    li {
        font-family: 'IBM Plex Mono';
        font-weight: 400;
        font-size: 18px;
        color: var(--content-color);
        margin-bottom: 10px;
    }

    li::before {
        content: "- ";
        font-family: 'IBM Plex Mono';
        font-weight: 400;
        font-size: 18px;
        color: rgb(var(--accent-color));
    }
`