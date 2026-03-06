import React, { useState } from 'react';
import {
  CalendarFilled, CalendarRegular,
  FolderFilled, FolderRegular,
  MailFilled, MailRegular,
  MentionFilled, MentionRegular,
  PeopleFilled, PeopleRegular,
  ArrowSyncRegular,
  ChevronDownRegular,
  ChevronRightRegular,
  ChevronLeftRegular,
  ChevronUpRegular,
  AddSquareRegular,
  CopyRegular,
  ThumbLikeRegular,
  ThumbDislikeRegular,
  MoreHorizontalRegular,
  ArrowMaximize20Regular,
} from '@fluentui/react-icons';

import imgProfileAvatar from '../assets/images/Carole Poland.png';
import iconWeather from '../assets/day-at-a-glance/Weather Icon.svg';
import iconOutlook from '../assets/day-at-a-glance/Outlook.svg';
import iconTeams from '../assets/day-at-a-glance/Teams.svg';
import iconCalendar from '../assets/day-at-a-glance/Calendar.svg';
import iconSunMug from '../assets/day-at-a-glance/Sun Mug.svg';
import iconRepeat from '../assets/day-at-a-glance/Repeat.svg';
import imgThumb1 from '../assets/day-at-a-glance/artifact-human.png';
import imgThumb2 from '../assets/day-at-a-glance/artifact-chart.png';
import imgThumb3 from '../assets/day-at-a-glance/Image_single.png';

const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };

// ── Data block ─────────────────────────────────────────────────────────────────
function DataBlock({ label, icon, value }: { label: string; icon: React.ReactNode; value: string }) {
  return (
    <div style={{
      backgroundColor: '#fcfcfc', border: '1px solid #e6e6e6', borderRadius: 10,
      width: 76, padding: '6px 0',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flexShrink: 0,
    }}>
      <span style={{ ...seg, fontSize: 11, color: '#33302e' }}>{label}</span>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
      <span style={{ ...seg, fontSize: 17, color: '#33302e', lineHeight: '26px' }}>{value}</span>
    </div>
  );
}

// ── Header ─────────────────────────────────────────────────────────────────────
function DayBriefHeader() {
  return (
    <div style={{
      backgroundColor: '#fff', borderRadius: 20, padding: '24px 40px',
      boxShadow: '0px 1.5px 6px 0px rgba(0,0,0,0.18)',
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <img src={imgProfileAvatar} alt="" style={{ width: 24, height: 24, borderRadius: 12, objectFit: 'cover' }} />
          <span style={{ ...seg, fontSize: 13, color: '#272320' }}>· Curated for you · 30m</span>
        </div>
        <h1 style={{ ...seg, fontSize: 36, fontWeight: 600, color: '#272320', margin: '0 0 4px', lineHeight: '48px', whiteSpace: 'nowrap' }}>
          Carole, your daily brief is ready
        </h1>
        <p style={{ ...seg, fontSize: 16, color: '#424242', margin: 0, lineHeight: '28px' }}>
          Your daily guide to understanding what's happening, and why it matters.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
        <DataBlock label="1pm" icon={<img src={iconWeather} alt="Weather" style={{ width: 32, height: 32 }} />} value="44°" />
        <DataBlock label="Emails" icon={<img src={iconOutlook} alt="Outlook" style={{ width: 32, height: 32 }} />} value="16" />
        <DataBlock label="Chats" icon={<img src={iconTeams} alt="Teams" style={{ width: 32, height: 32 }} />} value="23" />
        <DataBlock label="Meetings" icon={<img src={iconCalendar} alt="Calendar" style={{ width: 32, height: 32 }} />} value="6" />
      </div>
    </div>
  );
}

// ── Nav tabs ───────────────────────────────────────────────────────────────────
type TabId = 'Meetings' | 'Files' | 'Email' | 'Mentions' | 'People';

function ResponseNavBar({ activeTab, setActiveTab }: { activeTab: TabId; setActiveTab: (t: TabId) => void }) {
  const tabs: { id: TabId; label: string; filled: React.ReactNode; regular: React.ReactNode; dropdown?: boolean }[] = [
    { id: 'Meetings', label: 'Meetings', filled: <CalendarFilled style={{ width: 16, height: 16 }} />, regular: <CalendarRegular style={{ width: 16, height: 16 }} />, dropdown: true },
    { id: 'Files',    label: 'Files',    filled: <FolderFilled style={{ width: 16, height: 16 }} />,   regular: <FolderRegular style={{ width: 16, height: 16 }} /> },
    { id: 'Email',    label: 'Email',    filled: <MailFilled style={{ width: 16, height: 16 }} />,     regular: <MailRegular style={{ width: 16, height: 16 }} /> },
    { id: 'Mentions', label: 'Mentions', filled: <MentionFilled style={{ width: 16, height: 16 }} />,  regular: <MentionRegular style={{ width: 16, height: 16 }} /> },
    { id: 'People',   label: 'People',   filled: <PeopleFilled style={{ width: 16, height: 16 }} />,   regular: <PeopleRegular style={{ width: 16, height: 16 }} /> },
  ];

  return (
    <div style={{
      backgroundColor: '#fff', borderRadius: 10, padding: '6.75px',
      boxShadow: '0px 0.844px 1.688px rgba(0,0,0,0.14), 0px 0px 1.688px rgba(0,0,0,0.12)',
      display: 'flex', gap: 4, marginBottom: 20,
    }}>
      {tabs.map(tab => {
        const selected = activeTab === tab.id;
        return (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            ...seg, display: 'flex', alignItems: 'center', gap: 6,
            padding: '5px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
            backgroundColor: selected ? '#ebefff' : 'transparent',
            color: selected ? '#464feb' : '#424242',
            fontSize: 14, fontWeight: selected ? 600 : 400, transition: 'background-color 0.1s',
          }}
            onMouseEnter={e => { if (!selected) e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
            onMouseLeave={e => { if (!selected) e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            {selected ? tab.filled : tab.regular}
            <span>{tab.label}</span>
            {tab.dropdown && <ChevronDownRegular style={{ width: 12, height: 12 }} />}
          </button>
        );
      })}
    </div>
  );
}

// ── Calendar Companion ─────────────────────────────────────────────────────────
function CalendarCompanion() {
  const weekDays = [
    { letter: 'S', num: 30 }, { letter: 'M', num: 1 }, { letter: 'T', num: 2 },
    { letter: 'W', num: 3, selected: true }, { letter: 'T', num: 4 }, { letter: 'F', num: 5 }, { letter: 'S', num: 6 },
  ];
  const meetingGroups = [
    { group: 'Earlier today', items: [
      { title: 'Microsoft All Hands', time: '10:30 AM', recurring: true, avatarColors: ['#c7e0f4', '#c3d7a8', '#ffd7b5'], overflow: 6 },
      { title: 'Sync on the Q3 Budget', time: '10:30 AM', recurring: false, avatarColors: ['#d4b5f5', '#c7e0f4', '#ffc9b5'], overflow: 12 },
    ]},
    { group: 'Yesterday', items: [
      { title: 'Stand-up meeting', time: '10:30 AM', recurring: true, avatarColors: ['#c7e0f4', '#c3d7a8', '#ffd7b5'], overflow: 6 },
      { title: '[FHL] Starting with your own AI system - ByJames', time: '10:30 AM', recurring: true, avatarColors: ['#c7e0f4'], overflow: 49 },
      { title: 'AI Unlocked: The GitHub Copilot Journey', time: '12:00 AM', recurring: false, avatarColors: ['#f5c6c6'], overflow: 6 },
      { title: 'Working with Dev', time: '10:30 AM', recurring: false, avatarColors: ['#d4b5f5', '#c7e0f4', '#ffd7b5'], overflow: undefined },
    ]},
    { group: 'Monday', items: [
      { title: "Jerry's Principal's Briefing", time: '10:00 AM', recurring: true, avatarColors: ['#c7e0f4', '#ffd7b5'], overflow: 12 },
      { title: '1-1 with Aaron', time: '10:30 AM', recurring: true, avatarColors: ['#c7e0f4'], overflow: undefined },
    ]},
  ];

  return (
    <div style={{ width: 270, flexShrink: 0 }}>
      <div style={{
        backgroundColor: '#fff', borderRadius: 13.5,
        boxShadow: '0px 0px 1.688px rgba(0,0,0,0.12), 0px 1.688px 3.375px rgba(0,0,0,0.14)',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6.75px 8.438px 3.375px 10.125px' }}>
          <div style={{ width: 46, height: 46, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={iconSunMug} alt="" style={{ width: 46, height: 46 }} />
          </div>
          <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#424242', lineHeight: '13.5px' }}>My day</span>
        </div>

        {/* Month + filter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px 8.438px 2px 0' }}>
          <button style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#242424', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 13.5px' }}>
            Wed, April 3
          </button>
          <button style={{ ...seg, fontSize: 11, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 6, padding: '3px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, color: '#424242' }}>
            <CalendarRegular style={{ width: 12, height: 12 }} />
            <span>Meetings</span>
            <ChevronDownRegular style={{ width: 10, height: 10 }} />
          </button>
        </div>

        {/* Week row */}
        <div style={{ borderBottom: '0.844px solid rgba(0,0,0,0.1)', padding: '6.75px 13.5px', display: 'flex' }}>
          {weekDays.map((d, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <span style={{ ...seg, fontSize: 8, color: '#616161', fontWeight: 400, lineHeight: '12px' }}>{d.letter}</span>
              <div style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: d.selected ? '#ebefff' : 'transparent' }}>
                <span style={{ ...seg, fontSize: 10, fontWeight: 600, color: d.selected ? '#464feb' : 'rgba(0,0,0,0.9)' }}>{d.num}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Agenda */}
        <div style={{ overflowY: 'auto', maxHeight: 440 }}>
          {meetingGroups.map(group => (
            <div key={group.group}>
              <div style={{ padding: '8px 13.5px 4px', ...seg, fontSize: 8.5, fontWeight: 600, color: '#616161' }}>{group.group}</div>
              {group.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 6.75, alignItems: 'stretch', padding: '3px 13.5px' }}>
                  <div style={{ width: 3.375, backgroundColor: '#464feb', borderRadius: '1.424px 0 0 1.424px', flexShrink: 0, minHeight: 28 }} />
                  <div style={{ flex: 1, padding: '3px 0', minWidth: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 4 }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <p style={{ ...seg, fontSize: 11, fontWeight: 600, color: '#242424', margin: 0, lineHeight: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                        <span style={{ ...seg, fontSize: 9.5, color: '#616161' }}>{item.time}</span>
                        {item.recurring && <img src={iconRepeat} alt="recurring" style={{ width: 10, height: 10 }} />}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                      {item.avatarColors.map((color, ai) => (
                        <div key={ai} style={{ width: 13.5, height: 13.5, borderRadius: '50%', backgroundColor: color, border: '0.5px solid #fff', marginLeft: ai > 0 ? -3 : 0, flexShrink: 0 }} />
                      ))}
                      {item.overflow !== undefined && (
                        <div style={{ height: 13.5, backgroundColor: '#fafafa', border: '0.844px solid #e0e0e0', borderRadius: 100, padding: '0 3px', marginLeft: -3, display: 'flex', alignItems: 'center' }}>
                          <span style={{ ...seg, fontSize: 7.5, fontWeight: 600, color: '#616161' }}>+{item.overflow}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pin button */}
        <div style={{ padding: '8px 16px 11px', borderTop: '1px solid #f0f0f0' }}>
          <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: '8px 12px', cursor: 'pointer', ...seg, fontSize: 12, color: '#424242' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            <AddSquareRegular style={{ width: 14, height: 14 }} />
            Pin this widget to home
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Calendar event tile ────────────────────────────────────────────────────────
function EventTile({ title, sub, accent = '#0078D4', style = {} }: {
  title: string; sub?: string; accent?: string; style?: React.CSSProperties;
}) {
  return (
    <div style={{
      backgroundColor: '#dce9f7', borderRadius: 4, padding: '3px 6px',
      borderLeft: `3px solid ${accent}`,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      minHeight: 28, boxSizing: 'border-box', overflow: 'hidden', ...style,
    }}>
      <span style={{ ...seg, fontSize: 11, fontWeight: 600, color: '#242424', lineHeight: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
      {sub && <span style={{ ...seg, fontSize: 10, color: '#424242', lineHeight: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sub}</span>}
    </div>
  );
}

// ── Context pill ──────────────────────────────────────────────────────────────
function ContextPill({ label }: { label: string }) {
  return (
    <span style={{
      ...seg, display: 'inline-flex', alignItems: 'center', gap: 4,
      fontSize: 11, color: '#424242', backgroundColor: '#f0f0f0',
      border: '1px solid #e0e0e0', borderRadius: 12, padding: '2px 8px', whiteSpace: 'nowrap',
    }}>
      <CalendarRegular style={{ width: 12, height: 12, color: '#616161' }} />
      {label}
    </span>
  );
}

// ── Meeting artifact card ─────────────────────────────────────────────────────
function MeetingCard({ date, day, time, title, organizer, thumb }: {
  date: string; day: string; time: string; title: string; organizer: string; thumb: string;
}) {
  return (
    <div style={{ border: '1px solid #e8e8e8', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, backgroundColor: '#fff', maxWidth: 440 }}>
      <div style={{ width: 3, alignSelf: 'stretch', backgroundColor: '#0078D4', borderRadius: 2, flexShrink: 0 }} />
      {/* Date */}
      <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 44 }}>
        <div style={{ ...seg, fontSize: 12, fontWeight: 600, color: '#242424', lineHeight: '16px' }}>{date}</div>
        <div style={{ ...seg, fontSize: 10, color: '#616161', lineHeight: '14px' }}>{day}</div>
      </div>
      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: 2 }}>{title}</div>
        <div style={{ ...seg, fontSize: 11, color: '#616161', marginBottom: 2 }}>{time}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#c7e0f4', flexShrink: 0 }} />
          <span style={{ ...seg, fontSize: 11, color: '#616161' }}>{organizer}</span>
        </div>
      </div>
      {/* Thumbnail */}
      <div style={{ width: 64, height: 48, borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
        <img src={thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {/* Expand */}
      <ArrowMaximize20Regular style={{ width: 14, height: 14, color: '#616161', flexShrink: 0, cursor: 'pointer' }} />
    </div>
  );
}

// ── Action bar ─────────────────────────────────────────────────────────────────
function ActionBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 8 }}>
      {[
        <CopyRegular key="c" style={{ width: 16, height: 16 }} />,
        <ThumbLikeRegular key="l" style={{ width: 16, height: 16 }} />,
        <ThumbDislikeRegular key="d" style={{ width: 16, height: 16 }} />,
        <MoreHorizontalRegular key="m" style={{ width: 16, height: 16 }} />,
      ].map((icon, i) => (
        <button key={i} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', border: 'none', borderRadius: 4, cursor: 'pointer', color: '#616161' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >{icon}</button>
      ))}
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────
export default function PlanMyDayResponse() {
  const [activeTab, setActiveTab] = useState<TabId>('Meetings');
  const [calView, setCalView] = useState<'Calendar' | 'List'>('Calendar');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', ...seg }}>

      {/* ── Full-width header ── */}
      <DayBriefHeader />

      {/* ── Response area ── */}
      <div style={{ display: 'flex', gap: 24, width: '100%', alignItems: 'flex-start' }}>

        {/* Main column */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>

          {/* Nav */}
          <ResponseNavBar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Copilot intro */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <img src="/assets/images/ZavaCore_logo.svg" alt="Copilot" style={{ width: 18, height: 18 }} />
            <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#616161' }}>Copilot</span>
          </div>
          <p style={{ ...seg, margin: '0 0 20px', fontSize: 14, lineHeight: '22px', color: '#424242' }}>
            I've checked your calendar and found 3 upcoming meetings and several past recordings that might be worth revisiting.
          </p>

          {/* ── Calendar section ── */}
          <div style={{ marginBottom: 24 }}>
            {/* Section heading row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 4px 12px 4px' }}>
              <CalendarFilled style={{ width: 20, height: 20, color: '#424242' }} />
              <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424' }}>Your meetings for July 16 2026</span>
            </div>

            {/* Calendar card */}
            <div style={{ border: '1px solid #e8e8e8', borderRadius: 8, overflow: 'hidden', backgroundColor: '#fff' }}>

              {/* Quick actions toolbar */}
              <div style={{ padding: '8px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CalendarRegular style={{ width: 18, height: 18, color: '#616161' }} />
                  <div>
                    <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', lineHeight: '18px' }}>Meetings</div>
                    <div style={{ ...seg, fontSize: 11, color: '#616161', lineHeight: '16px' }}>24 events found</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {/* Calendar / List toggle */}
                  <div style={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 6, overflow: 'hidden' }}>
                    {(['Calendar', 'List'] as const).map(v => (
                      <button key={v} onClick={() => setCalView(v)} style={{ ...seg, fontSize: 12, padding: '4px 12px', cursor: 'pointer', border: 'none', backgroundColor: calView === v ? '#0078D4' : '#fff', color: calView === v ? '#fff' : '#424242', transition: 'all 0.1s' }}>
                        {v}
                      </button>
                    ))}
                  </div>
                  {/* Collapse chevron */}
                  <button style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', borderRadius: 4, cursor: 'pointer', color: '#424242' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <ChevronUpRegular style={{ width: 16, height: 16 }} />
                  </button>
                </div>
              </div>

              {/* Date navigation toolbar */}
              <div style={{ padding: '6px 12px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: 6, backgroundColor: '#fafafa' }}>
                <button style={{ ...seg, fontSize: 12, padding: '3px 10px', border: '1px solid #e0e0e0', borderRadius: 4, backgroundColor: '#fff', cursor: 'pointer', color: '#242424', fontWeight: 500 }}>Today</button>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <button style={{ width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 4, color: '#424242' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <ChevronLeftRegular style={{ width: 14, height: 14 }} />
                  </button>
                  <button style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', background: 'none', border: 'none', cursor: 'pointer', padding: '2px 6px', borderRadius: 4 }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >July 10</button>
                  <button style={{ width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 4, color: '#424242' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <ChevronRightRegular style={{ width: 14, height: 14 }} />
                  </button>
                </div>
              </div>

              {/* Calendar grid */}
              <div style={{ display: 'flex', padding: '0' }}>
                {/* Time column */}
                <div style={{ width: 52, flexShrink: 0, paddingTop: 38 }}>
                  {['9 AM', '10 AM', '11 AM', '12 PM'].map(t => (
                    <div key={t} style={{ height: 76, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: 8, paddingTop: 4 }}>
                      <span style={{ ...seg, fontSize: 11, color: '#808080' }}>{t}</span>
                    </div>
                  ))}
                </div>

                {/* Day column */}
                <div style={{ flex: 1, borderLeft: '1px solid #f0f0f0', minWidth: 0 }}>
                  {/* Day header */}
                  <div style={{ height: 38, padding: '6px 12px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center' }}>
                    <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424' }}>July 16, </span>
                    <span style={{ ...seg, fontSize: 13, color: '#616161', marginLeft: 4 }}>Wed</span>
                  </div>

                  {/* Hour rows */}
                  <div style={{ position: 'relative' }}>
                    {[0, 1, 2, 3].map(i => (
                      <div key={i} style={{ height: 76, borderBottom: '1px solid #f5f5f5' }} />
                    ))}

                    {/* Event overlay */}
                    <div style={{ position: 'absolute', inset: 0, padding: '3px 6px', pointerEvents: 'none' }}>
                      {/* 9 AM - Launch Checkpoint (full width) */}
                      <div style={{ position: 'absolute', top: 4, left: 6, right: 6, height: 30 }}>
                        <EventTile title="Contoso <> Launch Checkpoint" sub="Microsoft Teams" />
                      </div>
                      {/* 10 AM - Project Brief (left half) */}
                      <div style={{ position: 'absolute', top: 80, left: 6, width: '47%', height: 68 }}>
                        <EventTile title="Contoso <> Project Brief" sub="Microsoft Teams" style={{ height: '100%' }} />
                      </div>
                      {/* 10 AM - Quick Sync (right top) */}
                      <div style={{ position: 'absolute', top: 80, left: '50%', right: 6, height: 28 }}>
                        <EventTile title="Quick Sync" sub="1 PM · Conf Room B1" accent="#5B9BD5" />
                      </div>
                      {/* 10 AM - Baseline sync (right bottom) */}
                      <div style={{ position: 'absolute', top: 112, left: '50%', right: 6, height: 34 }}>
                        <EventTile title="Baseline sync" sub="9:30 AM · Miguel Garcia" accent="#107C10" />
                      </div>
                      {/* 11 AM - Contoso Sync (left) */}
                      <div style={{ position: 'absolute', top: 156, left: 6, width: '47%', height: 28 }}>
                        <EventTile title="Contoso <> Sync" sub="Microsoft Teams" />
                      </div>
                      {/* 11 AM - Discussion (right) */}
                      <div style={{ position: 'absolute', top: 156, left: '50%', right: 6, height: 38 }}>
                        <EventTile title="Discussion on information architecture" sub="1 PM · Robin Counts" accent="#5B9BD5" />
                      </div>
                      {/* 12 PM - Contoso Checkpoint2 (left) */}
                      <div style={{ position: 'absolute', top: 232, left: 6, width: '47%', height: 28 }}>
                        <EventTile title="Contoso <> Checkpoint2" sub="Microsoft Teams" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── High-impact prep ── */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <span style={{ fontSize: 16, lineHeight: 1 }}>🗓️</span>
              <span style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#242424' }}>High‑impact prep (what to scan first)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { name: 'Contoso <> Checkpoint', organizer: 'Kat Larsson', time: 'Today 11:35 PM – Tomorrow 12:30 AM', pill: 'Contoso <> Checkpoint' },
                { name: 'Contoso <> Marketing',  organizer: 'Aadi Kapoor',  time: '12:35 AM – 1:05 AM', pill: 'Contoso <> Marketing' },
                { name: 'Contoso <> Onboarding', organizer: 'Lydia Bauer',  time: '5:35 AM – 6:30 AM',  pill: 'Contoso <> Onboarding' },
              ].map(m => (
                <div key={m.name}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <span style={{ ...seg, fontSize: 13, color: '#0078D4', textDecoration: 'underline', cursor: 'pointer' }}>· {m.name}</span>
                    <ContextPill label={m.pill} />
                  </div>
                  <div style={{ ...seg, fontSize: 13, color: '#424242', paddingLeft: 14, lineHeight: '22px' }}>
                    <div>Organizer: {m.organizer}</div>
                    <div>Time: {m.time}</div>
                    <div>Location: Microsoft Teams Meeting</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div style={{ height: 1, backgroundColor: '#e8e8e8', margin: '4px 0 20px' }} />

          {/* ── Catch-up label ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <ArrowSyncRegular style={{ width: 16, height: 16, color: '#616161' }} />
            <span style={{ ...seg, fontSize: 12, color: '#616161', fontWeight: 600 }}>Catch-up</span>
          </div>
          <p style={{ ...seg, margin: '0 0 20px', fontSize: 14, lineHeight: '22px', color: '#424242' }}>
            Here are a few high-impact meetings you may want to revisit.
          </p>

          {/* ── Meeting 1 ── */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ ...seg, fontSize: 16, fontWeight: 700, color: '#242424', margin: '0 0 8px' }}>Copilot Core UX - Work Share</h3>
            <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#424242', marginBottom: 6 }}>Key takeaways</div>
            <ul style={{ ...seg, fontSize: 13, lineHeight: '22px', color: '#424242', margin: '0 0 14px', paddingLeft: 20 }}>
              <li>Arnita Saini presented a new feature for Biz Chat that helps users schedule meetings within the chat. This feature originated from the Time and Places team in Outlook.</li>
              <li>Peter and Katrina shared updates from the People Experiences team, including new AI features designed to help users feel prepared for upcoming interactions.</li>
            </ul>
            <MeetingCard date="5 Mar" day="Wednesday" time="12:30 AM – 1:00 AM" title="Copilot Core UX - Work Share" organizer="Mona Kane organized this" thumb={imgThumb1} />
            <ActionBar />
          </div>

          {/* ── Meeting 2 ── */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ ...seg, fontSize: 16, fontWeight: 700, color: '#242424', margin: '0 0 8px' }}>All Hands</h3>
            <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#424242', marginBottom: 6 }}>Key takeaways</div>
            <ul style={{ ...seg, fontSize: 13, lineHeight: '22px', color: '#424242', margin: '0 0 14px', paddingLeft: 20 }}>
              <li>Satya Nadella emphasized the importance of making high-quality decisions faster to reduce friction and drive clarity.</li>
              <li>He urged employees to reflect on their personal D&I goals and discuss them with managers.</li>
              <li>The town hall included an open Q&A session where employees asked Satya Nadella and the leadership team various questions.</li>
            </ul>
            <MeetingCard date="5 Mar" day="Wednesday" time="12:00 PM – 1:00 PM" title="Microsoft All Hands" organizer="Satya organized this" thumb={imgThumb2} />
            <ActionBar />
          </div>

          {/* ── Meeting 3 ── */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ ...seg, fontSize: 16, fontWeight: 700, color: '#242424', margin: '0 0 8px' }}>[FHL] Starting with your own AI system - ByJames</h3>
            <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#424242', marginBottom: 6 }}>Key takeaways</div>
            <ul style={{ ...seg, fontSize: 13, lineHeight: '22px', color: '#424242', margin: '0 0 14px', paddingLeft: 20 }}>
              <li>James presented an overview of AI system design, emphasizing the importance of understanding the core components such as machine learning, natural language processing, and computer vision.</li>
              <li>Emphasized responsible AI practices, including fairness, transparency, and accountability.</li>
              <li>Shared practical insights on AI implementation, showcasing use cases like automated customer support and predictive analytics.</li>
            </ul>
            <MeetingCard date="5 Mar" day="Wednesday" time="12:00 PM – 1:00 PM" title="[FHL] Starting with your own AI sy..." organizer="James organized this" thumb={imgThumb3} />
            <ActionBar />
          </div>

          {/* ── Sources footer ── */}
          <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 14, marginBottom: 20 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ ...seg, fontSize: 13, color: '#424242' }}>Sources</span>
              <ChevronRightRegular style={{ width: 14, height: 14, color: '#424242' }} />
            </button>
          </div>

          {/* ── Suggestion chips ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24, alignItems: 'flex-end' }}>
            {[
              'Catch me up on the meeting I missed this morning',
              'What should I prioritize first?',
              'What are the most pressing action items from those meetings?',
            ].map(chip => (
              <button key={chip} style={{ ...seg, fontSize: 13, color: '#242424', backgroundColor: '#fff', border: '1px solid #d1d1d1', borderRadius: 16, padding: '6px 16px', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
              >{chip}</button>
            ))}
          </div>

        </div>

        {/* ── Aside ── */}
        <CalendarCompanion />
      </div>
    </div>
  );
}
