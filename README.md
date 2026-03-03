# ZavaCore Prototype

A React component library and application template built with TypeScript, Tailwind CSS, and Fluent UI icons.

**Live site:** https://promptfoundry.github.io/ZavaCore/

---

## Pages

| Route | Description |
|---|---|
| `/` | ZavaCore Agent — full app with nav, header, chat, and widgets |
| `/sharepoint` | SharePoint-style intranet demo |
| `/gallery` | Component gallery with live previews |

---

## Getting Started

```bash
npm install
npm run dev
```

Local dev runs at `http://localhost:5173/`.

```bash
npm run build   # production build
```

---

## Using ZavaCore_Start in another project

The `ZavaCore_Start` template depends on specific packages, assets, styles, and config. Follow all steps or the UI will be broken.

### 1. Install required dependencies

```bash
npm install @fluentui/react-icons @heroicons/react react-router-dom
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

### 2. Copy assets

All icons and images are referenced from `/assets/` and must be in your `public/` folder.

```bash
git clone https://github.com/PromptFoundry/ZavaCore.git /tmp/ZavaCore
cp -r /tmp/ZavaCore/public/assets public/assets
```

### 3. Configure Tailwind

`tailwind.config.js`:
```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

`postcss.config.js`:
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 4. Add global styles

In your `src/index.css`:
```css
@import "tailwindcss";

:root {
  font-family: system-ui, 'Segoe UI', Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  overflow-x: hidden;
}

* { -webkit-tap-highlight-color: transparent; }
*:focus { outline: none !important; box-shadow: none !important; }
button { outline: none !important; user-select: none; }
```

Make sure `index.css` is imported in `main.tsx`:
```tsx
import './index.css'
```

### 5. Add the template

`src/App.tsx`:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ZavaCore_Start } from './lib';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ZavaCore_Start />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Project Structure

```
src/
├── lib/                          # Reusable component library
│   ├── shells/                   # Full-page layout templates
│   │   ├── ZavaCore_Start/       # Full ZavaCore app template
│   │   ├── StandardShell/        # Nav + header shell
│   │   ├── MinimalShell/         # Header-only shell
│   │   └── SharePointShell/      # SharePoint-style shell
│   └── primitives/               # Low-level building blocks
│       ├── AppShell.tsx          # Base layout (nav + header + content)
│       ├── AppHeader.tsx         # Header with breadcrumbs and actions
│       ├── AppRail/              # Vertical icon navigation bar
│       ├── Navigation.tsx        # Sidebar navigation with sections
│       ├── SharePointHeader/     # SharePoint-style header with search
│       └── CatalystPanel/        # AI assistant side panel
├── components/                   # App-specific components
│   ├── Layout.tsx                # Root ZavaCore app layout
│   ├── Header.tsx                # ZavaCore app header
│   ├── LeftNav.tsx               # ZavaCore left navigation
│   ├── ChatInput.tsx             # Chat input with tools/sources
│   ├── SiteHeader.tsx            # SharePoint-style site header
│   ├── HeroSection.tsx           # Hero carousel section
│   ├── CarouselSection.tsx       # Carousel component
│   ├── EngageSection.tsx         # Engage / community section
│   ├── NewsSection.tsx           # News cards section
│   ├── EventsSection.tsx         # Events section
│   ├── QuickLinksSection.tsx     # Quick links grid
│   ├── EngageWidget.tsx          # Engagement widget
│   ├── LearningWidget.tsx        # Learning courses widget
│   ├── BenefitsWidget.tsx        # Employee benefits widget
│   ├── WidgetContainer.tsx       # Reusable widget wrapper
│   ├── EntityCard.tsx            # File/document entity card
│   ├── CoworkerCard.tsx          # Coworker activity card
│   ├── ActivityCard.tsx          # Work activity card
│   ├── QuickActions.tsx          # Quick actions bar
│   ├── PromptStarter.tsx         # AI prompt suggestion card
│   ├── AnimatedLoader.tsx        # Copilot loading animation
│   ├── LoadingDots.tsx           # Animated loading dots
│   └── RightPanel.tsx            # Slide-in right panel
└── pages/
    ├── ComponentGallery.tsx      # Live component gallery
    └── SharePointDemo.tsx        # SharePoint intranet demo
```

---

## Shells

Pre-configured layout templates — drop in and go.

### ZavaCore_Start

The full ZavaCore application: left nav, header, hero card, agent chat interface, and all widgets.

> **Required:** Copy the `public/assets/` folder from this repo into your project's `public/` folder. All icons and images are referenced from `/assets/` and must be present for the template to render correctly.
>
> ```bash
> git clone https://github.com/PromptFoundry/ZavaCore.git /tmp/ZavaCore
> cp -r /tmp/ZavaCore/public/assets public/assets
> ```

```tsx
import { ZavaCore_Start } from './lib';

export default function App() {
  return <ZavaCore_Start />;
}
```

### StandardShell

Full layout with collapsible sidebar navigation and header.

```tsx
import { StandardShell } from './lib';

<StandardShell
  config={{
    branding: { logo: '/logo.svg', name: 'My App' },
    navigation: [{ items: [{ id: 'home', label: 'Home', icon: <HomeIcon /> }] }],
    headerActions: [{ id: 'new', label: 'New', variant: 'primary' }],
    user: { avatar: '/avatar.jpg', name: 'Jane Doe' },
  }}
>
  <YourContent />
</StandardShell>
```

### MinimalShell

Header-only shell, ideal for landing pages or simple apps.

```tsx
import { MinimalShell } from './lib';

<MinimalShell
  config={{
    branding: { logo: '/logo.svg', name: 'My App' },
    headerActions: [{ id: 'login', label: 'Log In', variant: 'ghost' }],
  }}
>
  <YourContent />
</MinimalShell>
```

### SharePointShell

SharePoint-style layout with full-width header, AppRail, and optional Catalyst AI panel.

```tsx
import { SharePointShell } from './lib';

<SharePointShell
  header={{ logo: '/logo.svg', siteName: 'SharePoint', actions: [...] }}
  appRail={{ items: [...], defaultSelectedId: 'home' }}
>
  <YourContent />
</SharePointShell>
```

---

## Primitives

Low-level building blocks to compose custom layouts.

| Component | Description |
|---|---|
| `AppShell` | Base layout: wraps nav, header, content, right panel |
| `AppHeader` | Header with logo, breadcrumbs, and action buttons |
| `AppRail` | Vertical icon nav bar (VS Code-style activity bar) |
| `Navigation` | Sidebar nav with sections, badges, and user profile |
| `SharePointHeader` | SharePoint header with grid icon, search, and actions |
| `CatalystPanel` | AI assistant side panel with chat and prompt starters |

---

## Widgets

| Component | Description |
|---|---|
| `WidgetContainer` | Card wrapper with header, body, and footer action slots |
| `EngageWidget` | Community posts and engagement feed |
| `LearningWidget` | Learning courses and training progress |
| `BenefitsWidget` | Employee benefits information |

### WidgetContainer

```tsx
import WidgetContainer from './components/WidgetContainer';

<WidgetContainer
  title="My Widget"
  headerActions={<SettingsIcon />}
  footerActions={[{ id: 'view', label: 'View All' }]}
>
  <div>Your content</div>
</WidgetContainer>
```

---

## Design Tokens

| Token | Value |
|---|---|
| Primary | `#464FEB` |
| Text | `#242424` |
| Secondary text | `#616161` |
| Border | `#e0e0e0` |
| Background | `#f5f5f5` |
| Card shadow | `0px 8px 16px rgba(0,0,0,0.14), 0px 0px 2px rgba(0,0,0,0.12)` |
| Card radius | `24px` |
| Input radius | `28px` |
| Font | Segoe UI |

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Fluent UI Icons** — Microsoft icon set
- **Heroicons** — supplemental icons
- **React Router v6** — routing

---

## Deployment

Deployed automatically to GitHub Pages on every push to `main` via GitHub Actions.

The workflow: builds with Vite → copies `dist/index.html` to `dist/404.html` (fixes SPA deep-link 404s) → deploys to Pages.
