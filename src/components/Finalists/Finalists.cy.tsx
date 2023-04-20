import React from "react";
import Finalists from "./Finalists";
import Draw from "../Draw/Draw";

describe("<Finalists />", () => {
  it("renders", () => {
    cy.mount(<Finalists teamName={[]} />);
    cy.get(".Finalists button").contains("FINALISE");
  });

  it("displays error when invalid teams are submitted", () => {
    const teamName = ["Team 1", "Team 2", "Team 3"];
    cy.mount(<Finalists teamName={teamName} />);
    cy.get(".FinalistsInput1").type("Team A");
    cy.get(".FinalistsInput2").type("Team B");
    cy.get(".Finalists button").click();
    cy.contains("Invalid team names");
  });

  it("accepts input and displays the finalists from last year", () => {
    const teamName = ["Team A", "Team B", "Team C"];
    cy.mount(<Finalists teamName={teamName} />);
    cy.get(".FinalistsInput1").type("Team A");
    cy.get(".FinalistsInput2").type("Team B");
    cy.get(".Finalists button").click();
    cy.contains("Team A & Team B will open the season");
  });

  it("renders draw", () => {
    cy.mount(<Finalists teamName={[]} />);
    cy.get(".Finalists button").click();
    cy.mount(<Draw />);
  });
});
