import React from "react";
import Welcome from "./Welcome";

describe("<Welcome />", () => {
  it("renders", () => {
    cy.mount(<Welcome />);
  });
});
