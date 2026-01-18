# AGENTS.md

This guide is for agentic coding assistants working in the SharpNote repository.

## Commands

### Development

- `pnpm run dev` - Start development server (default port 3000)
- `pnpm run build` - Production build
- `pnpm run start` - Start production server

### Code Quality

- `npx eslint .` - Run ESLint on all files
- `npx tsc --noEmit` - TypeScript type checking (no output)
- `npx prettier --check .` - Check code formatting

### Important Notes

- No test framework is currently configured
- When adding tests, check README.md for preferred testing approach
- Always run lint and typecheck after making changes

## Code Style Guidelines

### Imports

- Use namespace imports for libraries: `import * as react from "react";`
- Use default imports for components: `import Header from "#/header.tsx";`
- Use named imports for utilities when needed
- Always use path aliases:
    - `@/*` → `app/*` (Next.js app directory)
    - `#/*` → `components/*` (reusable components)
    - `~/*` → `lib/*` (utilities and database)

### Types

- Prefix type definitions with `T`: `type TProps`, `type TNote`
- Use `Readonly<>` for component props: `type TProps = Readonly<{ children: react.ReactNode; }>`
- Use explicit `react.FC` typing: `const Component: react.FC = () => {}`
- Use React.ReactNode for children props
- Export types when used in multiple files

### Components

- Use PascalCase for component names
- Use `export default` for components
- Add `"use client";` directive at top for client components
- Define type props above component when used only there
- Keep components pure and side-effect free (use hooks for state/effects)

### Formatting

- Indentation: 4 spaces
- Line width: 1024 characters
- Quotes: Double quotes for strings/imports
- Semicolons: Required
- Trailing commas: Disabled
- Arrow function parentheses: Always required: `(x) => x`
- Single quotes: Disabled (use double quotes)

### Naming Conventions

- Components: PascalCase (Header, Button, Index)
- Functions/Variables: camelCase (createNote, db, metadata)
- Types/Interfaces: PascalCase with T-prefix (TProps, TLayoutProps, TNote)
- Constants: UPPER_SNAKE_CASE for global constants
- File names: kebab-case for pages, PascalCase for components

### Error Handling

- Use try-catch for async operations with database/API calls
- Log errors to console with template literals: `console.error(\`ERROR: \${e}\`);`
- Log info with descriptive messages: `console.info("INFO: Note添加成功");`
- Return `undefined` for void functions when needed
- Avoid throwing errors in async DB operations, log and handle gracefully

### TypeScript

- Strict mode is enabled
- Path aliases are configured (see tsconfig.json)
- Use ESNext modules
- Type all function parameters and return types
- Prefer explicit types over inference for public APIs

### React Best Practices

- Use `"use client";` directive for interactive components
- Keep components small and focused
- Use functional components with hooks
- Prefer client components for interactivity, server components for static content
- Use fragment `<>...</>` for multiple root elements

## Project Structure

```
├── app/              # Next.js App Router (pages and routes)
│   ├── layout.tsx    # Root layout
│   ├── globals.css   # Global styles (Tailwind)
│   └── ...pages/     # Route-specific pages
├── components/       # Reusable UI components
├── lib/             # Utilities, database (Dexie/IndexedDB)
├── hooks/           # Custom React hooks
└── public/          # Static assets
```

## Database (Dexie)

- Database name: "notes"
- Notes table with `name` and `text` fields
- All DB operations are async and return Promise
- Error handling: log errors, don't throw
- Pattern: define operation functions, export them, use in components

## Testing

- Currently no test framework configured
- When adding tests, choose appropriate framework (Jest/Vitest)
- Follow project's testing patterns once established
- Test critical paths: database operations, component rendering

## Specific Patterns

### Type Definition

```typescript
type TProps = Readonly<{
    children?: react.ReactNode;
    href: string;
}>;
```

### Client Component

```typescript
"use client";

import * as react from "react";

const Component: react.FC = () => {
    return <div>...</div>;
};

export default Component;
```

### Async Function with Error Handling

```typescript
const createNote: ({ name, text }: TNote) => Promise<undefined> = async ({ name, text }) => {
    try {
        await db.notes.add({ name, text });
        console.info("INFO: Note添加成功");
    } catch (e) {
        console.error(`ERROR: ${e}`);
    }
    return undefined;
};
```

## Additional Notes

- Uses Tailwind CSS 4.x with PostCSS
- Local-first: all data stored in browser (IndexedDB via Dexie)
- PWA-ready with manifest and service worker support
- Dark mode support via Tailwind dark: prefix
- Chinese language primary (zh-cmn-Hans-CN)
