import React from "react";
import Draw from "./Draw";

describe("<Draw />", () => {
  const teamName = ["Team A", "Team B", "Team C", "Team D"];
  const finalistOne = "Team A";
  const finalistTwo = "Team B";
  const weeks = 10;
  beforeEach(() => {
    cy.mount(
      <Draw
        teamName={teamName}
        finalistOne="finalistOne"
        finalistTwo="finalistTwo"
        weeks={10}
      />
    );
  });

  it("should have finalstOne and finalistTwo play in round 1", () => {
    cy.get(".Draw-Card").eq(0).contains(`${finalistOne} vs ${finalistTwo}`);
  });

  it("should render the correct number of rounds", () => {
    for (let i = 1; i <= weeks; i++) {
      cy.get(".Draw-Card")
        .eq(i - 1)
        .contains(`Round ${i}`);
    }
  });
});
