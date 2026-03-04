import { AlertFilled, ArrowTrending16Filled } from '@fluentui/react-icons';
import learning1 from '../assets/images/learning 1.png';
import learning2 from '../assets/images/learning 2.png';
import zcOrange from '../assets/icons/zc_orange.svg';

const shadow = '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)';

const cardShell: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '24px',
  border: '1px solid #e0e0e0',
  boxShadow: shadow,
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

const footerStyle: React.CSSProperties = {
  height: '64px',
  padding: '12px 20px 0',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  flexShrink: 0,
};

const outlineBtn: React.CSSProperties = {
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
};

const learningArticles = [
  {
    img: learning1,
    badge: 'Due in 3 days',
    badgeColor: '#fff',
    badgeBg: '#c50f1f',
    BadgeIcon: AlertFilled,
    title: 'Safe manufacturing: Ensuring your safety and the safety of others',
  },
  {
    img: learning2,
    badge: 'Trending',
    badgeColor: '#fff',
    badgeBg: '#0f6cbd',
    BadgeIcon: ArrowTrending16Filled,
    title: 'Innovating smart materials for tomorrow',
  },
];

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

      <div className="widget-grid-3col activity-grid">

        {/* ── Learning Card ── */}
        <div className="activity-card" style={cardShell}>
          <div style={cardHeaderLabel}>Learning</div>

          {/* Articles */}
          <div style={{ flex: 1, padding: '9px 20px 0', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
            {learningArticles.map((article, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', height: '96px', flexShrink: 0 }}>
                {/* Thumbnail */}
                <div style={{ width: '144px', height: '96px', borderRadius: '20px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={article.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                {/* Content */}
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {/* Publisher */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <img src={zcOrange} alt="" style={{ width: '14px', height: '14px', flexShrink: 0 }} />
                    <span style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: '11px', fontWeight: 400, lineHeight: '16px', color: '#616161' }}>
                      ZavaCore · 1d
                    </span>
                  </div>
                  {/* Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    alignSelf: 'flex-start',
                    backgroundColor: article.badgeBg,
                    borderRadius: '999px',
                    padding: '2px 6px',
                  }}>
                    <article.BadgeIcon style={{ width: '10px', height: '10px', color: article.badgeColor, flexShrink: 0 }} />
                    <span style={{
                      fontFamily: '"Segoe UI", sans-serif',
                      fontSize: '10px',
                      fontWeight: 600,
                      lineHeight: '14px',
                      color: article.badgeColor,
                    }}>
                      {article.badge}
                    </span>
                  </div>
                  {/* Title */}
                  <p style={{
                    margin: 0,
                    fontFamily: '"Segoe UI", sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: '#242424',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {article.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={footerStyle}>
            <button
              style={outlineBtn}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              Summarize updates
            </button>
            <button
              style={{ ...outlineBtn, width: '36px', padding: '5px 0' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              +2
            </button>
          </div>
        </div>

        {/* ── Benefits Card ── */}
        <div className="activity-card" style={cardShell}>
          <div style={cardHeaderLabel}>Benefits</div>

          <div style={{ flex: 1, padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: '24.8px', overflowY: 'auto' }}>
            {benefitsItems.map(({ icon, primary, primaryLink, secondary }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', minHeight: '32px' }}>
                <img src={icon} alt="" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
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

          <div style={footerStyle}>
            <button
              style={outlineBtn}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              Summarize updates
            </button>
            <button
              style={{ ...outlineBtn, width: '36px', padding: '5px 0' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              +2
            </button>
          </div>
        </div>

        {/* ── Engage Card ── */}
        <div className="activity-card" style={{ ...cardShell, cursor: 'pointer' }} onClick={onEngageClick}>

          {/* Header */}
          <div style={cardHeaderLabel}>Engage</div>

          {/* Body — flex:1 fills space between header and footer */}
          <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px 20px 0' }}>

            {/* Avatar + info centered */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/assets/images/Avatar pie.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: '22px', color: '#242424' }}>
                  New updates
                </p>
                <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#616161' }}>
                  from Mona Kane and others
                </p>
              </div>
            </div>

            {/* AI Insights — flex:1 fills remaining body space */}
            <div style={{ flex: 1, minHeight: 0, backgroundColor: '#eaf6ff', borderRadius: '16px', padding: '12px', overflow: 'hidden' }}>
              <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#242424' }}>
                Leadership changes were announced, including Mona Kane returning as EVP, Aaron Buxton leading Design
              </p>
            </div>
          </div>

          {/* Footer — matches other cards */}
          <div style={footerStyle}>
            <button
              style={outlineBtn}
              onClick={e => { e.stopPropagation(); onEngageClick?.(); }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              Summarize updates
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
