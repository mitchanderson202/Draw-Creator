import React from "react";
import Rounds from "./Rounds";

describe("<Rounds />", () => {
  beforeEach(() => {
    const teamName = ["Team A", "Team B", "Team C"];
    const finalistOne = "Team A";
    const finalistTwo = "Team B";
    cy.mount(
      <Rounds
        teamName={teamName}
        finalistOne={finalistOne}
        finalistTwo={finalistTwo}
      />
    );
  });

  it("checks the dates get rendered when entered", () => {
    const startDate = "2023-04-19";
    const endDate = "2023-08-16";

    cy.get(".StartRound input").type(startDate);
    cy.get(".EndRound input").type(endDate);

    cy.get(".StartRound p").should("have.text", `Start Date: ${startDate}`);
    cy.get(".EndRound p").should("have.text", `End Date: ${endDate}`);
  });

  it("displays the amount of weeks the comp will run for", () => {
    const startDate = "2023-03-19";
    const endDate = "2023-09-16";

    cy.get(".StartRound input").type(startDate);
    cy.get(".EndRound input").type(endDate);

    const differenceInWeeks = Math.floor(
      (new Date(endDate).getTime() - new Date(startDate).getTime()) / 604800000
    );

    cy.get(".Weeks h2").should(
      "have.text",
      `The comp will run for ${differenceInWeeks} weeks`
    );
  });

  it("doesn't display number of weeks until start and end fields are selected", () => {
    const startDate = "2023-03-19";
    const endDate = "2023-09-16";

    cy.get(".StartRound input").type(startDate);
    cy.get(".Weeks h2").should("not.exist");
  });
});
