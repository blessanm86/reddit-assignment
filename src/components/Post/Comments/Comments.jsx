import React from "react";

import {
  Container,
  Comment,
  CommentMeta,
  StyledDeleteIcon,
  DeleteButton,
  CommentText,
} from "./Comments.styles";
import {
  formatNumberToK,
  getTimeDifferenceFromNowInWords,
  convertStringToHtml,
  pluralize,
} from "../../../utils/ui";

function renderCommentsTree(comments, onDelete) {
  return (
    <Container>
      {comments.map(
        ({
          id,
          permalink,
          depth,
          author,
          ups,
          created_utc,
          body_html,
          children,
        }) => (
          <Comment depth={depth} key={id}>
            <CommentMeta>
              <a aria-label="Link to Comment" href={permalink}>
                {author}
              </a>
              <span>
                {`${formatNumberToK(ups)} ${pluralize(
                  ups,
                  "point",
                  "points"
                )} - ${getTimeDifferenceFromNowInWords(
                  created_utc * 1000
                )} ago`}
              </span>
              <DeleteButton
                aria-label="Delete Comment"
                onClick={() => {
                  onDelete(id);
                }}
              >
                <StyledDeleteIcon />
              </DeleteButton>
            </CommentMeta>
            <CommentText
              dangerouslySetInnerHTML={{
                __html: convertStringToHtml(body_html),
              }}
            ></CommentText>
            {children.length ? renderCommentsTree(children, onDelete) : null}
          </Comment>
        )
      )}
    </Container>
  );
}

export default function Comments({ comments, onDelete }) {
  return (
    <div data-testid="comments-element">
      {renderCommentsTree(comments, onDelete)}
    </div>
  );
}
