import { useState } from 'react';
import { Avatar } from '@fluentui/react-avatar';
import {
  CalendarFilled, CalendarRegular,
  FolderRegular,
  MailRegular,
  MentionRegular,
  PeopleRegular,
  CheckmarkCircleFilled,
  MoreHorizontalRegular,
} from '@fluentui/react-icons';

import iconDayAtAGlance from '../assets/icons/Icon_Day at a glance.svg';
import iconDocx from '../assets/icons/docx.svg';
import iconPptx from '../assets/icons/pptx.svg';
import iconXls  from '../assets/icons/xls.svg';

import imgAvatarKat    from '../assets/images/Avatar/People Card-Avatar/Avatar.png';
import imgAvatarAadi   from '../assets/images/Avatar/People Card-Avatar/Avatar-1.png';
import imgAvatarRobin  from '../assets/images/Avatar/People Card-Avatar/Avatar-2.png';
import imgAvatarLydia  from '../assets/images/Avatar/People Card-Avatar/Avatar-3.png';
import imgAvatarHR     from '../assets/images/Avatar-7.png';
import imgAvatarJordan from '../assets/images/Coworker-2.png';


const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };

type TabId = 'Meetings' | 'Files' | 'Email' | 'Mentions' | 'People';

const tabs: { id: TabId; icon: React.ReactNode; iconSelected?: React.ReactNode; label: string }[] = [
  { id: 'Meetings', label: 'Meetings', icon: <CalendarRegular style={{ width: 16, height: 16 }} />, iconSelected: <CalendarFilled style={{ width: 16, height: 16 }} /> },
  { id: 'Files',    label: 'Files',    icon: <FolderRegular   style={{ width: 16, height: 16 }} /> },
  { id: 'Email',    label: 'Email',    icon: <MailRegular     style={{ width: 16, height: 16 }} /> },
  { id: 'Mentions', label: 'Mentions', icon: <MentionRegular  style={{ width: 16, height: 16 }} /> },
  { id: 'People',   label: 'People',   icon: <PeopleRegular   style={{ width: 16, height: 16 }} /> },
];

const meetingItems = [
  { name: 'ZavaCore Q2 Roadmap Review',    time: '11:35 AM', duration: '55 min', cta: 'Join' },
  { name: 'AI Platform · Weekly Eng Sync', time: '12:35 PM', duration: '30 min', cta: 'RSVP' },
];

const fileItems = [
  { type: 'xlsx', name: 'Q3 Budget Review'           },
  { type: 'pptx', name: 'Contoso Partnership Deck'   },
  { type: 'docx', name: 'Onboarding Plan — New Hire' },
  { type: 'pptx', name: 'ZavaCore Roadmap H2 2026'   },
];

const emailItems = [
  { name: 'Kat Larsson',  img: imgAvatarKat,  subject: 'RE: Contoso Partnership — Contract Update', time: '9:42 AM',   badge: true  },
  { name: 'Aadi Kapoor',  img: imgAvatarAadi, subject: 'Q3 Budget Approval — Deadline Friday',      time: '8:15 AM',   badge: false },
  { name: 'Microsoft HR', img: imgAvatarHR,   subject: 'Your benefits enrollment closes March 10',  time: 'Yesterday', badge: false },
];

const mentionItems = [
  { name: 'Aadi Kapoor',  img: imgAvatarAadi,  context: 'Teams · #project-contoso',     time: '1h ago'    },
  { name: 'Jordan Lee',   img: imgAvatarJordan,context: 'Teams · #budget-planning',      time: '3h ago'    },
  { name: 'Robin Counts', img: imgAvatarRobin, context: 'Outlook · Architecture Review', time: 'Yesterday' },
];

const peopleItems = [
  { name: 'Kat Larsson', img: imgAvatarKat,   role: 'Program Manager',    presence: 'away'      as const },
  { name: 'Aadi Kapoor', img: imgAvatarAadi,  role: 'Finance Lead',        presence: 'available' as const },
  { name: 'Lydia Bauer', img: imgAvatarLydia, role: 'HR Business Partner', presence: 'available' as const },
];

const iconMap: Record<string, string> = { docx: iconDocx, pptx: iconPptx, xlsx: iconXls, xls: iconXls };

// ── Event card ────────────────────────────────────────────────────────────────
function EventCard({ name, time, duration, cta }: { name: string; time: string; duration: string; cta: string }) {
  const filled = cta === 'Join';
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      backgroundColor: '#f0f0f0', borderRadius: 8,
      paddingLeft: 8, paddingTop: 4, paddingBottom: 4, paddingRight: 6,
      gap: 6,
    }}>
      {/* Accent bar — filled for Join, outlined for RSVP */}
      <div style={{
        width: 4, height: 33, borderRadius: 3.5, flexShrink: 0,
        backgroundColor: filled ? '#5b5fc7' : 'transparent',
        border: filled ? 'none' : '1px solid #5b5fc7',
        boxSizing: 'border-box',
      }} />

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ ...seg, fontSize: 14, fontWeight: 400, color: '#242424', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '20px' }}>{name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ ...seg, fontSize: 12, color: '#242424', lineHeight: '16px', whiteSpace: 'nowrap' }}>{time}</span>
          <span style={{ ...seg, fontSize: 10, color: '#616161', lineHeight: '14px', whiteSpace: 'nowrap' }}>{duration}</span>
        </div>
      </div>

      {/* Button — filled for Join, outlined for RSVP */}
      <button style={{
        ...seg, fontSize: 14, fontWeight: 600,
        color: filled ? '#fff' : '#5b5fc7',
        backgroundColor: filled ? '#5b5fc7' : 'transparent',
        border: filled ? 'none' : '1px solid #5b5fc7',
        borderRadius: 5, padding: '6px 10px',
        cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap',
        lineHeight: 1, boxSizing: 'border-box',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >{cta}</button>
    </div>
  );
}

// ── Tab content ───────────────────────────────────────────────────────────────
function MeetingsMini({ homeMode }: { homeMode?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...(homeMode ? { flex: 1, justifyContent: 'space-evenly' } : { gap: 12 }) }}>
      <p style={{ ...seg, fontSize: 12, color: '#616161', margin: 0, lineHeight: '16px' }}>
        Your next <span style={{ color: '#464feb', fontWeight: 600 }}>appointment</span> will discuss Sales Performance reviews.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {meetingItems.map((m, i) => (
          <EventCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
}

function FilesMini() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flex: 1 }}>
      {fileItems.map((f, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <img src={iconMap[f.type]} alt={f.type} style={{ width: 20, height: 20, flexShrink: 0 }} />
          <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
        </div>
      ))}
    </div>
  );
}

function EmailMini() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flex: 1 }}>
      {emailItems.map((e, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <Avatar name={e.name} image={{ src: e.img }} size={28} style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
              <span style={{ ...seg, fontSize: 12, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.name}</span>
              <span style={{ ...seg, fontSize: 11, color: '#616161', flexShrink: 0 }}>{e.time}</span>
            </div>
            <div style={{ ...seg, fontSize: 11, color: '#616161', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.subject}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MentionsMini() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flex: 1 }}>
      {mentionItems.map((m, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <Avatar name={m.name} image={{ src: m.img }} size={28} style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
              <span style={{ ...seg, fontSize: 12, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.name}</span>
              <span style={{ ...seg, fontSize: 11, color: '#616161', flexShrink: 0 }}>{m.time}</span>
            </div>
            <div style={{ ...seg, fontSize: 11, color: '#616161', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.context}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PeopleMini() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flex: 1 }}>
      {peopleItems.map((p, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <Avatar name={p.name} image={{ src: p.img }} size={28} badge={{ status: p.presence }} style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
            <div style={{ ...seg, fontSize: 11, color: '#616161' }}>{p.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Widget ────────────────────────────────────────────────────────────────────
interface DayBriefWidgetProps {
  onAddToHome?: () => void;
  homeMode?: boolean;
  fullWidth?: boolean;
}

export default function DayBriefWidget({ onAddToHome, homeMode = false, fullWidth = false }: DayBriefWidgetProps) {
  const [activeTab, setActiveTab] = useState<TabId>('Meetings');
  const [added, setAdded] = useState(false);

  const handleAddToHome = () => {
    if (added) return;
    setAdded(true);
    onAddToHome?.();
  };

  const moreLabel: Record<TabId, string> = {
    Meetings: '3 more events today',
    Files:    '4 more files',
    Email:    '13 more emails',
    Mentions: '2 more mentions',
    People:   '1 more person',
  };

  return (
    <div style={{
      width: (homeMode || fullWidth) ? '100%' : 280,
      height: homeMode ? '100%' : undefined,
      flexShrink: (homeMode || fullWidth) ? undefined : 0,
      backgroundColor: '#fff',
      border: '1px solid #edebe9',
      borderRadius: 16,
      boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)',
      display: 'flex', flexDirection: 'column',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>

      {/* Header */}
      <div style={{ padding: '16px 16px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={iconDayAtAGlance} alt="" style={{ width: 32, height: 32, flexShrink: 0 }} />
        <span style={{ ...seg, fontSize: 15, fontWeight: 600, color: '#242424', flex: 1 }}>Day at a Glance</span>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#616161', padding: 4, borderRadius: 4, display: 'flex', alignItems: 'center' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <MoreHorizontalRegular style={{ width: 20, height: 20 }} />
        </button>
      </div>

      {/* Tab bar */}
      <div style={{ padding: '0 16px 12px', display: 'flex', gap: 4 }}>
        {tabs.map(tab => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              title={tab.label}
              style={{
                ...seg, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '6px 4px', borderRadius: 6, border: 'none', cursor: 'pointer',
                backgroundColor: selected ? '#ebe8f9' : 'transparent',
                color: selected ? '#5b5fc7' : '#616161',
                transition: 'background-color 0.1s',
              }}
              onMouseEnter={e => { if (!selected) e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
              onMouseLeave={e => { if (!selected) e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              {selected ? (tab.iconSelected ?? tab.icon) : tab.icon}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div style={{ padding: '0 16px', ...(homeMode ? { flex: 1, minHeight: 0 } : { height: 185, overflow: 'hidden' }), display: 'flex', flexDirection: 'column' }}>
        {activeTab === 'Meetings' && <MeetingsMini homeMode={homeMode} />}
        {activeTab === 'Files'    && <FilesMini />}
        {activeTab === 'Email'    && <EmailMini />}
        {activeTab === 'Mentions' && <MentionsMini />}
        {activeTab === 'People'   && <PeopleMini />}
      </div>

      {/* Footer */}
      <div style={{ padding: '12px 16px 16px', borderTop: '1px solid #f0f0f0', marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <button style={{
          ...seg, fontSize: 14, fontWeight: 400, color: '#464feb',
          background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'center', width: '100%',
        }}
          onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
        >
          {moreLabel[activeTab]}
        </button>

        {!homeMode && (
          <button
            onClick={handleAddToHome}
            style={{
              width: '100%', ...seg, fontSize: 13, fontWeight: 600,
              color: added ? '#107c10' : '#242424',
              backgroundColor: added ? '#f1faf1' : '#fff',
              border: `1px solid ${added ? '#107c10' : '#d1d1d1'}`,
              borderRadius: 6, padding: '5px 12px', cursor: added ? 'default' : 'pointer',
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
        )}
      </div>

    </div>
  );
}
