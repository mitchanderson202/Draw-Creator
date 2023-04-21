# Draw-Creator

[![Cypress Tests](https://github.com/mitchanderson202/Draw-Creator/actions/workflows/main.yml/badge.svg)](https://github.com/mitchanderson202/Draw-Creator/actions/workflows/main.yml)

## Demo & Snippets

- Include hosted link
- Include images of app if CLI or Client App

---

## Requirements / Purpose

- After about 9 weeks of the 2023 NRL season, I realised a few teams had already played each other twice for the season. It gave me an idea to create a Draw Creator. This is by no means perfect, and a solution to the bad NRL draw. But it's a work in progress.
- Select your teams, add as many or as little as you want.
- Select the Grand Finalists from last year(They will play first game in round 1).
- Select Dates and a draw will be created.

- Live Version:

---

## Build Steps

- git clone https://github.com/mitchanderson202/Draw-Creator.git
- npm i
- npm run dev

---

## Design Goals

- I wanted this to be super simple, each Finalisation renders the next component.

---

## Features

- As many or as little teams as you want. If the Teams are uneven, then a BYE will be created each round for a team.
- Last years Grand Finalists play eachother.
- Will create a Draw for as long as you prompt it to.
- Teams won't play eachother 5 times and another 0. It will iterate through each team before they play again.

---

## Known issues

- Remaining bugs, things that have been left unfixed
- Features that are buggy / flimsy

---

## Future Goals

- What are the immediate features you'd add given more time

---

## Change logs

- Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the say. Be specific about the changes that have happened for that day.

### 13/02/2022 - {Theme of changes if applicable}

- Extended the expiry time of JWT tokens on the backend
- Added users to cohort response payload
- Centralized API base URL on frontend using the proxy `package.json` property

---
