# Portfolio

Monorepo for the portfolio website and its API.

## Structure

- `web` — React and TypeScript frontend built with Vite.
- `api` — Node.js API. The current implementation is experimental and will be
  rebuilt before production deployment.

## Commands

Run commands from the repository root:

```bash
yarn dev
yarn build
yarn lint
yarn test
yarn preview
```

The existing GitHub Pages deployment remains available through:

```bash
yarn deploy:github
```
