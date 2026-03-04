import { ChartMultiple24Regular, MoreHorizontal20Regular, ArrowTrending12Regular, ArrowMaximize20Regular } from '@fluentui/react-icons';
import vivaEngageIcon from '../assets/icons/Viva Engage.svg';
import clockSparkleIcon from '../assets/icons/Clock Sparkle.svg';
import checkmarkCircleIcon from '../assets/icons/Checkmark Circle.svg';
import commentIcon from '../assets/icons/Comment.svg';
import sparkleSvg from '../assets/icons/Sound Wave Circle Sparkle.svg';
import coworker1 from '../assets/images/Coworker-1.png';
import coworker2 from '../assets/images/Coworker-2.png';
import coworker3 from '../assets/images/Coworker-3.png';

// Post card header strip images
const imgAnnouncementStrip = 'https://www.figma.com/api/mcp/asset/287c3dc1-724c-485c-915c-bbdd714f8dd5';
const imgTrendingStrip     = 'https://www.figma.com/api/mcp/asset/1acd00da-98ee-4640-abbc-fa86419c2dd2';
// Post 3 image (Antarctica photo)
const imgAntarctica = 'https://www.figma.com/api/mcp/asset/bccdfe30-b65d-4c47-9f64-265413b3f1f7';
import avatar1 from '../assets/images/Avatar-1.png';
import avatar2 from '../assets/images/Avatar-2.png';
import avatar3 from '../assets/images/Avatar-3.png';
import avatar4 from '../assets/images/Avatar-4.png';
import avatar5 from '../assets/images/Avatar-5.png';
import avatar6 from '../assets/images/Avatar-6.png';
import avatar7 from '../assets/images/Avatar-7.png';

// Figma asset URLs (valid 7 days)
const donutBase    = 'https://www.figma.com/api/mcp/asset/ba519adb-9454-464d-96cc-723f1fe99a88';
const donutSeg2    = 'https://www.figma.com/api/mcp/asset/8363cdb6-502e-4a6f-8390-1fb136db3fc3';
const donutSeg1    = 'https://www.figma.com/api/mcp/asset/c6a1306d-93b4-455a-b29f-17970aac72d9';
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
        <img src={vivaEngageIcon} alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
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
              {/* Base */}
              <div style={{ position: 'absolute', left: 0, top: 0, width: 176, height: 176 }}>
                <div style={{ position: 'absolute', top: '-1.14%', right: '-1.14%', bottom: '-1.14%', left: '-1.14%' }}>
                  <img alt="" src={donutBase} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
                </div>
              </div>
              {/* Segment 2 */}
              <div style={{ position: 'absolute', left: 0, top: 0, width: 176, height: 176 }}>
                <div style={{ position: 'absolute', top: '18.43%', right: '-1.14%', bottom: '-1.14%', left: '-1.14%' }}>
                  <img alt="" src={donutSeg2} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
                </div>
              </div>
              {/* Segment 1 */}
              <div style={{ position: 'absolute', left: 0, top: 0, width: 176, height: 176 }}>
                <div style={{ position: 'absolute', top: '-1.14%', right: '8.68%', bottom: '52.04%', left: '-1.05%' }}>
                  <img alt="" src={donutSeg1} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
                </div>
              </div>
              {/* Center text */}
              <p style={{ position: 'absolute', left: 88, top: 55.5, transform: 'translateX(-50%)', width: 107.591, height: 65, margin: 0, ...segoe, fontSize: 28, fontWeight: 600, lineHeight: '28px', color: '#323130', textAlign: 'center' }}>
                10 days 5 hours
              </p>
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

/* ── Section 3: People to follow ──────────────────────── */

const people = [
  { name: 'Kian',      avatar: avatar1 },
  { name: 'Hillary',   avatar: avatar2 },
  { name: 'Cassandra', avatar: avatar3 },
  { name: 'Robin',     avatar: avatar4 },
  { name: 'Edmee',     avatar: avatar5 },
  { name: 'Erika',     avatar: avatar6 },
  { name: 'Pasquale',  avatar: avatar7 },
  { name: 'Reta',      avatar: avatar1 },
];

function PeopleToFollowSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <PageHeader>People to follow</PageHeader>
      <div style={{ background: '#ebf3fc', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
        {/* Title + subtitle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#424242', whiteSpace: 'nowrap' }}>
              People to follow
            </p>
            <p style={{ ...segoe, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#616161', whiteSpace: 'nowrap' }}>
              Stay connected by following people to see their activity in your feed.
            </p>
          </div>
        </div>

        {/* Avatar carousel */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', overflow: 'hidden', width: '100%' }}>
          {people.map((p, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '8px 2px', width: 88, flexShrink: 0 }}>
              {/* Avatar */}
              <div style={{ width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <img src={p.avatar} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Name */}
              <p style={{ ...segoe, margin: 0, width: 84, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#242424', textAlign: 'center' }}>
                {p.name}
              </p>
              {/* Follow button */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 28, paddingLeft: 8, paddingRight: 10, background: '#fff', border: '1px solid #ebebeb', borderRadius: 8, cursor: 'pointer' }}>
                <span style={{ ...segoe, fontSize: 12, fontWeight: 600, lineHeight: 'normal', color: '#616161', whiteSpace: 'nowrap' }}>Follow</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Section 4: Your personalized updates ─────────────── */

function PersonalizedUpdatesSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <PageHeader>Your personalized updates</PageHeader>
      <Paragraph>
        Your personalized updates surface the activity that matters most to you. Track active members, new conversations, and the engagement trends shaping your Viva Engage experience.
      </Paragraph>

      <WidgetCard>
        {/* Entity header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 12, borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: '#f3f2f1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <img src={clockSparkleIcon} alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Since you were gone</p>
            <p style={{ ...segoe, margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#616161' }}>March 2026 - April 2026</p>
          </div>
          <button style={{ ...segoe, display: 'flex', alignItems: 'center', gap: 6, height: 32, padding: '0 12px', background: '#fff', border: '1px solid #d1d1d1', borderRadius: 8, fontSize: 14, fontWeight: 600, color: '#242424', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            <img src={vivaEngageIcon} alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
            Open in Engage
          </button>
          <button style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer', color: '#424242' }}>
            <MoreHorizontal20Regular />
          </button>
        </div>

        {/* Insights stats */}
        <div style={{ background: '#fff', borderRadius: 4, padding: 24, marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 24, paddingBottom: 24 }}>
            {/* Active People */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 12 }}>
              <div style={{ width: 30, height: 30, borderRadius: 25, background: 'rgba(43,136,216,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={checkmarkCircleIcon} alt="" style={{ width: 20, height: 20 }} />
              </div>
              <p style={{ ...segoe, margin: '8px 0 0', fontSize: 16, fontWeight: 700, lineHeight: '22px', color: '#11100f', textAlign: 'center' }}>Active People</p>
              <p style={{ ...segoe, margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#605e5c', textAlign: 'center' }}>Total number of active members</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginTop: 8 }}>
                <span style={{ ...segoe, fontSize: 48, fontWeight: 700, lineHeight: 'normal', color: '#000', whiteSpace: 'nowrap' }}>417</span>
                <span style={{ display: 'flex', alignItems: 'center', paddingBottom: 7, paddingLeft: 4, color: '#038387', fontSize: 12, fontWeight: 700 }}>
                  10% <ArrowTrending12Regular style={{ marginLeft: 2 }} />
                </span>
              </div>
              <p style={{ ...segoe, margin: 0, fontSize: 10, lineHeight: '14px', color: '#605e5c', textAlign: 'center' }}>Last 28 days</p>
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 74, background: '#edebe9', flexShrink: 0 }} />

            {/* Posted Messages */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 12 }}>
              <div style={{ width: 30, height: 30, borderRadius: 25, background: 'rgba(92,45,145,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={commentIcon} alt="" style={{ width: 20, height: 20 }} />
              </div>
              <p style={{ ...segoe, margin: '8px 0 0', fontSize: 16, fontWeight: 700, lineHeight: '22px', color: '#11100f', textAlign: 'center' }}>Posted Messages</p>
              <p style={{ ...segoe, margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#605e5c', textAlign: 'center' }}>Total number of new posts</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginTop: 8 }}>
                <span style={{ ...segoe, fontSize: 48, fontWeight: 700, lineHeight: 'normal', color: '#000', whiteSpace: 'nowrap' }}>72</span>
                <span style={{ display: 'flex', alignItems: 'center', paddingBottom: 7, paddingLeft: 4, color: '#038387', fontSize: 12, fontWeight: 700 }}>
                  18% <ArrowTrending12Regular style={{ marginLeft: 2 }} />
                </span>
              </div>
              <p style={{ ...segoe, margin: 0, fontSize: 10, lineHeight: '14px', color: '#605e5c', textAlign: 'center' }}>Last 28 days</p>
            </div>
          </div>
        </div>
      </WidgetCard>
    </div>
  );
}

/* ── Section 5: Top Moments header ────────────────────── */

function TopMomentsHeaderSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <PageHeader>Top Moments</PageHeader>
      <div style={{ paddingBottom: 24 }}>
        <Paragraph>
          A pulse check on what's moving the company right now. From leadership announcements and strategic partnerships to culture-defining conversations and trending community content, this section highlights the stories sparking the most attention, alignment, and momentum across ZavaCore. Consider it your fast lane to what matters most.
        </Paragraph>
      </div>
    </div>
  );
}

/* ── Section 6: Summary card ───────────────────────────── */

function SummarySection() {
  return (
    <div style={{ background: '#e8ebfa', borderRadius: 12, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <img src={sparkleSvg} alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
        <span style={{ ...segoe, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424', whiteSpace: 'nowrap' }}>Summary</span>
      </div>

      <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424' }}>Top Moments</p>

      <div style={{ ...segoe, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#242424', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <p style={{ ...segoe, margin: '0 0 4px', fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#242424' }}>🧥🌧️ CEO Announces New Partnership with GoreTex</p>
          <p style={{ ...segoe, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#242424' }}>
            The big reveal: ZavaCore is teaming up with GoreTex to push adaptive performance textiles into new terrain. Think SmartMesh™ fused with legendary waterproof tech, engineered for extreme conditions and everyday athletes alike. The announcement teased limited-run collaborative products, joint R&D labs, and a sustainability pledge that blends durability with environmental responsibility. Slack channels lit up, the Engage feed spiked, and the product team is already fielding "when can I buy it?" messages. 🚀
          </p>
        </div>
        <div>
          <p style={{ ...segoe, margin: '0 0 4px', fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#242424' }}>🏢📅 All-Company Workshop Announced (Mandatory Attendance)</p>
          <p style={{ ...segoe, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#242424' }}>
            Calendar alerts just landed. The All-Company ZavaCore Workshop is officially scheduled and attendance is required. The session promises roadmap clarity, live demos from Engineering & AI, and hands-on breakout labs focused on the next wave of adaptive textile innovation. Expect leadership Q&A, cross-team alignment, and a few surprise reveals designed to sharpen our competitive edge. Bring your curiosity, your notebook, and probably coffee. ☕ 🧠
          </p>
        </div>
        <div>
          <p style={{ ...segoe, margin: '0 0 4px', fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#242424' }}>📸🔥 Photography Community Trending</p>
          <p style={{ ...segoe, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#242424' }}>
            The Photography community is having a moment. A recent post featuring behind-the-scenes shots from the latest product field test has gone viral internally, sparking threads on composition, motion capture, and brand storytelling. Engagement is up, new members are joining daily, and user-generated content is rolling in fast. It's quickly becoming one of the most vibrant culture hubs across the network. Creativity is doing laps around the track. 🎞️✨
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Section 7: Top Moments posts ─────────────────────── */

function PostHeader({ avatar, name, time, seenBy }: { avatar: string; name: string; time: string; seenBy: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 28px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ width: 4, height: 48, borderRadius: 2, background: '#0078d4', flexShrink: 0 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
          <img src={avatar} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424', whiteSpace: 'nowrap' }}>{name}</p>
          <p style={{ ...segoe, margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#616161', whiteSpace: 'nowrap' }}>{time}</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        <span style={{ ...segoe, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#616161', whiteSpace: 'nowrap' }}>Seen by {seenBy}</span>
        <div style={{ border: '1px solid #e0e0e0', borderRadius: 4, padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <ArrowMaximize20Regular style={{ color: '#424242', width: 20, height: 20 }} />
        </div>
      </div>
    </div>
  );
}

function TopMomentsPostsSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Post 1: Kristen Patterson */}
      <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden' }}>
        <PostHeader avatar={coworker1} name="Kristen Patterson" time="Yesterday at 12:48 PM" seenBy="11,750" />
        <div style={{ padding: '8px 28px' }}>
          <p style={{ ...segoe, margin: 0, fontSize: 20, fontWeight: 600, lineHeight: '32px', color: '#242424' }}>We are proud to announce our new partnership with GoreTex!</p>
        </div>
        <div style={{ padding: '0 28px 12px' }}>
          <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '22px', color: '#242424' }}>
            I'm working on a simple web app running locally to help me with some tasks. I want it to be able to make LLM calls. What's the best way to hook this into my anthropic api key? I tried getting one the Anthropic website after logging in with my Microsoft account but says I don't have permission.
          </p>
        </div>
      </div>

      {/* Post 2: Daisy Phillips — Announcement */}
      <div style={{ background: '#fff', borderRadius: 8 }}>
        {/* Header: items-end per Figma */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, padding: '16px 28px' }}>
          <div style={{ width: 4, height: 48, borderRadius: 2, background: '#d881cc', flexShrink: 0 }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1, minWidth: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img src={coworker2} alt="Daisy Phillips" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424', whiteSpace: 'nowrap' }}>Daisy Phillips</p>
              <p style={{ ...segoe, margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#616161', whiteSpace: 'nowrap' }}>Yesterday at 12:48 PM</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <span style={{ ...segoe, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#616161', whiteSpace: 'nowrap' }}>Seen by 988</span>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: 4, padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ArrowMaximize20Regular style={{ color: '#424242', width: 20, height: 20 }} />
            </div>
          </div>
        </div>
        {/* Content: px-28 pb-12, with top padding for pill */}
        <div style={{ padding: '0 28px 12px' }}>
          {/* Outer wrapper — pill sits centered on the card's top border */}
          <div style={{ position: 'relative', paddingTop: 12 }}>
            <div style={{ position: 'absolute', top: 12, left: 40, transform: 'translateY(-50%)', zIndex: 1, background: '#d881cc', borderRadius: 20, paddingTop: 4, paddingBottom: 5, paddingLeft: 8, paddingRight: 8 }}>
              <span style={{ ...segoe, fontSize: 10, fontWeight: 700, lineHeight: '14px', color: '#fff', whiteSpace: 'nowrap' }}>Announcement</span>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(216,129,204,0.25)', borderRadius: 16 }}>
              {/* 48px strip with decorative background */}
              <div style={{ position: 'relative', height: 48, borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <img src={imgAnnouncementStrip} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>
              {/* Text: pb-32 px-32 */}
              <div style={{ padding: '0 32px 32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ ...segoe, margin: 0, fontSize: 20, fontWeight: 600, lineHeight: '32px', color: '#242424' }}>All Company ZavaCore Workshop!</p>
                  <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '24px', color: '#242424' }}>We're bringing everyone together for the All Company ZavaCore Workshop, a dedicated moment to align on where we're headed and how we'll get there. This interactive session will spotlight our latest product direction, share progress across teams, and create space for collaboration, feedback, and new ideas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post 3: Colin Ballinger — Trending + image */}
      <div style={{ background: '#fff', borderRadius: 8 }}>
        {/* Header: items-end per Figma */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, padding: '16px 28px' }}>
          <div style={{ width: 4, height: 48, borderRadius: 2, background: '#0078d4', flexShrink: 0 }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1, minWidth: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img src={coworker3} alt="Colin Ballinger" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424', whiteSpace: 'nowrap' }}>Colin Ballinger</p>
              <p style={{ ...segoe, margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#616161', whiteSpace: 'nowrap' }}>Yesterday at 12:48 PM</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <span style={{ ...segoe, fontSize: 12, fontWeight: 400, lineHeight: '16px', color: '#616161', whiteSpace: 'nowrap' }}>Seen by 988</span>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: 4, padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ArrowMaximize20Regular style={{ color: '#424242', width: 20, height: 20 }} />
            </div>
          </div>
        </div>
        {/* Content: px-28 pb-12, with top padding for pill */}
        <div style={{ padding: '0 28px 12px' }}>
          <div style={{ position: 'relative', paddingTop: 12 }}>
            <div style={{ position: 'absolute', top: 12, left: 40, transform: 'translateY(-50%)', zIndex: 1, background: '#004e8c', borderRadius: 20, paddingTop: 4, paddingBottom: 5, paddingLeft: 8, paddingRight: 8 }}>
              <span style={{ ...segoe, fontSize: 10, fontWeight: 700, lineHeight: '14px', color: '#fff', whiteSpace: 'nowrap' }}>Trending</span>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(0,120,212,0.25)', borderRadius: 16 }}>
              {/* 48px strip with decorative background */}
              <div style={{ position: 'relative', height: 48, borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <img src={imgTrendingStrip} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>
              {/* Text: pb-32 px-32, gap-16 */}
              <div style={{ padding: '0 32px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ borderRadius: 24, overflow: 'hidden', height: 206 }}>
                  <img src={imgAntarctica} alt="Antarctica" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ ...segoe, margin: 0, fontSize: 20, fontWeight: 600, lineHeight: '32px', color: '#242424' }}>Hi, here is one of my many pictures from Antarctica, enjoy. Sony Alpha 7R V with 600mm Lens.</p>
                  <p style={{ ...segoe, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '24px', color: '#242424' }}>Captured along the icy coastline just after sunrise, this moment felt almost unreal. The light was soft, the air completely still, and the only movement came from drifting ice carving quiet paths across the water. Shooting at 600mm allowed me to compress the layers of glaciers and mountains into a single frame, highlighting the scale and texture that make Antarctica so mesmerizing. One of those scenes where you just stop, watch, and try to remember how small you are in the best possible way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <PeopleToFollowSection />
      <PersonalizedUpdatesSection />
      <TopMomentsHeaderSection />
      <SummarySection />
      <TopMomentsPostsSection />
    </div>
  );
}
