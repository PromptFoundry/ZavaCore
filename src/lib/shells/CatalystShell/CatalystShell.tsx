import { type ReactNode } from 'react';
import SharePointHeader, { type SharePointHeaderProps } from '../../primitives/SharePointHeader/SharePointHeader';
import AppRail, { type AppRailProps } from '../../primitives/AppRail/AppRail';
import CatalystPanel from '../../primitives/CatalystPanel/CatalystPanel';

export interface CatalystShellProps {
  /** SharePoint header configuration */
  header?: SharePointHeaderProps;
  /** App rail configuration */
  appRail?: AppRailProps;
  /** Main content area */
  children?: ReactNode;
  /** Custom className */
  className?: string;
}

/**
 * CatalystShell - Complete layout with SharePoint header, app rail, and catalyst panel
 *
 * A modern shell combining SharePointHeader, AppRail, and CatalystPanel for a
 * full-featured application layout with AI assistance.
 *
 * @example
 * ```tsx
 * <CatalystShell
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
 * </CatalystShell>
 * ```
 */
export default function CatalystShell({
  header,
  appRail,
  children,
  className = '',
}: CatalystShellProps) {
  return (
    <div className={`flex flex-col h-full w-full ${className}`}>
      {/* Header */}
      {header && <SharePointHeader {...header} />}

      {/* Main content area with AppRail, content, and CatalystPanel */}
      <div className="flex flex-1 overflow-hidden">
        {/* App Rail */}
        {appRail && <AppRail {...appRail} />}

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-white">
          {children}
        </main>

        {/* Catalyst Panel */}
        <CatalystPanel />
      </div>
    </div>
  );
}
