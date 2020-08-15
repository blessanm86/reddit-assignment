import React from "react";

import Title from "./Title";
import Body from "./Body";
import Comments from "./Comments";

export default function Post() {
  return (
    <>
      <Title />
      <Body>
        <Comments />
      </Body>
    </>
  );
}
