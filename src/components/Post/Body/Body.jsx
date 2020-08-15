import React from "react";

import {
  Container,
  Text,
  CommentsCount,
  StyledCommentIcon,
} from "./Body.styles";

export default function ({ children }) {
  return (
    <Container>
      <Text>
        I almost always shower with my socks on. It just feels more relaxing, I
        don’t really like the feeling of water below my feet. Having socks on,
        even light ones, feels like a nice towel to put around my feet when I’m
        showering. It’s just better this way. I’ve done this since I was like,
        8, and I don’t ever plan on changing it. When I told my friends about it
        they all said it was really weird. I just think it is more comfortable,
        relaxing, and overall a better experience.
        <br />
        <br />
        Edit: jeez I really didn’t think that this was a big deal.
        <br />
        <br />
        Edit 2: To address some things:Yes, I actually do this, I personally
        like it, and it really isn’t problematic so I do it. My feet aren’t
        always super clean but I rub lotion on them occasionally.
        <br />
        <br />
        Edit 3: well I went to sleep, and now I have 953 notifications.
        <CommentsCount>
          <StyledCommentIcon />
          <span>13 Comments</span>
        </CommentsCount>
      </Text>
      {children}
    </Container>
  );
}
