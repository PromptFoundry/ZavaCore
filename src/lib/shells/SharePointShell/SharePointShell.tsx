import { useState } from 'react';
import { type ReactNode } from 'react';
import SharePointHeader, { type SharePointHeaderProps } from '../../primitives/SharePointHeader/SharePointHeader';
import AppRail, { type AppRailProps } from '../../primitives/AppRail/AppRail';
import CatalystPanel from '../../primitives/CatalystPanel/CatalystPanel';

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
 * full-featured application layout with AI assistance. Includes a Copilot FAB
 * that opens the CatalystPanel as an inline side panel.
 *
 * @example
 * ```tsx
 * <SharePointShell
 *   header={{
 *     siteName: "My Site",
 *     actions: [{ id: 'settings', icon: <SettingsIcon /> }]
 *   }}
 *   appRail={{
 *     items: [{ id: 'home', label: 'Home', icon: '/icons/home.svg' }]
 *   }}
 * >
 *   {(isPanelOpen) => <YourContent isPanelOpen={isPanelOpen} />}
 * </SharePointShell>
 * ```
 */
export default function SharePointShell({
  header,
  appRail,
  children,
  className = '',
}: SharePointShellProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Wire the copilot header action to open the panel
  const headerWithCopilot: SharePointHeaderProps | undefined = header
    ? {
        ...header,
        actions: header.actions?.map(action =>
          action.id === 'copilot'
            ? { ...action, onClick: () => setIsPanelOpen(true) }
            : action
        ),
      }
    : undefined;

  return (
    <div className={`flex flex-col h-screen w-full ${className}`}>
      {/* Header */}
      {headerWithCopilot && <SharePointHeader {...headerWithCopilot} />}

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        {/* App Rail */}
        {appRail && <AppRail {...appRail} />}

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-white relative">
          {typeof children === 'function' ? children(isPanelOpen) : children}
        </main>

        {/* Catalyst Panel — inline, slides in from right */}
        <div
          className="shrink-0 h-full transition-all duration-300 ease-in-out overflow-hidden"
          style={{ width: isPanelOpen ? '720px' : '0px' }}
        >
          <CatalystPanel onDismiss={() => setIsPanelOpen(false)} />
        </div>
      </div>

      {/* Copilot FAB — hidden when panel is open */}
      {!isPanelOpen && (
        <button
          onClick={() => setIsPanelOpen(true)}
          aria-label="Open ZavaCore Agent"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#464FEB' }}
        >
          <img
            src="/assets/icons/Copilot.svg"
            alt=""
            className="w-6 h-6 brightness-0 invert"
          />
        </button>
      )}
    </div>
  );
}
