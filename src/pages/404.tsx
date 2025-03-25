import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Ruh roh, this page does not exist buddy</h1>
      <h2>404</h2>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Edson James - 404 Error</title>;
