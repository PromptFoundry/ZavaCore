import React from 'react';
import { Avatar } from '@fluentui/react-avatar';
import {
  CopyRegular,
  ThumbLikeRegular,
  ThumbDislikeRegular,
  MoreHorizontalRegular,
  BriefcaseRegular,
  ClockRegular,
} from '@fluentui/react-icons';

import imgCarole      from '../assets/images/Carole Poland.png';
import imgAvatarKat   from '../assets/images/Avatar/People Card-Avatar/Avatar.png';
import imgAvatarAadi  from '../assets/images/Avatar/People Card-Avatar/Avatar-1.png';
import imgAvatarRobin from '../assets/images/Avatar/People Card-Avatar/Avatar-2.png';
import imgAvatarLydia from '../assets/images/Avatar/People Card-Avatar/Avatar-3.png';
import imgAvatarJordan from '../assets/images/Coworker-2.png';
import imgAvatarMona   from '../assets/images/Coworker-3.png';
import iconDocx from '../assets/icons/docx.svg';
import iconXls  from '../assets/icons/xls.svg';

const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };

// ── Action bar ──────────────────────────────────────────────────────────────────
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

// ── Suggestion chips ────────────────────────────────────────────────────────────
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

// ── Main ───────────────────────────────────────────────────────────────────────
export default function PeopleOrgResponse() {
  const initiatives = [
    {
      emoji: '🤖',
      title: 'AI Platform',
      description: 'Scaling agent infrastructure and aligning on Q2 roadmap milestones.',
      people: [
        { name: 'Aadi Kapoor', img: imgAvatarAadi },
        { name: 'Robin Counts', img: imgAvatarRobin },
      ],
      active: 2,
      updated: '30m ago',
    },
    {
      emoji: '🤝',
      title: 'Partnerships & Deals',
      description: 'Closing the Contoso enterprise contract and building H2 pipeline.',
      people: [
        { name: 'Kat Larsson', img: imgAvatarKat },
        { name: 'Jordan Lee', img: imgAvatarJordan },
      ],
      active: 1,
      updated: '2h ago',
    },
    {
      emoji: '🌱',
      title: 'People & Culture',
      description: 'Running new hire onboarding and a full ZavaCore AI UX design review.',
      people: [
        { name: 'Lydia Bauer', img: imgAvatarLydia },
        { name: 'Mona Kane', img: imgAvatarMona },
      ],
      active: 1,
      updated: '3h ago',
    },
  ];

  const people: {
    name: string; img: string; role: string; org: string;
    presence: 'available' | 'away' | 'busy';
    activity: string; time: string;
    docIcon: string | null; docName: string | null;
  }[] = [
    { name: 'Robin Counts',  img: imgAvatarRobin,  role: 'Principal Engineer',  org: 'Platform Architecture', presence: 'busy',      activity: 'Drafting infra scaling proposal for multi-tenant enterprise workloads', time: '30m ago', docIcon: iconDocx, docName: 'ZavaCore Infra Proposal.docx' },
    { name: 'Aadi Kapoor',   img: imgAvatarAadi,   role: 'Finance Lead',         org: 'ZavaCore Finance',       presence: 'available', activity: 'Finalizing Q1 Budget Reconciliation for the leadership review',           time: '1h ago',  docIcon: iconXls,  docName: 'Q1 Budget Reconciliation.xlsx' },
    { name: 'Mona Kane',     img: imgAvatarMona,   role: 'Senior Designer',      org: 'ZavaCore Design',        presence: 'available', activity: 'Leading UX design review for the ZavaCore AI agent response system',       time: '45m ago', docIcon: null,     docName: null },
    { name: 'Kat Larsson',   img: imgAvatarKat,    role: 'Program Manager',      org: 'Contoso Partnership',    presence: 'away',      activity: 'Reviewing contract terms with Contoso legal team for enterprise deal',      time: '2h ago',  docIcon: iconDocx, docName: 'Contoso Partnership Agreement.docx' },
    { name: 'Lydia Bauer',   img: imgAvatarLydia,  role: 'HR Business Partner',  org: 'People & Culture',       presence: 'available', activity: 'Building onboarding plan for the new hire cohort starting next week',       time: '3h ago',  docIcon: iconDocx, docName: 'New Hire Onboarding Plan Q2.docx' },
  ];

  return (
    <div style={{ ...seg, display: 'flex', flexDirection: 'column', width: '100%' }}>

      {/* ── Header ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: '32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <img src={imgCarole} alt="" style={{ width: 24, height: 24, borderRadius: 12, objectFit: 'cover' }} />
          <span style={{ ...seg, fontSize: 13, color: '#616161' }}>· Curated for you · just now</span>
        </div>
        <h1 style={{ ...seg, fontSize: 36, fontWeight: 600, color: '#272320', margin: '0 0 8px', lineHeight: '48px' }}>
          Here's what your org is working on
        </h1>
        <p style={{ ...seg, fontSize: 16, color: '#424242', margin: 0, lineHeight: '28px' }}>
          9 people active today across 3 focus areas — here's what's in motion.
        </p>
      </div>

      {/* ── Org focus ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <BriefcaseRegular style={{ width: 14, height: 14, color: '#616161' }} />
        <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#616161' }}>Org focus this week</span>
      </div>

      <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
        {initiatives.map(init => (
          <div key={init.title} style={{
            flex: '1 1 180px', backgroundColor: '#fbfbfb', border: '1px solid #ebebeb',
            borderRadius: 16, padding: '16px', display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div>
              <div style={{ fontSize: 22, lineHeight: '28px', marginBottom: 6 }}>{init.emoji}</div>
              <div style={{ ...seg, fontSize: 15, fontWeight: 600, color: '#242424', marginBottom: 4 }}>{init.title}</div>
              <div style={{ ...seg, fontSize: 13, color: '#616161', lineHeight: '20px' }}>{init.description}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {init.people.map((p, i) => (
                <div key={p.name} style={{ marginLeft: i > 0 ? -8 : 0 }}>
                  <Avatar name={p.name} image={{ src: p.img }} size={24} style={{ display: 'block', outline: '2px solid #fbfbfb' }} />
                </div>
              ))}
              <span style={{ ...seg, fontSize: 12, color: '#616161', marginLeft: 10 }}>
                {init.active} active · {init.updated}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Recently active people ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <ClockRegular style={{ width: 14, height: 14, color: '#616161' }} />
        <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#616161' }}>Recently active</span>
      </div>

      <div style={{ backgroundColor: '#fbfbfb', borderRadius: 24, padding: '8px 24px', marginBottom: 16 }}>
        {people.map((p, i) => (
          <div key={p.name} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '16px 0',
            borderBottom: i < people.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
          }}>
            <Avatar name={p.name} image={{ src: p.img }} size={40} badge={{ status: p.presence }} style={{ flexShrink: 0 }} />

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ minWidth: 0 }}>
                  <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424' }}>{p.name}</span>
                  <div style={{ ...seg, fontSize: 13, color: '#616161', marginTop: 2 }}>{p.role} · {p.org}</div>
                  <div style={{ ...seg, fontSize: 14, color: '#424242', marginTop: 4, lineHeight: '20px' }}>{p.activity}</div>
                  {p.docIcon && p.docName && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 6, backgroundColor: '#fff', border: '1px solid #e6e6e6', borderRadius: 6, padding: '3px 8px', cursor: 'pointer' }}>
                      <img src={p.docIcon} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
                      <span style={{ ...seg, fontSize: 12, color: '#424242' }}>{p.docName}</span>
                    </div>
                  )}
                </div>
                <span style={{ ...seg, fontSize: 12, color: '#616161', flexShrink: 0, whiteSpace: 'nowrap' }}>{p.time}</span>
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

      <div style={{ marginBottom: 12 }}>
        <button style={{ ...seg, fontSize: 14, color: '#242424', backgroundColor: 'transparent', border: '1px solid #d1d1d1', borderRadius: 4, padding: '4px 12px', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >4 more people</button>
      </div>

      <ActionBar />
      <SuggestionChips chips={[
        'What is Robin working on this week?',
        'Who should I connect with about the AI platform?',
        'Show me recent documents from my team',
      ]} />

    </div>
  );
}
