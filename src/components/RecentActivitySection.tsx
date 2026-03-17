import benefitsClipboard from '../assets/icons/Benefits Icon - Clipboard Text Edit.svg';
import benefitsCalendar from '../assets/icons/Benefits Icon - Calendar.svg';
import benefitsPin from '../assets/icons/Benefits Icon - Pin.svg';
import learningBg from '../assets/images/learning-background.png';
import vivaLearningIcon from '../assets/icons/Viva Learning.svg';
import gradientBg from '../assets/images/gradient-background.png';
import vivaEngageIcon from '../assets/icons/Viva Engage.svg';
import { BrainCircuit20Regular } from '@fluentui/react-icons';

const segoe: React.CSSProperties = { fontFamily: '"Segoe UI", sans-serif' };
const shadow = '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)';
const cardShadow = '0px 10px 20px 0px rgba(0,0,0,0.14), 0px 0px 2.5px 0px rgba(0,0,0,0.12)';

const cardShell: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '24px',
  border: '1px solid #e0e0e0',
  boxShadow: shadow,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  cursor: 'not-allowed',
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
  cursor: 'not-allowed',
  height: '32px',
};

const benefitsItems = [
  {
    icon: benefitsClipboard,
    primary: 'Update to benefits form ',
    primaryLink: 'Strategic-Life-Infrastructure Benefits Form',
    secondary: 'Opened 7/23/2026',
  },
  {
    icon: benefitsCalendar,
    primary: 'Deadline approaching for benefit changes',
    secondary: 'Opened 7/23/2026',
  },
  {
    icon: benefitsPin,
    primary: 'Updated to dental plan for all employees',
    secondary: 'Opened 7/23/2026',
  },
];


export default function RecentActivitySection({ shimmerTarget }: { onEngageClick?: () => void; shimmerTarget?: string | null }) {
  return (
    <div className="widget-grid-3col activity-grid">

      {/* ── Col 1: Benefits ── */}
      <div className="activity-card" style={cardShell}>
        <div style={cardHeaderLabel}>Benefits</div>

        <div style={{ flex: 1, padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
          {benefitsItems.map(({ icon, primary, primaryLink, secondary }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '8px 0' }}>
              <img src={icon} alt="" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ ...segoe, margin: 0, fontSize: '16px', fontWeight: 600, lineHeight: '24px', color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {primary}
                  {primaryLink && <span style={{ color: '#4f59f4' }}>{primaryLink}</span>}
                </p>
                <p style={{ ...segoe, margin: 0, fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: '#424242' }}>
                  {secondary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '12px 20px 20px' }}>
          <button
            style={outlineBtn}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            Summarize updates
          </button>
        </div>
      </div>

      {/* ── Col 2: Learning Video ── */}
      <div
        className="activity-card"
        style={{
          position: 'relative', borderRadius: '24px', overflow: 'hidden',
          boxShadow: cardShadow, cursor: 'not-allowed',
          backgroundImage: `url("${learningBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        {/* Gradient overlay — from top:105px to bottom, transparent → black 0.6 at 82% */}
        <div style={{
          position: 'absolute', top: 105, bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 82%)',
        }} />

        {/* Required Training badge — top right, same style as Event badge */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          height: 24, padding: '0 6px',
          backgroundColor: 'rgba(18,17,17,0.4)',
          border: '1px solid #e0e0e0',
          borderRadius: 4,
        }}>
          <span style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: 12, fontWeight: 600, lineHeight: '16px', color: '#fff' }}>
            Required Training
          </span>
        </div>

        {/* Bottom content */}
        <div style={{
          position: 'absolute', bottom: 24, left: 24,
          width: 303, display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          <p style={{
            ...segoe, margin: 0, fontSize: 16, fontWeight: 600,
            lineHeight: '22px', color: '#fff',
          }}>
            Required Training: How Gen AI Is Revolutionizing SmartMesh™
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <img src={vivaLearningIcon} alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
            <span style={{ ...segoe, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#fff', whiteSpace: 'nowrap' }}>
              Learning · 6m
            </span>
          </div>
        </div>
      </div>

      {/* ── Col 3: 2 prompt cards stacked ── */}
      <div className="activity-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>

        {/* Card 1 — Gradient: Find trusted guidance */}
        <div style={{
          flex: 1, borderRadius: 24, padding: 16, position: 'relative',
          display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center',
          boxShadow: shadow, cursor: 'not-allowed', overflow: 'hidden', minHeight: 0,
        }}>
          {/* Background image */}
          <img src={gradientBg} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center', display: 'block',
          }} />
          {/* Icon + label row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
            <BrainCircuit20Regular style={{ width: 16, height: 16, color: '#fff', flexShrink: 0 }} />
            <span style={{ ...segoe, fontSize: 12, fontWeight: 600, lineHeight: '14px', color: '#fff', whiteSpace: 'nowrap' }}>
              Find trusted guidance
            </span>
          </div>
          {/* Title */}
          <p style={{ ...segoe, margin: 0, fontSize: 20, fontWeight: 600, lineHeight: '28px', overflow: 'hidden', position: 'relative',
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            <span style={{ color: '#ddd' }}>Find documentation or best practices for </span>
            <span style={{ color: '#fff' }}>this topic</span>
          </p>
        </div>

        {/* Card 2 — White: Summarize trending updates */}
        <div style={{
          flex: 1, borderRadius: 24, padding: 16,
          display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center',
          backgroundColor: '#fff', border: '1px solid #e0e0e0',
          boxShadow: shadow, cursor: 'not-allowed', overflow: 'hidden',
        }}>
          {/* Icon + label row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src={vivaEngageIcon} alt="" style={{ width: 16, height: 16, flexShrink: 0 }} />
            <span style={{ ...segoe, fontSize: 12, fontWeight: 600, lineHeight: '14px', color: '#424242', whiteSpace: 'nowrap' }}>
              12 communities · 38 people you follow
            </span>
          </div>
          {/* Title */}
          <p style={{ ...segoe, margin: 0, fontSize: 20, fontWeight: 600, lineHeight: '28px', overflow: 'hidden',
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            <span style={{ color: '#242424' }}>Summarize trending updates from </span>
            <span style={{ color: '#4f59f4' }}>my communities</span>
          </p>
        </div>

      </div>

    </div>
  );
}
