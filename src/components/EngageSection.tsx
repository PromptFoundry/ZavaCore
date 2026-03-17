import { useState } from 'react';
import { BookmarkRegular, BookmarkFilled } from '@fluentui/react-icons';
import engagePersona from '../assets/engage-assets/Persona.png';
import engageDiscussion from '../assets/engage-assets/Discussion.svg';
import engageQuestion from '../assets/engage-assets/Question.svg';
import engagePraise from '../assets/engage-assets/Praise.svg';
import engagePoll from '../assets/engage-assets/Poll.svg';
import engageArticle from '../assets/engage-assets/Article.svg';
import engageIcon from '../assets/engage-assets/Icon.svg';
import carolePng from '../assets/images/Carole Poland.png';
import engageGetty from '../assets/engage-assets/GettyImages-2233751483 1.png';
import engageRedHeart from '../assets/engage-assets/Red heart.svg';
import engageChat from '../assets/engage-assets/Post/Molecule/TS CTA Row/Atom/Chat.svg';
import engageThumbsUp from '../assets/engage-assets/Thumbs up.svg';
import engageClapping from '../assets/engage-assets/Clapping hands.svg';
import engageCTA from '../assets/engage-assets/Post/Organism/L1 Reply Publisher/CTA.svg';

export interface EngageSectionProps {
  /** Custom className */
  className?: string;
}

/**
 * EngageSection - Social engagement feed with Viva Engage style
 *
 * Displays a community feed section with post composer and social post example.
 *
 * @example
 * ```tsx
 * <EngageSection />
 * ```
 */
const reactions = [
  { label: 'Like', emoji: '👍' },
  { label: 'Love', emoji: '❤️' },
  { label: 'Celebrate', emoji: '😄' },
  { label: 'Insightful', emoji: '🥳' },
  { label: 'Clap', emoji: '👏' },
  { label: 'Curious', emoji: '😢' },
];

export default function EngageSection({
  className = '',
}: EngageSectionProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [saved, setSaved] = useState(false);
  const [showReactions, setShowReactions] = useState(false);

  const handleLike = () => {
    setLiked(prev => {
      setLikeCount(c => prev ? c - 1 : c + 1);
      return !prev;
    });
    setShowReactions(false);
  };

  return (
    <section
      className={className}
      style={{
        width: '100%',
        backgroundColor: '#F0F0F0',
        padding: '80px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <div style={{ maxWidth: '774px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '18px',
            lineHeight: 1.2,
            letterSpacing: '0.36px',
            textTransform: 'uppercase',
            color: '#242424',
            margin: 0,
          }}
        >
          Zava community
        </p>
      </div>

      {/* Content Container */}
      <div
        style={{
          maxWidth: '764px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Publisher / Post Composer */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px 0px rgba(0, 0, 0, 0.11)',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Input Field */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 24px',
              height: '52px',
            }}
          >
            <img
              src={engagePersona}
              alt=""
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
              }}
            />
            <p
              style={{
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#605e5c',
                margin: 0,
                flex: 1,
              }}
            >
              Share thoughts, ideas or updates
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: '#e0e0e0',
              margin: '0 24px',
            }}
          />

          {/* Post Type Picker */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              padding: '8px 24px',
            }}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                height: '40px',
                backgroundColor: '#f2f2f2',
                border: 'none',
                borderRadius: '4px',
                cursor: 'default',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '14px',
                color: '#605e5c',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e6e6e6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f2f2f2';
              }}
            >
              <img src={engageDiscussion} alt="" style={{ width: '24px', height: '23px' }} />
              Discussion
            </button>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                height: '40px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'default',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '14px',
                color: '#605e5c',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f2f2f2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <img src={engageQuestion} alt="" style={{ width: '24px', height: '23px' }} />
              Question
            </button>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                height: '40px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'default',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '14px',
                color: '#605e5c',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f2f2f2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <img src={engagePraise} alt="" style={{ width: '18px', height: '25px' }} />
              Praise
            </button>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                height: '40px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'default',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '14px',
                color: '#605e5c',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f2f2f2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <img src={engagePoll} alt="" style={{ width: '18px', height: '20px' }} />
              Poll
            </button>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                height: '40px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'default',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '14px',
                color: '#605e5c',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f2f2f2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <img src={engageArticle} alt="" style={{ width: '16px', height: '19px' }} />
              Article
            </button>
          </div>
        </div>

        {/* Feed Post */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px 0px rgba(0, 0, 0, 0.11)',
            overflow: 'hidden',
          }}
        >
          {/* Announcement Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '20px 24px 16px',
              gap: '8px',
            }}
          >
            <img src={engageIcon} alt="" style={{ width: '16px', height: '16px' }} />
            <span
              style={{
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: '#242424',
              }}
            >
              Announcement
            </span>
            <span
              style={{
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '12px',
                color: '#605e5c',
              }}
            >
              posted in
            </span>
            <span
              style={{
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: '#242424',
              }}
            >
              Zava Sports
            </span>
          </div>

          {/* Post Header with Avatar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 28px 16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={carolePng}
                alt=""
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: 'Segoe UI, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#242424',
                    margin: 0,
                    lineHeight: '20px',
                  }}
                >
                  Sarah Chen
                </p>
                <p
                  style={{
                    fontFamily: 'Segoe UI, sans-serif',
                    fontSize: '12px',
                    color: '#605e5c',
                    margin: 0,
                    lineHeight: '16px',
                  }}
                >
                  2 hours ago
                </p>
              </div>
            </div>
            <span
              style={{
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '12px',
                color: '#605e5c',
              }}
            >
              Seen by 127
            </span>
          </div>

          {/* Post Text */}
          <div style={{ padding: '0 28px 16px' }}>
            <p
              style={{
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#242424',
                margin: 0,
              }}
            >
              Excited to share our latest innovation in athletic performance technology! Our new ZavaCore Smart Mesh system is
              revolutionizing how athletes train and compete. Check out the highlights from today's launch event.
            </p>
          </div>

          {/* Featured Image */}
          <img
            src={engageGetty}
            alt=""
            style={{
              width: '100%',
              height: '467px',
              objectFit: 'cover',
            }}
          />

          {/* CTA Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px 24px',
              height: '48px',
            }}
          >
            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '4px' }}>

              {/* Like Button (with reaction picker) */}
              <div style={{ position: 'relative' }}>
                {/* Reaction Picker */}
                {showReactions && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '44px',
                      left: '0',
                      backgroundColor: '#292929',
                      borderRadius: '24px',
                      padding: '8px 12px',
                      display: 'flex',
                      gap: '4px',
                      alignItems: 'center',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                      zIndex: 10,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {reactions.map(({ label, emoji }) => (
                      <button
                        key={label}
                        title={label}
                        onClick={() => { setLiked(true); setLikeCount(c => liked ? c : c + 1); setShowReactions(false); }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '24px',
                          lineHeight: 1,
                          padding: '2px 4px',
                          borderRadius: '8px',
                          transition: 'transform 0.15s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.3)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  onClick={handleLike}
                  onMouseEnter={() => setShowReactions(true)}
                  onMouseLeave={() => setShowReactions(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px',
                    height: '36px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <img src={engageThumbsUp} alt="" style={{ width: '20px', height: '20px', opacity: liked ? 1 : 0.7 }} />
                  <span
                    style={{
                      fontFamily: 'Segoe UI, sans-serif',
                      fontSize: '12px',
                      fontWeight: liked ? 600 : 400,
                      color: liked ? '#0078d4' : '#605e5c',
                    }}
                  >
                    {liked ? `Liked · ${likeCount}` : `Like · ${likeCount}`}
                  </span>
                </button>
              </div>

              {/* Comment Button */}
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px',
                  height: '36px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f2f1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <img src={engageChat} alt="" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '12px', color: '#605e5c' }}>
                  Comment · 18
                </span>
              </button>

              {/* Save for Later Button */}
              <button
                onClick={() => setSaved(prev => !prev)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px',
                  height: '36px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f2f1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                {saved
                  ? <BookmarkFilled style={{ width: 20, height: 20, color: '#0078d4' }} />
                  : <BookmarkRegular style={{ width: 20, height: 20, color: '#605e5c' }} />
                }
                <span
                  style={{
                    fontFamily: 'Segoe UI, sans-serif',
                    fontSize: '12px',
                    fontWeight: saved ? 600 : 400,
                    color: saved ? '#0078d4' : '#605e5c',
                  }}
                >
                  {saved ? 'Saved' : 'Save for later'}
                </span>
              </button>

            </div>

            {/* Social Proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={engageThumbsUp} alt="" style={{ width: '20px', height: '20px' }} />
                <img
                  src={engageRedHeart}
                  alt=""
                  style={{ width: '20px', height: '20px', marginLeft: '2px' }}
                />
                <img
                  src={engageClapping}
                  alt=""
                  style={{ width: '20px', height: '20px', marginLeft: '2px' }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'Segoe UI, sans-serif',
                  fontSize: '12px',
                  color: '#605e5c',
                }}
              >
                Sarah, Miguel and 125 others
              </span>
            </div>
          </div>

          {/* Reply Publisher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 28px',
              borderTop: '1px solid #e0e0e0',
            }}
          >
            <img
              src={engagePersona}
              alt=""
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                flex: 1,
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                backgroundColor: '#faf9f8',
                borderRadius: '4px',
                border: '1px solid #e1dfdd',
              }}
            >
              <span
                style={{
                  fontFamily: 'Segoe UI, sans-serif',
                  fontSize: '14px',
                  color: '#a19f9d',
                }}
              >
                Add a comment...
              </span>
              <img
                src={engageCTA}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
