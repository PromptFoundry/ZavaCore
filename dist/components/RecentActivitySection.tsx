import {
  ChevronLeft16Regular,
  ChevronRight16Regular,
  MoreHorizontal16Regular,
} from '@fluentui/react-icons';

const shadow = '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)';

const cardShell: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '24px',
  border: '1px solid #e0e0e0',
  boxShadow: shadow,
  height: '338px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const cardHeaderLabel: React.CSSProperties = {
  height: '52px',
  padding: '20px 20px 0',
  flexShrink: 0,
  fontFamily: '"Segoe UI", sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '22px',
  color: '#242424',
  display: 'flex',
  alignItems: 'flex-start',
};

const benefitsItems = [
  {
    icon: '/assets/icons/Benefits Icon - Clipboard Text Edit.svg',
    primary: 'Update to benefits form',
    primaryLink: 'Strategic-Life-Infrast...',
    secondary: 'Opened 7/23/2026',
  },
  {
    icon: '/assets/icons/Benefits Icon -  Search Sparkle.svg',
    primary: 'Perks+ Claim approved for',
    secondary: '7/21/2026',
  },
  {
    icon: '/assets/icons/Benefits Icon - Calendar.svg',
    primary: 'Deadline approaching for benefit changes',
    secondary: 'Ends 9/01/2026',
  },
  {
    icon: '/assets/icons/Benefits Icon - Pin.svg',
    primary: 'Updated to dental plan for all employees',
    secondary: '7/23/2026',
  },
];

export default function RecentActivitySection({ onEngageClick }: { onEngageClick?: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* Section heading */}
      <h2 style={{
        margin: 0,
        fontFamily: '"Segoe UI", sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '32px',
        color: '#242424',
        fontVariationSettings: "'opsz' 36",
      }}>
        Based on your recent activity
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', alignItems: 'start' }}>

        {/* ── Learning Card ── */}
        <div style={cardShell}>
          {/* Header */}
          <div style={cardHeaderLabel}>Learning</div>

          {/* Body — relatively positioned for precise pixel layout */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>

            {/* Stacked images: x=0 y=23 within content area (offset 9px body pad = y+14 from body top) */}
            <div style={{ position: 'absolute', left: '20px', top: '32px', width: '141px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ width: '141px', height: '101px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/assets/images/Learning image.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ width: '141px', height: '101px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/assets/images/Learning image-1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Text column: x=183 (20+163) y=59 (9+50) */}
            <div style={{ position: 'absolute', left: '183px', top: '59px', width: '196px', display: 'flex', flexDirection: 'column' }}>
              {/* Title — 56px height, 2 lines × 28px */}
              <p style={{
                margin: 0,
                fontFamily: '"Segoe UI", sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '28px',
                color: '#242424',
                height: '56px',
                overflow: 'hidden',
              }}>
                Quickly catch up on Learning
              </p>
              {/* Description — 60px height */}
              <p style={{
                margin: '4px 0 0',
                fontFamily: '"Segoe UI", sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                color: '#616161',
                height: '60px',
                overflow: 'hidden',
              }}>
                ZavaCore agent can bring you up to speed on what your most important trainings are
              </p>
              {/* Button — 16px gap below description, 32px tall */}
              <button
                style={{
                  marginTop: '16px',
                  alignSelf: 'flex-start',
                  padding: '5px 11px',
                  backgroundColor: '#fff',
                  border: '1px solid #d1d1d1',
                  borderRadius: '4px',
                  fontFamily: '"Segoe UI", sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '20px',
                  color: '#242424',
                  cursor: 'pointer',
                  height: '32px',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
              >
                Catch up
              </button>
            </div>
          </div>
        </div>

        {/* ── Benefits Card ── */}
        <div style={cardShell}>
          {/* Header */}
          <div style={cardHeaderLabel}>Benefits</div>

          {/* Body — items start at y=52+8=60 from card top */}
          <div style={{ flex: 1, padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: '24.8px', overflowY: 'auto' }}>
            {benefitsItems.map(({ icon, primary, primaryLink, secondary }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', minHeight: '32px' }}>
                {/* Icon — 32px wide */}
                <img src={icon} alt="" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
                {/* Copy — starts at x=48 */}
                <div style={{ flex: 1 }}>
                  <p style={{
                    margin: 0,
                    fontFamily: '"Segoe UI", sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    color: '#242424',
                  }}>
                    {primaryLink ? (
                      <>
                        {primary}{' '}
                        <span style={{ color: '#0078d4', cursor: 'pointer' }}>{primaryLink}</span>
                      </>
                    ) : primary}
                  </p>
                  <p style={{
                    margin: 0,
                    fontFamily: '"Segoe UI", sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '16px',
                    color: '#616161',
                  }}>
                    {secondary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer — fixed at bottom, y=274 from card top */}
          <div style={{ height: '64px', padding: '12px 20px 0', display: 'flex', alignItems: 'flex-start', gap: '8px', flexShrink: 0 }}>
            <button
              style={{ padding: '5px 11px', backgroundColor: '#fff', border: '1px solid #d1d1d1', borderRadius: '4px', fontFamily: '"Segoe UI", sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '20px', color: '#242424', cursor: 'pointer', height: '32px' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              Summarize updates
            </button>
            <button
              style={{ width: '36px', height: '32px', padding: '5px 0', backgroundColor: '#fff', border: '1px solid #d1d1d1', borderRadius: '4px', fontFamily: '"Segoe UI", sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '20px', color: '#242424', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              +2
            </button>
          </div>
        </div>

        {/* ── Engage Card ── */}
        <div style={{ ...cardShell, cursor: 'pointer' }} onClick={onEngageClick}>
          {/* Header — 54px (Engage card is 54px vs 52px for others) */}
          <div style={{ ...cardHeaderLabel, height: '54px' }}>Engage</div>

          {/* Body — 232px, flex column centered */}
          <div style={{ height: '232px', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            {/* Avatar — y=9 from body top, 64×64 */}
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', marginTop: '9px', flexShrink: 0 }}>
              <img src="/assets/images/Avatar pie.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Information — y=83 from body (gap = 83-9-64 = 10px) */}
            <div style={{ marginTop: '10px', width: '100%', position: 'relative', textAlign: 'center' }}>
              <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '16px', fontWeight: 700, lineHeight: '22px', color: '#242424' }}>
                New updates
              </p>
              <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#616161' }}>
                from Mona Kane and others
              </p>
              <button style={{ position: 'absolute', right: 0, top: '6px', background: 'none', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MoreHorizontal16Regular style={{ color: '#616161' }} />
              </button>
            </div>
            {/* AI Insights — y=150 from body (gap from info bottom ≈ 150-83-42=25px) */}
            <div style={{
              marginTop: '25px',
              width: '100%',
              backgroundColor: '#eaf6ff',
              borderRadius: '12px',
              padding: '12px',
            }}>
              <p style={{
                margin: 0,
                fontFamily: '"Segoe UI", sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '18px',
                color: '#242424',
              }}>
                Leadership changes were announced, including Mona Kane returning as EVP, Aaron Buxton leading...
              </p>
            </div>
          </div>

          {/* Footer — y=286, height=52 */}
          <div style={{ height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexShrink: 0 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', color: '#616161' }}>
              <ChevronLeft16Regular />
            </button>
            {[true, false, false, false].map((active, i) => (
              <div key={i} style={{
                width: active ? '20px' : '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: active ? '#0078d4' : '#d1d1d1',
                transition: 'width 0.2s ease',
                flexShrink: 0,
              }} />
            ))}
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', color: '#616161' }}>
              <ChevronRight16Regular />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
