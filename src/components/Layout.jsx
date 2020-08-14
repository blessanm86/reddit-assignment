import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

import px2rem from "../utils/styles";
import { COLORS } from "../config/styles";

const globalStyles = css`
  background: ${COLORS.GRAY_LIGHT};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Layout = styled.section`
  display: grid;
  padding: ${px2rem([32, 68])};
`;

export default function ({ children }) {
  return (
    <>
      <Global styles={globalStyles}></Global>
      <Layout>{children}</Layout>
    </>
  );
}
