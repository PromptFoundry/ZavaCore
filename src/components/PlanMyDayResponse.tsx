import React, { useState } from 'react';
import { Avatar } from '@fluentui/react-avatar';
import {
  CalendarFilled, CalendarRegular,
  FolderFilled, FolderRegular,
  MailFilled, MailRegular,
  MentionFilled, MentionRegular,
  PeopleFilled, PeopleRegular,
  ArrowSyncRegular,
  ChevronDownRegular,
  CopyRegular,
  ThumbLikeRegular,
  ThumbDislikeRegular,
  MoreHorizontalRegular,
} from '@fluentui/react-icons';

import imgProfileAvatar from '../assets/images/Carole Poland.png';
import DayBriefWidget from './DayBriefWidget';
import imgAvatarKat    from '../assets/images/Avatar/People Card-Avatar/Avatar.png';
import imgAvatarAadi   from '../assets/images/Avatar/People Card-Avatar/Avatar-1.png';
import imgAvatarRobin  from '../assets/images/Avatar/People Card-Avatar/Avatar-2.png';
import imgAvatarLydia  from '../assets/images/Avatar/People Card-Avatar/Avatar-3.png';
import imgAvatarHR     from '../assets/images/Avatar-7.png';
import imgAvatarJordan from '../assets/images/Coworker-2.png';
import imgAvatarMona   from '../assets/images/Coworker-3.png';
import iconWeather from '../assets/day-at-a-glance/Weather Icon.svg';
import iconOutlook from '../assets/day-at-a-glance/Outlook.svg';
import iconTeams from '../assets/day-at-a-glance/Teams.svg';
import iconCalendar from '../assets/day-at-a-glance/Calendar.svg';
import imgThumb1 from '../assets/day-at-a-glance/artifact-human.png';
import imgThumb2 from '../assets/day-at-a-glance/artifact-chart.png';
import imgThumb3 from '../assets/day-at-a-glance/Image_single.png';
import iconDocx from '../assets/icons/docx.svg';
import iconPptx from '../assets/icons/pptx.svg';
import iconXls from '../assets/icons/xls.svg';

const imgThumbWord  = 'https://www.figma.com/api/mcp/asset/db969f1e-ba72-4734-a909-0dff163dfc2d';
const imgThumbExcel = 'https://www.figma.com/api/mcp/asset/d4d3a822-330b-4f69-8613-ebccda4ac8b0';
const imgThumbPptx  = 'https://www.figma.com/api/mcp/asset/2b800d7d-adf0-45e3-a7c8-55f794b9568e';

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
  const tabs: { id: TabId; label: string; filled: React.ReactNode; regular: React.ReactNode }[] = [
    { id: 'Meetings', label: 'Meetings', filled: <CalendarFilled style={{ width: 16, height: 16 }} />, regular: <CalendarRegular style={{ width: 16, height: 16 }} /> },
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
          </button>
        );
      })}
    </div>
  );
}

// ── Calendar Companion ─────────────────────────────────────────────────────────



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

// ── Shared copilot byline ──────────────────────────────────────────────────────
function CopilotByline() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
      <img src="/assets/images/ZavaCore_logo.svg" alt="" style={{ width: 18, height: 18 }} />
      <span style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#616161' }}>Copilot</span>
    </div>
  );
}

// ── Suggestion chips ───────────────────────────────────────────────────────────
function SuggestionChips({ chips }: { chips: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 24, marginBottom: 8, alignItems: 'flex-end' }}>
      {chips.map(chip => (
        <button key={chip} style={{ ...seg, fontSize: 14, color: '#242424', backgroundColor: '#fff', border: '1px solid #d1d1d1', borderRadius: 16, padding: '6px 16px', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
        >{chip}</button>
      ))}
    </div>
  );
}

// ── Meetings tab ───────────────────────────────────────────────────────────────
function MeetingsContent() {
  const upcoming = [
    { name: 'ZavaCore Q2 Roadmap Review',           organizer: 'Kat Larsson', time: 'Today · 11:35 AM – 12:30 PM', location: 'Microsoft Teams Meeting', rsvp: 'Accepted' },
    { name: 'AI Platform · Weekly Eng Sync',        organizer: 'Aadi Kapoor', time: 'Today · 12:35 PM – 1:05 PM',  location: 'Microsoft Teams Meeting', rsvp: 'RSVP'     },
    { name: 'New Hire Kickoff — Onboarding Week 1', organizer: 'Lydia Bauer', time: 'Today · 5:35 PM – 6:30 PM',   location: 'Microsoft Teams Meeting', rsvp: 'Accepted' },
  ];

  const catchup = [
    { title: 'ZavaCore AI Agent — Design Review',   organizer: 'Mona Kane',    img: imgAvatarMona,  date: 'Wed Mar 5', time: '12:30 – 1:00 PM', thumb: imgThumb1, takeaway: 'Team reviewed the ZavaCore AI agent UX end-to-end. Key feedback focused on the response card layout and action button hierarchy.' },
    { title: 'ZavaCore All Hands — March Edition',  organizer: 'Jordan Lee',   img: imgAvatarJordan, date: 'Wed Mar 5', time: '12:00 – 1:00 PM', thumb: imgThumb2, takeaway: 'Leadership shared Q1 results and H2 priorities. Emphasis on accelerating AI platform adoption and expanding enterprise partnerships.' },
    { title: 'Platform Architecture · Infra Review', organizer: 'Robin Counts', img: imgAvatarRobin, date: 'Wed Mar 5', time: '12:00 – 1:00 PM', thumb: imgThumb3, takeaway: 'Robin walked through proposed infra changes for the ZavaCore data pipeline. Discussion on scaling for multi-tenant enterprise workloads.' },
  ];

  return (
    <>
      <CopilotByline />
      <p style={{ ...seg, margin: '0 0 16px', fontSize: 16, lineHeight: '24px', color: '#424242' }}>
        You have 3 upcoming meetings today and a few recordings worth catching up on.
      </p>

      {/* Upcoming */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <CalendarRegular style={{ width: 14, height: 14, color: '#616161' }} />
        <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#616161' }}>Upcoming</span>
      </div>
      <div style={{ backgroundColor: '#fbfbfb', borderRadius: 24, padding: '8px 24px', marginBottom: 16 }}>
        {upcoming.map((m, i) => (
          <div key={m.name} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '16px 0',
            borderBottom: i < upcoming.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
          }}>
            {/* Calendar icon */}
            <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: '#ebefff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CalendarFilled style={{ width: 20, height: 20, color: '#464feb' }} />
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div>
                <div style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424' }}>{m.name}</div>
                <div style={{ ...seg, fontSize: 13, color: '#616161', marginTop: 2 }}>{m.time} · {m.location}</div>
                <div style={{ ...seg, fontSize: 13, color: '#616161', marginTop: 2 }}>Organized by {m.organizer}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[m.rsvp, 'Join'].map(label => (
                  <button key={label} style={{
                    ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent',
                    border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {label}
                    {label === 'RSVP' && <ChevronDownRegular style={{ width: 12, height: 12 }} />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Catch-up */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <ArrowSyncRegular style={{ width: 14, height: 14, color: '#616161' }} />
        <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#616161' }}>Catch-up</span>
      </div>
      <div style={{ backgroundColor: '#fbfbfb', borderRadius: 24, padding: '8px 24px', marginBottom: 16 }}>
        {catchup.map((m, i) => (
          <div key={m.title} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '16px 0',
            borderBottom: i < catchup.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
          }}>
            {/* Thumbnail */}
            <div style={{ width: 100, height: 60, borderRadius: 8, overflow: 'hidden', backgroundColor: '#f0f0f0', flexShrink: 0, position: 'relative' }}>
              <img src={m.thumb} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div>
                <div style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.title}</div>
                <div style={{ ...seg, fontSize: 13, color: '#616161', marginTop: 2 }}>{m.date} · {m.time}</div>
                <div style={{ ...seg, fontSize: 13, color: '#424242', lineHeight: '20px', marginTop: 4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>{m.takeaway}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Summarize', 'View Recording'].map(label => (
                  <button key={label} style={{
                    ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent',
                    border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >{label}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ActionBar />
      <SuggestionChips chips={['Catch me up on the meeting I missed this morning', 'What should I prioritize first?', 'What are the most pressing action items from those meetings?']} />
    </>
  );
}

// ── Files tab ──────────────────────────────────────────────────────────────────
function FilesContent() {
  const iconMap: Record<string, string> = { docx: iconDocx, pptx: iconPptx, xlsx: iconXls, xls: iconXls };
  const openLabel: Record<string, string> = { docx: 'Open in Word', pptx: 'Open in PowerPoint', xlsx: 'Open in Excel', xls: 'Open in Excel' };

  const files = [
    { type: 'xlsx', name: 'Q3 Budget Review',           description: 'Budget overview covering Q3 targets, actuals, and variance analysis across all teams. Shared before today\'s Contoso checkpoint.',           thumb: imgThumbExcel },
    { type: 'pptx', name: 'Contoso Partnership Deck',   description: 'Partnership proposal deck outlining go-to-market strategy, milestones, and co-sell opportunities with Contoso.',                             thumb: imgThumbPptx  },
    { type: 'docx', name: 'Onboarding Plan — New Hire', description: 'Structured onboarding checklist for the new team member starting next week. Includes tools setup, intro meetings, and 30/60/90 day goals.', thumb: imgThumbWord  },
    { type: 'pptx', name: 'ZavaCore Roadmap H2 2026',   description: 'Half-year product roadmap covering priorities, milestones, and key bets across platform, AI, and growth workstreams.',                       thumb: imgThumbPptx  },
    { type: 'xlsx', name: 'Q4 Forecast Model',          description: 'Financial model projecting Q4 revenue, headcount, and investment scenarios. Last updated with actuals from Jordan Lee.',                     thumb: imgThumbExcel },
  ];

  return (
    <>
      <CopilotByline />
      <p style={{ ...seg, margin: '0 0 16px', fontSize: 16, lineHeight: '24px', color: '#424242' }}>
        I found 8 files relevant to your day — here are the most important ones based on your upcoming meetings.
      </p>

      {/* Card list container */}
      <div style={{ backgroundColor: '#fbfbfb', borderRadius: 24, padding: '8px 24px', marginBottom: 16 }}>
        {files.map((f, i) => (
          <div key={f.name} style={{
            display: 'flex', gap: 8, alignItems: 'flex-start',
            padding: '16px 0',
            borderBottom: i < files.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
          }}>
            {/* File icon */}
            <div style={{ width: 24, height: 24, borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src={iconMap[f.type]} alt={f.type} style={{ width: 20, height: 20, display: 'block' }} />
            </div>

            {/* Text + buttons */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
                <span style={{ ...seg, fontSize: 12, color: '#616161', lineHeight: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.description}</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Ask', openLabel[f.type] ?? 'Open'].map(label => (
                  <button key={label} style={{
                    ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent',
                    border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >{label}</button>
                ))}
              </div>
            </div>

            {/* Thumbnail */}
            <div style={{ width: 132, height: 76, borderRadius: 8, overflow: 'hidden', backgroundColor: '#f0f0f0', flexShrink: 0, position: 'relative' }}>
              <img src={f.thumb} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
            </div>
          </div>
        ))}
      </div>

      {/* More files */}
      <div style={{ marginBottom: 12 }}>
        <button style={{ ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent', border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >4 more files</button>
      </div>

      <ActionBar />
      <SuggestionChips chips={['Summarize updates from all files', 'Which should I prioritize first?', 'What are the most pressing action items from this list?']} />
    </>
  );
}

// ── Email tab ──────────────────────────────────────────────────────────────────
function EmailContent() {
  const emails = [
    { name: 'Kat Larsson',  img: imgAvatarKat,  time: '9:42 AM',   badge: 'Action needed', subject: 'RE: Contoso Partnership — Contract Update', preview: 'Hi Carole, I wanted to follow up on the contract terms we discussed in yesterday\'s sync. Can you review section 4 before our meeting today?' },
    { name: 'Aadi Kapoor',  img: imgAvatarAadi, time: '8:15 AM',   badge: null,            subject: 'Q3 Budget Approval — Deadline Friday',      preview: 'Team, a reminder that all budget submissions are due by end of day Friday. Please ensure your team\'s numbers have been reviewed and signed off.' },
    { name: 'Microsoft HR', img: imgAvatarHR,   time: 'Yesterday', badge: null,            subject: 'Your benefits enrollment closes March 10',   preview: 'Don\'t miss the window to review and update your benefits selections for the upcoming open enrollment period ending March 10.' },
    { name: 'Lydia Bauer',  img: imgAvatarLydia,time: 'Yesterday', badge: null,            subject: 'Onboarding checklist for new hire',           preview: 'Hi Carole, please review the attached onboarding plan for the new team member starting next Monday. Let me know if anything looks off.' },
  ];

  return (
    <>
      <CopilotByline />
      <p style={{ ...seg, margin: '0 0 16px', fontSize: 16, lineHeight: '24px', color: '#424242' }}>
        You have 16 unread emails. Here are the 4 that need your attention most today.
      </p>

      {/* Card list container */}
      <div style={{ backgroundColor: '#fbfbfb', borderRadius: 24, padding: '8px 24px', marginBottom: 16 }}>
        {emails.map((e, i) => (
          <div key={e.subject} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '16px 0',
            borderBottom: i < emails.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
          }}>
            {/* Avatar */}
            <Avatar name={e.name} image={{ src: e.img }} size={36} style={{ flexShrink: 0 }} />

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ minWidth: 0 }}>
                  <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424' }}>{e.name}</span>
                  <div style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#242424', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.subject}</div>
                  <div style={{ ...seg, fontSize: 13, color: '#616161', lineHeight: '20px', marginTop: 2, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>{e.preview}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                  {e.badge && (
                    <span style={{ ...seg, fontSize: 11, fontWeight: 600, color: '#0f6cbd', backgroundColor: '#ebf3fc', border: '1px solid #0078d4', borderRadius: 10, padding: '1px 7px', whiteSpace: 'nowrap' }}>{e.badge}</span>
                  )}
                  <span style={{ ...seg, fontSize: 13, color: '#616161', whiteSpace: 'nowrap' }}>{e.time}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Ask', 'Reply', 'Open in Outlook'].map(label => (
                  <button key={label} style={{
                    ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent',
                    border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >{label}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More emails */}
      <div style={{ marginBottom: 12 }}>
        <button style={{ ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent', border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >12 more emails</button>
      </div>

      <ActionBar />
      <SuggestionChips chips={['Draft a reply to Kat Larsson', 'Summarize my unread emails', 'What emails need a response today?']} />
    </>
  );
}

// ── Mentions tab ───────────────────────────────────────────────────────────────
function MentionsContent() {
  const mentions = [
    { name: 'Aadi Kapoor',  img: imgAvatarAadi,  context: 'Teams · #project-contoso',     time: '1 hour ago',  message: '@Carole can you review the updated slide deck before our 11:35 meeting? I\'ve added the new pricing section you asked about.' },
    { name: 'Jordan Lee',   img: imgAvatarJordan,context: 'Teams · #budget-planning',      time: '3 hours ago', message: '@Carole the Q4 numbers look great — I\'ve incorporated the edits from yesterday\'s session and they\'re ready for your sign-off.' },
    { name: 'Robin Counts', img: imgAvatarRobin, context: 'Outlook · Architecture Review', time: 'Yesterday',   message: 'I\'ve looped in @Carole who can provide more context on the infrastructure requirements for this initiative going into Q3.' },
    { name: 'Mona Kane',    img: imgAvatarMona,  context: 'Teams · #leadership-updates',   time: 'Yesterday',   message: '@Carole great work on the Copilot pilot rollout — Satya specifically called it out in today\'s all-hands as a model program.' },
  ];

  return (
    <>
      <CopilotByline />
      <p style={{ ...seg, margin: '0 0 16px', fontSize: 16, lineHeight: '24px', color: '#424242' }}>
        You were mentioned 5 times since yesterday. Here are the ones most likely to need a response.
      </p>

      {/* Card list container */}
      <div style={{ backgroundColor: '#fbfbfb', borderRadius: 24, padding: '8px 24px', marginBottom: 16 }}>
        {mentions.map((m, i) => (
          <div key={m.message} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '16px 0',
            borderBottom: i < mentions.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
          }}>
            {/* Avatar */}
            <Avatar name={m.name} image={{ src: m.img }} size={36} style={{ flexShrink: 0 }} />

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ minWidth: 0 }}>
                  <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424' }}>{m.name}</span>
                  <span style={{ ...seg, fontSize: 13, color: '#616161' }}> · {m.context}</span>
                </div>
                <span style={{ ...seg, fontSize: 13, color: '#616161', flexShrink: 0, whiteSpace: 'nowrap' }}>{m.time}</span>
              </div>
              <div style={{ ...seg, fontSize: 14, color: '#424242', lineHeight: '22px', backgroundColor: 'rgba(0,0,0,0.04)', borderRadius: 8, padding: '8px 12px', borderLeft: '3px solid #d1d1d1' }}>
                {m.message}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Ask', 'Reply', 'View in Teams'].map(label => (
                  <button key={label} style={{
                    ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent',
                    border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >{label}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More mentions */}
      <div style={{ marginBottom: 12 }}>
        <button style={{ ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent', border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >1 more mention</button>
      </div>

      <ActionBar />
      <SuggestionChips chips={['Help me reply to Aadi Kapoor', 'Show all my Teams mentions this week', 'Which mentions need a response?']} />
    </>
  );
}

// ── People tab ─────────────────────────────────────────────────────────────────
function PeopleContent() {
  const people = [
    { name: 'Kat Larsson',  img: imgAvatarKat,   role: 'Program Manager',    org: 'Contoso Partnership',   meetingAt: '11:35 AM', presence: 'away'      as const, activity: 'Emailed you 2 hours ago about contract terms' },
    { name: 'Aadi Kapoor',  img: imgAvatarAadi,  role: 'Finance Lead',        org: 'ZavaCore Finance',      meetingAt: '12:35 PM', presence: 'available' as const, activity: 'Mentioned you in Teams · #project-contoso' },
    { name: 'Lydia Bauer',  img: imgAvatarLydia, role: 'HR Business Partner', org: 'People & Culture',      meetingAt: '5:35 PM',  presence: 'available' as const, activity: 'Sent you the onboarding plan for review' },
    { name: 'Robin Counts', img: imgAvatarRobin, role: 'Principal Engineer',  org: 'Platform Architecture', meetingAt: null,       presence: 'busy'      as const, activity: 'Mentioned you in the Architecture Review thread' },
  ];

  return (
    <>
      <CopilotByline />
      <p style={{ ...seg, margin: '0 0 16px', fontSize: 16, lineHeight: '24px', color: '#424242' }}>
        Here are the key people in your day — those you have meetings with and those who've recently reached out.
      </p>

      {/* Card list container */}
      <div style={{ backgroundColor: '#fbfbfb', borderRadius: 24, padding: '8px 24px', marginBottom: 16 }}>
        {people.map((p, i) => (
          <div key={p.name} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '16px 0',
            borderBottom: i < people.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
          }}>
            {/* Avatar + presence badge */}
            <Avatar name={p.name} image={{ src: p.img }} size={40} badge={{ status: p.presence }} style={{ flexShrink: 0 }} />

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ minWidth: 0 }}>
                  <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424' }}>{p.name}</span>
                  <div style={{ ...seg, fontSize: 13, color: '#616161', marginTop: 2 }}>{p.role} · {p.org}</div>
                  <div style={{ ...seg, fontSize: 13, color: '#424242', marginTop: 4 }}>{p.activity}</div>
                </div>
                {p.meetingAt && (
                  <span style={{ ...seg, display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#424242', backgroundColor: '#f0f0f0', border: '1px solid #e0e0e0', borderRadius: 12, padding: '3px 10px', flexShrink: 0, whiteSpace: 'nowrap' }}>
                    <CalendarRegular style={{ width: 12, height: 12, color: '#616161' }} />
                    {p.meetingAt}
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Message', 'View Profile'].map(label => (
                  <button key={label} style={{
                    ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent',
                    border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >{label}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More people */}
      <div style={{ marginBottom: 12 }}>
        <button style={{ ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent', border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >3 more people</button>
      </div>

      <ActionBar />
      <SuggestionChips chips={['Catch me up on my interactions with Kat Larsson', 'Who should I prioritize reaching out to today?', 'Show recent activity from my team']} />
    </>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────
interface PlanMyDayResponseProps {
  onAddToHome?: () => void;
}

export default function PlanMyDayResponse({ onAddToHome }: PlanMyDayResponseProps) {
  const [activeTab, setActiveTab] = useState<TabId>('Meetings');

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

          {activeTab === 'Meetings' && <MeetingsContent />}
          {activeTab === 'Files'    && <FilesContent />}
          {activeTab === 'Email'    && <EmailContent />}
          {activeTab === 'Mentions' && <MentionsContent />}
          {activeTab === 'People'   && <PeopleContent />}

        </div>

        {/* ── Aside ── */}
        <DayBriefWidget onAddToHome={onAddToHome} />
      </div>
    </div>
  );
}
