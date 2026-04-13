# Book Vibe

Book Vibe is a React + Vite application for browsing, tracking, and managing books. It includes a responsive UI built with Tailwind CSS, daisyUI, and React Router for client-side navigation.

## Features

- Home page with featured books
- Listed Books page with book collection
- Pages To Read page for reading progress tracking
- Sign In and Sign Up pages
- 404 Not Found page for invalid routes
- Recharts visualization and toast notifications

## Project structure

- `src/main.jsx` — application entry point
- `src/router/Router.jsx` — route configuration
- `src/layout/MainLayout.jsx` — shared layout and navigation
- `src/pages/` — page components for home, book lists, read list, auth, and not found
- `src/components/` — reusable UI and page-specific components
- `src/context/BookProvider.jsx` — app state and context provider
- `src/utils/LocalDB.js` — local storage helper functions
- `public/data/booksData.json` — sample book data

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

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

## Available scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint on the project

## Tech stack

- React 19
- Vite
- React Router
- Tailwind CSS
- daisyUI
- Recharts
- React Toastify

## Notes

The project is configured as an ES module app with Vite and ESLint. TypeScript support can be added later by installing TypeScript packages and updating Vite configuration if needed.
