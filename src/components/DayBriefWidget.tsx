import { useState } from 'react';
import { Avatar } from '@fluentui/react-avatar';
import {
  CalendarFilled, CalendarRegular,
  FolderFilled, FolderRegular,
  MailFilled, MailRegular,
  MentionFilled, MentionRegular,
  PeopleFilled, PeopleRegular,
  CheckmarkCircleFilled,
} from '@fluentui/react-icons';

import iconDocx from '../assets/icons/docx.svg';
import iconPptx from '../assets/icons/pptx.svg';
import iconXls  from '../assets/icons/xls.svg';

import imgAvatarKat    from '../assets/images/Avatar/People Card-Avatar/Avatar.png';
import imgAvatarAadi   from '../assets/images/Avatar/People Card-Avatar/Avatar-1.png';
import imgAvatarRobin  from '../assets/images/Avatar/People Card-Avatar/Avatar-2.png';
import imgAvatarLydia  from '../assets/images/Avatar/People Card-Avatar/Avatar-3.png';
import imgAvatarHR     from '../assets/images/Avatar-7.png';
import imgAvatarJordan from '../assets/images/Coworker-2.png';
import imgAvatarMona   from '../assets/images/Coworker-3.png';

const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };

type TabId = 'Meetings' | 'Files' | 'Email' | 'Mentions' | 'People';

// ── Tab data ──────────────────────────────────────────────────────────────────
const tabs: { id: TabId; filled: React.ReactNode; regular: React.ReactNode; label: string }[] = [
  { id: 'Meetings', label: 'Meetings', filled: <CalendarFilled  style={{ width: 14, height: 14 }} />, regular: <CalendarRegular  style={{ width: 14, height: 14 }} /> },
  { id: 'Files',    label: 'Files',    filled: <FolderFilled    style={{ width: 14, height: 14 }} />, regular: <FolderRegular    style={{ width: 14, height: 14 }} /> },
  { id: 'Email',    label: 'Email',    filled: <MailFilled      style={{ width: 14, height: 14 }} />, regular: <MailRegular      style={{ width: 14, height: 14 }} /> },
  { id: 'Mentions', label: 'Mentions', filled: <MentionFilled   style={{ width: 14, height: 14 }} />, regular: <MentionRegular   style={{ width: 14, height: 14 }} /> },
  { id: 'People',   label: 'People',   filled: <PeopleFilled    style={{ width: 14, height: 14 }} />, regular: <PeopleRegular    style={{ width: 14, height: 14 }} /> },
];

// ── Static micro-data ─────────────────────────────────────────────────────────
const meetingItems = [
  { name: 'ZavaCore Q2 Roadmap Review',           time: '11:35 AM' },
  { name: 'AI Platform · Weekly Eng Sync',        time: '12:35 PM' },
  { name: 'New Hire Kickoff — Onboarding Week 1', time: '5:35 PM'  },
];

const fileItems = [
  { type: 'xlsx', name: 'Q3 Budget Review'           },
  { type: 'pptx', name: 'Contoso Partnership Deck'   },
  { type: 'docx', name: 'Onboarding Plan — New Hire' },
  { type: 'pptx', name: 'ZavaCore Roadmap H2 2026'   },
];

const emailItems = [
  { name: 'Kat Larsson',  img: imgAvatarKat,   subject: 'RE: Contoso Partnership — Contract Update', time: '9:42 AM',   badge: true  },
  { name: 'Aadi Kapoor',  img: imgAvatarAadi,  subject: 'Q3 Budget Approval — Deadline Friday',      time: '8:15 AM',   badge: false },
  { name: 'Microsoft HR', img: imgAvatarHR,    subject: 'Your benefits enrollment closes March 10',  time: 'Yesterday', badge: false },
  { name: 'Lydia Bauer',  img: imgAvatarLydia, subject: 'Onboarding checklist for new hire',          time: 'Yesterday', badge: false },
];

const mentionItems = [
  { name: 'Aadi Kapoor',  img: imgAvatarAadi,  context: 'Teams · #project-contoso',    time: '1h ago'  },
  { name: 'Jordan Lee',   img: imgAvatarJordan,context: 'Teams · #budget-planning',     time: '3h ago'  },
  { name: 'Robin Counts', img: imgAvatarRobin, context: 'Outlook · Architecture Review',time: 'Yesterday' },
  { name: 'Mona Kane',    img: imgAvatarMona,  context: 'Teams · #leadership-updates',  time: 'Yesterday' },
];

const peopleItems = [
  { name: 'Kat Larsson',  img: imgAvatarKat,   role: 'Program Manager',    presence: 'away'      as const },
  { name: 'Aadi Kapoor',  img: imgAvatarAadi,  role: 'Finance Lead',        presence: 'available' as const },
  { name: 'Lydia Bauer',  img: imgAvatarLydia, role: 'HR Business Partner', presence: 'available' as const },
  { name: 'Robin Counts', img: imgAvatarRobin, role: 'Principal Engineer',  presence: 'busy'      as const },
];

const iconMap: Record<string, string> = { docx: iconDocx, pptx: iconPptx, xlsx: iconXls, xls: iconXls };

// ── Row styles ────────────────────────────────────────────────────────────────
const rowBase: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
  padding: '7px 0', cursor: 'pointer',
};

// ── Tab content ───────────────────────────────────────────────────────────────
function MeetingsMini() {
  return (
    <>
      {meetingItems.map((m, i) => (
        <div key={i} style={{ ...rowBase, borderBottom: i < meetingItems.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: '#ebefff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <CalendarFilled style={{ width: 14, height: 14, color: '#464feb' }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.name}</div>
            <div style={{ ...seg, fontSize: 11, color: '#616161' }}>{m.time}</div>
          </div>
        </div>
      ))}
    </>
  );
}

function FilesMini() {
  return (
    <>
      {fileItems.map((f, i) => (
        <div key={i} style={{ ...rowBase, borderBottom: i < fileItems.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
          <img src={iconMap[f.type]} alt={f.type} style={{ width: 20, height: 20, flexShrink: 0 }} />
          <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
        </div>
      ))}
    </>
  );
}

function EmailMini() {
  return (
    <>
      {emailItems.map((e, i) => (
        <div key={i} style={{ ...rowBase, alignItems: 'flex-start', borderBottom: i < emailItems.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
          <Avatar name={e.name} image={{ src: e.img }} size={28} style={{ flexShrink: 0, marginTop: 1 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
              <span style={{ ...seg, fontSize: 12, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.name}</span>
              <span style={{ ...seg, fontSize: 11, color: '#616161', flexShrink: 0 }}>{e.time}</span>
            </div>
            <div style={{ ...seg, fontSize: 11, color: '#616161', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.subject}</div>
          </div>
        </div>
      ))}
    </>
  );
}

function MentionsMini() {
  return (
    <>
      {mentionItems.map((m, i) => (
        <div key={i} style={{ ...rowBase, alignItems: 'flex-start', borderBottom: i < mentionItems.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
          <Avatar name={m.name} image={{ src: m.img }} size={28} style={{ flexShrink: 0, marginTop: 1 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
              <span style={{ ...seg, fontSize: 12, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.name}</span>
              <span style={{ ...seg, fontSize: 11, color: '#616161', flexShrink: 0 }}>{m.time}</span>
            </div>
            <div style={{ ...seg, fontSize: 11, color: '#616161', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.context}</div>
          </div>
        </div>
      ))}
    </>
  );
}

function PeopleMini() {
  return (
    <>
      {peopleItems.map((p, i) => (
        <div key={i} style={{ ...rowBase, borderBottom: i < peopleItems.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
          <Avatar name={p.name} image={{ src: p.img }} size={28} badge={{ status: p.presence }} style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
            <div style={{ ...seg, fontSize: 11, color: '#616161' }}>{p.role}</div>
          </div>
        </div>
      ))}
    </>
  );
}

// ── Widget ────────────────────────────────────────────────────────────────────
interface DayBriefWidgetProps {
  onAddToHome?: () => void;
  homeMode?: boolean;
}

export default function DayBriefWidget({ onAddToHome, homeMode = false }: DayBriefWidgetProps) {
  const [activeTab, setActiveTab] = useState<TabId>('Meetings');
  const [added, setAdded] = useState(false);

  const handleAddToHome = () => {
    if (added) return;
    setAdded(true);
    onAddToHome?.();
  };

  return (
    <div style={{
      width: homeMode ? '100%' : 270,
      height: homeMode ? '100%' : undefined,
      flexShrink: homeMode ? undefined : 0,
      backgroundColor: '#fff',
      border: '1px solid #edebe9',
      borderRadius: 24,
      boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)',
      display: 'flex', flexDirection: 'column',
      boxSizing: 'border-box',
    }}>

      {/* Header */}
      <div style={{ padding: '20px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424', lineHeight: '22px' }}>Day at a Glance</span>
      </div>

      {/* Tab bar */}
      <div style={{ padding: '12px 12px 0', display: 'flex', gap: 2 }}>
        {tabs.map(tab => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              title={tab.label}
              style={{
                ...seg, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '5px 4px', borderRadius: 6, border: 'none', cursor: 'pointer',
                backgroundColor: selected ? '#ebefff' : 'transparent',
                color: selected ? '#464feb' : '#616161',
                fontSize: 11, fontWeight: selected ? 600 : 400,
                transition: 'background-color 0.1s',
              }}
              onMouseEnter={e => { if (!selected) e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
              onMouseLeave={e => { if (!selected) e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              {selected ? tab.filled : tab.regular}
            </button>
          );
        })}
      </div>

      {/* Active tab label */}
      <div style={{ padding: '8px 20px 4px' }}>
        <span style={{ ...seg, fontSize: 11, fontWeight: 600, color: '#616161', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {activeTab}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '0 20px', overflowY: 'auto', maxHeight: homeMode ? undefined : 360 }}>
        {activeTab === 'Meetings' && <MeetingsMini />}
        {activeTab === 'Files'    && <FilesMini />}
        {activeTab === 'Email'    && <EmailMini />}
        {activeTab === 'Mentions' && <MentionsMini />}
        {activeTab === 'People'   && <PeopleMini />}
      </div>

      {/* Footer — hidden in homeMode */}
      {!homeMode && (
        <div style={{ padding: '12px 20px 20px', borderTop: '1px solid #f0f0f0', marginTop: 8 }}>
          <button
            onClick={handleAddToHome}
            style={{
              width: '100%', ...seg, fontSize: 14, fontWeight: 600,
              color: added ? '#107c10' : '#242424',
              backgroundColor: added ? '#f1faf1' : '#fff',
              border: `1px solid ${added ? '#107c10' : '#d1d1d1'}`,
              borderRadius: 4, padding: '5px 12px', cursor: added ? 'default' : 'pointer',
              lineHeight: '20px', transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { if (!added) e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
            onMouseLeave={e => { if (!added) e.currentTarget.style.backgroundColor = '#fff'; }}
          >
            {added ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <CheckmarkCircleFilled style={{ width: 16, height: 16, color: '#107c10' }} />
                Added to home
              </span>
            ) : 'Add to home'}
          </button>
        </div>
      )}

    </div>
  );
}
