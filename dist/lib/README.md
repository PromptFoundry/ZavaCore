# Component Library

Reusable UI components for building consistent application layouts.

## 📁 Structure

```
lib/
├── primitives/         # Low-level building blocks
│   ├── AppShell.tsx    # Base shell structure
│   ├── Navigation.tsx  # Sidebar navigation
│   ├── AppHeader.tsx   # Top header bar
│   └── index.ts
│
├── shells/             # Pre-configured layouts
│   ├── StandardShell/  # Full-featured app (nav + header)
│   ├── MinimalShell/   # Simple layout (header only)
│   └── index.ts
│
├── layouts/            # Page-specific wrappers (optional)
├── hooks/              # Shared hooks (optional)
├── types/              # Shared types (optional)
└── index.ts            # Main export
```

## 🚀 Quick Start

### Import Components

```tsx
// Import everything from one place
import { StandardShell, MinimalShell, AppShell, Navigation } from './lib';

// Or import specific categories
import { StandardShell } from './lib/shells';
import { AppShell, Navigation } from './lib/primitives';
```

### Use a Pre-built Shell

```tsx
import { StandardShell } from './lib';

function App() {
  const config = {
    branding: { logo: '/logo.svg', name: 'My App' },
    navigation: [
      {
        items: [
          { id: 'home', label: 'Home', icon: <HomeIcon /> }
        ]
      }
    ]
  };

  return (
    <StandardShell config={config}>
      <YourContent />
    </StandardShell>
  );
}
```

## 📦 Components

### Primitives (Building Blocks)

**AppShell** - Base shell structure
- Handles layout with nav, header, content, right panel
- Background customization
- Responsive behavior

**Navigation** - Sidebar navigation
- Sections with items
- Active state management
- Mobile responsive with overlay
- User profile section
- Footer actions

**AppHeader** - Top header bar
- Logo and branding
- Breadcrumbs
- Action buttons
- Mobile nav toggle

### Shells (Pre-configured)

**StandardShell** - Full-featured application layout
- Navigation + Header + Content
- User profile
- Header actions
- Breadcrumbs
- Right panel support

**MinimalShell** - Simple header-only layout
- Header + Content
- No navigation
- Perfect for landing pages, docs

## 🎨 Usage Patterns

### 1. Use Pre-built Shells (Easiest)

Best for: Standard layouts, quick start

```tsx
import { StandardShell } from './lib';

<StandardShell config={shellConfig}>
  <YourPage />
</StandardShell>
```

### 2. Compose Primitives (Flexible)

Best for: Custom layouts, unique requirements

```tsx
import { AppShell, Navigation, AppHeader } from './lib';

<AppShell
  nav={<Navigation sections={navSections} />}
  header={<AppHeader logo="/logo.svg" />}
>
  <YourPage />
</AppShell>
```

### 3. Create New Shell (Reusable)

Best for: Multiple pages with same layout

```tsx
// Create: src/lib/shells/CustomShell/CustomShell.tsx
import { AppShell, Navigation } from '../../primitives';

export default function CustomShell({ config, children }) {
  return (
    <AppShell
      nav={<Navigation {...config.navigation} />}
      backgroundColor={config.theme.bg}
    >
      {children}
    </AppShell>
  );
}

// Export: src/lib/shells/index.ts
export { CustomShell } from './CustomShell';

// Use: anywhere
import { CustomShell } from './lib';
```

## 📖 Documentation

- **QUICK_START.md** - 5-minute setup guide
- **DEPENDENCIES.md** - Required packages
- **COMPONENT_LIBRARY_SETUP.md** - Architecture details
- **SHELL_USAGE_EXAMPLES.md** - Code examples
- **MIGRATION_TO_SHELLS.md** - Convert existing layouts
- **REUSABLE_COMPONENTS.md** - Full API reference

## 🔧 Configuration

### Separate Config from UI

**Good Practice:**

```tsx
// src/config/shells/defaultShell.tsx
export const defaultShellConfig = {
  branding: { logo: '/logo.svg', name: 'My App' },
  navigation: mainNavSections,
  headerActions: headerActions
};

// src/pages/Dashboard.tsx
import { StandardShell } from '../lib';
import { defaultShellConfig } from '../config/shells/defaultShell';

<StandardShell config={defaultShellConfig}>
  <Dashboard />
</StandardShell>
```

### Dynamic Configuration

```tsx
function App() {
  const [selectedNav, setSelectedNav] = useState('home');

  const config = {
    ...baseConfig,
    selectedNavId: selectedNav,
    navigation: navSections.map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        onClick: () => setSelectedNav(item.id)
      }))
    }))
  };

  return <StandardShell config={config}>...</StandardShell>;
}
```

## 🎯 When to Use What

| Component | Use Case | Example |
|-----------|----------|---------|
| **StandardShell** | Full app with navigation | Admin dashboard, SaaS app |
| **MinimalShell** | Simple pages | Landing page, docs site |
| **AppShell + Primitives** | Custom layout | Unique requirements |
| **New Shell** | Reusable variant | Different product area |

## 🔄 Portability

All components in `lib/` are designed to be copied to other projects.

### To use in another project:

1. Copy `src/lib/` folder
2. Install dependencies (see DEPENDENCIES.md)
3. Import and use:
```tsx
import { StandardShell } from './lib';
```

### Dependencies Required:

```bash
npm install react react-dom @fluentui/react-icons @heroicons/react
npm install -D tailwindcss @types/react @types/react-dom typescript
```

## 🏗️ Extending

### Add New Primitive

```tsx
// src/lib/primitives/Sidebar.tsx
export default function Sidebar({ children }) {
  return <aside>{children}</aside>;
}

// src/lib/primitives/index.ts
export { default as Sidebar } from './Sidebar';
```

### Add New Shell

```tsx
// src/lib/shells/SidebarShell/SidebarShell.tsx
import { AppShell, Sidebar } from '../../primitives';

export default function SidebarShell({ config, children }) {
  return (
    <AppShell
      nav={<Sidebar {...config.sidebar} />}
      header={config.showHeader ? <AppHeader /> : undefined}
    >
      {children}
    </AppShell>
  );
}

// src/lib/shells/SidebarShell/index.ts
export { default as SidebarShell } from './SidebarShell';

// src/lib/shells/index.ts
export { SidebarShell } from './SidebarShell';

// src/lib/index.ts (add export)
export { SidebarShell } from './shells';
```

## 💡 Tips

1. **Keep primitives generic** - No business logic, just UI
2. **Make shells opinionated** - Encode patterns and best practices
3. **Use TypeScript** - Export types for better DX
4. **Separate config** - Keep data separate from components
5. **Document patterns** - Help future developers understand choices

## 🤝 Contributing

When adding new components:

1. Add to appropriate folder (primitives/shells/layouts)
2. Create index.ts for barrel export
3. Update parent index.ts
4. Add TypeScript types
5. Document with JSDoc comments
6. Add usage example

## 📝 Type Exports

All types are exported from the main entry:

```tsx
import type {
  // Primitives
  AppShellProps,
  NavigationProps,
  NavSection,
  NavItem,
  AppHeaderProps,
  HeaderAction,
  BreadcrumbItem,
  // Shells
  StandardShellProps,
  StandardShellConfig,
  MinimalShellProps,
  MinimalShellConfig,
} from './lib';
```

---

**Version:** 1.0.0
**Last Updated:** 2026-02-16
**Maintained by:** Your Team
