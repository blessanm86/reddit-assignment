import React from "react";

import Title from "./Title";
import Body from "./Body";
import Comments from "./Comments";
import usePost from "../../hooks/usePost";

export default function Post({ id }) {
  const { isLoading, error, data: post } = usePost(id);

  if (isLoading)
    return <p data-testid="loading-element">Loading the post...</p>;

  if (error) return "An error has occurred: " + error.message;

  const {
    subreddit_name_prefixed,
    score,
    title,
    selftext_html,
    comments,
  } = post;

  return (
    <>
      <Title
        subRedditTitle={subreddit_name_prefixed}
        score={score}
        title={title}
      />
      <Body body={selftext_html} commentsCount={comments.length}>
        <Comments comments={comments} />
      </Body>
    </>
  );
}
