import React from "react";
import Finalists from "./Finalists";

describe("<Finalists />", () => {
  it("renders", () => {
    cy.mount(<Finalists teamName={[]} />);
    cy.get(".Finalists button").contains("Submit");
  });

  it("displays error when invalid teams are submitted", () => {
    const teamName = ["Team 1", "Team 2", "Team 3"];
    cy.mount(<Finalists teamName={teamName} />);
    cy.get(".FinalistsInput1").type("Team A");
    cy.get(".FinalistsInput2").type("Team B");
    cy.get(".Finalists button").click();
    cy.contains("Invalid team names");
  });

  it("displays error when invalid teams are submitted", () => {
    const teamName = ["Team A", "Team B", "Team C"];
    cy.mount(<Finalists teamName={teamName} />);
    cy.get(".FinalistsInput1").type("Team A");
    cy.get(".FinalistsInput2").type("Team B");
    cy.get(".Finalists button").click();
    cy.contains("Teams confirmed");
  });
});
