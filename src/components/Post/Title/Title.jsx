import React from "react";

import { Container, SubRedditTitle, Grid, Score, Title } from "./Title.styles";
import { formatNumberToK } from "../../../utils/ui";

export default function ({ subRedditTitle, score, title }) {
  return (
    <Container>
      <div>
        <SubRedditTitle>{subRedditTitle}</SubRedditTitle>
      </div>
      <Grid>
        <Score>{formatNumberToK(score)}</Score>
        <Title>{title}</Title>
      </Grid>
    </Container>
  );
}
