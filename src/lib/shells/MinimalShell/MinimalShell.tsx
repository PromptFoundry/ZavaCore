import { type ReactNode } from 'react';
import { AppShell, AppHeader } from '../../primitives';
import type { HeaderAction, BreadcrumbItem } from '../../primitives';

export interface MinimalShellConfig {
  /** App branding */
  branding: {
    logo: string | ReactNode;
    name?: string;
  };
  /** Header actions */
  headerActions?: HeaderAction[];
  /** Breadcrumbs */
  breadcrumbs?: BreadcrumbItem[];
  /** Background configuration */
  background?: {
    color?: string;
    image?: string;
    position?: string;
    show?: boolean;
  };
}

export interface MinimalShellProps {
  /** Shell configuration */
  config: MinimalShellConfig;
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
 * MinimalShell - Simple app shell with header only (no navigation)
 *
 * Lightweight composition of AppShell and AppHeader for simple layouts.
 * Use this for landing pages, documentation, or apps without navigation.
 *
 * @example
 * ```tsx
 * <MinimalShell
 *   config={{
 *     branding: { logo: '/logo.svg', name: 'My App' },
 *     headerActions: myActions
 *   }}
 * >
 *   <YourContent />
 * </MinimalShell>
 * ```
 */
export default function MinimalShell({
  config,
  children,
  rightPanel,
  isPanelOpen = false,
  onPanelClose,
  className = '',
}: MinimalShellProps) {
  return (
    <AppShell
      className={className}
      backgroundColor={config.background?.color}
      backgroundImage={config.background?.image}
      backgroundPosition={config.background?.position}
      showBackground={config.background?.show}
      header={
        <AppHeader
          logo={config.branding.logo}
          breadcrumbs={config.breadcrumbs}
          actions={config.headerActions}
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
