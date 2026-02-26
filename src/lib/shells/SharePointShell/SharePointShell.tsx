import { type ReactNode, useState } from 'react';
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
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  return (
    <div className={`flex flex-col h-screen w-full ${className}`}>
      {/* Ensure FAB styles persist in all states */}
      <style>{`
        .catalyst-fab,
        .catalyst-fab:hover,
        .catalyst-fab:active,
        .catalyst-fab:focus,
        .catalyst-fab:focus-visible {
          background-color: white !important;
          box-shadow:
            8px 8px 20px 0px rgba(143, 216, 255, 0.4),
            -8px 8px 20px 0px rgba(255, 110, 168, 0.4),
            8px -8px 20px 0px rgba(87, 227, 209, 0.4),
            -8px -8px 20px 0px rgba(155, 93, 229, 0.4),
            0px 0px 2px 0px rgba(0, 0, 0, 0.12) !important;
        }
      `}</style>
      {/* Header */}
      {header && <SharePointHeader {...header} />}

      {/* Main content area with AppRail, content, and CatalystPanel */}
      <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        {/* App Rail */}
        {appRail && <AppRail {...appRail} />}

        {/* Main Content */}
        <main
          className="flex-1 overflow-auto bg-white"
          style={{
            marginRight: isPanelOpen ? '0px' : '-720px',
            transition: 'margin-right 0.3s ease',
          }}
        >
          {typeof children === 'function' ? children(isPanelOpen) : children}
        </main>

        {/* Catalyst Panel with transition */}
        <div
          style={{
            transform: isPanelOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
          }}
        >
          <CatalystPanel onDismiss={() => setIsPanelOpen(false)} />
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="catalyst-fab"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: isPanelOpen ? 'calc(720px + 24px)' : '24px',
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px',
          backgroundColor: 'white',
          boxShadow: `
            8px 8px 20px 0px rgba(143, 216, 255, 0.4),
            -8px 8px 20px 0px rgba(255, 110, 168, 0.4),
            8px -8px 20px 0px rgba(87, 227, 209, 0.4),
            -8px -8px 20px 0px rgba(155, 93, 229, 0.4),
            0px 0px 2px 0px rgba(0, 0, 0, 0.12)
          `,
          transition: 'transform 0.3s ease, right 0.3s ease',
          zIndex: 1000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.95)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        aria-label={isPanelOpen ? 'Close Catalyst Panel' : 'Open Catalyst Panel'}
      >
        <img
          src="/src/assets/icons/Copilot.svg"
          alt="Copilot"
          style={{ width: '32px', height: '32px' }}
        />
      </button>
    </div>
  );
}
