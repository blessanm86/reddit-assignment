import React from "react";

export default function ({ error }) {
  return (
    <p data-testid="error-element">
      {`An error has occurred: ${error.message}`}
    </p>
  );
}
