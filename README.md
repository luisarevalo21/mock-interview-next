# React Mock Interview: Products + Cart

A simple React/Next.js app that:

- Fetches products from an external API
- Displays a product grid with image, title, and price
- Adds/removes items from a cart
- Updates a running total in the UI

Core implementation lives in [src/app/page.tsx](src/app/page.tsx), see [`Home`](src/app/page.tsx), [`handleAddToCart`](src/app/page.tsx), and [`handleRemoveFromCart`](src/app/page.tsx).

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4

Key files:

- [src/app/page.tsx](src/app/page.tsx) — UI, fetch, cart logic
- [src/app/layout.tsx](src/app/layout.tsx) — root layout
- [src/app/globals.css](src/app/globals.css) — global styles
- [package.json](package.json) — scripts and deps
- [next.config.ts](next.config.ts) — Next.js config

## Getting Started

- Requirements: Node 18+
- Install deps:
  ```bash
  npm install
  ```
- Run dev server:
  ```bash
  npm run dev
  ```
- Open http://localhost:3000

Build and start:

```bash
npm run build
npm start
```

## How It Works

- Data fetching: On mount, [`Home`](src/app/page.tsx) uses `useEffect` to fetch from https://fakestoreapi.com/products and stores the result in `clothes`.
- Cart management: The cart is a `Product[]`. Clicking:
  - “+” calls [`handleAddToCart`](src/app/page.tsx) to append the item.
  - “–” calls [`handleRemoveFromCart`](src/app/page.tsx) to filter it out by `id`.
- Total: Displayed top-right using `reduce` and `toFixed(2)`. Formula: $total=\sum_{i=1}^{n} price_i$.

## Possible Enhancements

- Prevent duplicates or add quantity controls
- Show cart item count
- Loading/error states for fetch
- Persist cart in localStorage
- Price formatting with Intl APIs
