import { useState, useRef, useEffect } from 'react';
import zavalLogo from '../assets/images/ZavaCore_logo.svg';
import { EditRegular, CopyRegular, ArrowForwardRegular, ThumbLikeRegular, ThumbDislikeRegular, MoreHorizontalRegular } from '@fluentui/react-icons';

const segoe: React.CSSProperties = { fontFamily: '"Segoe UI", sans-serif' };

// Figma asset URLs (valid 7 days from generation)
const imgVideo = 'https://www.figma.com/api/mcp/asset/8fbc9dd8-6ec4-46d7-867c-bcd6defa19cd';
// Article card images (from ArticlePanel)
const imgTitleRegion = 'https://www.figma.com/api/mcp/asset/4e4b3496-c249-4b7b-9354-fbb2fae486c2';
const imgFaviconSource = 'https://www.figma.com/api/mcp/asset/7e4d78b3-a51c-4536-8c52-d7a5da8c4f51';
const imgFaviconZavaNews = 'https://www.figma.com/api/mcp/asset/a9888eee-7916-4d77-bdea-98640cc12f0f';
const imgNewsThumb2 = 'https://www.figma.com/api/mcp/asset/785043c8-5e43-4ca5-ae53-a00a8c43d969';
const imgNewsThumb3 = 'https://www.figma.com/api/mcp/asset/2d22862e-6d75-42f4-9086-18a857d08dbe';
// Events (refreshed from node 120-18999)
const imgEventAMA = 'https://www.figma.com/api/mcp/asset/76ef549c-b2a4-421b-a1ae-97d169986441';
const imgEventHappyHour = 'https://www.figma.com/api/mcp/asset/6946bbc3-821a-4bbe-bbd9-de31ed4b80f7';
const imgEventDiscovery = 'https://www.figma.com/api/mcp/asset/db3226ed-4cca-484f-a630-5cc3b1bbe64a';
const imgEventCloud = 'https://www.figma.com/api/mcp/asset/4a80c4be-4732-4b6f-a2a1-10b523da0818';

// Sources footer favicons
const imgFavSrc1 = 'https://www.figma.com/api/mcp/asset/297efb03-fe8e-4434-8ad6-4a4e14d08631';
const imgFavSrc2 = 'https://www.figma.com/api/mcp/asset/c1aebbd2-514d-4a20-be25-372b3ecce574';
const imgFavSrc3 = 'https://www.figma.com/api/mcp/asset/18b4266f-1a97-4589-a165-7fe9211a9e98';

// Events structured as columns × 2 rows for the carousel
const eventColumns = [
  [
    { month: 'FEB', day: '9',  dow: 'MON', title: 'Company AMA',            location: 'Redmond',          time: '2:30 PM', img: imgEventAMA },
    { month: 'FEB', day: '13', dow: 'FRI', title: 'Team happy hour',         location: 'Local pub',         time: '3:30 PM', img: imgEventHappyHour },
  ],
  [
    { month: 'FEB', day: '24', dow: 'TUE', title: 'Discovery Hour: Delivering AI-Powered Customer Experiences', location: 'Redmond', time: '6:00 PM', img: imgEventDiscovery },
    { month: 'MAR', day: '6',  dow: 'FRI', title: 'Cloud & AI Endpoints Summit', location: 'Multiple',      time: '6:00 PM', img: imgEventCloud },
  ],
  [
    { month: 'APR', day: '9',  dow: 'FRI', title: 'Solidarity from Seattle: A Benefit Show', location: 'Allegiant Stadium', time: '6:00 AM', img: imgEventHappyHour },
    { month: 'MAY', day: '20', dow: 'FRI', title: 'Idaho @ Sunset Tavern',   location: 'Sunset Tavern, Seattle', time: '8:00 PM', img: imgEventDiscovery },
  ],
  [
    { month: 'MAY', day: '28', dow: 'THU', title: 'Zava All-Hands: Q2 Recap & Roadmap',  location: 'Teams Live',         time: '10:00 AM', img: imgEventAMA },
    { month: 'JUN', day: '4',  dow: 'WED', title: 'Design Systems Workshop',              location: 'Redmond — Studio A', time: '1:00 PM',  img: imgEventDiscovery },
  ],
  [
    { month: 'JUN', day: '12', dow: 'THU', title: 'Smart Fiber Innovation Day',           location: 'Building 35',        time: '9:00 AM',  img: imgEventCloud },
    { month: 'JUN', day: '20', dow: 'FRI', title: 'Hackathon: Future of Wearables',       location: 'Redmond Campus',     time: '9:00 AM',  img: imgEventHappyHour },
  ],
];

const newsItems = [
  { favicon: imgFaviconSource, source: 'The Source', time: '2h', title: 'HelixWeave™ brings real-time adaptive response to next-generation performance textiles', img: `${import.meta.env.BASE_URL}assets/images/helix-banner.jpg`, type: 'quarterly' as const },
  { favicon: imgFaviconZavaNews, source: 'Zava News', time: '7h', title: 'ZavaCore Fiber v2 enters durability validation phase', img: imgNewsThumb2, type: null },
  { favicon: imgFaviconSource, source: 'The Source', time: '10h', title: 'Smart‑fiber durability targets rise across the industry', img: imgNewsThumb3, type: null },
];

// Chevron right icon
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4l4 4-4 4" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// 48px tall to match Figma Horizontal Rule (h-[48px])
function Divider() {
  return (
    <div style={{ width: '100%', height: 48, display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%', height: 1, backgroundColor: '#e8e8e8' }} />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ ...segoe, fontSize: 24, fontWeight: 600, lineHeight: '32px', color: '#242424', margin: 0 }}>
      {children}
    </p>
  );
}

interface EventCardProps {
  month: string;
  day: string;
  dow: string;
  title: string;
  location: string;
  time: string;
  img?: string;
}
function EventCard({ month, day, dow, title, location, time, img }: EventCardProps) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 8, padding: 12,
      height: 88, boxSizing: 'border-box', width: 312, flexShrink: 0,
    }}>
      {/* Date box */}
      <div style={{
        flexShrink: 0, width: 50, height: '100%',
        backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', overflow: 'hidden',
      }}>
        <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0,0.75)', lineHeight: '13px', display: 'block', width: '100%', textAlign: 'center' }}>{month}</span>
        <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 20, fontWeight: 700, color: '#000', lineHeight: '26px', display: 'block', width: '100%', textAlign: 'center' }}>{day}</span>
        <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0,0.75)', lineHeight: '13px', display: 'block', width: '100%', textAlign: 'center' }}>{dow}</span>
      </div>
      {/* Content */}
      <div style={{ flex: 1, minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 700, lineHeight: '22px', color: '#000', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</p>
        <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13, fontWeight: 400, lineHeight: '20px', color: 'rgba(0,0,0,0.6)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{location}</p>
        <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 11, fontWeight: 400, lineHeight: '13px', color: 'rgba(0,0,0,0.6)', margin: 0 }}>{time}</p>
      </div>
      {/* Image */}
      {img && (
        <div style={{ width: 72, height: 72, flexShrink: 0, position: 'relative', alignSelf: 'center', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
          <img src={img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
        </div>
      )}
    </div>
  );
}


interface NewsResponseMessageProps {
  onArticleClick?: (type: 'helixweave' | 'quarterly') => void;
}

export default function NewsResponseMessage({ onArticleClick }: NewsResponseMessageProps = {}) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [videoOpen]);
  const COLUMN_WIDTH = 328; // 312px card + 16px gap
  const MAX_INDEX = eventColumns.length - 1;

  const handleNext = () => setCarouselIndex(i => Math.min(i + 2, MAX_INDEX));
  const handlePrev = () => setCarouselIndex(i => Math.max(i - 2, 0));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, width: '100%', maxWidth: 772 }}>

      {/* ── Section 1: Copilot header + greeting (gap: 32) ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={zavalLogo} alt="ZavaCore Agent" style={{ width: 24, height: 24 }} />
          <span style={{ ...segoe, fontWeight: 600, fontSize: 16, lineHeight: '22px', color: '#424242' }}>ZavaCore Agent</span>
        </div>
        <div>
          <p style={{ ...segoe, fontSize: 24, fontWeight: 400, lineHeight: '28px', color: '#424242', margin: '0 0 16px' }}>Hi Carole,</p>
          <p style={{ ...segoe, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242', margin: 0 }}>
            Here's your personalized roundup of what's new at Zava. I've picked the company updates most relevant to your work and packaged them into a quick video and skimmable highlights. You'll see what could impact your{' '}
            <strong style={{ fontWeight: 600 }}>smart-fiber roadmap</strong>, upcoming{' '}
            <strong style={{ fontWeight: 600 }}>milestones</strong>, key cross-team work, plus a few{' '}
            <strong style={{ fontWeight: 600 }}>events and highlights you might enjoy</strong>{' '}along the way.
          </p>
        </div>
      </div>

      {/* ── Section 2: Video (gap: 14) ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <SectionHeading>Let's start with video highlights</SectionHeading>
        <div
          onClick={() => setVideoOpen(true)}
          style={{ width: '100%', borderRadius: 20, overflow: 'hidden', position: 'relative', aspectRatio: '16/9', cursor: 'pointer' }}
        >
          {/* Video background */}
          <img src={imgVideo} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(40,37,35,0) 40%, rgba(40,37,35,0.2) 60%, rgba(40,37,35,0.85) 100%)',
          }} />
          {/* Top-left: badge + title */}
          <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '80%' }}>
            <span style={{
              ...segoe, display: 'inline-block', padding: '3px 8px',
              backgroundColor: '#efeae7', borderRadius: 8,
              fontSize: 13, fontWeight: 400, color: '#272320', lineHeight: '18px', alignSelf: 'flex-start',
            }}>Play video</span>
            <p style={{ ...segoe, fontSize: 20, fontWeight: 400, lineHeight: '28px', color: '#fff', margin: 0 }}>
              Company highlights, personalized for you
            </p>
          </div>
          {/* Play button */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 54, height: 54, borderRadius: 18, backgroundColor: 'rgba(39,35,32,0.8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>{/* end video section */}

      {/* ── Video Modal ── */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', width: '90vw', maxWidth: 1100, borderRadius: 16, overflow: 'hidden', background: '#000' }}
          >
            <video
              ref={videoRef}
              src={`${import.meta.env.BASE_URL}assets/videos/Weekly_Company_Update_Video_Ready.mp4`}
              controls
              autoPlay
              style={{ width: '100%', display: 'block', maxHeight: '80vh' }}
            />
            <button
              onClick={() => setVideoOpen(false)}
              style={{
                position: 'absolute', top: 12, right: 12,
                width: 36, height: 36, borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.6)', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M2 2l12 12M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Divider (48px) ── */}
      <Divider />

      {/* ── Section 3: Top updates (gap: 24) ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <SectionHeading>Top updates impacting your work</SectionHeading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Update 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ ...segoe, fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#424242', margin: 0 }}>
            🤖 1. Staffing changes across smart‑fiber teams
          </p>
          <p style={{ ...segoe, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242', margin: 0 }}>
            Alex Moreno shared an update on upcoming staffing changes that may affect how design validation and roadmap planning align over the next few sprints. As new owners ramp up, teams may see some shifts in ownership and handoffs. Calling out dependencies early and staying aligned on timelines will help keep work moving smoothly during the transition.
          </p>
          {/* Pull quote */}
          <div style={{
            padding: '16px 24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
          }}>
            <span style={{ fontSize: 28, lineHeight: 1, color: '#424242', fontFamily: 'serif' }}>"</span>
            <p style={{ ...segoe, fontSize: 20, fontWeight: 400, lineHeight: '32px', color: '#424242', textAlign: 'center', margin: 0, fontStyle: 'italic' }}>
              "These changes set us up well long‑term, but clear handoffs will matter so teams like Carole's can keep the smart‑fiber work moving."
            </p>
          </div>
        </div>

        <Divider />

        {/* Update 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ ...segoe, fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#424242', margin: 0 }}>
            ⏰ 2. Time sensitive: Plan your yearly giving event
          </p>
          <div style={{ ...segoe, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
            <p style={{ margin: '0 0 4px' }}>To help lock in team participation early and make it easier to balance giving with delivery commitments, managers are asked to reach out by the end of the week with:</p>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li>Proposals for yearly giving activities</li>
              <li>Suggested beneficiary organizations</li>
              <li>Local team leads who can help coordinate giving efforts</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Update 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ ...segoe, fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#424242', margin: 0 }}>
            🚀 3. Quarterly goals set: what the plan means for you
          </p>
          <div style={{ ...segoe, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
            <p style={{ margin: '0 0 0' }}>This quarter's plan focuses on advancing smart‑fiber development, tightening durability targets for core use cases, and strengthening coordination between product, design, and validation teams.</p>
            <p style={{ margin: '8px 0 0' }}>Priorities include validating new materials under real‑world stress conditions, aligning on shared success criteria, and smoothing handoffs as work moves from concept into testing. It's a helpful snapshot of what to prioritize—and what to keep an eye on—as the quarter unfolds.</p>
            <p style={{ margin: '4px 0 0', color: '#115ea3', cursor: 'default' }}>Read the memo</p>
          </div>
        </div>
      </div>
      </div>{/* end updates section */}

      {/* ── Section 4: ZavaCore news (gap: 16) ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SectionHeading>ZavaCore news updates</SectionHeading>
        <div className="@container">
        <div className="flex flex-col @[560px]:flex-row @[560px]:[min-height:424px]" style={{ gap: 20 }}>

        {/* Left card — flex 3 */}
        <div onClick={() => onArticleClick?.('helixweave')} style={{
          flex: 3, minWidth: 0, border: '1px solid #e6e6e6', borderRadius: 16,
          overflow: 'hidden', display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
          cursor: onArticleClick ? 'pointer' : 'default',
        }}>
          {/* Hero image */}
          <div style={{ padding: '20px 20px 0', flexShrink: 0 }}>
            <div style={{ aspectRatio: '16/9', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
              <img src={imgTitleRegion} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          {/* Meta */}
          <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minHeight: 0 }}>
            {/* Source row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 16, height: 16, borderRadius: 2, overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={zavalLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{ ...segoe, fontSize: 12, lineHeight: '16px', color: '#424242' }}>Zava News</span>
              <span style={{ ...segoe, fontSize: 14, lineHeight: '20px', color: '#424242' }}>·</span>
              <span style={{ ...segoe, fontSize: 12, lineHeight: '16px', color: '#424242' }}>7h</span>
            </div>
            {/* Headline */}
            <p style={{ ...segoe, fontSize: 16, fontWeight: 700, lineHeight: '22px', color: '#242424', margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              ZavaCore unveils adaptive weave breakthrough for extreme endurance environments
            </p>
            {/* Body */}
            <p style={{ ...segoe, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#424242', margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              ZavaCore has introduced HelixWeave™, a next-gen textile architecture that dynamically stiffens under impact and relaxes during recovery, redefining how performance fabrics respond in motion.
            </p>
          </div>
        </div>

        {/* Right card — flex 2 */}
        <div style={{
          flex: 2, minWidth: 0, border: '1px solid #e0e0e0', borderRadius: 12,
          backgroundColor: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column',
          padding: 20, boxSizing: 'border-box',
        }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 24, marginBottom: 16, flexShrink: 0 }}>
            <p style={{ ...segoe, flex: 1, fontSize: 14, fontWeight: 700, lineHeight: '20px', color: '#000', margin: 0 }}>
              Discover more headlines
            </p>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'default', padding: 0, flexShrink: 0 }}>
              <ChevronRight />
            </button>
          </div>
          {/* 3 news items — evenly spaced in 344px */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, flex: 1, minHeight: 0 }}>
            {newsItems.map((item, i) => (
              <div key={i} onClick={item.type ? () => onArticleClick?.(item.type!) : undefined} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', cursor: item.type ? 'pointer' : 'not-allowed' }}>
                {/* Text */}
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, overflow: 'hidden', flexShrink: 0, position: 'relative', backgroundColor: '#e4e4e4', border: '1px solid rgba(0,0,0,0.1)' }}>
                      <img src={item.favicon} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span style={{ ...segoe, fontSize: 12, lineHeight: '16px', color: '#424242' }}>{item.source}</span>
                    <span style={{ ...segoe, fontSize: 12, lineHeight: '16px', color: '#424242' }}>·</span>
                    <span style={{ ...segoe, fontSize: 12, lineHeight: '16px', color: '#424242' }}>{item.time}</span>
                  </div>
                  <p style={{ ...segoe, fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#242424', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {item.title}
                  </p>
                </div>
                {/* 72×72 thumbnail */}
                <div style={{ width: 72, height: 72, flexShrink: 0, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 8 }} />
                  <img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>{/* end @container */}

      </div>
      </div>{/* end news section */}

      {/* ── Section 5: Upcoming events (outer gap: 33) ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 33 }}>
        {/* heading + description (inner gap: 33) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 33 }}>
          <SectionHeading>Upcoming events</SectionHeading>
          <p style={{ ...segoe, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242', margin: 0 }}>
            <strong style={{ fontWeight: 600 }}>Just a reminder</strong> — you're confirmed for this week's company happy hour and will be joining a roundtable discussion on the future of product development on March 6.{' '}
            Here are some more upcoming events to consider, including one at your home office, and one hosted by your manager.
          </p>
        </div>{/* end heading + description */}

        {/* Events carousel — outer container allows button to overflow right */}
        <div style={{ position: 'relative', height: 200 }}>
          {/* Card container — clips overflow so columns bleed off the right edge */}
          <div style={{ overflow: 'hidden', height: '100%' }}>
            <div style={{
              display: 'flex', gap: 16, height: '100%',
              transform: `translateX(-${carouselIndex * COLUMN_WIDTH}px)`,
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              {eventColumns.map((col, ci) => (
                <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 24, flexShrink: 0 }}>
                  {col.map((ev, ri) => (
                    <EventCard key={ri} {...ev} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Left gradient — shown when prev arrow is visible */}
          {carouselIndex > 0 && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: 80, pointerEvents: 'none', zIndex: 1,
              background: 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
            }} />
          )}

          {/* Right gradient — always visible */}
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: 80, pointerEvents: 'none', zIndex: 1,
            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
          }} />

          {/* Prev button */}
          {carouselIndex > 0 && (
            <div
              onClick={handlePrev}
              style={{
                position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                width: 36, height: 48, zIndex: 2,
                backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8,
                boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.05), 0px 4px 12px 0px rgba(0,0,0,0.14)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 5l-5 5 5 5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}

          {/* Next button */}
          {carouselIndex < MAX_INDEX && (
            <div
              onClick={handleNext}
              style={{
                position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                width: 36, height: 48, zIndex: 2,
                backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8,
                boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.05), 0px 4px 12px 0px rgba(0,0,0,0.14)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5l5 5-5 5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>{/* end events section */}

      {/* ── Footer (pt: 16, gap: 16) ── */}
      <div style={{ paddingTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Sources pill */}
        <button style={{
          ...segoe, display: 'flex', alignItems: 'center', gap: 6,
          height: 40, padding: '6px 12px', border: '1px solid #e6e6e6', borderRadius: 8,
          backgroundColor: 'transparent', cursor: 'pointer', fontSize: 14, color: '#424242',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <span>Sources</span>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <img src={imgFavSrc1} alt="" style={{ width: 16, height: 16, borderRadius: 2 }} />
            <img src={imgFavSrc2} alt="" style={{ width: 16, height: 16, borderRadius: 2 }} />
            <img src={imgFavSrc3} alt="" style={{ width: 16, height: 16, borderRadius: 2 }} />
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="#424242"><path d="M2 4l4 4 4-4"/></svg>
        </button>

        {/* Action icons */}
        <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {[
            { label: 'Edit',        icon: <EditRegular style={{ width: 16, height: 16, color: '#424242' }} /> },
            { label: 'Copy',        icon: <CopyRegular style={{ width: 16, height: 16, color: '#424242' }} /> },
            { label: 'Share',       icon: <ArrowForwardRegular style={{ width: 16, height: 16, color: '#424242' }} /> },
            { label: 'Thumbs up',   icon: <ThumbLikeRegular style={{ width: 16, height: 16, color: '#424242' }} /> },
            { label: 'Thumbs down', icon: <ThumbDislikeRegular style={{ width: 16, height: 16, color: '#424242' }} /> },
            { label: 'More',        icon: <MoreHorizontalRegular style={{ width: 16, height: 16, color: '#424242' }} /> },
          ].map(({ label, icon }) => (
            <button key={label} aria-label={label} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 28, height: 28, padding: 4, border: 'none', background: 'none', cursor: 'pointer', borderRadius: 4,
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* ── Follow-up prompts ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
        {[
          'Create an audio summary of personalized updates',
          'Summarize quarterly goals',
          'Show me more upcoming events',
        ].map(label => (
          <button
            key={label}
            style={{
              ...segoe, display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', border: '1px solid #e0e0e0', borderRadius: 20,
              backgroundColor: 'transparent', cursor: 'pointer', fontSize: 14, color: '#242424',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {label}
          </button>
        ))}
      </div>

    </div>
  );
}
