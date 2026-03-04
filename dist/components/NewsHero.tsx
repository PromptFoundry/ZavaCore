import { useState } from 'react';
import { ChevronLeft24Regular, ChevronRight24Regular } from '@fluentui/react-icons';
import soundWaveIcon from '../assets/icons/Sound Wave Circle Sparkle.svg';
import sliderImg1 from '../assets/images/Slider image 1.png';
import carouselBg1 from '../assets/images/Carousel-Background-1.png';
import carouselBg2 from '../assets/images/Carousel-Background-2.png';
import carouselBg3 from '../assets/images/Carousel-Background-3.png';
import carouselBg4 from '../assets/images/Carousel-Background-4.png';
import learningHero from '../assets/images/learning image hero.png';
import engageHero from '../assets/images/engage image hero.png';
import vivaLearningIcon from '../assets/icons/Viva Learning.svg';
import vivaEngageIcon from '../assets/icons/Viva Engage.svg';

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
    bg: carouselBg2,
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

const rightCards = [
  {
    bg: learningHero,
    appIcon: vivaLearningIcon,
    appIconBg: 'rgba(230,230,230,0.7)',
    badge: 'Due in 2 days',
    title: 'Safe manufacturing: Ensuring your safety and the safety of others',
    source: 'Learning',
    meta: '30m',
  },
  {
    bg: engageHero,
    appIcon: vivaEngageIcon,
    appIconBg: 'rgba(230,230,230,0.9)',
    badge: 'Trending now',
    title: 'Top Trending Conversations & Announcements',
    source: 'Engage',
    meta: '6 new updates',
  },
];

interface NewsHeroProps {
  onSummarizeNews?: () => void;
}

export default function NewsHero({ onSummarizeNews }: NewsHeroProps = {}) {
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
        <div className="news-hero-slider" style={{ boxShadow: cardShadow }}>

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
            onClick={prev}
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
            onClick={next}
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
                onClick={slide.buttonLabel === 'Summarize my news' ? onSummarizeNews : undefined}
                style={{
                  ...segoe, flexShrink: 0,
                  padding: '10px 16px', backgroundColor: 'rgba(0,0,0,0.55)',
                  border: 'none', borderRadius: 18, fontSize: 13, fontWeight: 400,
                  color: '#e5ebfa', cursor: 'pointer', whiteSpace: 'nowrap',
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
                  onClick={() => setCurrent(i)}
                  style={{
                    flex: 1, height: 4, borderRadius: 2, padding: 0, border: 'none',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    cursor: 'pointer', position: 'relative', overflow: 'hidden',
                  }}
                >
                  {i === current && (
                    <div style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0,
                      width: '75%', backgroundColor: '#e5ebfa',
                    }} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column: 2 stacked cards ── */}
        <div className="news-hero-right">
          {rightCards.map((card, i) => (
            <div
              key={i}
              style={{
                flex: 1, position: 'relative', borderRadius: 24, overflow: 'hidden',
                boxShadow: cardShadow, cursor: 'pointer',
              }}
            >
              {/* Background image */}
              <div style={{
                position: 'absolute', inset: -32,
                backgroundImage: `url("${card.bg}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }} />

              {/* Dark gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%)',
              }} />

              {/* App icon badge — top right */}
              <div style={{
                position: 'absolute', top: 12, right: 12,
                width: 40, height: 40, borderRadius: 8,
                backgroundColor: card.appIconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src={card.appIcon} alt="" style={{ width: 28, height: 28 }} />
              </div>

              {/* Content */}
              <div style={{
                position: 'absolute', inset: 0,
                padding: 20,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              }}>
                {/* Badge + Title + meta grouped at bottom */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{
                    ...segoe,
                    alignSelf: 'flex-start',
                    display: 'inline-block',
                    padding: '1px 6px',
                    backgroundColor: 'rgba(18,17,17,0.2)',
                    border: '1px solid #e0e0e0',
                    borderRadius: 4,
                    fontSize: 10, fontWeight: 600, lineHeight: '14px', color: '#fff',
                  }}>
                    {card.badge}
                  </span>
                  <div>
                    <p style={{
                      ...segoe, margin: '0 0 3px',
                      fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#fff',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {card.title}
                    </p>
                    <p style={{ ...segoe, margin: 0, fontSize: 13, fontWeight: 400, lineHeight: '18px', color: 'rgba(255,255,255,0.85)' }}>
                      {card.source} · {card.meta}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
