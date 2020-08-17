import React, { useState, useEffect, useCallback } from "react";

import Loader from "../Loader";
import Error from "../Error";
import Title from "./Title";
import Body from "./Body";
import Comments from "./Comments";
import usePost from "../../hooks/usePost";
import { convertCommentsToTree } from "../../utils/ui";

export default function Post({ id }) {
  const { isLoading, error, data: post } = usePost(id);
  const [commentsFiltered, setCommentsFiltered] = useState([]);

  useEffect(() => {
    if (post) {
      setCommentsFiltered(post.comments);
    }
  }, [post]);

  const onDelete = useCallback(
    function (id) {
      const remainingComments = commentsFiltered.filter(
        (comment) => comment.id !== id
      );
      setCommentsFiltered(remainingComments);
    },
    [commentsFiltered]
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const { subreddit_name_prefixed, score, title, selftext_html } = post;

  const {
    tree: commentsTree,
    nodeCount: commentsCount,
  } = convertCommentsToTree(commentsFiltered);

  return (
    <article data-testid="post-element">
      <Title
        subRedditTitle={subreddit_name_prefixed}
        score={score}
        title={title}
      />
      <Body body={selftext_html} commentsCount={commentsCount}>
        <Comments comments={commentsTree} onDelete={onDelete} />
      </Body>
    </article>
  );
}
