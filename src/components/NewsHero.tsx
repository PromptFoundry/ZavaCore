import { useState } from 'react';
import { ChevronLeft24Regular, ChevronRight24Regular, Comment24Regular, Mention24Regular, CheckmarkCircle24Regular } from '@fluentui/react-icons';
import soundWaveIcon from '../assets/icons/Sound Wave Circle Sparkle.svg';
import sliderImg1 from '../assets/images/Slider image 1.png';
import carouselBg1 from '../assets/images/Carousel-Background-1.png';
// carouselBg2 replaced with public asset below
import carouselBg3 from '../assets/images/Carousel-Background-3.png';
import carouselBg4 from '../assets/images/Carousel-Background-4.png';
import imgEventBg from '../assets/images/Event.png';

const segoe: React.CSSProperties = { fontFamily: '"Segoe UI", sans-serif' };
const cardShadow = '0px 10px 20px 0px rgba(0,0,0,0.14), 0px 0px 2.5px 0px rgba(0,0,0,0.12)';
const iconGradient = 'linear-gradient(132.8deg, #0078d4 16%, #2db4ff 40%, #d660ff 73%, #fea874 83%)';

const slides = [
  {
    bg: sliderImg1,
    icon: soundWaveIcon,
    title: 'Listen to an audio summary',
    source: 'News summary',
    timestamp: '6m 31s',
    buttonLabel: 'Summarize my news',
  },
  {
    bg: carouselBg1,
    icon: soundWaveIcon,
    title: 'Top stories personalized for your team',
    source: 'Daily digest',
    timestamp: '2hr ago',
    buttonLabel: 'Read now',
  },
  {
    bg: `${import.meta.env.BASE_URL}assets/images/fiber-v2-bg.png`,
    icon: soundWaveIcon,
    title: 'ZavaCore Fiber v2 pilot feedback surges 52%',
    source: 'Product news',
    timestamp: '30m ago',
    buttonLabel: 'Learn more',
  },
  {
    bg: carouselBg3,
    icon: soundWaveIcon,
    title: 'Summit Center project planning kicks off Q2',
    source: 'Internal updates',
    timestamp: '1hr ago',
    buttonLabel: 'View details',
  },
  {
    bg: carouselBg4,
    icon: soundWaveIcon,
    title: 'Your weekly performance report is ready',
    source: 'Analytics',
    timestamp: 'Just now',
    buttonLabel: 'Open report',
  },
];

const statTiles = [
  { Icon: Comment24Regular,        label: 'Comments', value: 12 },
  { Icon: Mention24Regular,        label: 'Mentions', value: 3 },
  { Icon: CheckmarkCircle24Regular, label: 'Tasks',   value: 8 },
];

interface NewsHeroProps {
  onSummarizeNews?: () => void;
  onEngageClick?: () => void;
  shimmerTarget?: string | null;
}

export default function NewsHero({ onSummarizeNews, onEngageClick: _onEngageClick, shimmerTarget }: NewsHeroProps = {}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length);
  const next = () => setCurrent(i => (i + 1) % slides.length);

  const slide = slides[current];

  return (
    <>
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="news-hero-layout">

        {/* ── Large Slider ── */}
        <div
          data-shimmer-id="news-summarize"
          className={`news-hero-slider${shimmerTarget === 'news-summarize' ? ' zava-shimmer' : ''}`}
          style={{ boxShadow: cardShadow, cursor: slide.buttonLabel === 'Summarize my news' ? 'pointer' : 'default' }}
          onClick={slide.buttonLabel === 'Summarize my news' ? onSummarizeNews : undefined}
        >

          {/* Background image */}
          <div
            key={slide.bg}
            style={{
              position: 'absolute',
              inset: -32,
              backgroundImage: `url("${slide.bg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              animation: 'heroFadeIn 0.5s ease forwards',
            }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(40,37,35,0) 40%, rgba(40,37,35,0.2) 60%, rgba(40,37,35,0.8) 100%)',
          }} />

          {/* Prev button */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            style={{
              position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
              width: 33, height: 33, borderRadius: 11, backgroundColor: 'rgba(0,0,0,0.55)',
              border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#e2ddd9', zIndex: 2, flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.75)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.55)')}
          >
            <ChevronLeft24Regular style={{ width: 22, height: 22 }} />
          </button>

          {/* Next button */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              width: 33, height: 33, borderRadius: 11, backgroundColor: 'rgba(0,0,0,0.55)',
              border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#e2ddd9', zIndex: 2, flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.75)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.55)')}
          >
            <ChevronRight24Regular style={{ width: 22, height: 22 }} />
          </button>

          {/* Bottom content */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '14px 29px 14px',
            display: 'flex', flexDirection: 'column', gap: 11, zIndex: 2,
          }}>
            {/* Content row: icon + text + button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              {/* Icon */}
              <div style={{
                position: 'relative',
                width: 44, height: 44, borderRadius: 11, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: iconGradient }} />
                <img src={soundWaveIcon} alt="" style={{ position: 'relative', width: 20, height: 20 }} />
              </div>

              {/* Title + meta */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ ...segoe, margin: 0, fontSize: 18, fontWeight: 600, lineHeight: '24px', color: '#fffbf8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {slide.title}
                </p>
                <p style={{ ...segoe, margin: 0, fontSize: 13, fontWeight: 400, lineHeight: '18px', color: 'rgba(255,255,255,0.85)' }}>
                  {slide.source} · {slide.timestamp}
                </p>
              </div>

              {/* Action button */}
              <button
                onClick={e => { e.stopPropagation(); if (slide.buttonLabel === 'Summarize my news') onSummarizeNews?.(); }}
                style={{
                  ...segoe, flexShrink: 0,
                  padding: '10px 16px', backgroundColor: 'rgba(0,0,0,0.55)',
                  border: 'none', borderRadius: 18, fontSize: 13, fontWeight: 400,
                  color: '#e5ebfa', cursor: slide.buttonLabel === 'Summarize my news' ? 'pointer' : 'not-allowed', whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.75)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.55)')}
              >
                {slide.buttonLabel}
              </button>
            </div>

            {/* Pagination bars */}
            <div style={{ display: 'flex', gap: 3, alignItems: 'center', width: 125 }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setCurrent(i); }}
                  style={{
                    flex: 1, height: 4, borderRadius: 2, padding: 0, border: 'none',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    cursor: 'pointer', position: 'relative', overflow: 'hidden',
                  }}
                >
                  {i === current && (
                    <div style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0,
                      width: '100%', backgroundColor: '#e5ebfa',
                    }} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column: 2 stacked cards ── */}
        <div className="news-hero-right">

          {/* Card 1 — Event: CEO Keynote */}
          <div style={{
            position: 'relative', borderRadius: 24, overflow: 'hidden',
            boxShadow: cardShadow, cursor: 'not-allowed',
          }}>
            {/* Background image — fills card, no dark overlay */}
            <img
              src={imgEventBg}
              alt=""
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                borderRadius: 24,
              }}
            />

            {/* Event badge — top right */}
            <div style={{
              position: 'absolute', top: 12, right: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: 24, padding: '0 6px',
              backgroundColor: 'rgba(18,17,17,0.2)',
              border: '1px solid #e0e0e0',
              borderRadius: 4,
            }}>
              <span style={{ ...segoe, fontSize: 12, fontWeight: 600, lineHeight: '16px', color: '#fff' }}>
                Event
              </span>
            </div>

            {/* Dark gradient behind text */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 15%, rgba(10,10,30,0.82) 100%)',
              borderRadius: 24,
            }} />

            {/* Title + meta — lower left */}
            <div style={{
              position: 'absolute', bottom: 16, left: 20, right: 20,
              display: 'flex', flexDirection: 'column', gap: 3,
            }}>
              <p style={{
                ...segoe, margin: 0, fontSize: 18, fontWeight: 600,
                lineHeight: '25px', color: '#fff',
                                display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
              }}>
                CEO Elena Kade to present HelixWeave™ breakthrough at Global Performance Summit
              </p>
              <p style={{ ...segoe, margin: 0, fontSize: 13, fontWeight: 400, lineHeight: '18px', color: '#fff', textShadow: '0px 1px 4px rgba(0,0,0,0.6)' }}>
                Keynote · Starts in 43m
              </p>
            </div>
          </div>

          {/* Card 2 — Suggested Prompt */}
          <div style={{
            borderRadius: 24,
            border: '1px solid #e0e0e0',
            boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)',
            backgroundColor: '#fff',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 16, gap: 26, cursor: 'not-allowed', overflow: 'hidden',
          }}>
            {/* Top: label + title */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ ...segoe, fontSize: 10, fontWeight: 400, lineHeight: '14px', color: '#424242' }}>
                Awaiting your action
              </span>
              <p style={{ ...segoe, margin: 0, fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#242424', overflow: 'hidden' }}>
                {'Summarize today\'s '}
                <span style={{ color: '#4f59f4' }}>priorities</span>
                {' and\nwhat needs my attention…'}
              </p>
            </div>

            {/* Stat tiles */}
            <div style={{ display: 'flex', gap: 9 }}>
              {statTiles.map(({ Icon, label, value }) => (
                <div key={label} style={{
                  flex: 1, display: 'flex', alignItems: 'center', gap: 9,
                  padding: 9, borderRadius: 8,
                  border: '0.787px solid #e5e5e5', overflow: 'hidden',
                }}>
                  <Icon style={{ width: 24, height: 24, flexShrink: 0, color: '#4f59f4' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ ...segoe, fontSize: 10, fontWeight: 400, lineHeight: '15.75px', color: '#616161' }}>
                      {label}
                    </span>
                    <span style={{ ...segoe, fontSize: 20, fontWeight: 700, lineHeight: '22.5px', color: '#242424' }}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
