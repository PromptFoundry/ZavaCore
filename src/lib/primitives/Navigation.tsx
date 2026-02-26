import {
  PanelLeft20Regular,
  MoreHorizontal20Regular,
} from '@fluentui/react-icons';
import type { ReactNode } from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon?: string | ReactNode;
  activeIcon?: string | ReactNode;
  onClick?: () => void;
  badge?: string | number;
  chevron?: boolean;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export interface NavigationProps {
  /** Brand logo and name */
  branding?: {
    logo: string | ReactNode;
    name: string;
  };
  /** Navigation sections */
  sections: NavSection[];
  /** Selected item ID */
  selectedItemId?: string;
  /** User information for footer */
  user?: {
    avatar: string;
    name: string;
  };
  /** Footer actions (e.g., Apps button) */
  footerActions?: NavItem[];
  /** Whether navigation is collapsed */
  isCollapsed?: boolean;
  /** Callback when collapse state changes */
  onCollapse?: (collapsed: boolean) => void;
  /** Mobile close callback */
  onMobileClose?: () => void;
  /** Mobile item click callback */
  onMobileItemClick?: () => void;
  /** Custom className */
  className?: string;
  /** Width when expanded */
  width?: string;
  /** Custom collapse icon (overrides default PanelLeftText icon) */
  collapseIcon?: string | ReactNode;
}

/**
 * Navigation - Reusable left navigation component
 *
 * @example
 * ```tsx
 * <Navigation
 *   branding={{ logo: <Logo />, name: "My App" }}
 *   sections={[
 *     {
 *       items: [
 *         { id: 'home', label: 'Home', icon: <HomeIcon /> }
 *       ]
 *     }
 *   ]}
 *   selectedItemId="home"
 * />
 * ```
 */
export default function Navigation({
  branding,
  sections = [],
  selectedItemId,
  user,
  footerActions = [],
  isCollapsed = false,
  onCollapse,
  onMobileClose,
  onMobileItemClick,
  className = '',
  width = '320px',
  collapseIcon: _collapseIcon,
}: NavigationProps) {
  const handleItemClick = (item: NavItem) => {
    item.onClick?.();
    onMobileItemClick?.();
  };

  const renderIcon = (icon: string | ReactNode) => {
    if (typeof icon === 'string') {
      return <img src={icon} alt="" className="w-5 h-5" />;
    }
    return icon;
  };

  const renderNavItem = (item: NavItem) => {
    const isSelected = selectedItemId === item.id;

    return (
      <div
        key={item.id}
        className="flex items-center gap-0 cursor-pointer focus:outline-none"
        onClick={() => handleItemClick(item)}
      >
        {isSelected && <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />}
        <div
          className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors outline-none border border-transparent ${
            isSelected
              ? 'bg-[#fafafa] !border-[#F2F2F2] pl-4'
              : 'hover:bg-[#e6e6e6] pl-5'
          } pr-3`}
        >
          {item.icon && (
            <div className="mr-[9px]">
              {renderIcon(isSelected && item.activeIcon ? item.activeIcon : item.icon)}
            </div>
          )}
          <span className="text-sm text-[#242424] flex-1">{item.label}</span>
          {item.badge && (
            <span className="px-1.5 py-0.5 bg-[#464FEB] text-white text-xs rounded-full">
              {item.badge}
            </span>
          )}
          {item.chevron && <MoreHorizontal20Regular className="w-5 h-5 text-[#424242]" />}
        </div>
      </div>
    );
  };

  return (
    <nav
      className={`flex flex-col h-full bg-[#f5f5f5] transition-all duration-300 relative z-20 ${
        isCollapsed ? 'w-[60px]' : ''
      } [&_*]:!outline-none ${className}`}
      style={{ width: isCollapsed ? '60px' : width }}
    >

      {isCollapsed ? (
        /* Collapsed state */
        <div className="hidden lg:flex items-center justify-center px-3 py-3 shrink-0">
          <button
            className="p-1.5 hover:bg-[#e6e6e6] rounded transition-colors"
            onClick={() => onCollapse?.(false)}
          >
            <PanelLeft20Regular className="w-5 h-5 text-[#424242]" />
          </button>
        </div>
      ) : (
        <>
          {/* NavHeader - Top bar with branding */}
          {branding && (
            <div className="flex items-center justify-between px-3 py-3 shrink-0" data-name="NavHeader">
              <div className="flex items-center gap-2">
                {typeof branding.logo === 'string' ? (
                  <img src={branding.logo} alt="" className="w-5 h-5 shrink-0" />
                ) : (
                  branding.logo
                )}
                <span className="text-sm font-semibold text-[#242424]">{branding.name}</span>
              </div>
              {/* Close button */}
              {onMobileClose && (
                <button
                  onClick={onMobileClose}
                  aria-label="Close navigation"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <img src="/assets/icons/List.svg" alt="Close" style={{ width: '20px', height: '20px' }} />
                </button>
              )}
            </div>
          )}

          {/* Scrollable content */}
          <div className="flex-1 overflow-auto flex flex-col gap-3 py-3">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-col gap-1 px-3">
                {section.title && (
                  <div className="pl-5 py-2">
                    <span className="text-xs text-[#616161]">{section.title}</span>
                  </div>
                )}
                {section.items.map(renderNavItem)}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 px-3 pb-3 shrink-0 border-t border-[#e0e0e0] pt-3">
            {/* Footer actions */}
            {footerActions.map(renderNavItem)}

            {/* User info */}
            {user && (
              <div className="flex items-center justify-between h-9 px-1">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 shrink-0">
                    <img
                      src={user.avatar}
                      alt="User avatar"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-[#424242]">{user.name}</span>
                </div>
                <button className="p-1 hover:bg-[#e6e6e6] rounded transition-colors">
                  <MoreHorizontal20Regular className="w-5 h-5 text-[#424242]" />
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}
