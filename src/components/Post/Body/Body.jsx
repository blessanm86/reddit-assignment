import React, { useState } from "react";

import {
  Container,
  Text,
  CommentsCount,
  StyledCommentIcon,
} from "./Body.styles";
import { convertStringToHtml } from "../../../utils/ui";

export default function ({ body, commentsCount, children }) {
  const [shouldShowComments, setShouldShowComments] = useState(true);

  return (
    <Container>
      <Text>
        <p
          dangerouslySetInnerHTML={{
            __html: convertStringToHtml(body),
          }}
        ></p>
        <button onClick={() => setShouldShowComments(!shouldShowComments)}>
          <CommentsCount>
            <StyledCommentIcon />
            <span>{commentsCount} Comments</span>
          </CommentsCount>
        </button>
      </Text>
      {shouldShowComments && children}
    </Container>
  );
}
