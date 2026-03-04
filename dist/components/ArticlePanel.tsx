import { Dismiss20Regular, ArrowUpRight20Regular } from '@fluentui/react-icons';
import zavalLogo from '../assets/images/ZavaCore_logo.svg';

interface ArticlePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const segoe: React.CSSProperties = { fontFamily: '"Segoe UI", sans-serif' };

export default function ArticlePanel({ isOpen, onClose }: ArticlePanelProps) {
  return (
    <div
      className={`fixed right-0 top-0 h-screen bg-white shadow-[-2px_0_8px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out z-30 w-full md:w-[600px] lg:w-[800px] xl:w-[956px] flex flex-col overflow-hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div style={{
        height: 60, padding: '0 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid #e0e0e0', flexShrink: 0,
      }}>
        {/* Left: favicon + title + source */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, flex: 1 }}>
          <div style={{
            width: 20, height: 20, borderRadius: 4, flexShrink: 0,
            backgroundColor: '#F5A97B', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src={zavalLogo} alt="ZavaCore" style={{ width: 12, height: 12 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{ ...segoe, fontSize: 14, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              ZavaCore unveils adaptive weave break...
            </span>
            <span style={{ ...segoe, fontSize: 12, color: '#616161' }}>Zava News · 7h</span>
          </div>
        </div>

        {/* Right: Open in SharePoint + close */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 4,
            padding: '5px 10px', backgroundColor: 'transparent',
            border: '1px solid #d1d1d1', borderRadius: 6, cursor: 'pointer',
            ...segoe, fontSize: 13, color: '#242424',
          }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <span>Open in SharePoint</span>
            <ArrowUpRight20Regular style={{ width: 16, height: 16 }} />
          </button>
          <button
            onClick={onClose}
            style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 6 }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <Dismiss20Regular style={{ width: 20, height: 20, color: '#424242' }} />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 32 }}>

        {/* ── Article card (peach/salmon background) ── */}
        <div style={{
          backgroundColor: '#FAEADE', borderRadius: 20,
          padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {/* Metadata row: avatars + curation info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Stacked avatar circles */}
            <div style={{ display: 'flex' }}>
              {[
                { bg: '#E8906A', initials: 'AK' },
                { bg: '#C4715A', initials: 'LM' },
                { bg: '#9A5745', initials: 'BR' },
              ].map((av, i) => (
                <div key={i} style={{
                  width: 24, height: 24, borderRadius: 12,
                  backgroundColor: av.bg, border: '2px solid #FAEADE',
                  marginLeft: i > 0 ? -6 : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ ...segoe, color: 'white', fontSize: 8, fontWeight: 700 }}>{av.initials}</span>
                </div>
              ))}
              <div style={{
                width: 24, height: 24, borderRadius: 12,
                backgroundColor: '#7A4533', border: '2px solid #FAEADE',
                marginLeft: -6, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ ...segoe, color: 'white', fontSize: 8, fontWeight: 700 }}>+5</span>
              </div>
            </div>
            <span style={{ ...segoe, fontSize: 13, color: '#5C3A28', lineHeight: '18px' }}>
              Curated by ZavaCore · 7hrs ago
            </span>
          </div>

          {/* Hero image */}
          <div style={{ width: '100%', height: 180, borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #1a1a2e 0%, #1e3a5f 40%, #2d5a8e 70%, #4a7fb5 100%)',
            }} />
            {/* Subtle figure silhouette */}
            <div style={{
              position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
              width: '60%', height: '80%',
              background: 'radial-gradient(ellipse at bottom, rgba(255,255,255,0.07) 0%, transparent 70%)',
            }} />
          </div>

          {/* Headline */}
          <h2 style={{ ...segoe, fontSize: 26, fontWeight: 700, lineHeight: '34px', color: '#1A1A1A', margin: 0 }}>
            ZavaCore unveils adaptive weave breakthrough for extreme endurance environments
          </h2>

          {/* Lead paragraph (bold) */}
          <p style={{ ...segoe, fontSize: 15, fontWeight: 600, lineHeight: '24px', color: '#2A2A2A', margin: 0 }}>
            ZavaCore has introduced HelixWeave™, a next-gen textile architecture that dynamically stiffens under impact and relaxes during recovery, redefining how performance fabrics respond in motion.
          </p>

          {/* What's new */}
          <p style={{ ...segoe, fontSize: 15, fontWeight: 400, lineHeight: '22px', color: '#3A3A3A', margin: 0 }}>
            <strong>What's new:</strong>{' '}
            Built with embedded micro-responsive fibers, the material senses temperature shifts, muscle exertion, and directional force in real time.
          </p>

          {/* Why it matters */}
          <p style={{ ...segoe, fontSize: 15, fontWeight: 400, lineHeight: '22px', color: '#3A3A3A', margin: 0 }}>
            <strong>Why it matters:</strong>{' '}
            From elite athletics to industrial safety gear, adaptive textiles could reduce fatigue, improve recovery cycles, and enhance durability under repeated stress.
          </p>

          {/* Engagement bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 4, borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {/* Thumbs up */}
              <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 6 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#5C3A28" strokeWidth="1.5">
                  <path d="M7 9l3-6a2 2 0 014 1v3h4a2 2 0 010 4l-1 5H8V9zm-1 0H3v9h3V9z"/>
                </svg>
                <span style={{ ...segoe, fontSize: 13, color: '#5C3A28' }}>55</span>
              </button>
              {/* Thumbs down */}
              <button style={{ display: 'flex', alignItems: 'center', padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 6 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#5C3A28" strokeWidth="1.5">
                  <path d="M13 11l-3 6a2 2 0 01-4-1v-3H2a2 2 0 010-4l1-5h8v7zm1 0h3V2h-3v9z"/>
                </svg>
              </button>
              {/* Comments */}
              <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 6 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#5C3A28" strokeWidth="1.5">
                  <path d="M18 10c0 3.866-3.582 7-8 7a8.96 8.96 0 01-3.654-.769L2 18l1.395-3.72C2.512 13.227 2 11.666 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"/>
                </svg>
                <span style={{ ...segoe, fontSize: 13, color: '#5C3A28' }}>27</span>
              </button>
              {/* More */}
              <button style={{ display: 'flex', alignItems: 'center', padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 6 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="#5C3A28">
                  <circle cx="4" cy="10" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/>
                </svg>
              </button>
            </div>
            {/* Listen as podcast */}
            <button style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '7px 14px', backgroundColor: 'white',
              border: '1px solid rgba(0,0,0,0.12)', borderRadius: 20, cursor: 'pointer',
              ...segoe, fontSize: 13, color: '#242424',
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'white')}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#424242" strokeWidth="1.5">
                <path d="M9 4a4 4 0 110 8 4 4 0 010-8z"/>
                <path d="M9 8v8m0 0H5m4 0h4"/>
                <circle cx="9" cy="8" r="1" fill="#424242" stroke="none"/>
              </svg>
              Listen as podcast
            </button>
          </div>
        </div>

        {/* ── Article body ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ ...segoe, fontSize: 12, color: '#616161', margin: 0 }}>ZavaCore Fiber Series</p>
          <h1 style={{ ...segoe, fontSize: 28, fontWeight: 700, color: '#242424', margin: 0, lineHeight: '36px' }}>
            Performance Trends and Product Impact
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ ...segoe, fontSize: 16, lineHeight: '26px', color: '#424242', margin: 0 }}>
            Since the launch of ZavaCore Fiber v2 in mid-May 2028, pilot program feedback has surged by 52%, signaling strong engagement but also surfacing critical performance considerations. While adoption momentum remains high, field testing revealed durability and adaptive response variability in high-exertion environments.
          </p>
          <p style={{ ...segoe, fontSize: 16, lineHeight: '26px', color: '#424242', margin: 0 }}>
            Quantitative metrics show a 28% increase in high-load stress reports during endurance simulations compared to baseline fabric models, indicating deeper performance calibration opportunities under sustained strain.
          </p>

          <div>
            <p style={{ ...segoe, fontSize: 16, lineHeight: '26px', color: '#424242', margin: '0 0 12px' }}>
              Three dominant themes have emerged across pilot programs and validation logic:
            </p>
            <ul style={{ paddingLeft: 24, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ ...segoe, fontSize: 16, lineHeight: '26px', color: '#424242' }}>
                <strong>Dynamic tension lag</strong> was observed in 34% of high-exertion trials, particularly during rapid directional shifts in field athletics testing.
              </li>
              <li style={{ ...segoe, fontSize: 16, lineHeight: '26px', color: '#424242' }}>
                <strong>Thermal response variance</strong> led to inconsistent breathability in extended heat exposure scenarios, prompting recalibration of micro-responsive fibers.
              </li>
              <li style={{ ...segoe, fontSize: 16, lineHeight: '26px', color: '#424242' }}>
                <strong>Load distribution imbalance</strong> under repeated compression cycles was flagged in industrial wear simulations, with measurable stiffness drift after prolonged use.
              </li>
            </ul>
          </div>

          <p style={{ ...segoe, fontSize: 16, lineHeight: '26px', color: '#424242', margin: 0 }}>
            Customer sentiment reflects both enthusiasm and precision feedback. In the Product Validation Summary, 82% of enterprise partners cited performance consistency as the top priority for full-scale deployment.
          </p>
        </div>

      </div>
    </div>
  );
}
