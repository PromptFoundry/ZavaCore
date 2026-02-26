export interface SiteHeaderProps {
  /** Whether the Catalyst panel is open */
  isPanelOpen?: boolean;
}

export default function SiteHeader({ isPanelOpen = false }: SiteHeaderProps) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#49daf2' }} />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(8px)',
          backgroundColor: '#d9d9d9',
          mixBlendMode: 'color-burn',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', height: '80px', padding: '0 32px', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flex: 1, gap: '20px', alignItems: 'center' }}>
          {/* Logo */}
          <img
            src="/src/assets/icons/ZavaLogo_SiteHeader.svg"
            alt="Zava"
            style={{
              width: '48px',
              height: '48px',
            }}
          />

          {/* Navigation */}
          <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
              <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', paddingBottom: '6px' }}>
                  <span style={{ fontSize: '14px', lineHeight: '18px', color: 'white' }}>Our company</span>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', backgroundColor: 'white' }} />
                </div>
                <span style={{ fontSize: '14px', lineHeight: '18px', color: 'white', paddingBottom: '6px' }}>News & events</span>
                <span style={{ fontSize: '14px', lineHeight: '18px', color: 'white', paddingBottom: '6px' }}>Product & teams</span>
                <span style={{ fontSize: '14px', lineHeight: '18px', color: 'white', paddingBottom: '6px' }}>Services & support</span>
                <span style={{ fontSize: '14px', lineHeight: '18px', color: 'white', paddingBottom: '6px' }}>Human resources</span>
                <span style={{ fontSize: '14px', lineHeight: '18px', color: 'white', paddingBottom: '6px' }}>Career & benefits</span>
                <span style={{ fontSize: '14px', lineHeight: '18px', color: 'white', paddingBottom: '6px' }}>Technical support</span>
              </nav>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {!isPanelOpen && (
                <>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center', fontSize: '14px', color: 'white', cursor: 'pointer' }}>
                    <img src="/src/assets/icons/Star.svg" alt="" style={{ width: '14px', height: '14px' }} />
                    <span>Not following</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center', fontSize: '14px', color: 'white', cursor: 'pointer' }}>
                    <img src="/src/assets/icons/Share.svg" alt="" style={{ width: '14px', height: '14px' }} />
                    <span>Share</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center', fontSize: '14px', color: 'white', cursor: 'pointer' }}>
                    <img src="/src/assets/icons/Person.svg" alt="" style={{ width: '16px', height: '16px' }} />
                    <span>27 members</span>
                  </div>
                </>
              )}
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="1.5" fill="white" />
                  <circle cx="4" cy="10" r="1.5" fill="white" />
                  <circle cx="16" cy="10" r="1.5" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
