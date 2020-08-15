import React from "react";

import { Container, SubRedditTitle, Grid, Score, Title } from "./Title.styles";

export default function () {
  return (
    <Container>
      <div>
        <SubRedditTitle>r/unpopularopinion</SubRedditTitle>
      </div>
      <Grid>
        <Score>20.7k</Score>
        <Title>
          Taking showers with your socks on is so much better than not
        </Title>
      </Grid>
    </Container>
  );
}
