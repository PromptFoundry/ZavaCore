import { type ReactNode } from 'react';
import SharePointHeader, { type SharePointHeaderProps } from '../../primitives/SharePointHeader/SharePointHeader';
import AppRail, { type AppRailProps } from '../../primitives/AppRail/AppRail';

export interface SharePointShellProps {
  /** SharePoint header configuration */
  header?: SharePointHeaderProps;
  /** App rail configuration */
  appRail?: AppRailProps;
  /** Main content area */
  children?: ReactNode | ((isPanelOpen: boolean) => ReactNode);
  /** Custom className */
  className?: string;
}

/**
 * SharePointShell - Complete layout with SharePoint header, app rail, and catalyst panel
 *
 * A modern shell combining SharePointHeader, AppRail, and CatalystPanel for a
 * full-featured application layout with AI assistance.
 *
 * @example
 * ```tsx
 * <SharePointShell
 *   header={{
 *     siteName: "My Site",
 *     pageTitle: "Dashboard",
 *     actions: [{ id: 'settings', icon: <SettingsIcon /> }]
 *   }}
 *   appRail={{
 *     items: [
 *       { id: 'home', label: 'Home', icon: '/icons/home.svg' }
 *     ]
 *   }}
 * >
 *   <div>Main content here</div>
 * </SharePointShell>
 * ```
 */
export default function SharePointShell({
  header,
  appRail,
  children,
  className = '',
}: SharePointShellProps) {
  return (
    <div className={`flex flex-col h-screen w-full ${className}`}>
      {/* Header */}
      {header && <SharePointHeader {...header} />}

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        {/* App Rail */}
        {appRail && <AppRail {...appRail} />}

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-white">
          {typeof children === 'function' ? children(false) : children}
        </main>
      </div>
    </div>
  );
}
