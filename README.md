# Canteen Pre-Order & Inventory Portal

A web frontend for pre-ordering meals from a campus canteen: customers browse the live menu, add items to a cart, pick a same-day pickup slot and place an order; canteen staff manage the menu, stock levels and the incoming order queue.

This is the React client for the [`canteen-preorder-portal`](https://github.com/kevin2-cyber/canteen-preorder-portal) Spring Boot API — it has no backend of its own and talks to that service over a session-cookie-authenticated REST API.

## Features

**Customer**
- Browse the active menu by category, with photos, stock status and low-stock warnings
- Cart with live quantity limits against available stock
- Checkout against real-time pickup time slots (respecting canteen operating hours/lead time)
- Order confirmation with a shareable order code
- Track any order by its code, no login required
- Account area: register/login, order history

**Vendor (staff)**
- Separate staff login, scoped to `/vendor` routes
- Menu management: create/edit items, set stock, activate/deactivate, set a photo URL
- Order queue: view active or all orders, advance status (`PENDING → PREPARING → READY_FOR_PICKUP → COMPLETED`, or cancel)

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) with a small set of hand-built, shadcn-style UI primitives (`src/components/ui`)
- [lucide-react](https://lucide.dev/) for icons
- Plain `fetch` wrapper (`src/lib/api.ts`) — no data-fetching library; auth state lives in React context (`src/context`)

## Getting started

Requires Node.js/npm, and the backend running locally on port 8080 (see the backend repo for setup — it needs a PostgreSQL database).

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` and proxies `/api` and `/images` to `http://localhost:8080` (see `vite.config.ts`), so the browser only ever talks to one origin and the backend's session cookie works without CORS configuration.

Other scripts:

```sh
npm run build     # tsc -b && vite build
npm run preview   # preview a production build locally
npm run lint      # eslint
```

### Seeded accounts

The backend's `DataSeeder` creates these on first run:

| Role     | Username/Email            | Password    |
|----------|----------------------------|-------------|
| Customer | `student@example.com`      | `student123`|
| Vendor   | `vendor`                   | `canteen123`|

## Project structure

```
src/
├── pages/
│   ├── customer/    # MenuPage, CheckoutPage, OrderDetailPage, OrderLookupPage, MyOrdersPage, Login/Register
│   └── vendor/      # VendorLoginPage, VendorMenuPage, VendorOrdersPage
├── components/
│   ├── layout/      # CustomerLayout, VendorLayout, ProtectedRoute
│   ├── menu/ orders/ # MenuItemCard, OrderStatusBadge
│   └── ui/           # Button, Card, Input, Badge, Spinner, EmptyState, icons
├── context/          # CustomerAuthContext, VendorAuthContext, CartContext, ToastContext
└── lib/
    ├── api.ts        # fetch wrapper (credentials, error shapes, 401 handling)
    ├── endpoints.ts   # typed calls per backend controller
    ├── types.ts       # DTOs mirrored from the backend
    └── utils.ts
```

## Deployment

The frontend and backend are deployed separately. In production, either:

- proxy `/api` and `/images` from the frontend host to the backend (e.g. Vercel/Netlify rewrites), keeping requests same-origin so the session cookie works without CORS, or
- enable CORS with credentials on the backend and point `vite.config.ts`'s proxy targets (or an equivalent runtime config) at the deployed backend URL.

## Notes

- Menu photos are served by the backend from `/images/menu/*` (bundled under its `static` resources); vendors can also set an external photo URL when creating/editing an item.
- There's no vendor "who am I" endpoint on the backend, so the vendor session is optimistically cached in `sessionStorage` after login and cleared on any `401` from a `/vendor/*` call (see `VendorAuthContext`).
