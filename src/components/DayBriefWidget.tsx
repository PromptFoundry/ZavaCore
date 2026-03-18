import { useState, useRef, useEffect } from 'react';
import { Avatar } from '@fluentui/react-avatar';
import {
  CalendarFilled, CalendarRegular,
  FolderRegular,
  MailRegular,
  MentionRegular,
  PeopleRegular,
  CheckmarkCircleFilled,
  ChevronDownRegular,
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

const statChips = [
  { icon: <CalendarRegular style={{ width: 14, height: 14 }} />, count: 3,  label: 'meetings', view: 'Meetings' as TabId },
  { icon: <MailRegular     style={{ width: 14, height: 14 }} />, count: 16, label: 'emails',   view: 'Email'    as TabId },
  { icon: <MentionRegular  style={{ width: 14, height: 14 }} />, count: 3,  label: 'mentions', view: 'Mentions' as TabId },
  { icon: <FolderRegular   style={{ width: 14, height: 14 }} />, count: 4,  label: 'files',    view: 'Files'    as TabId },
];

const viewIcons: Record<TabId, React.ReactNode> = {
  Meetings: <CalendarRegular style={{ width: 14, height: 14 }} />,
  Files:    <FolderRegular   style={{ width: 14, height: 14 }} />,
  Email:    <MailRegular     style={{ width: 14, height: 14 }} />,
  Mentions: <MentionRegular  style={{ width: 14, height: 14 }} />,
  People:   <PeopleRegular   style={{ width: 14, height: 14 }} />,
};

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
function MeetingsMini() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
  const [activeHomeView, setActiveHomeView] = useState<TabId>('Meetings');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleAddToHome = () => {
    if (added) return;
    setAdded(true);
    onAddToHome?.();
  };

  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

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
      overflow: homeMode ? 'visible' : 'hidden',
    }}>

      {/* Header */}
      <div style={{ padding: '16px 16px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={iconDayAtAGlance} alt="" style={{ width: 32, height: 32, flexShrink: 0 }} />
        <span style={{ ...seg, fontSize: 15, fontWeight: 600, color: '#242424', flex: 1 }}>Day at a Glance</span>

        {homeMode ? (
          /* Dropdown button replaces ... in homeMode */
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(o => !o)}
              style={{
                ...seg, display: 'flex', alignItems: 'center', gap: 5,
                backgroundColor: dropdownOpen ? '#ebe8f9' : '#f5f5f5',
                border: 'none', borderRadius: 6, padding: '5px 10px',
                cursor: 'pointer', color: '#5b5fc7', fontSize: 13, fontWeight: 600,
              }}
              onMouseEnter={e => { if (!dropdownOpen) e.currentTarget.style.backgroundColor = '#ede9f8'; }}
              onMouseLeave={e => { if (!dropdownOpen) e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
            >
              <span style={{ color: '#5b5fc7', display: 'flex' }}>{viewIcons[activeHomeView]}</span>
              {activeHomeView}
              <ChevronDownRegular style={{ width: 12, height: 12, transition: 'transform 0.15s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute', top: '100%', right: 0, marginTop: 4,
                backgroundColor: '#fff', border: '1px solid #e0e0e0',
                borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                zIndex: 100, minWidth: 130, overflow: 'hidden',
              }}>
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveHomeView(tab.id); setDropdownOpen(false); }}
                    style={{
                      ...seg, display: 'flex', alignItems: 'center', gap: 8,
                      width: '100%', padding: '8px 12px', border: 'none', textAlign: 'left',
                      backgroundColor: activeHomeView === tab.id ? '#ebe8f9' : 'transparent',
                      color: activeHomeView === tab.id ? '#5b5fc7' : '#242424',
                      fontSize: 13, fontWeight: activeHomeView === tab.id ? 600 : 400,
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => { if (activeHomeView !== tab.id) e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
                    onMouseLeave={e => { if (activeHomeView !== tab.id) e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <span style={{ display: 'flex', color: activeHomeView === tab.id ? '#5b5fc7' : '#616161' }}>{viewIcons[tab.id]}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#616161', padding: 4, borderRadius: 4, display: 'flex', alignItems: 'center' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <ChevronDownRegular style={{ width: 20, height: 20 }} />
          </button>
        )}
      </div>

      {homeMode ? (
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: '0 16px 14px', overflowY: 'auto' }}>
          {activeHomeView === 'Meetings' && <MeetingsMini />}
          {activeHomeView === 'Files'    && <FilesMini />}
          {activeHomeView === 'Email'    && <EmailMini />}
          {activeHomeView === 'Mentions' && <MentionsMini />}
          {activeHomeView === 'People'   && <PeopleMini />}
        </div>
      ) : (
        <>
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
          <div style={{ padding: '0 16px', height: 185, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {activeTab === 'Meetings' && <MeetingsMini />}
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
          </div>
        </>
      )}

    </div>
  );
}
