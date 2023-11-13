# personal-next-template
🍪 | My personal starter for NextJS: TS, Tailwind, HeadlessUI, ESLint, Prettier, Git Hooks

## Features

- Next 14 with page routes
  - React 18
  - TypeScript
- Tailwind CSS 3
- Headless UI
- Built-in code quality tools
  - Linting & Code Formatting
    - ESLint
    - Prettier
  - GitHub Actions
    - Auto-lint on push
    - Auto link issue with PR
- Deployment
  - Optimized Dockerfile
  - Pre-production checklist

## Getting Started

### 1. Clone the repository

You can use any of the following way:

- Using the 'Use this repo as template' button
- Using `degit`:

  ```bash
  pnpx degit angeloanan/personal-next-template YOUR_APP_NAME
  ```

### 2. Install dependencies

```bash
pnpm i
```

### 3. Run the development server

```bash
pnpm dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying [`src/pages/index.tsx`](./src/pages/index.tsx).

## Pre-production Checklist

- [ ] Whitelabel package.json with your project information (enable `private: true` if needed)
- [ ] Lock dependencies version to major
- [ ] Replace SEO configurations at [next-seo.config.js](./next-seo.config.js) and [next-sitemap.config.js](./next-sitemap.config.js)
- [ ] Setup CI/CD that'll automatically deploy the app on update
