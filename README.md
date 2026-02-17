# Component Library

A modern React component library built with TypeScript, Tailwind CSS, and Fluent UI icons.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the main app, and `/gallery` to explore all components.

### Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── lib/                      # Core reusable library
│   ├── shells/              # Complete layout compositions
│   │   ├── StandardShell/   # Full-featured shell with nav + header
│   │   ├── MinimalShell/    # Simple shell with header only
│   │   └── CatalystShell/   # Modern shell with SharePoint header + AppRail + Catalyst panel
│   └── primitives/          # Low-level building blocks
│       ├── AppShell.tsx     # Base shell layout
│       ├── AppHeader.tsx    # Application header with actions
│       ├── AppRail/         # Vertical icon navigation
│       ├── Navigation/      # Sidebar navigation
│       ├── SharePointHeader/ # SharePoint-style header
│       └── CatalystPanel/   # AI assistant panel
├── components/              # UI components
│   ├── WidgetContainer.tsx  # Reusable widget wrapper
│   ├── EngageWidget.tsx     # Engagement widget
│   ├── LearningWidget.tsx   # Learning widget
│   ├── BenefitsWidget.tsx   # Benefits widget
│   ├── EntityCard.tsx       # Entity display card
│   ├── QuickActions.tsx     # Quick actions component
│   ├── PromptStarter.tsx    # AI prompt starter
│   ├── AnimatedLoader.tsx   # Loading animation
│   └── ChatInput.tsx        # Chat input component
└── pages/
    └── ComponentGallery.tsx # Component showcase
```

## 🎨 Component Library Architecture

### Shells (Complete Layouts)

Pre-configured compositions that combine multiple primitives into full-page layouts.

#### StandardShell
Full-featured shell with navigation sidebar and header.

```tsx
import { StandardShell } from './lib';

<StandardShell
  config={{
    branding: { logo: '/logo.svg', name: 'My App' },
    navigation: [{ items: [...] }],
    headerActions: [...],
    user: { avatar: '/avatar.jpg', name: 'John Doe' }
  }}
>
  <YourContent />
</StandardShell>
```

#### MinimalShell
Simple shell with header only - perfect for landing pages.

```tsx
import { MinimalShell } from './lib';

<MinimalShell
  config={{
    branding: { logo: '/logo.svg', name: 'My App' },
    headerActions: [...]
  }}
>
  <YourContent />
</MinimalShell>
```

#### CatalystShell
Modern shell combining SharePointHeader, AppRail, and CatalystPanel.

```tsx
import { CatalystShell } from './lib';

<CatalystShell
  header={{
    logo: '/logo.svg',
    siteName: 'SharePoint',
    actions: [...]
  }}
  appRail={{
    items: [...]
  }}
>
  <YourContent />
</CatalystShell>
```

### Primitives (Building Blocks)

Low-level reusable components that can be composed together.

#### AppShell
Base shell layout with header, optional navigation, and right panel support.

#### AppHeader
Application header with breadcrumbs, actions, and mobile toggle.

#### AppRail
Vertical icon-based navigation bar (like VS Code activity bar).

#### Navigation
Sidebar navigation with sections, items, and user profile.

#### SharePointHeader
SharePoint-style header with grid menu, logo, search, and actions.

#### CatalystPanel
AI assistant panel with chat interface and prompt starters.

## 🎯 Widgets

### WidgetContainer
Extensible container for creating custom widgets with header, body, and footer sections.

```tsx
<WidgetContainer
  title="Widget Title"
  headerActions={<SettingsIcon />}
  footerActions={[
    { id: 'action1', label: 'Button', icon: <Icon /> }
  ]}
>
  <YourContent />
</WidgetContainer>
```

### Pre-built Widgets
- **EngageWidget** - Community engagement and activity
- **LearningWidget** - Learning courses and training
- **BenefitsWidget** - Employee benefits information

## 🔧 Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Fluent UI Icons** - Microsoft icon library
- **Heroicons** - Additional icons
- **React Router** - Routing

## 📦 Usage Examples

### Using Primitives Directly

```tsx
import { AppShell, AppHeader, Navigation } from './lib/primitives';

<AppShell
  header={<AppHeader logo="/logo.svg" actions={[...]} />}
  nav={<Navigation sections={[...]} />}
>
  <MainContent />
</AppShell>
```

### Creating Custom Widgets

```tsx
import { WidgetContainer } from './components/WidgetContainer';

<WidgetContainer
  title="Custom Widget"
  footerActions={[
    { id: '1', label: 'Action', onClick: () => {} }
  ]}
>
  <div>Your custom content</div>
</WidgetContainer>
```

## 🎨 Design System

### Colors
- Primary: `#464FEB` (Fluent Blue)
- Text: `#242424` (Dark Gray)
- Secondary Text: `#616161` (Medium Gray)
- Border: `#e0e0e0` (Light Gray)
- Background: `#f5f5f5` (Off White)

### Typography
- Font Family: Segoe UI
- Header: 16px, 600 weight
- Body: 14px, 400 weight
- Small: 12px, 400 weight

### Spacing
- Border Radius: 24px (cards), 28px (inputs)
- Padding: 20px (cards), 16px (content)
- Gap: 8px (elements), 16px (sections)

## 📝 Component Gallery

Visit `/gallery` in the running app to see all components with live examples and code snippets.

## 🤝 Building New Flows

### Key Principles
1. **Use existing primitives first** - Don't recreate what exists
2. **Compose shells** - Start with StandardShell, MinimalShell, or CatalystShell
3. **Build on WidgetContainer** - Use for new card-based components
4. **Follow design system** - Maintain consistency in colors, spacing, typography

### Recommended Workflow
1. Browse `/gallery` to see available components
2. Choose a shell that fits your layout needs
3. Compose primitives and widgets together
4. Create custom components only when necessary
5. Add new components to the gallery for others to use

## 📄 License

Internal use only.
