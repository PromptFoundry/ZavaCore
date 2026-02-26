import type { ReactNode } from 'react';

export interface SharePointHeaderAction {
  id: string;
  icon: ReactNode;
  onClick?: () => void;
}

export interface SharePointHeaderProps {
  /** Grid/waffle menu icon */
  gridIcon?: ReactNode;
  /** Zava logo */
  logo?: string | ReactNode;
  /** SharePoint site name */
  siteName?: string;
  /** Page title/subtitle */
  pageTitle?: string;
  /** Right side action buttons */
  actions?: SharePointHeaderAction[];
  /** User avatar */
  userAvatar?: ReactNode;
  /** Grid icon click handler */
  onGridClick?: () => void;
  /** Site name click handler */
  onSiteNameClick?: () => void;
  /** Search input change handler */
  onSearchChange?: (value: string) => void;
  /** Custom className */
  className?: string;
}

/**
 * SharePointHeader - SharePoint-style header with search and actions
 *
 * Header component for SharePoint layout with grid menu, logo, search, and action buttons.
 *
 * @example
 * ```tsx
 * <SharePointHeader
 *   siteName="SharePoint"
 *   pageTitle="Innovating smart materials for tomorrow"
 *   actions={[
 *     { id: 'copilot', icon: <CopilotIcon /> },
 *     { id: 'settings', icon: <SettingsIcon /> }
 *   ]}
 * />
 * ```
 */
export default function SharePointHeader({
  gridIcon,
  logo,
  siteName = 'SharePoint',
  pageTitle,
  actions = [],
  userAvatar,
  onGridClick,
  onSiteNameClick,
  onSearchChange,
  className = '',
}: SharePointHeaderProps) {
  const renderLogo = (logo: string | ReactNode) => {
    if (typeof logo === 'string') {
      return <img src={logo} alt="Logo" style={{ width: '120px', height: '24px' }} />;
    }
    return logo;
  };

  return (
    <header
      className={`flex items-center justify-between ${className}`}
      style={{
        backgroundColor: '#f5f5f5',
        padding: '4px 8px',
        minHeight: '48px',
      }}
    >
      {/* Left Section - Brand */}
      <div
        style={{
          display: 'flex',
          flex: '1 0 0',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        {/* Grid Icon */}
        {gridIcon && (
          <button
            onClick={onGridClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40px',
              padding: '8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e6e6e6')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {gridIcon}
          </button>
        )}

        {/* Logo */}
        {logo && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {renderLogo(logo)}
          </div>
        )}

        {/* Divider */}
        <div
          style={{
            width: '1px',
            height: '32px',
            backgroundColor: '#e0e0e0',
          }}
        />

        {/* Site Name */}
        {siteName && (
          <button
            onClick={onSiteNameClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40px',
              padding: '8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '4px',
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              color: '#3d3d3d',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e6e6e6')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {siteName}
          </button>
        )}

        {/* Page Title - Plain text */}
        {pageTitle && (
          <div
            style={{
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
              color: '#616161',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '400px',
            }}
          >
            {pageTitle}
          </div>
        )}
      </div>

      {/* Center Section - Search */}
      <div style={{ flex: '0 1 auto', maxWidth: '500px', minWidth: '280px' }}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search or ask anything"
            onChange={(e) => onSearchChange?.(e.target.value)}
            style={{
              width: '100%',
              height: '32px',
              padding: '6px 12px 6px 32px',
              backgroundColor: '#ffffff',
              border: 'none',
              borderRadius: '100px',
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
              color: '#3d3d3d',
              outline: 'none',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 1px 2px rgba(0,0,0,0.04)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px #464FEB';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 1px 2px rgba(0,0,0,0.04)';
            }}
          />
          {/* Search Icon */}
          <div
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              pointerEvents: 'none',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536C16.3417 17.0488 16.6583 17.0488 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5C14 5.46243 11.5376 3 8.5 3ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z"
                fill="#616161"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Section - Controls */}
      <div
        style={{
          display: 'flex',
          flex: '1 0 0',
          gap: '4px',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {/* Action Buttons */}
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              padding: '8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e6e6e6')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {action.icon}
          </button>
        ))}

        {/* User Avatar */}
        {userAvatar && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
            }}
          >
            {userAvatar}
          </div>
        )}
      </div>
    </header>
  );
}
