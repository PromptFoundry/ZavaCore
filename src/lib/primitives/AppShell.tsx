import { ReactNode, useState } from 'react';

export interface AppShellProps {
  /** Left navigation component */
  nav?: ReactNode;
  /** Header component */
  header?: ReactNode;
  /** Main content */
  children: ReactNode;
  /** Right panel/sidebar component */
  rightPanel?: ReactNode;
  /** Whether right panel is open */
  isPanelOpen?: boolean;
  /** Callback when panel should close */
  onPanelClose?: () => void;
  /** Custom className for the shell container */
  className?: string;
  /** Background color for main content area */
  backgroundColor?: string;
  /** Background image for main content area */
  backgroundImage?: string;
  /** Background image position */
  backgroundPosition?: string;
  /** Whether to show background image */
  showBackground?: boolean;
}

/**
 * AppShell - Reusable application shell with nav, header, and content areas
 *
 * @example
 * ```tsx
 * <AppShell
 *   nav={<MyNav />}
 *   header={<MyHeader />}
 *   rightPanel={<MyPanel />}
 *   isPanelOpen={isOpen}
 * >
 *   <YourContent />
 * </AppShell>
 * ```
 */
export default function AppShell({
  nav,
  header,
  children,
  rightPanel,
  isPanelOpen = false,
  onPanelClose,
  className = '',
  backgroundColor = '#fcfcfc',
  backgroundImage,
  backgroundPosition = 'top center',
  showBackground = false,
}: AppShellProps) {
  return (
    <div className={`min-h-screen flex ${className}`} style={{ backgroundColor }}>
      {/* Left Navigation */}
      {nav && (
        <aside className="fixed lg:static inset-y-0 left-0 z-50 h-screen shrink-0">
          {nav}
        </aside>
      )}

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col h-screen transition-all duration-300 ${
          isPanelOpen ? 'hidden md:block md:mr-[600px] lg:mr-[800px] xl:mr-[956px]' : 'mr-0'
        }`}
      >
        {/* Header */}
        {header && <div className="shrink-0">{header}</div>}

        {/* Main Content */}
        <main
          className="flex-1 overflow-auto py-8 md:py-16 lg:py-[126px] px-4 md:px-6 lg:px-8 relative bg-white"
          style={
            showBackground && backgroundImage
              ? {
                  backgroundImage: `url("${backgroundImage}")`,
                  backgroundPosition,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% auto',
                }
              : {}
          }
        >
          <div className="w-full max-w-[790px] mx-auto">{children}</div>
        </main>
      </div>

      {/* Mobile backdrop for panel */}
      {isPanelOpen && onPanelClose && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-20" onClick={onPanelClose} />
      )}

      {/* Right Panel */}
      {rightPanel}
    </div>
  );
}
