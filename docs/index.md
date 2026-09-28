---
layout: home

hero:
  name: Sapiens First
  text: The Handbook
  tagline: "How Sapiens First works: our strategy, organization, operating practices, and field guides."
  actions:
    - theme: brand
      text: Start here
      link: /guide/
    - theme: alt
      text: Find anything
      link: /find
    - theme: alt
      text: Open Atlas
      link: https://sapiensfirst.org/atlas

# Role-based starting points, shown beside the hero (HomePaths.vue)
paths:
  - who: Curious about the movement
    text: Mission and strategy
    link: /strategy/
  - who: Joining as a member
    text: First steps
    link: /guide/getting-started
  - who: Joining the Fellowship
    text: The Fellowship
    link: /guide/fellowship
  - who: Starting or supporting a local group
    text: Starting a local circle
    link: /practices/starting-a-circle
  - who: Taking on a role, including as staff
    text: Roles and circles
    link: /organization/roles-and-circles

# Subject-based routing cards: who's reading, not a verb of the journey
features:
  - title: New here?
    details: Start with the basics — first steps, the Fellowship, and the words we use.
    link: /guide/
  - title: Doing the work?
    details: Objectives, projects, weekly plans, and useful meetings.
    link: /work/
  - title: Organizing locally?
    details: Start a circle, run a gathering, have a conversation, take action.
    link: /practices/
  - title: Looking for current information?
    details: Atlas holds current roles, projects, objectives, and metrics.
    link: https://sapiensfirst.org/atlas
---

## A journey from supporter to organizer

You can understand Sapiens First as a journey from supporter to organizer, but the handbook navigation is organized by subject so information is easy to find.

```mermaid
flowchart TB
  J["<b>Join</b> · find your place"] --> L["<b>Learn</b> · why we exist"] --> O["<b>Organize</b> · how we fit together"]
  O --> B["<b>Build</b> · plan the work"] --> A["<b>Act</b> · do it with others"] --> G["<b>Grow</b> · get better"]
  G -.-> B
  classDef accent fill:#ffd60a,stroke:#111,stroke-width:2px
  class J accent
```

- **Join** — find your place. [Welcome](/guide/)
- **Learn** — understand why we exist. [Mission and strategy](/strategy/)
- **Organize** — see how we fit together. [How we're organized](/organization/)
- **Build** — plan the work. [How we manage work](/work/)
- **Act** — do it with others. [Field guides](/practices/)
- **Grow** — get better. [Measuring and learning](/learning/)

Can't find what you're looking for? [Find anything](/find) routes common questions straight to their answer.
