# Docs Site for IBM Repos 📖
A a single common repo documentation site using carbon (ibm design language) and mdx framework (markdown with react flavor).

**Solves pain points**
1. A single README is messy for use cases outside of a quick get started.
2. Markdown by itself does not provide easy extensibility and interactive customizability.
3. Lack of IBM design language, look, and feel.

**Deployment Instructions**<br/>
Add the repo name of your project where your docs will live:
- In the `"name"` json field for [`package.json`](./package.json).
- In the `base:` key value field for [`vite.config.ts`](./vite.config.ts).

> Note: Still in early stages of development and still needs features such as "Search Docs", UX improvements.
