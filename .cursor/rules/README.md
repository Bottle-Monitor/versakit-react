# Cursor Rules for Versakit-React

This directory contains Cursor AI rules for the Versakit-React component library project.

## 📋 Available Rules

### Always Applied Rules
These rules are automatically applied to every AI conversation:

1. **[project-structure.mdc](mdc:.cursor/rules/project-structure.mdc)**
   - Monorepo structure and organization
   - Package management (pnpm only)
   - Build system and technology stack
   - Import conventions

2. **[monorepo-workflow.mdc](mdc:.cursor/rules/monorepo-workflow.mdc)**
   - pnpm workspace commands and workflow
   - Cross-package dependencies
   - Build order and development workflow
   - Publishing and troubleshooting

### File-Specific Rules (Auto-Applied)
These rules apply automatically when working on matching file types:

3. **[component-patterns.mdc](mdc:.cursor/rules/component-patterns.mdc)**
   - Applies to: `packages/versakit-components/src/**/*.tsx`
   - Component file structure and organization
   - Implementation patterns (forwardRef, exports, etc.)
   - Radix UI integration
   - Composition patterns

4. **[typescript-conventions.mdc](mdc:.cursor/rules/typescript-conventions.mdc)**
   - Applies to: `packages/versakit-components/src/**/*.types.ts`
   - TypeScript interface naming conventions
   - Type extension patterns
   - Props integration with variants
   - Type documentation standards

5. **[tailwind-variants.mdc](mdc:.cursor/rules/tailwind-variants.mdc)**
   - Applies to: `packages/versakit-components/src/**/*.variants.ts`
   - Tailwind Variants (tv) usage patterns
   - Styling conventions and color schemes
   - Variant definitions and defaults
   - Multi-part component variants

6. **[testing-guidelines.mdc](mdc:.cursor/rules/testing-guidelines.mdc)**
   - Applies to: `packages/versakit-components/src/**/*.test.tsx`
   - Test structure and organization
   - Testing categories (rendering, variants, states, etc.)
   - Accessibility testing patterns
   - Query priorities and best practices

7. **[storybook-stories.mdc](mdc:.cursor/rules/storybook-stories.mdc)**
   - Applies to: `apps/storybook/stories/**/*.stories.tsx`
   - Story file structure and patterns
   - Meta configuration and argTypes
   - Story types (variants, sizes, states, showcases)
   - Complex component documentation

8. **[code-quality.mdc](mdc:.cursor/rules/code-quality.mdc)**
   - Applies to: `*.{ts,tsx,js,jsx,json}`
   - Biome linting and formatting rules
   - Code style conventions (tabs, semicolons, etc.)
   - Commit message conventions
   - Import organization

### Manually Fetchable Rules
These can be requested when needed using `/fetch-rules`:

- `component-patterns` - Detailed component development guide
- `typescript-conventions` - TypeScript type system guidelines

## 🚀 Quick Reference

### Creating a New Component
Follow the pattern in [component-patterns.mdc](mdc:.cursor/rules/component-patterns.mdc):
1. Create directory structure with index.tsx, types.ts, variants.ts
2. Implement using React.forwardRef with proper exports
3. Add tests in __test__/ directory
4. Create Storybook story
5. Export from package index

### Running Commands
```bash
pnpm build              # Build all packages
pnpm test               # Run tests in watch mode
pnpm lint               # Check code quality
pnpm storybook:dev      # Start Storybook
```

### Code Style
- Use **tabs** for indentation
- Semicolons **only when needed**
- **120 character** line width
- Use **Biome** for linting (not ESLint/Prettier)

### Package Manager
- **ONLY use pnpm** - npm and yarn are blocked
- Use workspace protocol: `"@versakit/shared": "workspace:*"`

## 📖 Rule Structure

Each rule file uses MDC (Markdown with Metadata) format:

```markdown
---
alwaysApply: true          # Auto-apply to all conversations
# OR
globs: *.tsx               # Auto-apply to matching files
# OR
description: "..."         # Manually fetchable
---

# Rule content in Markdown
```

## 🔄 Updating Rules

When project patterns change:
1. Update relevant .mdc files in this directory
2. Rules automatically apply on next Cursor AI session
3. No restart required

## 📚 Learning Resources

- Component examples: [packages/versakit-components/src](mdc:packages/versakit-components/src)
- Storybook stories: [apps/storybook/stories](mdc:apps/storybook/stories)
- Test examples: Look for `__test__/` directories in components

