import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import mockedUsePost from "./hooks/usePost";
import postFixture from "./__fixtures__/post";
import App from "./App";

jest.mock("./hooks/usePost");

test("When a post is being fetched, then show a loading element", () => {
  mockedUsePost.mockReturnValue({
    isLoading: true,
    error: null,
    data: null,
  });
  const { getByTestId } = render(<App />);

  const loadingElement = getByTestId("loading-element");
  expect(loadingElement).toBeInTheDocument();
});

test("When there is error while fetching post, then show an error element", () => {
  mockedUsePost.mockReturnValue({
    isLoading: false,
    error: new Error("Simulated Error"),
    data: null,
  });
  const { getByTestId } = render(<App />);

  const errorElement = getByTestId("error-element");
  expect(errorElement).toBeInTheDocument();
});

test("When the post is fetched, then show the post along with comments", async () => {
  mockedUsePost.mockReturnValue({
    isLoading: false,
    error: null,
    data: postFixture,
  });
  const { getByTestId } = render(<App />);

  const postElement = getByTestId("post-element");
  expect(postElement).toBeInTheDocument();
});

test("When post is rendered and comments button is clicked, then toggle the comments", async () => {
  mockedUsePost.mockReturnValue({
    isLoading: false,
    error: null,
    data: postFixture,
  });
  const { getByTestId, getByLabelText } = render(<App />);

  let commentsElement = getByTestId("comments-element");
  const toggleCommentsButton = getByLabelText(/Toggle Comments/i);
  expect(commentsElement).toBeInTheDocument();

  //hide the comments
  fireEvent.click(toggleCommentsButton);
  expect(commentsElement).not.toBeInTheDocument();

  //show the comments again
  fireEvent.click(toggleCommentsButton);
  commentsElement = getByTestId("comments-element");
  expect(commentsElement).toBeInTheDocument();
});

test("When comment is deleted, then delete it and its children", async () => {
  mockedUsePost.mockReturnValue({
    isLoading: false,
    error: null,
    data: postFixture,
  });
  const { getByTestId, getByText } = render(<App />);

  //Look for comments button with comment count
  let commentsButton = getByText(/16 Comments/);
  expect(commentsButton).toBeInTheDocument();

  const deleteCommentsButton = getByTestId("delete-comment-t1_f369ye5");
  fireEvent.click(deleteCommentsButton);
  commentsButton = getByText(/14 Comments/);
  expect(deleteCommentsButton).not.toBeInTheDocument();
  expect(commentsButton).toBeInTheDocument();
});
