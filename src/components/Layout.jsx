import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";

import { px2rem } from "../utils/styles";
import { COLORS } from "../config/styles";

const globalStyles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 calc(100vw - 100%);
    background: ${COLORS.GRAY_100};
    font-family: arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h3 {
    font-size: ${px2rem(22)};
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
`;

const Layout = styled.section`
  @media (min-width: 1024px) {
    margin: ${px2rem([32, 68])};
  }
`;

export default function ({ children }) {
  return (
    <>
      <Global styles={globalStyles}></Global>
      <Layout>{children}</Layout>
    </>
  );
}
