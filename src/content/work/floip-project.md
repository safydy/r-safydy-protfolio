---
title: FLOIP	Project (Open Source)
publishDate: 2021-01-01 00:00:00
img: /assets/flow-builder.png
img_alt: Flow	Builder interface with a flowchart and a sidebar of components
description: |
  Flows are a modern paradigm for describing the logic of digital information systems that interact with individuals, often for the purpose of (a) collecting data or (b) providing information through interactive requests.
tags:
  - Developer
  - Tech lead (Frontend)
---

## Context

The Flow Interoperability Project(FLOIP) is an open-source project that aims to create a standard for the interoperability of flows across different platforms.
The project is a collaboration between the Viamo Inc/ONA/InSTEDD/UNICEF/Turn/Weni.

The purpose of the project is to enable useful interoperability between Flow-based platforms, and to incentivize the joining of future software tools into an interoperable ecosystem.
That required a standardization of the way flows are described and executed across different platforms.

### My main contributions

Many [repos](https://github.com/FLOIP) were involved in this project, but my main contributions were specifically on 02	repos:
- [Flow Builder](https://github.com/FLOIP/flow-builder): A visual interface for creating and editing flows.
- [Flow Runner](https://github.com/FLOIP/flow-runner):	A runtime for executing flows, and a Typescript interfaces which define	the flow structure.

#### Flow Runner
- Top 2 contributor, +17k	lines of code added, 100 commits.
- Few of my main contributions were:
  - introducing a script to	generate the flow-runner json-schema	from the typescript interfaces.
  - writing ts	interfaces for new flow blocks & flow containers.
  - maintaining the generated json-schema versions (RC2, RC3, RC4).

#### Flow Builder
- Top 1	contributor, +8M	lines of code added, 1.5k	commits.
- Few of my main contributions were:
		- leading the implementation / maintenance of the UI/UX.
  - adding a time travel feature	to handle undo/redo changes.
  - writing the json-schema validator for the flow-builder.
  - adding CI/CD with Travis-CI, and the Github Pages	deployment.

### Main tech stacks

-	Flow Runner: Typescript, Node, Json Schema
- Flow Builder: Vuejs, Vuex/Pinia, Typescript, Json Schema Validator

#### External resources

- Github page link to [quick live demo the flow-builder](https://floip.github.io/flow-builder/#/)
- [Flow specification](https://floip.gitbook.io/flow-specification)
