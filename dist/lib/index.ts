// Main library export - Import everything from one place

// Primitives - Low-level building blocks
export {
  AppShell,
  Navigation,
  AppHeader,
  AppRail,
  SharePointHeader,
  CatalystPanel,
} from './primitives';

export type {
  AppShellProps,
  NavigationProps,
  NavItem,
  NavSection,
  AppHeaderProps,
  HeaderAction,
  BreadcrumbItem,
  AppRailProps,
  AppRailItem,
  SharePointHeaderProps,
  SharePointHeaderAction,
  CatalystPanelProps,
} from './primitives';

// Shells - Pre-configured compositions
export {
  StandardShell,
  MinimalShell,
  SharePointShell,
  ZavaCore_Start,
} from './shells';

export type {
  StandardShellProps,
  StandardShellConfig,
  MinimalShellProps,
  MinimalShellConfig,
  SharePointShellProps,
} from './shells';
