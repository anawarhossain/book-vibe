# Book Vibe

Book Vibe is a React + Vite application for browsing and managing book-related pages. It uses Tailwind CSS and daisyUI for styling, with React Router for client-side navigation.

## Features

- Home page
- Listed books page
- Pages to read page
- Sign in and Sign up pages
- 404 Not Found handling for unknown routes

## Project structure

- `src/main.jsx` — app entry point
- `src/router/Router.jsx` — route configuration
- `src/layout/MainLayout.jsx` — shared layout and navigation
- `src/pages/` — page components for home, listed books, pages to read, sign in/up, and not found
- `src/assets/` — static images and icons
- `src/data/booksData.json` — book data

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Dependencies

- `react`
- `react-dom`
- `react-router`
- `tailwindcss`
- `@tailwindcss/vite`
- `daisyui`

## Notes

This project is configured as an ES module app with Vite and ESLint. If you want to add TypeScript later, install the TypeScript dependencies and update the Vite configuration accordingly.
