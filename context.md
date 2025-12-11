# WeBroPk Project Context

## 1. Project Overview

**WeBroPk** is a high-end, modern digital agency website built with Next.js 15. It serves as a client acquisition platform offering services like Shopify Store Creation, Meta Ads, and Digital Marketing. The project emphasizes a "premium" aesthetic using complex gradients, glassmorphism, and Framer Motion animations.

## 2. Tech Stack & Dependencies

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + `clsx` + `tailwind-merge`
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) (Radix Primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Authentication:** [Auth.js (NextAuth v5)](https://authjs.dev/)
- **Database:** [PostgreSQL (Neon)](https://neon.tech/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Validation:** [Zod](https://zod.dev/)

## 3. Architecture & Folder Structure

### `/app`

The core application router.

- `(auth)`: Contains `signin` and `signup` pages (Route Groups).
- `(dashboard)`: Protected routes for user dashboards (`/dashboard/[username]`).
- `(services)`: Landing pages for specific services (e.g., `/shopify-store-creation`).
- `(otherpages)`: Static pages like `about`, `team`, `contact`, `FAQ`, `pricing`.
- `api/auth/[...nextauth]`: NextAuth route handler.

### `/components`

- `ui`: Reusable UI components (Buttons, Cards, Inputs).
- `hero-section.tsx`: complex animated hero with carousel.
- `header.tsx`: Global navigation.
- `features-3.tsx`: Usage of service cards.

### `/lib`

- `db`: Database connection instantiation (`index.ts`) and Schema definitions (`schema.ts`).
- `utils.ts`: Helper functions (cn).

### `/actions`

- Server Actions for form submissions and data fetching.
- `register.ts`: Handles user signup logic.
- `user.ts`: Fetches user profile data.

## 4. Environment Variables

Required `.env.local` keys:

```bash
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
AUTH_SECRET="your-generated-secret-key"
```

## 5. Key Workflows

### Authentication

- Uses **Credentials Provider** (Username/Password).
- Passwords are hashed using `bcryptjs`.
- Session management via JWT strategy.
- Protected Middleware (`middleware.ts`) ensures dashboard access is restricted.

### Data Flow

1.  **Signup:** User submits form -> `actions/register.ts` -> Drizzle Insert -> Redirect to Dashboard.
2.  **Signin:** User submits form -> `signIn` (NextAuth) -> `authorize` callback -> Session Created.
3.  **Dashboard:** Server Component fetches data via `actions/user.ts` -> Renders User Info.

### Design System

- **Colors:** heavily relies on Zinc (Neutrals) and specific brand colors per service (e.g., Green for Shopify, Blue for Meta).
- **Animations:** Scroll-triggered animations using `Framer Motion` (`whileInView`, `initial`, `animate`).
- **Dark Mode:** Supported via Tailwind's `dark:` classes, though some pages enforce specific themes (Light/Dark).

## 6. Setup & Installation

1.  **Clone Repository:** `git clone ...`
2.  **Install Deps:** `npm install`
3.  **Setup Env:** Create `.env.local` with DB and Auth keys.
4.  **Run Migrations:** `npx drizzle-kit push` (if schema changes).
5.  **Start Dev:** `npm run dev`

## 7. Troubleshooting

- **Database Connection:** specific issues with `Process.env` loading were resolved by fixing import orders and ensuring `dotenv` is not manually invoked in Next.js environment (Next loads it automatically).
- **Module Errors:** previous errors regarding `@convex-dev` were due to legacy code which has since been fully migrated to Neon/Drizzle.
