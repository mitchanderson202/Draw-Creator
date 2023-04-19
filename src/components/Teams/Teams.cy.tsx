import React from "react";
import Teams from "./Teams";
import Finalists from "../Finalists/Finalists";

describe("<Teams />", () => {
  it("renders", () => {
    cy.mount(<Teams />);
    cy.get(".Teams button").contains("Add Team");
  });

  it("adds a team name to the list", () => {
    cy.mount(<Teams />);
    const teamName = "Test Team";
    cy.get(".Teams input").type(teamName);
    cy.get(".Teams button[type='submit']").click();
    cy.get(".Teams li").should("have.length", 1);
    cy.get(".Teams li").should("contain.text", teamName);
    cy.get(".Teams p").should("contain.text", "Number of teams: 1");
  });

  it("doesn't duplicate team names", () => {
    cy.mount(<Teams />);
    const teamName = "Test Team";
    cy.get(".Teams input").type(teamName);
    cy.get(".Teams button[type='submit']").click();
    cy.get(".Teams input").type(teamName);
    cy.get(".Teams button[type='submit']").click();
    cy.get(".Teams input").should("have.value", "Team already exists");
  });

  it("requires team name to be entered", () => {
    cy.mount(<Teams />);
    cy.get(".Teams button[type='submit']").click();
    cy.get(".Teams li").should("not.exist");
    cy.get(".Teams p").should("contain.text", "Number of teams: 0");
  });

  it("renders finalists field", () => {
    cy.mount(<Teams />);
    cy.get(".Finalise").click();
    cy.mount(<Finalists teamName={[]} />);
  });
});
