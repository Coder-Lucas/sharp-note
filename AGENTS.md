# AGENTS.md

This document provides guidelines for agentic coding agents working in this repository.

## Project Overview

SharpNote is a Next.js 16 PWA application for Markdown note-taking with local-first storage (IndexedDB via Dexie). The project uses TypeScript, React 19, Tailwind CSS v4, and follows a component-based architecture.

## Environment Requirements

- **Node.js**: 22.15.1
- **pnpm**: 8.15.9
- **TypeScript**: 5.9.3
- **ESLint**: 9.39.2
- **Prettier**: 3.8.1

## Build Commands

```bash
# Install dependencies (requires pnpm 8.15.9)
pnpm i

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Type checking
pnpm type

# Linting
pnpm lint

# Prettier check (format validation)
pnpm check

# Formatting (write changes)
pnpm format
```

## Editor Configuration

The project uses `.editorconfig` for basic editor settings:

- charset: UTF-8

## Code Style Guidelines

### Imports

Organize imports in the following order:

1. React imports (named)
2. Next.js imports (mixed)
3. Third-party libraries (default + named)
4. Path aliases for internal modules

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

- Use strict TypeScript with all strict flags enabled (`strict: true`, `alwaysStrict: true`)
- Prefix all type definitions with `T`:
    ```typescript
    type TNote = {
        readonly id: string;
        readonly name: string;
        readonly text: string;
        readonly time: string;
    };
    type TRootLayoutProps = {
        readonly children: ReactNode;
    };
    ```
- Use `Readonly<{}>` for component props when additional type safety is needed:
    ```typescript
    type TItemProps = Readonly<{
        readonly children?: ReactNode;
        readonly href: string;
    }>;
    ```
- Use `FC<T>` for component types:
    ```typescript
    const Header: FC = () => { ... };
    const Item: FC<TItemProps> = ({ children, href }) => { ... };
    ```
- Use explicit return types for database functions:
    ```typescript
    const createNote: ({ name, text }: TNote) => Promise<undefined> = async ({ name, text }) => {
        // implementation
        return undefined;
    };
    ```

### Naming Conventions

- **Components**: PascalCase (e.g., `Header`, `Footer`, `CTA`, `Index`)
- **Files**: Match component name (e.g., `header.tsx`, `footer.tsx`, `button.tsx`)
- **Variables/functions**: camelCase (e.g., `createNote`, `retrieveNote`, `init`)
- **Constants**: camelCase or UPPER_SNAKE_CASE for config constants
- **Types**: Prefix with `T` (e.g., `TNote`, `TRootLayoutProps`, `TItemProps`)
- **Classes**: PascalCase (e.g., `SharpNoteDB`)
- **Database utility functions**: PascalCase prefixed with class name (e.g., `SharpNoteDB.uuid()`)

### ESLint & Formatting

**ESLint Configuration** (`eslint.config.js`):

```javascript
import Config from "eslint-config-next";
import { defineConfig } from "eslint/config";

const config = defineConfig([...Config]);
export default config;
```

- Extends `eslint-config-next` with default Next.js rules
- Run `pnpm lint` to check code quality

**Prettier Configuration** (`prettier.config.js`):

```javascript
const config = {
    arrowParens: "always",
    bracketSpacing: true,
    embeddedLanguageFormatting: "off",
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "ignore",
    jsxSingleQuote: false,
    objectWrap: "preserve",
    plugins: ["prettier-plugin-tailwindcss"],
    printWidth: Infinity,
    semi: true,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "none"
};
export default config;
```

- Run `pnpm format` before committing to auto-format code
- Run `pnpm check` to validate formatting

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
- Use named exports for utilities, types, and metadata:
    ```typescript
    export { createNote };
    export { metadata, viewport };
    ```
- Special components use prefixes: `NextError`, `NextLoading`, `RootLayout`
- Page components use PascalCase naming (e.g., `Index`, `Manifest`)
- Database functions use explicit return types

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
async init() {
    try {
        this.version(1).stores({
            notes: "id, name, text, time"
        });
        await this.open();
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
    return undefined;
}
```

### Tailwind CSS

- Use Tailwind v4 with `@import "tailwindcss";` in CSS files
- Use `@tailwindcss/postcss` in PostCSS configuration
- Use dark mode classes: `dark:bg-zinc-950`, `dark:text-zinc-50`
- Use color scheme support with `scheme-light-dark`
- Use `font-serif` for body text (project requirement)
- Color palette: `indigo-700/300` for accent, `zinc-50/950` for backgrounds
- Consistent spacing and layout patterns from existing components
- Use utility classes for transitions: `transition-colors duration-200 ease-in-out`
- Use `backdrop-blur-xs` and `backdrop-saturate-150` for glassmorphism effects
- Use flow layout: `flow-root` for main containers

### PWA Configuration

- Configure manifest in `src/app/manifest.ts`
- Set viewport and theme color in layout metadata
- Use proper PWA metadata for app installation
- Ensure proper color scheme support with `scheme-light-dark`
- Theme color: `oklch(98.5% 0 0)`
- Background color: `oklch(14.1% 0.005 285.823)`

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
- Database operations typically require `"use client"` due to browser-only IndexedDB

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

### Database Patterns (Dexie.js)

- Extend `Dexie` class for database operations
- Define tables using `Table<T, K, T>` generic types
- Use `version().stores()` to define schema
- Initialize with `async init()` method
- Return `undefined` explicitly from init methods
- Use static methods for utility functions like UUID generation

```typescript
class SharpNoteDB extends Dexie {
    notes: Table<TNote, string, TNote> = undefined!;

    static uuid() {
        return v7();
    }

    constructor() {
        super(SharpNoteDB.name);
        return this;
    }

    async init() {
        try {
            this.version(1).stores({
                notes: "id, name, text, time"
            });
            await this.open();
        } catch (e) {
            console.error(`ERROR: ${e}`);
            throw e;
        }
        return undefined;
    }
}

const db: SharpNoteDB = new SharpNoteDB();
db.init().then();

export { SharpNoteDB };
export default db;
```

### Metadata Configuration

- Use named exports for `metadata` and `viewport` objects
- Configure viewport with `colorScheme: "light dark"` and theme color
- Use proper Chinese locale settings: `lang="zh-Hans-CN"`
- Include comprehensive metadata for PWA and SEO

```typescript
const metadata: Metadata = {
    authors: {
        name: "Lucas",
        url: "https://github.com/Coder-Lucas"
    },
    applicationName: "SharpNote",
    description: "...",
    icons: [...],
    manifest: "/manifest.webmanifest",
    title: "SharpNote"
};

const viewport: Viewport = {
    colorScheme: "light dark",
    themeColor: "oklch(98.5% 0 0)"
};
```

### Image and Link Usage

- Use `preload={true}` for critical images (favicon)
- Use `prefetch={true}` for navigation links
- Specify `alt`, `height`, `width` for all images
- Use relative paths for internal navigation

```typescript
<Image alt="favicon" height={48} preload={true} src="/favicon.svg" width={48} />
<Link href="/" prefetch={true}>...</Link>
```

### Component Structure Examples

**Simple Functional Component:**

```typescript
"use client";

import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="mt-32 flex h-24 w-full items-center justify-center bg-indigo-700 dark:bg-indigo-300">
            <small className="text-sm text-zinc-50 dark:text-zinc-950">Copyright © 2025-2026 Lucas</small>
        </footer>
    );
};

export default Footer;
```

**Component with Props:**

```typescript
import { FC, ReactNode } from "react";

type TButtonProps = {
    readonly children?: ReactNode;
    readonly onClick: () => unknown;
};

const Button: FC<TButtonProps> = ({ children = null, onClick }) => {
    return (
        <button className="rounded-lg bg-indigo-700 dark:bg-indigo-300 px-8 py-4 text-lg text-zinc-50 dark:text-zinc-950" onClick={onClick} type="button">
            {children}
        </button>
    );
};

export default Button;
```

**Navigation Item Component:**

```typescript
"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";

type TItemProps = {
    readonly children?: ReactNode;
    readonly href: string;
};

const Item: FC<TItemProps> = ({ children = null, href }) => {
    return (
        <li className="h-16 w-auto">
            <Link href={href} prefetch={true}>{children}</Link>
        </li>
    );
};

export default Item;
```
