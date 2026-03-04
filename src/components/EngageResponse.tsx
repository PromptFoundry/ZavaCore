import { ChartMultiple24Regular, MoreHorizontal20Regular, ArrowTrending12Regular } from '@fluentui/react-icons';

// Figma asset URLs (valid 7 days)
const donutBase    = 'https://www.figma.com/api/mcp/asset/3400bea5-ae43-4614-8f96-4898e604f3ac';
const donutSeg1    = 'https://www.figma.com/api/mcp/asset/5257f0af-47de-44b7-939f-7847c817aea8';
const donutSeg2    = 'https://www.figma.com/api/mcp/asset/c41953ca-de6a-4b7c-9f55-bdfe06c9c115';
const questionIcon = 'https://www.figma.com/api/mcp/asset/052492e9-92ff-4423-9d2e-a8c126a5c06e';

const segoe: React.CSSProperties = { fontFamily: '"Segoe UI", sans-serif' };

/* ── small reusable pieces ─────────────────────────────── */

function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ ...segoe, margin: 0, fontSize: 36, fontWeight: 600, lineHeight: '44px', color: '#424242' }}>
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
      {children}
    </p>
  );
}

function WidgetCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: 24,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
    }}>
      {children}
    </div>
  );
}

function EntityHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 12, borderBottom: '1px solid #e0e0e0' }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: '#f3f2f1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <ChartMultiple24Regular style={{ color: '#605e5c', width: 20, height: 20 }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</p>
        <p style={{ ...segoe, margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#616161' }}>{subtitle}</p>
      </div>
      <button style={{ ...segoe, display: 'flex', alignItems: 'center', gap: 6, height: 32, padding: '0 12px', background: '#fff', border: '1px solid #d1d1d1', borderRadius: 8, fontSize: 14, fontWeight: 600, color: '#242424', cursor: 'pointer', whiteSpace: 'nowrap' }}>
        Open in Engage
      </button>
      <button style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer', color: '#424242' }}>
        <MoreHorizontal20Regular />
      </button>
    </div>
  );
}

function StatCard({ title, stats }: { title: string; stats: { value: string; pct: string; label: string }[] }) {
  return (
    <div style={{ flex: 1, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: 24 }}>
      <p style={{ ...segoe, margin: '0 0 16px', fontSize: 14, fontWeight: 700, lineHeight: '20px', color: '#242424' }}>{title}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ minWidth: 80 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ ...segoe, fontSize: 24, fontWeight: 600, lineHeight: '32px', color: '#242424' }}>{s.value}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 2, color: '#038387', fontSize: 12, paddingTop: 8 }}>
                {s.pct} <ArrowTrending12Regular />
              </span>
            </div>
            <p style={{ ...segoe, margin: 0, fontSize: 12, lineHeight: '16px', color: '#616161' }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AvatarGroup({ initials }: { initials: string[] }) {
  const colors = ['#637cef', '#9373c0', '#038387', '#0078d4'];
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {initials.map((init, i) => (
        <div key={i} style={{
          width: 24, height: 24, borderRadius: '50%',
          background: init === '+5' || init === '+2' ? '#f0f0f0' : colors[i % colors.length],
          border: '2px solid #fff',
          marginLeft: i === 0 ? 0 : -6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 9, fontWeight: 600, color: init.startsWith('+') ? '#616161' : '#fff',
          fontFamily: '"Segoe UI", sans-serif',
          zIndex: initials.length - i,
          flexShrink: 0,
        }}>{init}</div>
      ))}
    </div>
  );
}

/* ── Section 1: Q&A Summary ────────────────────────────── */

const qaQuestions = [
  { time: '120 min saved', text: 'How do I submit my expense report for team lunch and learns? We recently hosted a series around user research testing and I need to expense the al...' },
  { time: '90 min saved',  text: "How do I get badge access into the office? I'm visiting the Redmond campus in May and need to ensure I can get in because I'll be touring new int..." },
  { time: '40 min saved',  text: "Where do I go for lost items in the office? I can't find my computer bag and will be leaving the country next week for a conference abroad. It has..." },
];

function QASummarySection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <PageHeader>Q&amp;A Summary</PageHeader>
      <Paragraph>
        Here's a focused look at the most active discussions in the Answers hub across ZavaCore. Discover the questions employees are raising, the guidance being shared by subject matter experts, and the solutions gaining momentum. This recap brings forward the knowledge exchanges helping teams move faster and stay aligned. 💡📚
      </Paragraph>
      <WidgetCard>
        <EntityHeader title="Highlights by theme" subtitle="March 2026 - April 2026" />

        {/* Chart + Table */}
        <div style={{ display: 'flex', gap: 24, paddingTop: 24, paddingBottom: 24 }}>
          {/* Donut chart */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, flex: '0 0 280px' }}>
            <p style={{ ...segoe, margin: 0, fontSize: 14, fontWeight: 700, lineHeight: '20px', color: '#242424', alignSelf: 'flex-start' }}>Time saved by Answers</p>
            <div style={{ position: 'relative', width: 176, height: 176 }}>
              <img src={donutBase} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
              <img src={donutSeg2} alt="" style={{ position: 'absolute', top: '18.43%', left: 0, right: 0, bottom: '-1.14%', width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={donutSeg1} alt="" style={{ position: 'absolute', top: '-1.14%', left: '-1.05%', right: '8.68%', bottom: '52.04%', width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', ...segoe, fontSize: 22, fontWeight: 600, lineHeight: '28px', color: '#323130', whiteSpace: 'nowrap' }}>
                10 days<br />5 hours
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: 6, background: '#637cef', flexShrink: 0 }} />
                <span style={{ ...segoe, fontSize: 12, color: '#616161' }}>Time saved by questions with best answer: <strong>59.0%</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: 6, background: '#9373c0', flexShrink: 0 }} />
                <span style={{ ...segoe, fontSize: 12, color: '#616161' }}>Time saved by questions without best answer: <strong>41.0%</strong></span>
              </div>
            </div>
          </div>

          {/* Questions table */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ ...segoe, margin: 0, fontSize: 12, fontWeight: 600, lineHeight: '16px', color: '#242424' }}>Top 3 questions that saved time for your organization</p>
            <div style={{ display: 'flex', borderBottom: '1px solid #edebe9', paddingBottom: 8, gap: 8 }}>
              <span style={{ ...segoe, flex: 1, fontSize: 12, color: '#242424' }}>Questions</span>
              <span style={{ ...segoe, fontSize: 12, color: '#242424', textAlign: 'right' }}>Time saved ↓</span>
            </div>
            {qaQuestions.map((q, i) => (
              <div key={i} style={{ borderBottom: i < qaQuestions.length - 1 ? '1px solid #edebe9' : 'none', paddingBottom: 12 }}>
                <p style={{ ...segoe, margin: '0 0 8px', fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#242424' }}>{q.time}</p>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <div style={{ position: 'relative', width: 36, height: 36, flexShrink: 0 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#ebf3fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={questionIcon} alt="" style={{ width: 20, height: 20 }} />
                    </div>
                  </div>
                  <p style={{ ...segoe, margin: 0, fontSize: 12, lineHeight: '16px', color: '#242424' }}>{q.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coaching bar */}
        <div style={{ background: '#f3f9fd', borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', border: '1px solid #d1d1d1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            💡
          </div>
          <p style={{ ...segoe, flex: 1, margin: 0, fontSize: 12, lineHeight: '16px', color: '#242424' }}>
            Every question answered and asked saves people an average of 15 minutes by reducing the time spent searching and gathering information.
          </p>
          <button style={{ ...segoe, height: 32, padding: '0 24px', background: '#0078d4', border: 'none', borderRadius: 20, fontSize: 14, fontWeight: 600, color: '#fff', cursor: 'pointer', whiteSpace: 'nowrap' }}>Learn more</button>
        </div>

        {/* Summary stat cards */}
        <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
          <StatCard title="Answers summary" stats={[
            { value: '205', pct: '12%', label: 'Answers you provided' },
            { value: '314', pct: '12%', label: 'Votes on answers you provided' },
            { value: '34',  pct: '5%',  label: 'Best answers you provided' },
          ]} />
          <StatCard title="Questions summary" stats={[
            { value: '120', pct: '20%', label: 'Questions you asked' },
            { value: '412', pct: '+2%', label: 'Views on questions you asked' },
          ]} />
        </div>
      </WidgetCard>
    </div>
  );
}

/* ── Section 2: Highlights by theme ───────────────────── */

const themeBars = [
  { label: 'Product & Event Announcements', widthPct: 30, height: 48, color: '#e1dfdd', avatars: ['MK', 'MB', 'EW', 'AB'], posts: '14 posts' },
  { label: 'Community & Culture',           widthPct: 51, height: 80, color: '#ebf3fc', avatars: ['MK', 'MB', '+5'],       posts: '20+ posts' },
  { label: 'Engineering & AI',              widthPct: 17, height: 24, color: '#e1dfdd', avatars: ['MK', 'MB', 'EW', 'AB'], posts: '6 posts' },
  { label: 'Community Moments',             widthPct: 40, height: 48, color: '#e1dfdd', avatars: ['MK', 'MB', 'EW', '+2'], posts: '18 posts' },
];

function HighlightsByThemeSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <PageHeader>Highlights by theme</PageHeader>
      <Paragraph>
        Here's a quick catch-up on what's happening across your Viva Engage network at ZavaCore. From important product and event announcements to the conversations shaping community and culture, this snapshot highlights the updates that matter most.
      </Paragraph>
      <WidgetCard>
        <EntityHeader title="Highlights by theme" subtitle="March 2026 - April 2026" />
        <div style={{ paddingTop: 32, display: 'flex', gap: 40, alignItems: 'center' }}>
          {/* Bar chart */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>
            {themeBars.map((bar, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ width: 160, textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ ...segoe, fontSize: bar.widthPct > 45 ? 24 : 16, fontWeight: 600, color: '#171717', lineHeight: '1.2' }}>{bar.label}</span>
                </div>
                <div style={{ height: bar.height, width: `${bar.widthPct}%`, maxWidth: 300, background: bar.color, borderRadius: 999, flexShrink: 0 }} />
              </div>
            ))}
          </div>
          {/* Avatars + counts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, flexShrink: 0 }}>
            {themeBars.map((bar, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, height: bar.height, justifyContent: 'flex-end' }}>
                <AvatarGroup initials={bar.avatars} />
                <span style={{ ...segoe, fontSize: 12, fontWeight: 600, color: '#646464', whiteSpace: 'nowrap' }}>{bar.posts}</span>
              </div>
            ))}
          </div>
        </div>
      </WidgetCard>
    </div>
  );
}

/* ── Main export ───────────────────────────────────────── */

export default function EngageResponse() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      {/* Building card */}
      <div style={{
        background: '#fff',
        borderRadius: 20,
        padding: '24px 40px',
        boxShadow: '0px 1.5px 6px 0px rgba(0,0,0,0.18)',
      }}>
        <h1 style={{ ...segoe, margin: '0 0 8px', fontSize: 36, fontWeight: 600, lineHeight: '48px', color: '#242424' }}>
          Latest activity from Engage
        </h1>
        <p style={{ ...segoe, margin: '0 0 20px', fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
          Highlights and important updates from communities you follow and people you interact with.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button style={{ ...segoe, display: 'flex', alignItems: 'center', gap: 6, height: 36, padding: '0 12px', background: '#0f6cbd', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, color: '#fff', cursor: 'pointer' }}>
            Go to Engage
          </button>
          <button style={{ ...segoe, display: 'flex', alignItems: 'center', gap: 6, height: 36, padding: '0 12px', background: '#f5f5f5', border: '1px solid #ebebeb', borderRadius: 12, fontSize: 14, fontWeight: 600, color: '#616161', cursor: 'pointer' }}>
            Post to your storyline
          </button>
        </div>
      </div>

      <QASummarySection />
      <HighlightsByThemeSection />
    </div>
  );
}
