import React from "react";

import {
  Container,
  Comment,
  CommentMeta,
  StyledDeleteIcon,
  CommentText,
} from "./Comments.styles";

export default function Comments() {
  return (
    <Container>
      <Comment depth={0}>
        <CommentMeta>
          <a href="#">RandomName01</a>
          <span>9.8k points - 8 hours ago</span>
          <StyledDeleteIcon />
        </CommentMeta>
        <CommentText>Bruh</CommentText>
      </Comment>
      <Comment depth={0}>
        <CommentMeta>
          <a href="#">RandomName01</a>
          <span>9.8k points - 8 hours ago</span>
          <StyledDeleteIcon />
        </CommentMeta>
        <CommentText>
          97% Disagree it's the most unpopular opinion I've seen here after that
          guy who wanted to be pregnant
        </CommentText>
        <Container>
          <Comment depth={1}>
            <CommentMeta>
              <a href="#">RandomName01</a>
              <span>9.8k points - 8 hours ago</span>
              <StyledDeleteIcon />
            </CommentMeta>
            <CommentText>This is unpopular for a reason</CommentText>
            <Container>
              <Comment depth={2}>
                <CommentMeta>
                  <a href="#">RandomName01</a>
                  <span>9.8k points - 8 hours ago</span>
                  <StyledDeleteIcon />
                </CommentMeta>
                <CommentText>Hi there</CommentText>
              </Comment>
            </Container>
          </Comment>
        </Container>
      </Comment>
    </Container>
  );
}
