# AGENTS.md

This document provides guidelines for agentic coding agents working in this repository.

## Project Overview

SharpNote is a Next.js 16 PWA application for Markdown note-taking with local-first storage (IndexedDB via Dexie). The project uses TypeScript, React 19, Tailwind CSS v4, and follows a component-based architecture.

## Build Commands

```bash
# Install dependencies (requires pnpm 8.15.9)
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Type checking
pnpm run type

# Linting
pnpm run lint

# Prettier check (format validation)
pnpm run check

# Formatting (write changes)
pnpm run format
```

## Code Style Guidelines

### Imports

```typescript
// React imports (named)
import { FC, ReactNode } from "react";

// Next.js imports (mixed)
import { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";

// Third-party libraries (default + named)
import Dexie, { Table } from "dexie";
import { HiOutlineCheckCircle } from "react-icons/hi";

// Path aliases for internal modules
import Header from "#/header.tsx";
import { createNote } from "@lib/db.ts";
import "@styles/main.css";
```

### Path Aliases

Configure imports using these aliases defined in `tsconfig.json`:

- `#/*` → `src/components/*`
- `@/*` → `src/app/*`
- `@hooks/*` → `src/hooks/*`
- `@lib/*` → `src/lib/*`
- `@styles/*` → `src/styles/*`
- `~/*` → `./*`

### TypeScript

- Use strict TypeScript with all strict flags enabled
- Prefix all type definitions with `T`:
    ```typescript
    type TNote = { name: string; text: string };
    type TLayoutProps = Readonly<{ children: ReactNode }>;
    ```
- Use `Readonly<{}>` for component props:
    ```typescript
    type TItemProps = Readonly<{
        children?: ReactNode;
        href: string;
    }>;
    ```
- Use `FC<T>` for component types:
    ```typescript
    const Header: FC = () => { ... };
    const Item: FC<TItemProps> = ({ children, href }) => { ... };
    ```

### Naming Conventions

- **Components**: PascalCase (e.g., `Header`, `Footer`, `CTA`)
- **Files**: Match component name (e.g., `header.tsx`, `footer.tsx`)
- **Variables/functions**: camelCase (e.g., `createNote`, `retrieveNote`)
- **Constants**: camelCase or UPPER_SNAKE_CASE for config constants
- **Types**: Prefix with `T` (e.g., `TNote`, `TLayoutProps`)

### ESLint & Formatting

**ESLint Configuration** (`eslint.config.js`):

- Extends `eslint-config-next` with default Next.js rules
- Run `pnpm run lint` to check code quality

**Prettier Configuration** (`prettier.config.js`):

- `tabWidth: 4`, `singleQuote: false`, `semi: true`, `trailingComma: "none"`
- `printWidth: Infinity`, `bracketSpacing: true`
- Run `pnpm run format` before committing to auto-format code
- Run `pnpm run check` to validate formatting

### Components & React Patterns

- Use `"use client"` directive for client-side components
- Use `FC<T>` for functional component typing
- Destructure props with default values when appropriate:
    ```typescript
    const Item: FC<TItemProps> = ({ children = null, href }) => { ... };
    ```
- Use `ReactNode` for children that accept any valid React content
- Use default exports for components:
    ```typescript
    export default Header;
    ```
- Use named exports for utilities and types:
    ```typescript
    export { createNote };
    export { metadata, viewport };
    ```
- Special components use prefixes: `CError`, `CLoading`
- Empty page components follow 8-line template pattern
- Database functions use explicit return types:
    ```typescript
    const createNote: ({ name, text }: TNote) => Promise<undefined> = async ({ name, text }) => {
        // implementation
        return undefined;
    };
    ```

### Error Handling

Use try-catch blocks with proper logging:

```typescript
try {
    await db.notes.add({ name, text });
    console.info("INFO: Note添加成功");
} catch (e) {
    console.error(`ERROR: ${e}`);
    throw e;
}
```

Database initialization with error handling:

```typescript
this.open().catch((e) => {
    console.error(`ERROR: ${e}`);
    throw e;
});
```

### Tailwind CSS

- Use Tailwind v4 with `@import "tailwindcss";` in CSS files
- Use `@tailwindcss/postcss` in PostCSS configuration
- Use dark mode classes: `dark:bg-zinc-950`, `dark:text-zinc-50`
- Use color scheme support with `scheme-light-dark`
- Use `font-serif` for body text (project requirement)
- Color palette: `indigo-700/300` for accent, `zinc-50/950` for backgrounds
- Consistent spacing and layout patterns from existing components

### PWA Configuration

- Configure manifest in `src/app/manifest.ts`
- Set viewport and theme color in layout metadata
- Use proper PWA metadata for app installation
- Ensure proper color scheme support with `scheme-light-dark`

### File Organization

```
src/
├── app/           # Next.js App Router pages, layouts, manifest.ts, robots.ts, sitemap.ts
├── components/    # Reusable UI components
├── lib/           # Utilities and database logic
├── styles/        # Global styles and Tailwind imports
└── hooks/         # Custom React hooks (when added)
```

### Client / Server Components

- Add `"use client"` at the top of files containing:
    - `useState`, `useEffect`, or other hooks
    - Event handlers (onClick, onChange, etc.)
    - Browser-only APIs
- Keep server components as default (no directive needed)

### Console Logging

Follow this pattern for console output:

- `console.info("INFO: ...")` for successful operations (uses Chinese text in practice)
- `console.error(`ERROR: ${e}`)` for errors
- Place initialization messages in global scope

Examples:

```typescript
console.info("INFO: Note添加成功");
console.info("INFO: 数据库创建完成");
console.error(`ERROR: ${e}`);
```
