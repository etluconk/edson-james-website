import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";
import Layout from "../../../components/Layout";
import PathText from "../../../components/PathText";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>
        <PathText>
          <a href="/fun-extras">Fun Extras/</a>
        </PathText>
        Supercats
      </h1>
      <h2>They're super, and they're cats. (Well, kind of)</h2>
      <p>
        This page is under contruction. For now, here are download links to the
        comic pdfs, for anyone who desperately wants to read this stupid comic.
      </p>
      <ul>
        <li>
          <a href="/comics/supercats/issue1.pdf" download>
            Issue #1: The first battle (download)
          </a>
        </li>
        <li>
          <a href="/comics/supercats/issue2.pdf" download>
            Issue #2: Flame girl! (download)
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Edson James - Supercats</title>;
