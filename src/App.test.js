import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import mockedUsePost from "./hooks/usePost";
import postFixture from "./__fixtures__/post";
import App from "./App";

jest.mock("./hooks/usePost");

test("When a post is being fetched, then show a loading element", () => {
  mockedUsePost.mockReturnValueOnce({
    isLoading: true,
    error: null,
    data: null,
  });
  const { getByTestId } = render(<App />);

  const loadingElement = getByTestId("loading-element");
  expect(loadingElement).toBeInTheDocument();
});

test("When there is error while fetching post, then show an error element", () => {
  mockedUsePost.mockReturnValueOnce({
    isLoading: false,
    error: new Error("Simulated Error"),
    data: null,
  });
  const { getByTestId } = render(<App />);

  const errorElement = getByTestId("error-element");
  expect(errorElement).toBeInTheDocument();
});

test.skip("When the post is fetched, then show the post along with comments", async () => {
  mockedUsePost.mockReturnValueOnce({
    isLoading: false,
    error: null,
    data: postFixture,
  });
  const { getByTestId, getByLabelText } = render(<App />);

  const postElement = getByTestId("post-element");
  expect(postElement).toBeInTheDocument();

  const commentsElement = getByTestId("comments-element");
  const toggleCommentsButton = getByLabelText(/Toggle Comments/i);
  expect(commentsElement).toBeInTheDocument();

  //hide the comments
  fireEvent.click(toggleCommentsButton);
  await wait(() => expect(commentsElement).not.toBeInTheDocument());

  //show the comments again
  fireEvent.click(toggleCommentsButton);
  await wait(() => expect(getByTestId("comments-element")).toBeInTheDocument());
});
