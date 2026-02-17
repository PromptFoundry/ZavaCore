import { ReactNode, useState } from 'react';
import { AppShell, Navigation, AppHeader } from '../../primitives';
import type { NavSection, HeaderAction, BreadcrumbItem } from '../../primitives';

export interface StandardShellConfig {
  /** App branding */
  branding: {
    logo: string | ReactNode;
    name: string;
  };
  /** Navigation sections */
  navigation: NavSection[];
  /** Header actions */
  headerActions?: HeaderAction[];
  /** Breadcrumbs */
  breadcrumbs?: BreadcrumbItem[];
  /** User information */
  user?: {
    avatar: string;
    name: string;
  };
  /** Footer actions in nav */
  footerActions?: any[];
  /** Currently selected nav item */
  selectedNavId?: string;
  /** Background configuration */
  background?: {
    color?: string;
    image?: string;
    position?: string;
    show?: boolean;
  };
  /** Custom navigation width */
  navWidth?: string;
}

export interface StandardShellProps {
  /** Shell configuration */
  config: StandardShellConfig;
  /** Main content */
  children: ReactNode;
  /** Right panel component */
  rightPanel?: ReactNode;
  /** Whether right panel is open */
  isPanelOpen?: boolean;
  /** Callback when panel closes */
  onPanelClose?: () => void;
  /** Custom className */
  className?: string;
}

/**
 * StandardShell - Full-featured app shell with navigation, header, and content
 *
 * Pre-configured composition of AppShell, Navigation, and AppHeader primitives.
 * Use this for standard application layouts.
 *
 * @example
 * ```tsx
 * <StandardShell
 *   config={{
 *     branding: { logo: '/logo.svg', name: 'My App' },
 *     navigation: myNavSections,
 *     headerActions: myActions
 *   }}
 * >
 *   <YourContent />
 * </StandardShell>
 * ```
 */
export default function StandardShell({
  config,
  children,
  rightPanel,
  isPanelOpen = false,
  onPanelClose,
  className = '',
}: StandardShellProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <AppShell
      className={className}
      backgroundColor={config.background?.color}
      backgroundImage={config.background?.image}
      backgroundPosition={config.background?.position}
      showBackground={config.background?.show}
      nav={
        <Navigation
          branding={config.branding}
          sections={config.navigation}
          selectedItemId={config.selectedNavId}
          user={config.user}
          footerActions={config.footerActions}
          onMobileClose={() => setIsNavOpen(false)}
          onMobileItemClick={() => setIsNavOpen(false)}
          width={config.navWidth}
        />
      }
      header={
        <AppHeader
          logo={config.branding.logo}
          breadcrumbs={config.breadcrumbs}
          actions={config.headerActions}
          onToggleNav={() => setIsNavOpen(!isNavOpen)}
          isNavOpen={isNavOpen}
        />
      }
      rightPanel={rightPanel}
      isPanelOpen={isPanelOpen}
      onPanelClose={onPanelClose}
    >
      {children}
    </AppShell>
  );
}
