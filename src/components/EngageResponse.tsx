import React from 'react';
import {
  SparkleRegular,
  ThumbLikeRegular,
  ThumbDislikeRegular,
  ChevronDownRegular,
  MoreHorizontal20Regular,
  CopyRegular,
  ChatMultiple24Regular,
} from '@fluentui/react-icons';
import { Avatar } from '@fluentui/react-avatar';

import vivaEngageIcon from '../assets/icons/Viva Engage.svg';
import imgCarole from '../assets/images/Carole Poland.png';
import avatar1 from '../assets/images/Avatar-1.png';
import avatar2 from '../assets/images/Avatar-2.png';
import avatar3 from '../assets/images/Avatar-3.png';
import avatar4 from '../assets/images/Avatar-4.png';
import avatar5 from '../assets/images/Avatar-5.png';
import avatar6 from '../assets/images/Avatar-6.png';
import avatar7 from '../assets/images/Avatar-7.png';
import imgAvatarKat    from '../assets/images/Avatar/People Card-Avatar/Avatar.png';
import imgAvatarAadi   from '../assets/images/Avatar/People Card-Avatar/Avatar-1.png';
import imgAvatarRobin  from '../assets/images/Avatar/People Card-Avatar/Avatar-2.png';
import imgAvatarLydia  from '../assets/images/Avatar/People Card-Avatar/Avatar-3.png';
import imgAvatarJordan from '../assets/images/Coworker-2.png';
// Topic card thumbnail images (from Figma, valid 7 days)
const imgThumb1 = 'https://www.figma.com/api/mcp/asset/495e582f-777f-4f78-9508-647e6d5d5235';
const imgThumb2 = 'https://www.figma.com/api/mcp/asset/b967a58a-0963-4ff2-8b76-addcd01dbeb3';
// Community cover images (from Figma, valid 7 days)
const imgCommunityCover1 = 'https://www.figma.com/api/mcp/asset/e39e916b-4273-4980-be93-c345dc7501a8';
const imgCommunityCover2 = 'https://www.figma.com/api/mcp/asset/585aa16e-8023-4b7b-ad55-8d37aba43c79';
const imgCommunityAvatar1 = 'https://www.figma.com/api/mcp/asset/072e907f-18d5-4db6-89c3-6181044f6aad';
const imgCommunityAvatar2 = 'https://www.figma.com/api/mcp/asset/cc687155-95d0-4551-8e1d-9149b4272516';

const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };
const shadow = '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)';

// ── Building Card ──────────────────────────────────────────────────────────────
function BuildingCard() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 16, padding: '32px 0',
    }}>
      {/* Heading */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ ...seg, fontSize: 36, fontWeight: 600, lineHeight: '48px', color: '#242424', whiteSpace: 'nowrap' }}>
            What's new in your
          </span>
          <span style={{ ...seg, fontSize: 36, fontWeight: 600, lineHeight: '48px', color: '#242424', whiteSpace: 'nowrap' }}>
            Engage communities
          </span>
        </div>
        <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
          Here's a summary of the latest activity across your communities, highlighting key topics and contributors.
        </p>
      </div>

    </div>
  );
}

// ── Copilot byline ─────────────────────────────────────────────────────────────
function AgentByline() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <img src={imgCarole} alt="" style={{ width: 20, height: 20, borderRadius: 10, objectFit: 'cover' }} />
      <span style={{ ...seg, fontSize: 13, color: '#616161' }}>· Curated for you · 30m</span>
    </div>
  );
}

// ── Citation badge ─────────────────────────────────────────────────────────────
function Citation({ n }: { n: number }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 14, height: 14, border: '1px solid #e0e0e0', borderRadius: 4,
      ...seg, fontSize: 10, fontWeight: 600, color: '#424242',
      verticalAlign: 'middle', margin: '0 2px', flexShrink: 0,
    }}>{n}</span>
  );
}

// ── Quick Summary Card ─────────────────────────────────────────────────────────
function QuickSummaryCard() {
  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: '20px 24px',
      display: 'flex', flexDirection: 'column', gap: 20,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <SparkleRegular style={{ width: 20, height: 20, color: '#6264a7', flexShrink: 0 }} />
        <span style={{ ...seg, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424' }}>Quick summary</span>
      </div>

      {/* Posts */}
      <div style={{ ...seg, fontSize: 14, lineHeight: '20px', color: '#242424', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Post 1 */}
        <div>
          <p style={{ ...seg, margin: '0 0 6px', fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#242424' }}>
            🧥🌧️ CEO announces new partnership with GoreTex <Citation n={1} />
          </p>
          <p style={{ ...seg, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#242424' }}>
            ZavaCore and Gore‑Tex are teaming up to blend SmartMesh™ with waterproof performance. Limited releases, joint R&D, and a sustainability pledge drove major buzz—and early demand. 🚀
          </p>
        </div>

        {/* Post 2 */}
        <div>
          <p style={{ ...seg, margin: '0 0 6px', fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#242424' }}>
            🏢📅 All-company workshop announced (mandatory attendance) <Citation n={2} />
          </p>
          <p style={{ ...seg, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#242424' }}>
            Calendar alerts are live: the required All‑Company ZavaCore Workshop is on the books. Expect roadmap clarity, live demos, hands‑on labs, leadership Q&A, and a few surprises. Bring curiosity—and coffee. ☕ 🧠
          </p>
        </div>

        {/* Post 3 */}
        <div>
          <p style={{ ...seg, margin: '0 0 6px', fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#242424' }}>
            📸🔥 Photography community trending <Citation n={3} />
          </p>
          <p style={{ ...seg, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#242424' }}>
            The Photography community is buzzing. A behind‑the‑scenes field‑test post sparked lively threads on craft and storytelling, driving rising engagement and a surge of new content. 🎞️✨
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button style={{
          ...seg, display: 'flex', alignItems: 'center', gap: 4,
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          fontSize: 12, color: '#616161',
        }}>
          10 references
          <ChevronDownRegular style={{ width: 16, height: 16 }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ ...seg, fontSize: 10, color: '#707070' }}>AI-generated content may be incorrect</span>
          <div style={{ display: 'flex', gap: 2 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 4, display: 'flex', color: '#616161' }}>
              <ThumbLikeRegular style={{ width: 16, height: 16 }} />
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 4, display: 'flex', color: '#616161' }}>
              <ThumbDislikeRegular style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Widget entity header ───────────────────────────────────────────────────────
function EntityHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 16, borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424' }}>{title}</p>
        <p style={{ ...seg, margin: 0, fontSize: 12, color: '#616161' }}>{subtitle}</p>
      </div>
      <button style={{
        ...seg, display: 'flex', alignItems: 'center', gap: 6, height: 32, padding: '0 12px',
        background: '#fff', border: '1px solid #d1d1d1', borderRadius: 8,
        fontSize: 14, fontWeight: 600, color: '#242424', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
      }}>
        <img src={vivaEngageIcon} alt="" style={{ width: 16, height: 16 }} />
        Open in Engage
      </button>
      <button style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer', color: '#616161', flexShrink: 0 }}>
        <MoreHorizontal20Regular />
      </button>
    </div>
  );
}

// ── Trending topic card ────────────────────────────────────────────────────────
function TopicCard({ title, body, promptText, thumb }: { title: string; body: string; promptText: string; thumb: string }) {
  return (
    <div style={{
      flex: 1, minWidth: 0, background: '#fff', borderRadius: 12,
      boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)',
      padding: 20, display: 'flex', flexDirection: 'column', gap: 20,
    }}>
      {/* Title */}
      <p style={{ ...seg, margin: 0, fontSize: 14, fontWeight: 700, lineHeight: '20px', color: '#000' }}>{title}</p>

      {/* Image + body */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
        <div style={{ width: 72, height: 72, borderRadius: 8, overflow: 'hidden', flexShrink: 0, position: 'relative', border: '1px solid rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', borderRadius: 8, zIndex: 1 }} />
          <img src={thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <p style={{ ...seg, margin: 0, fontSize: 12, lineHeight: '16px', color: '#242424', flex: 1, minWidth: 0 }}>{body}</p>
      </div>

      {/* Prompt button — always pinned to bottom */}
      <button style={{
        ...seg, width: '100%', textAlign: 'center', marginTop: 'auto',
        background: '#ebf3fc', border: '1px solid #cad5e2', borderRadius: 8,
        height: 36, padding: '0 16px', fontSize: 12, color: '#0a0a0a',
        cursor: 'pointer', lineHeight: '16px', fontWeight: 400, flexShrink: 0,
      }}>
        {promptText}
      </button>
    </div>
  );
}

// ── Community card ─────────────────────────────────────────────────────────────
const memberAvatars = [imgAvatarKat, imgAvatarAadi, imgAvatarRobin, imgAvatarLydia, imgAvatarJordan];

function CommunityCard({ name, coverImage, avatarImage, memberCount, description, official }: {
  name: string; coverImage: string; avatarImage: string;
  memberCount: string; description: string; official?: boolean;
}) {
  return (
    <div style={{
      flex: 1, minWidth: 0, background: '#fff', border: '1px solid #e0e0e0',
      borderRadius: 16, overflow: 'hidden', boxShadow: shadow, display: 'flex', flexDirection: 'column',
    }}>
      {/* Cover image + overlapping avatar */}
      <div style={{ position: 'relative', height: 120, flexShrink: 0 }}>
        <img src={coverImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* Community logo avatar — overlaps cover bottom */}
        <div style={{
          position: 'absolute', bottom: -20, left: 16,
          width: 56, height: 56, borderRadius: 8,
          border: '2px solid #fff', overflow: 'hidden', boxShadow: shadow,
        }}>
          <img src={avatarImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Title + badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424' }}>{name}</p>
          {official && (
            <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#0f6cbd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 8, color: '#fff', fontWeight: 700 }}>✓</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p style={{ ...seg, margin: 0, fontSize: 12, lineHeight: '16px', color: '#616161' }}>{description}</p>

        {/* Member avatars + count */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {memberAvatars.map((src, i) => (
              <div key={i} style={{
                width: 24, height: 24, borderRadius: '50%', overflow: 'hidden',
                border: '2px solid #fff', marginLeft: i === 0 ? 0 : -8, flexShrink: 0,
              }}>
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <p style={{ ...seg, margin: 0, fontSize: 12, color: '#616161' }}>{memberCount} Members</p>
        </div>

        {/* Join button */}
        <button style={{
          ...seg, height: 32, padding: '0 20px',
          background: '#fff', border: '1px solid rgba(36,136,216,0.29)', borderRadius: 100,
          fontSize: 14, fontWeight: 600, color: '#106ebe', cursor: 'pointer',
          alignSelf: 'center', marginTop: 4,
        }}>
          Join
        </button>
      </div>
    </div>
  );
}

// ── Action bar ────────────────────────────────────────────────────────────────
function ActionBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {[
        { icon: <CopyRegular style={{ width: 16, height: 16 }} />,        title: 'Copy' },
        { icon: <ThumbLikeRegular style={{ width: 16, height: 16 }} />,   title: 'Like' },
        { icon: <ThumbDislikeRegular style={{ width: 16, height: 16 }} />, title: 'Dislike' },
        { icon: <MoreHorizontal20Regular style={{ width: 16, height: 16 }} />, title: 'More' },
      ].map((btn) => (
        <button key={btn.title} title={btn.title} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 32, height: 32, borderRadius: 6, border: 'none',
          background: 'transparent', cursor: 'pointer', color: '#616161',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
}

// ── Suggestion chips ───────────────────────────────────────────────────────────
const suggestions = [
  'Which posts are my employees engaging with the most?',
  'Tell me more about these trending topics',
  'Show me more people to follow',
];

function SuggestionChips() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {suggestions.map((s) => (
        <button key={s} style={{
          ...seg, background: '#fff', border: '1px solid #d1d1d1', borderRadius: 100,
          padding: '7px 16px', fontSize: 14, fontWeight: 400, color: '#242424',
          cursor: 'pointer', whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

// ── People data ────────────────────────────────────────────────────────────────
const people = [
  { name: 'Kian',      avatar: avatar1 },
  { name: 'Hillary',   avatar: avatar2 },
  { name: 'Cassandra', avatar: avatar3 },
  { name: 'Robin',     avatar: avatar4 },
  { name: 'Edmee',     avatar: avatar5 },
  { name: 'Erika',     avatar: avatar6 },
  { name: 'Pasquale',  avatar: avatar7 },
];

// ── Main export ────────────────────────────────────────────────────────────────
export default function EngageResponse() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

      {/* ── Building Card ── */}
      <BuildingCard />

      {/* ── Intro + Standout Posts (cream bg) ── */}
      <div style={{
        background: '#fcf7f3', borderRadius: 20, padding: '40px',
        display: 'flex', flexDirection: 'column', gap: 32,
      }}>
        {/* Intro */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <AgentByline />
          <h2 style={{ ...seg, margin: 0, fontSize: 36, fontWeight: 600, lineHeight: '44px', color: '#242424' }}>
            Carole, here's what's driving conversation
          </h2>
          <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
            Since it's been a couple of weeks since your last visit, here's a quick roundup of news and updates across the <strong>12 communities</strong> you belong to and the <strong>26 people you follow</strong> — highlighting the posts generating the most discussion and reactions.
          </p>
          <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
            Let's start with <strong>this week's standout posts.</strong> Three moments are generating the most discussion and reactions across your communities—making them worth a closer look.
          </p>
        </div>

        {/* Standout Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ ...seg, margin: 0, fontSize: 36, fontWeight: 600, lineHeight: '44px', color: '#242424' }}>
            This week's standout posts
          </h2>
          <QuickSummaryCard />
        </div>
      </div>

      {/* ── Trending Topics ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h2 style={{ ...seg, margin: 0, fontSize: 36, fontWeight: 600, lineHeight: '44px', color: '#242424' }}>
          Trending topics across ZavaCore
        </h2>
        <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
          These topics and questions are showing up across multiple communities in Engage, highlighting themes teams keep coming back to. 🔥
        </p>

        {/* Widget card */}
        <div style={{
          background: '#fff', border: '1px solid #e0e0e0', borderRadius: 24,
          padding: 24, display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {/* Entity header with ChatMultiple icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 12, borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ChatMultiple24Regular style={{ width: 24, height: 24, color: '#424242' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424' }}>Catch up</p>
              <p style={{ ...seg, margin: 0, fontSize: 12, color: '#616161' }}>March 2026 - April 2026</p>
            </div>
            <button style={{
              ...seg, display: 'flex', alignItems: 'center', gap: 6, height: 32, padding: '0 12px',
              background: '#fff', border: '1px solid #d1d1d1', borderRadius: 8,
              fontSize: 14, fontWeight: 600, color: '#242424', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              <img src={vivaEngageIcon} alt="" style={{ width: 16, height: 16 }} />
              Open in Engage
            </button>
            <button style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer', color: '#616161', flexShrink: 0 }}>
              <MoreHorizontal20Regular />
            </button>
          </div>

          {/* Two topic cards */}
          <div style={{ display: 'flex', gap: 20, paddingTop: 6 }}>
            <TopicCard
              title="ZAVA SmartRun Jacket Launch"
              body="Early testers sharing detailed impressions of the SmartRun Jacket, especially how the embedded motion sensors track posture, stride symmetry, and shoulder rotation during runs without requiring additional wearable devices."
              promptText="Is a lighter version being discussed?"
              thumb={imgThumb1}
            />
            <TopicCard
              title="Sensor Technology Curiosity"
              body="Engineers explaining how the fabric-based sensors capture subtle biomechanical signals such as muscle activation timing and torso rotation during movement."
              promptText="What are athletes saying about the gear?"
              thumb={imgThumb2}
            />
          </div>
        </div>
      </div>

      {/* ── Grow your network (light blue bg section) ── */}
      <div style={{
        background: '#ebf3fc', borderRadius: 20, padding: '40px',
        display: 'flex', flexDirection: 'column', gap: 32,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ ...seg, margin: 0, fontSize: 36, fontWeight: 600, lineHeight: '44px', color: '#242424' }}>
            Grow your network
          </h2>
          <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
            Connect with colleagues contributing ideas and research across ZavaCore—recommended based on signals from your work, teams, and R&D communities.
          </p>
        </div>

        {/* People to follow */}
        <div style={{
          background: '#fff', border: '1px solid #e0e0e0', borderRadius: 24,
          padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <EntityHeader title="People to follow" subtitle="" />
          <p style={{ ...seg, margin: 0, fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#424242' }}>
            People shaping the conversation
          </p>
          <p style={{ ...seg, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#616161' }}>
            You might recognize these people—they're connected to your work or communities, or are active in Engage. Follow them to stay up to date on what matters to your teams.
          </p>

          {/* Avatar carousel */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, overflow: 'hidden' }}>
            {people.map((p, i) => (
              <div key={i} style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '8px 4px',
              }}>
                <Avatar name={p.name} image={{ src: p.avatar }} size={56} />
                <p style={{ ...seg, margin: 0, fontSize: 13, fontWeight: 400, lineHeight: '18px', color: '#242424', textAlign: 'center', width: '100%' }}>
                  {p.name}
                </p>
                <button style={{
                  ...seg, height: 28, padding: '0 10px',
                  background: '#fff', border: '1px solid #ebebeb', borderRadius: 8,
                  fontSize: 12, fontWeight: 600, color: '#616161', cursor: 'pointer',
                }}>
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Communities to follow */}
        <div style={{
          background: '#fff', border: '1px solid #e0e0e0', borderRadius: 24,
          padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <EntityHeader title="Communities to follow" subtitle="" />
          <div style={{ display: 'flex', gap: 16 }}>
            <CommunityCard
              name="Contoso People Managers"
              coverImage={imgCommunityCover1}
              avatarImage={imgCommunityAvatar1}
              memberCount="982"
              description="A community for people managers at Contoso to share insights, resources, and best practices."
            />
            <CommunityCard
              name="Tech Trends"
              coverImage={imgCommunityCover2}
              avatarImage={imgCommunityAvatar2}
              memberCount="8,912"
              description="Explore the latest in technology, AI, and digital transformation across the industry."
              official
            />
          </div>
        </div>
      </div>

      {/* ── Action bar + Suggestion chips ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <ActionBar />
        <SuggestionChips />
      </div>

    </div>
  );
}
