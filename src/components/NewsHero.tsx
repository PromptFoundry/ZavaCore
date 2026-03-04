import { useState } from 'react';
import { ChevronLeft24Regular, ChevronRight24Regular } from '@fluentui/react-icons';

export interface NewsHeroSlide {
  id: string;
  /** Image URL used as background */
  backgroundImage: string;
  /** CSS background-position, defaults to 'center' */
  backgroundPosition?: string;
  /** Small icon shown in bottom bar */
  icon?: string;
  title: string;
  source: string;
  timestamp: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export interface NewsHeroSideCard {
  id: string;
  /** Image URL used as background */
  backgroundImage: string;
  badge?: string;
  title: string;
  source: string;
  timestamp: string;
  onClick?: () => void;
}

export interface NewsHeroProps {
  slides?: NewsHeroSlide[];
  sideCards?: NewsHeroSideCard[];
}

const defaultSlides: NewsHeroSlide[] = [
  {
    id: '1',
    backgroundImage: '/assets/images/Slider image 1.png',
    backgroundPosition: 'top center',
    icon: '/assets/icons/Sound Wave Circle Sparkle.svg',
    title: 'Listen to an audio summary',
    source: 'News summary',
    timestamp: '6m 31s',
    buttonLabel: 'Summarize my news',
  },
  {
    id: '2',
    backgroundImage: '/assets/images/Carousel-Background-1.png',
    icon: '/assets/images/ZavaCore_logo.svg',
    title: 'Top stories personalized for your team',
    source: 'Daily digest',
    timestamp: '2hr ago',
    buttonLabel: 'Read now',
  },
  {
    id: '3',
    backgroundImage: '/assets/images/Carousel-Background-2.png',
    icon: '/assets/images/ZavaCore_logo.svg',
    title: 'ZavaCore Fiber v2 pilot feedback surges 52%',
    source: 'Product news',
    timestamp: '30m ago',
    buttonLabel: 'Learn more',
  },
  {
    id: '4',
    backgroundImage: '/assets/images/Carousel-Background-3.png',
    icon: '/assets/images/ZavaCore_logo.svg',
    title: 'Summit Center project planning kicks off Q2',
    source: 'Internal updates',
    timestamp: '1hr ago',
    buttonLabel: 'View details',
  },
  {
    id: '5',
    backgroundImage: '/assets/images/Carousel-Background-4.png',
    icon: '/assets/images/ZavaCore_logo.svg',
    title: 'Your weekly performance report is ready',
    source: 'Analytics',
    timestamp: 'Just now',
    buttonLabel: 'Open report',
  },
];

const defaultSideCards: NewsHeroSideCard[] = [
  {
    id: '1',
    backgroundImage: '/assets/images/Slider image 2.png',
    badge: 'News',
    title: 'Introducing the Falcon Quadcopter 6781rpl31',
    source: 'Skyline news',
    timestamp: '1hr ago',
  },
  {
    id: '2',
    backgroundImage: '/assets/images/Slider image 3.png',
    badge: 'News',
    title: 'Reinventing the structure of something super cool',
    source: 'Daily Read',
    timestamp: '2 days ago',
  },
];

// Reusable on-image nav button matching Figma spec:
// 36×36, border-radius 12px, bg #0000008c, icon #e2ddd9 at 24px
function NavButton({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        [direction === 'prev' ? 'left' : 'right']: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '36px',
        height: '36px',
        borderRadius: '12px',
        backgroundColor: '#0000008c',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#e2ddd9',
        zIndex: 2,
        flexShrink: 0,
        transition: 'background-color 0.15s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#000000b0')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0000008c')}
    >
      {direction === 'prev' ? <ChevronLeft24Regular /> : <ChevronRight24Regular />}
    </button>
  );
}

function SideCard({ card }: { card: NewsHeroSideCard }) {
  return (
    <div
      onClick={card.onClick}
      style={{
        height: '204px',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        cursor: card.onClick ? 'pointer' : 'default',
      }}
    >
      {/* Background image — uses TRBL:0 so height never relies on % resolution */}
      <div
        style={{
          position: 'absolute',
          inset: '-30px',
          backgroundImage: `url("${card.backgroundImage}")`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '3px',
        }}
      >
        {card.badge && (
          <span
            style={{
              display: 'inline-block',
              alignSelf: 'flex-start',
              padding: '1px 7px',
              borderRadius: '4px',
              backgroundColor: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(4px)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '3px',
              fontFamily: '"Segoe UI", sans-serif',
            }}
          >
            {card.badge}
          </span>
        )}
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '20px',
            color: '#ffffff',
            fontFamily: '"Segoe UI", sans-serif',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {card.title}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: '12px',
            lineHeight: '16px',
            color: 'rgba(255,255,255,0.75)',
            fontFamily: '"Segoe UI", sans-serif',
          }}
        >
          {card.source}
          <span style={{ margin: '0 4px' }}>·</span>
          {card.timestamp}
        </p>
      </div>
    </div>
  );
}

export default function NewsHero({ slides = defaultSlides, sideCards = defaultSideCards }: NewsHeroProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length);
  const next = () => setCurrent(i => (i + 1) % slides.length);

  const slide = slides[current];

  return (
    <>
      <style>{`
        @keyframes newsHeroFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    <div style={{ display: 'flex', gap: '16px', width: '100%', height: '422px' }}>
      {/* Large Slider */}
      <div
        style={{
          flex: '0 0 62%',
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            inset: '-30px',
            backgroundImage: `url("${slide.backgroundImage}")`,
            backgroundSize: '100% 100%',
            backgroundPosition: slide.backgroundPosition ?? 'center',
            animation: 'newsHeroFadeIn 0.5s ease forwards',
          }}
        />

        {/* Bottom gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)',
          }}
        />

        <NavButton direction="prev" onClick={prev} />
        <NavButton direction="next" onClick={next} />

        {/* Bottom content bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '14px 20px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 2,
          }}
        >
          {/* Icon */}
          {slide.icon && (
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10.9px',
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Texture layer */}
              <img
                alt=""
                src="/assets/icons/figma/d650c5623d2db496b953f65dea15b009ea49d5e9.png"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Gradient layer */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(132.797deg, rgb(0,120,212) 16.141%, rgb(45,180,255) 39.557%, rgb(214,96,255) 72.98%, rgb(254,168,116) 82.898%)',
              }} />
              {/* Sound Wave icon */}
              <img
                alt=""
                src="/assets/icons/figma/fb7e676d5c566a0af85fd719520b917439d012de.svg"
                style={{ position: 'relative', width: '18.64px', height: '18.64px' }}
              />
            </div>
          )}

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                margin: 0,
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: '20px',
                color: '#ffffff',
                fontFamily: '"Segoe UI", sans-serif',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {slide.title}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: '12px',
                color: 'rgba(255,255,255,0.75)',
                fontFamily: '"Segoe UI", sans-serif',
              }}
            >
              {slide.source}
              <span style={{ margin: '0 4px' }}>·</span>
              {slide.timestamp}
            </p>
          </div>

          {/* Action button */}
          {slide.buttonLabel && (
            <button
              onClick={slide.onButtonClick}
              style={{
                flexShrink: 0,
                padding: '9.997px 16.36px',
                backgroundColor: 'rgba(0,0,0,0.55)',
                border: 'none',
                borderRadius: '18.176px',
                fontSize: '12.723px',
                fontWeight: 450,
                lineHeight: '18.176px',
                color: '#e5ebfa',
                cursor: 'pointer',
                fontFamily: '"Segoe UI", sans-serif',
                whiteSpace: 'nowrap',
                fontVariationSettings: "'opsz' 10.5",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.55)')}
            >
              {slide.buttonLabel}
            </button>
          )}
        </div>

        {/* Pagination dots */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '4px',
            zIndex: 3,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '20px' : '6px',
                height: '4px',
                borderRadius: '2px',
                backgroundColor: i === current ? '#ffffff' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.25s ease, background-color 0.25s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Side Cards */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14.5px', minWidth: 0 }}>
        {sideCards.map(card => (
          <SideCard key={card.id} card={card} />
        ))}
      </div>
    </div>
    </>
  );
}
