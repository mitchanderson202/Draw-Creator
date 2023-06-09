# Draw-Creator

[![Cypress Tests](https://github.com/mitchanderson202/Draw-Creator/actions/workflows/main.yml/badge.svg)](https://github.com/mitchanderson202/Draw-Creator/actions/workflows/main.yml)

WORK IN PROGRESS

## Demo & Snippets

<img width="1206" alt="draw-creator-img" src="https://user-images.githubusercontent.com/78459081/234442540-f88b2426-5dca-4a34-a432-b8a2b6e5d0ee.png">

---

## Requirements / Purpose

- After about 9 weeks of the 2023 NRL season, I realised a few teams had already played each other twice for the season. It gave me an idea to create a Draw Creator. This is by no means perfect, and a solution to the bad NRL draw. But it's a work in progress.
- Select your teams, add as many or as little as you want.
- Select the Grand Finalists from last year(They will play first game in round 1).
- Select Dates and a draw will be created.

- Live Version: https://draw-e7df2.web.app/

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

---

## Known issues

- Currently, there's a Random Algorithm that is changing the teams between rounds. This isn't a final solution but it works well enough for now. This doesn't stop teams potentially playing eachother on back to back weeks, or playing 1 team once and another 3/4 times throughout the season.
- Nothing to stop you finalising and then going back and continuing adding teams.
- Needs more styling.

---
