import React, { useState } from 'react';
import {
  CalendarFilled, CalendarRegular,
  FolderFilled, FolderRegular,
  MailFilled, MailRegular,
  MentionFilled, MentionRegular,
  PeopleFilled, PeopleRegular,
  ArrowSyncRegular,
  ChevronDownRegular,
  AddSquareRegular,
  CopyRegular,
  ThumbLikeRegular,
  ThumbDislikeRegular,
  MoreHorizontalRegular,
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

// ── Data block (right side of header) ─────────────────────────────────────────
function DataBlock({ label, icon, value }: { label: string; icon: React.ReactNode; value: string }) {
  return (
    <div style={{
      backgroundColor: '#fcfcfc',
      border: '1px solid #e6e6e6',
      borderRadius: 10,
      width: 76,
      padding: '6px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0,
    }}>
      <span style={{ ...seg, fontSize: 11, color: '#33302e' }}>{label}</span>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <span style={{ ...seg, fontSize: 17, color: '#33302e', lineHeight: '26px' }}>{value}</span>
    </div>
  );
}

// ── Header ─────────────────────────────────────────────────────────────────────
function DayBriefHeader() {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: '24px 40px',
      boxShadow: '0px 1.5px 6px 0px rgba(0,0,0,0.18)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      {/* Left text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <img src={imgProfileAvatar} alt="" style={{ width: 24, height: 24, borderRadius: 12, objectFit: 'cover' }} />
          <span style={{ ...seg, fontSize: 13, color: '#272320' }}>· Curated for you · 30m</span>
        </div>
        <h1 style={{ ...seg, fontSize: 36, fontWeight: 600, color: '#272320', margin: '0 0 4px', lineHeight: '48px', whiteSpace: 'nowrap' }}>
          Olivia, your daily brief is ready
        </h1>
        <p style={{ ...seg, fontSize: 16, color: '#424242', margin: 0, lineHeight: '28px' }}>
          Your daily guide to understanding what's happening, and why it matters.
        </p>
      </div>
      {/* Right data blocks */}
      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
        <DataBlock
          label="1pm"
          icon={<img src={iconWeather} alt="Weather" style={{ width: 32, height: 32 }} />}
          value="44°"
        />
        <DataBlock
          label="Emails"
          icon={<img src={iconOutlook} alt="Outlook" style={{ width: 32, height: 32 }} />}
          value="16"
        />
        <DataBlock
          label="Chats"
          icon={<img src={iconTeams} alt="Teams" style={{ width: 32, height: 32 }} />}
          value="23"
        />
        <DataBlock
          label="Meetings"
          icon={<img src={iconCalendar} alt="Calendar" style={{ width: 32, height: 32 }} />}
          value="6"
        />
      </div>
    </div>
  );
}

// ── Response nav bar ───────────────────────────────────────────────────────────
type TabId = 'Meetings' | 'Files' | 'Email' | 'Mentions' | 'People';

interface NavTab {
  id: TabId;
  label: string;
  iconFilled: React.ReactNode;
  iconRegular: React.ReactNode;
  hasDropdown?: boolean;
}

function ResponseNavBar({ activeTab, setActiveTab }: { activeTab: TabId; setActiveTab: (t: TabId) => void }) {
  const tabs: NavTab[] = [
    {
      id: 'Meetings',
      label: 'Meetings',
      iconFilled: <CalendarFilled style={{ width: 16, height: 16 }} />,
      iconRegular: <CalendarRegular style={{ width: 16, height: 16 }} />,
      hasDropdown: true,
    },
    {
      id: 'Files',
      label: 'Files',
      iconFilled: <FolderFilled style={{ width: 16, height: 16 }} />,
      iconRegular: <FolderRegular style={{ width: 16, height: 16 }} />,
    },
    {
      id: 'Email',
      label: 'Email',
      iconFilled: <MailFilled style={{ width: 16, height: 16 }} />,
      iconRegular: <MailRegular style={{ width: 16, height: 16 }} />,
    },
    {
      id: 'Mentions',
      label: 'Mentions',
      iconFilled: <MentionFilled style={{ width: 16, height: 16 }} />,
      iconRegular: <MentionRegular style={{ width: 16, height: 16 }} />,
    },
    {
      id: 'People',
      label: 'People',
      iconFilled: <PeopleFilled style={{ width: 16, height: 16 }} />,
      iconRegular: <PeopleRegular style={{ width: 16, height: 16 }} />,
    },
  ];

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: '6.75px',
      boxShadow: '0px 0.844px 1.688px rgba(0,0,0,0.14), 0px 0px 1.688px rgba(0,0,0,0.12)',
      display: 'flex',
      gap: 4,
      marginBottom: 20,
    }}>
      {tabs.map(tab => {
        const selected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...seg,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 10px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              backgroundColor: selected ? '#ebefff' : 'transparent',
              color: selected ? '#464feb' : '#424242',
              fontSize: 14,
              fontWeight: selected ? 600 : 400,
              transition: 'background-color 0.1s',
            }}
            onMouseEnter={e => { if (!selected) e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
            onMouseLeave={e => { if (!selected) e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            {selected ? tab.iconFilled : tab.iconRegular}
            <span>{tab.label}</span>
            {tab.hasDropdown && <ChevronDownRegular style={{ width: 12, height: 12 }} />}
          </button>
        );
      })}
    </div>
  );
}

// ── Calendar Companion aside widget ────────────────────────────────────────────
function CalendarCompanion() {
  const weekDays = [
    { letter: 'S', num: 30 },
    { letter: 'M', num: 1 },
    { letter: 'T', num: 2 },
    { letter: 'W', num: 3, selected: true },
    { letter: 'T', num: 4 },
    { letter: 'F', num: 5 },
    { letter: 'S', num: 6 },
  ];

  const meetingGroups = [
    {
      group: 'Earlier today',
      items: [
        { title: 'Microsoft All Hands', time: '10:30 AM', recurring: true, avatarColors: ['#c7e0f4', '#c3d7a8', '#ffd7b5'], overflow: 6 },
        { title: 'Sync on the Q3 Budget', time: '10:30 AM', recurring: false, avatarColors: ['#d4b5f5', '#c7e0f4', '#ffc9b5'], overflow: 12 },
      ],
    },
    {
      group: 'Yesterday',
      items: [
        { title: 'Stand-up meeting', time: '10:30 AM', recurring: true, avatarColors: ['#c7e0f4', '#c3d7a8', '#ffd7b5'], overflow: 6 },
        { title: '[FHL] Starting with your own AI system - ByJames', time: '10:30 AM', recurring: true, avatarColors: ['#c7e0f4'], overflow: 49 },
        { title: 'AI Unlocked: The GitHub Copilot Journey', time: '12:00 AM', recurring: false, avatarColors: ['#f5c6c6'], overflow: 6 },
        { title: 'Working with Dev', time: '10:30 AM', recurring: false, avatarColors: ['#d4b5f5', '#c7e0f4', '#ffd7b5'], overflow: undefined },
      ],
    },
    {
      group: 'Monday',
      items: [
        { title: "Jerry's Principal's Briefing", time: '10:00 AM', recurring: true, avatarColors: ['#c7e0f4', '#ffd7b5'], overflow: 12 },
        { title: '1-1 with Aaron', time: '10:30 AM', recurring: true, avatarColors: ['#c7e0f4'], overflow: undefined },
      ],
    },
  ];

  return (
    <div style={{ width: 270, flexShrink: 0 }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: 13.5,
        boxShadow: '0px 0px 1.688px rgba(0,0,0,0.12), 0px 1.688px 3.375px rgba(0,0,0,0.14)',
        overflow: 'hidden',
      }}>
        {/* Header: Sun Mug + "My day" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6.75px 8.438px 3.375px 10.125px' }}>
          <div style={{ width: 46, height: 46, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={iconSunMug} alt="" style={{ width: 46, height: 46 }} />
          </div>
          <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#424242', lineHeight: '13.5px' }}>My day</span>
        </div>

        {/* Month picker + Meetings filter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px 8.438px 2px 0' }}>
          <button style={{
            ...seg, fontSize: 14, fontWeight: 600, color: '#242424',
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px 13.5px',
          }}>
            Wed, April 3
          </button>
          <button style={{
            ...seg, fontSize: 11, background: '#fff', border: '1px solid #e0e0e0',
            borderRadius: 6, padding: '3px 8px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 4, color: '#424242',
          }}>
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
              <div style={{
                width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: d.selected ? '#ebefff' : 'transparent',
              }}>
                <span style={{
                  ...seg, fontSize: 10, fontWeight: 600,
                  color: d.selected ? '#464feb' : 'rgba(0,0,0,0.9)',
                }}>
                  {d.num}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Agenda items */}
        <div style={{ overflowY: 'auto', maxHeight: 440 }}>
          {meetingGroups.map(group => (
            <div key={group.group}>
              {/* Group label */}
              <div style={{ padding: '8px 13.5px 4px', ...seg, fontSize: 8.5, fontWeight: 600, color: '#616161' }}>
                {group.group}
              </div>

              {group.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 6.75, alignItems: 'stretch', padding: '3px 13.5px' }}>
                  {/* RSVP bar */}
                  <div style={{
                    width: 3.375, backgroundColor: '#464feb', borderRadius: '1.424px 0 0 1.424px',
                    flexShrink: 0, minHeight: 28,
                  }} />

                  {/* Content */}
                  <div style={{ flex: 1, padding: '3px 0', minWidth: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 4 }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <p style={{
                        ...seg, fontSize: 11, fontWeight: 600, color: '#242424',
                        margin: 0, lineHeight: '14px',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>
                        {item.title}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                        <span style={{ ...seg, fontSize: 9.5, color: '#616161' }}>{item.time}</span>
                        {item.recurring && <img src={iconRepeat} alt="recurring" style={{ width: 10, height: 10 }} />}
                      </div>
                    </div>

                    {/* Avatars */}
                    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                      {item.avatarColors.map((color, ai) => (
                        <div key={ai} style={{
                          width: 13.5, height: 13.5, borderRadius: '50%',
                          backgroundColor: color,
                          border: '0.5px solid #fff',
                          marginLeft: ai > 0 ? -3 : 0,
                          flexShrink: 0,
                        }} />
                      ))}
                      {item.overflow !== undefined && (
                        <div style={{
                          height: 13.5, backgroundColor: '#fafafa',
                          border: '0.844px solid #e0e0e0', borderRadius: 100,
                          padding: '0 3px', marginLeft: -3,
                          display: 'flex', alignItems: 'center',
                        }}>
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
          <button style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: '8px 12px',
            cursor: 'pointer', ...seg, fontSize: 12, color: '#424242',
          }}
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
      backgroundColor: '#dce9f7', borderRadius: 4, padding: '4px 8px',
      borderLeft: `3px solid ${accent}`,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      minHeight: 32, boxSizing: 'border-box', overflow: 'hidden', ...style,
    }}>
      <span style={{ ...seg, fontSize: 11, fontWeight: 600, color: '#242424', lineHeight: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
      {sub && <span style={{ ...seg, fontSize: 10, color: '#616161', lineHeight: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sub}</span>}
    </div>
  );
}

// ── Context pill ──────────────────────────────────────────────────────────────
function ContextPill({ label }: { label: string }) {
  return (
    <span style={{
      ...seg, display: 'inline-flex', alignItems: 'center', gap: 4,
      fontSize: 11, color: '#424242', backgroundColor: '#f0f0f0',
      border: '1px solid #e0e0e0', borderRadius: 12, padding: '2px 8px',
      whiteSpace: 'nowrap',
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
    <div style={{
      border: '1px solid #e8e8e8', borderRadius: 8, padding: '12px 16px',
      display: 'flex', alignItems: 'center', gap: 12,
      backgroundColor: '#fff', maxWidth: 420,
    }}>
      <div style={{ width: 3, alignSelf: 'stretch', backgroundColor: '#0078D4', borderRadius: 2, flexShrink: 0 }} />
      <div style={{ flexShrink: 0, textAlign: 'center', width: 48 }}>
        <div style={{ ...seg, fontSize: 12, color: '#616161' }}>{date}</div>
        <div style={{ ...seg, fontSize: 10, color: '#808080' }}>{day}</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
          <CalendarRegular style={{ width: 13, height: 13, color: '#616161', flexShrink: 0 }} />
        </div>
        <div style={{ ...seg, fontSize: 11, color: '#616161' }}>{time}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#c7e0f4', flexShrink: 0 }} />
          <span style={{ ...seg, fontSize: 11, color: '#616161' }}>{organizer}</span>
        </div>
      </div>
      <div style={{ width: 64, height: 48, borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
        <img src={thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <ArrowSyncRegular style={{ width: 14, height: 14, color: '#616161', flexShrink: 0, cursor: 'pointer' }} />
    </div>
  );
}

// ── Action bar ────────────────────────────────────────────────────────────────
function ActionBar() {
  const actions = [
    <CopyRegular key="copy" style={{ width: 16, height: 16 }} />,
    <ThumbLikeRegular key="like" style={{ width: 16, height: 16 }} />,
    <ThumbDislikeRegular key="dislike" style={{ width: 16, height: 16 }} />,
    <MoreHorizontalRegular key="more" style={{ width: 16, height: 16 }} />,
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 8 }}>
      {actions.map((icon, i) => (
        <button key={i} style={{
          width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'transparent', border: 'none', borderRadius: 4, cursor: 'pointer', color: '#616161',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >{icon}</button>
      ))}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function PlanMyDayResponse() {
  const [activeTab, setActiveTab] = useState<TabId>('Meetings');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', ...seg }}>

      {/* ── Header card — full width ── */}
      <DayBriefHeader />

      {/* ── Response area (nav + content + aside) ── */}
      <div style={{ display: 'flex', gap: 24, width: '100%', alignItems: 'flex-start' }}>
        {/* Main content column */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>

        {/* ── Response nav bar ── */}
        <ResponseNavBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* ── Copilot intro ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <img src="/assets/images/ZavaCore_logo.svg" alt="Copilot" style={{ width: 18, height: 18 }} />
          <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#616161' }}>Copilot</span>
        </div>
        <p style={{ ...seg, margin: '0 0 20px', fontSize: 14, lineHeight: '22px', color: '#424242' }}>
          I've checked your calendar and found 3 upcoming meetings and several past recordings that might be worth revisiting.
        </p>

        {/* ── Calendar widget ── */}
        <div style={{ border: '1px solid #e8e8e8', borderRadius: 8, overflow: 'hidden', marginBottom: 24, backgroundColor: '#fff' }}>
          {/* Calendar header */}
          <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CalendarRegular style={{ width: 18, height: 18, color: '#616161' }} />
              <div>
                <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424' }}>Meetings</div>
                <div style={{ ...seg, fontSize: 11, color: '#808080' }}>24 events found</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 6, overflow: 'hidden' }}>
                <button style={{ ...seg, fontSize: 12, padding: '4px 12px', backgroundColor: '#0078D4', color: '#fff', border: 'none', cursor: 'pointer' }}>Calendar</button>
                <button style={{ ...seg, fontSize: 12, padding: '4px 12px', backgroundColor: '#fff', color: '#424242', border: 'none', cursor: 'pointer' }}>List</button>
              </div>
            </div>
          </div>

          {/* Calendar toolbar */}
          <div style={{ padding: '8px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button style={{ ...seg, fontSize: 12, padding: '3px 10px', border: '1px solid #e0e0e0', borderRadius: 4, backgroundColor: '#fff', cursor: 'pointer', color: '#242424' }}>Today</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px 4px', display: 'flex', alignItems: 'center' }}>
                  <ChevronDownRegular style={{ width: 14, height: 14, color: '#424242', transform: 'rotate(90deg)' }} />
                </button>
                <span style={{ ...seg, fontSize: 13, color: '#242424', fontWeight: 500 }}>July 10</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px 4px', display: 'flex', alignItems: 'center' }}>
                  <ChevronDownRegular style={{ width: 14, height: 14, color: '#424242', transform: 'rotate(-90deg)' }} />
                </button>
              </div>
            </div>
          </div>

          {/* Calendar grid */}
          <div style={{ display: 'flex', padding: '8px 0' }}>
            {/* Time column */}
            <div style={{ width: 52, flexShrink: 0, paddingTop: 32 }}>
              {['9 AM', '10 AM', '11 AM', '12 PM'].map(t => (
                <div key={t} style={{ height: 72, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: 8, paddingTop: 2 }}>
                  <span style={{ ...seg, fontSize: 11, color: '#808080' }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Day column */}
            <div style={{ flex: 1, borderLeft: '1px solid #f0f0f0' }}>
              <div style={{ height: 32, padding: '6px 12px', borderBottom: '1px solid #f0f0f0' }}>
                <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424' }}>July 10, </span>
                <span style={{ ...seg, fontSize: 13, color: '#616161' }}>Wed</span>
              </div>
              {[0, 1, 2, 3].map(i => (
                <div key={i} style={{ height: 72, borderBottom: i < 3 ? '1px solid #f5f5f5' : 'none', position: 'relative', padding: '3px 8px' }} />
              ))}
              {/* Events overlay */}
              <div style={{ position: 'relative', marginTop: -288, height: 288, padding: '4px 8px' }}>
                <div style={{ position: 'absolute', top: 4, left: 8, right: 8, height: 30 }}>
                  <EventTile title="Contoso <> Launch Checkpoint" sub="Microsoft Teams" />
                </div>
                <div style={{ position: 'absolute', top: 76, left: 8, width: '48%', height: 68 }}>
                  <EventTile title="Contoso <> Project Brief" sub="Microsoft Teams" style={{ height: '100%' }} />
                </div>
                <div style={{ position: 'absolute', top: 76, left: '51%', right: 8, height: 30 }}>
                  <EventTile title="Quick Sync" sub="1 PM · Conf Room B1" accent="#5B9BD5" />
                </div>
                <div style={{ position: 'absolute', top: 110, left: '51%', right: 8, height: 34 }}>
                  <EventTile title="Baseline sync" sub="9:30 AM · Conf Room B12 · Miguel Garcia" accent="#107C10" />
                </div>
                <div style={{ position: 'absolute', top: 148, left: 8, width: '48%', height: 30 }}>
                  <EventTile title="Contoso <> Sync" sub="Microsoft Teams" />
                </div>
                <div style={{ position: 'absolute', top: 148, left: '51%', right: 8, height: 38 }}>
                  <EventTile title="Discussion on information architecture" sub="1 PM · Conf Room B1 · Robin Counts" accent="#5B9BD5" />
                </div>
                <div style={{ position: 'absolute', top: 220, left: 8, width: '48%', height: 30 }}>
                  <EventTile title="Contoso <> Checkpoint2" sub="Microsoft Teams" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── High-impact prep ── */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <CalendarFilled style={{ width: 16, height: 16, color: '#424242' }} />
            <span style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#242424' }}>High-impact prep (what to scan first)</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { name: 'Contoso <> Checkpoint', organizer: 'Kat Larsson', time: 'Today 11:35 PM – Tomorrow 12:30 AM', pill: 'Contoso <> Checkpoint' },
              { name: 'Contoso <> Marketing', organizer: 'Aadi Kapoor', time: '12:35 AM – 1:05 AM', pill: 'Contoso <> Marketing' },
              { name: 'Contoso <> Onboarding', organizer: 'Lydia Bauer', time: '5:35 AM – 6:30 AM', pill: 'Contoso <> Onboarding' },
            ].map(m => (
              <div key={m.name}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 3 }}>
                  <span style={{ ...seg, fontSize: 13, color: '#0078D4', textDecoration: 'underline', cursor: 'pointer' }}>· {m.name}</span>
                  <ContextPill label={m.pill} />
                </div>
                <div style={{ ...seg, fontSize: 13, color: '#424242', paddingLeft: 12, lineHeight: '20px' }}>
                  <div>Organizer: {m.organizer}</div>
                  <div>Time: {m.time}</div>
                  <div>Location: Microsoft Teams Meeting</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, backgroundColor: '#e8e8e8', margin: '8px 0 24px' }} />

        {/* ── Catch-up label ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <ArrowSyncRegular style={{ width: 16, height: 16, color: '#616161' }} />
          <span style={{ ...seg, fontSize: 12, color: '#616161' }}>Catch-up</span>
        </div>
        <p style={{ ...seg, margin: '0 0 20px', fontSize: 14, color: '#424242' }}>
          Here are a few high-impact meetings you may want to revisit.
        </p>

        {/* ── Meeting 1 ── */}
        <div style={{ marginBottom: 28 }}>
          <h3 style={{ ...seg, fontSize: 16, fontWeight: 700, color: '#242424', margin: '0 0 6px' }}>Copilot Core UX - Work Share</h3>
          <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#424242', marginBottom: 6 }}>Key takeaways</div>
          <ul style={{ ...seg, fontSize: 13, lineHeight: '22px', color: '#424242', margin: '0 0 14px', paddingLeft: 20 }}>
            <li>Arnita Saini presented a new feature for Biz Chat that helps users schedule meetings within the chat. This feature originated from the Time and Places team in Outlook.</li>
            <li>Peter and Katrina shared updates from the People Experiences team, including new AI features designed to help users feel prepared for upcoming interactions.</li>
          </ul>
          <MeetingCard date="5 Mar" day="Wednesday" time="12:30 AM – 1:00 AM" title="Copilot Cor..." organizer="Mona Kane organized this" thumb={imgThumb1} />
          <ActionBar />
        </div>

        {/* ── Meeting 2 ── */}
        <div style={{ marginBottom: 28 }}>
          <h3 style={{ ...seg, fontSize: 16, fontWeight: 700, color: '#242424', margin: '0 0 6px' }}>All Hands</h3>
          <div style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#424242', marginBottom: 6 }}>Key takeaways</div>
          <ul style={{ ...seg, fontSize: 13, lineHeight: '22px', color: '#424242', margin: '0 0 14px', paddingLeft: 20 }}>
            <li>Satya Nadella emphasized the importance of making high-quality decisions faster to reduce friction and drive clarity.</li>
            <li>He urged employees to reflect on their personal D&I goals and discuss them with managers.</li>
            <li>The town hall included an open Q&A session where employees asked Satya Nadella and the leadership team various questions.</li>
          </ul>
          <MeetingCard date="5 Mar" day="Wednesday" time="12:00 PM – 1:00 PM" title="Microsoft..." organizer="Satya organized this" thumb={imgThumb2} />
          <ActionBar />
        </div>

        {/* ── Meeting 3 ── */}
        <div style={{ marginBottom: 28 }}>
          <h3 style={{ ...seg, fontSize: 16, fontWeight: 700, color: '#242424', margin: '0 0 6px' }}>[FHL] Starting with your own AI system - ByJames</h3>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 20, borderTop: '1px solid #e8e8e8', paddingTop: 14 }}>
          <span style={{ ...seg, fontSize: 13, color: '#424242' }}>Sources</span>
          <ChevronDownRegular style={{ width: 14, height: 14, color: '#424242', transform: 'rotate(-90deg)' }} />
        </div>

        {/* ── Suggestion chips ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24, alignItems: 'flex-end' }}>
          {[
            'Catch me up on the meeting I missed this morning',
            'What should I prioritize first?',
            'What are the most pressing action items from those meetings?',
          ].map(chip => (
            <button key={chip} style={{
              ...seg, fontSize: 13, color: '#242424', backgroundColor: '#fff',
              border: '1px solid #d1d1d1', borderRadius: 16, padding: '6px 16px',
              cursor: 'pointer', textAlign: 'left',
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >{chip}</button>
          ))}
        </div>
      </div>

        {/* ── Aside: Calendar Companion ── */}
        <CalendarCompanion />
      </div>
    </div>
  );
}
