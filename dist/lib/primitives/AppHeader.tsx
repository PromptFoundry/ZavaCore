import {
  ChevronDown20Regular,
  PanelLeft20Regular,
} from '@fluentui/react-icons';
import type { ReactNode } from 'react';

export interface HeaderAction {
  id: string;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export interface BreadcrumbItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface AppHeaderProps {
  /** Left section content (logo, breadcrumbs, etc.) */
  leftContent?: ReactNode;
  /** Center section content */
  centerContent?: ReactNode;
  /** Right section actions */
  actions?: HeaderAction[];
  /** Breadcrumbs for navigation */
  breadcrumbs?: BreadcrumbItem[];
  /** Logo/icon for left section */
  logo?: string | ReactNode;
  /** Show mobile nav toggle */
  showMobileToggle?: boolean;
  /** Mobile nav toggle callback */
  onToggleNav?: () => void;
  /** Whether nav is open (for icon state) */
  isNavOpen?: boolean;
  /** Custom className */
  className?: string;
  /** Background color */
  backgroundColor?: string;
  /** Shadow */
  showShadow?: boolean;
}

/**
 * AppHeader - Reusable application header component
 *
 * @example
 * ```tsx
 * <AppHeader
 *   logo={<Logo />}
 *   breadcrumbs={[{ label: 'Home' }, { label: 'Dashboard' }]}
 *   actions={[
 *     { id: 'new', label: 'New', variant: 'primary' },
 *     { id: 'settings', icon: <SettingsIcon /> }
 *   ]}
 * />
 * ```
 */
export default function AppHeader({
  leftContent,
  centerContent,
  actions = [],
  breadcrumbs = [],
  logo,
  showMobileToggle = true,
  onToggleNav,
  isNavOpen = false,
  className = '',
  backgroundColor = '#fafafa',
  showShadow = true,
}: AppHeaderProps) {
  const renderAction = (action: HeaderAction) => {
    const baseClasses = 'flex items-center justify-center gap-2 rounded transition-colors';

    const variantClasses = {
      primary: 'bg-[#464FEB] text-white hover:bg-[#3d42c7] h-8',
      secondary: 'bg-white border border-[#d1d1d1] text-[#424242] hover:bg-[#f5f5f5] h-8',
      ghost: 'hover:bg-[#e6e6e6] text-[#424242] h-8',
    };

    // Add padding based on whether there's an icon and/or label
    // Ghost buttons with labels should have equal padding like other variants
    const paddingClass = action.icon && action.label
      ? 'pl-3 pr-3'
      : action.label
      ? 'px-3'
      : 'w-8'; // Icon-only buttons get fixed width

    const classes = `${baseClasses} ${variantClasses[action.variant || 'ghost']} ${paddingClass} ${
      action.className || ''
    }`;

    return (
      <button key={action.id} className={classes} onClick={action.onClick}>
        {action.icon}
        {action.label && (
          <span className="font-['Segoe_UI',sans-serif] text-sm whitespace-nowrap">{action.label}</span>
        )}
      </button>
    );
  };

  return (
    <header
      className={`h-[60px] shrink-0 relative z-10 ${className}`}
      style={{
        backgroundColor,
        boxShadow: showShadow
          ? '0px 8px 16px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
          : undefined,
      }}
    >
      <div className="flex items-center justify-between h-full px-3 md:px-5">
        {/* Left section */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
          {/* Mobile toggle */}
          {showMobileToggle && onToggleNav && (
            <button
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded hover:bg-[#e6e6e6] transition-colors shrink-0"
              onClick={onToggleNav}
              aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
            >
              <PanelLeft20Regular className="w-5 h-5 text-[#424242]" />
            </button>
          )}

          {leftContent ? (
            leftContent
          ) : (
            <div className="flex items-center gap-1 md:gap-2">
              {/* Logo */}
              {logo && (
                <div className="w-5 h-5 md:w-6 md:h-6">
                  {typeof logo === 'string' ? (
                    <img src={logo} alt="" className="w-full h-full" />
                  ) : (
                    logo
                  )}
                </div>
              )}

              {/* Breadcrumbs */}
              {breadcrumbs.length > 0 && (
                <div className="flex items-center gap-1">
                  {breadcrumbs.map((crumb, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-1 px-1 md:px-2 h-8 rounded hover:bg-[#e6e6e6] transition-colors"
                      onClick={crumb.onClick}
                    >
                      {crumb.icon}
                      <span className="text-xs md:text-sm font-normal text-[#242424] truncate">
                        {crumb.label}
                      </span>
                      {index < breadcrumbs.length - 1 && (
                        <ChevronDown20Regular className="w-3 h-3 text-[#424242] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Center section */}
        {centerContent && <div className="flex-1 flex justify-center">{centerContent}</div>}

        {/* Right section */}
        <div className="flex items-center gap-1 md:gap-2 justify-end shrink-0">
          {actions.map(renderAction)}
        </div>
      </div>
    </header>
  );
}
