import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("When a post is being fetched, then show a loading element", () => {
  const { getByTestId } = render(<App />);
  const loadingElement = getByTestId("loading-element");
  expect(loadingElement).toBeInTheDocument();
});
