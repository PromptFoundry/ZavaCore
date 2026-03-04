import type { ReactNode } from 'react';

export interface WidgetAction {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export interface WidgetContainerProps {
  /** Widget title displayed in header */
  title?: string;
  /** Header actions (e.g., settings icon) */
  headerActions?: ReactNode;
  /** Content to display in the body */
  children?: ReactNode;
  /** Footer action buttons */
  footerActions?: WidgetAction[];
  /** Custom className */
  className?: string;
  /** Border radius for content area */
  contentBorderRadius?: string;
}

/**
 * WidgetContainer - Reusable widget container component
 *
 * An extensible, reusable widget container that can be used for various scenarios.
 * Provides a consistent layout with header, body, and footer sections.
 *
 * @example
 * ```tsx
 * <WidgetContainer
 *   title="Widget Title"
 *   headerActions={<SettingsIcon />}
 *   footerActions={[
 *     { id: 'action', label: 'Action Button' }
 *   ]}
 * >
 *   <div>Your content here</div>
 * </WidgetContainer>
 * ```
 */
export default function WidgetContainer({
  title,
  headerActions,
  children,
  footerActions = [],
  className = '',
  contentBorderRadius = '16px',
}: WidgetContainerProps) {
  return (
    <div
      data-name="WidgetContainer"
      className={`relative w-full bg-white border border-[#edebe9] rounded-[24px] flex flex-col z-0 ${className}`}
      style={{
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
      }}
    >
      {/* Header */}
      {(title || headerActions) && (
        <div className="flex items-center justify-between px-5 pt-5 pb-[2px]">
          {title && (
            <h2
              className="font-semibold text-[#242424]"
              style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '0%' }}
            >
              {title}
            </h2>
          )}
          {headerActions && headerActions}
        </div>
      )}

      {/* Body */}
      <div className="flex-1 px-5 pt-4 pb-4 min-h-0">
        <div
          className="flex items-center justify-center border border-[#ebebeb] bg-[#fcfcfc] h-full"
          style={{ borderRadius: contentBorderRadius }}
        >
          {children || (
            <p
              className="text-[#242424]"
              style={{ fontSize: '16px', lineHeight: '22px' }}
            >
              Content area
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      {footerActions.length > 0 && (
        <div className="px-5 pb-5 flex items-center justify-start gap-2">
          {footerActions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              className="px-3 py-[5px] bg-white border border-[#d1d1d1] rounded-[4px] text-sm font-semibold text-[#242424] hover:bg-[#f5f5f5] transition-colors flex items-center gap-2"
              style={{ lineHeight: '20px' }}
            >
              {action.icon && action.icon}
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
