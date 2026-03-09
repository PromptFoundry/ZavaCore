import { Dismiss20Regular, ChevronLeft20Regular, ChevronRight20Regular } from '@fluentui/react-icons';
import imgPreview from '../assets/images/PowerPoint image.png';

const seg = { fontFamily: '"Segoe UI", -apple-system, sans-serif' } as React.CSSProperties;

const slides = [
  { num: 1, src: 'https://www.figma.com/api/mcp/asset/b7d24c6b-1a5f-4786-bfd4-39b0ce6f7713', selected: true },
  { num: 2, src: 'https://www.figma.com/api/mcp/asset/d519e6be-9246-4942-b963-4bcd08a80e64', badge: true },
  { num: 3, src: 'https://www.figma.com/api/mcp/asset/a2b28fb0-c1cc-4ccb-bae3-b3c9cc552714', badge: true },
  { num: 4, src: 'https://www.figma.com/api/mcp/asset/cfbe2002-c63f-47af-b2fc-4d200f54737b' },
  { num: 5, src: 'https://www.figma.com/api/mcp/asset/9fe7eb08-eec9-4e7e-b0b8-f7a1252b58ad' },
  { num: 6, src: 'https://www.figma.com/api/mcp/asset/e09f13b8-b4a6-4cef-9700-bdca485d0968' },
  { num: 7, src: 'https://www.figma.com/api/mcp/asset/7ce24704-1c12-43df-8693-4d4cb971d230' },
];

interface RightPanelProps {
  isOpen: boolean;
  onClose: () => void;
  entityTitle?: string;
  entityType?: string;
}

export default function RightPanel({
  isOpen,
  onClose,
}: RightPanelProps) {
  return (
    <div
      className={`h-screen flex-shrink-0 flex flex-col overflow-hidden bg-white transition-[width] duration-300 ease-in-out border-l border-[#e0e0e0] ${
        isOpen ? 'w-[48vw] lg:w-[55vw] xl:w-[62vw]' : 'w-0'
      }`}
      style={{ boxShadow: isOpen ? '-2px 0 8px rgba(0,0,0,0.08)' : 'none' }}
    >
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 20px', backgroundColor: 'white', flexShrink: 0,
        backdropFilter: 'blur(30px)', minWidth: 300,
      }}>
        {/* Left: icon + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, flex: 1 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, backgroundColor: '#f5f5f5',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <img src="/assets/icons/PowerPoint.svg" alt="PowerPoint" style={{ width: 24, height: 24 }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424', margin: 0, lineHeight: '22px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Summit Center Project Plan
            </p>
            <p style={{ ...seg, fontSize: 12, color: '#616161', margin: 0, lineHeight: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Daichi Fukuda's Files | Aadi modified on Tuesday
            </p>
          </div>
        </div>

        {/* Right: actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, marginLeft: 16 }}>
          <button style={{
            ...seg, display: 'flex', alignItems: 'center', gap: 4,
            padding: '5px 12px', border: '1px solid #d1d1d1', borderRadius: 4,
            background: 'white', cursor: 'pointer', fontSize: 14, color: '#242424', fontWeight: 600,
          }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'white')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <path d="M9 2H13.5C13.7761 2 14 2.22386 14 2.5V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V9" stroke="#242424" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M6 2H2.5C2.22386 2 2 2.22386 2 2.5V6" stroke="#242424" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M9 7L14 2" stroke="#242424" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M9 2H14V7" stroke="#242424" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Open in PowerPoint
          </button>
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: 'none', borderRadius: 8, background: 'transparent', cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            aria-label="Close"
          >
            <Dismiss20Regular style={{ width: 20, height: 20, color: '#242424' }} />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '8px 24px 24px', display: 'flex', flexDirection: 'column', gap: 40, justifyContent: 'center' }}>

        {/* Large slide preview */}
        <div style={{
          position: 'relative', borderRadius: 12,
          border: '1px solid #f2f2f2', overflow: 'hidden',
          width: '100%', aspectRatio: '16/9',
          flexShrink: 0,
        }}>
          <img src={imgPreview} alt="Slide preview" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

          {/* Navigation controls — bottom right */}
          <div style={{
            position: 'absolute', bottom: 16, right: 16,
            backgroundColor: 'white', borderRadius: 8,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.12), 0px 4px 8px rgba(0,0,0,0.14)',
            display: 'flex', alignItems: 'center', padding: 2,
          }}>
            <button style={{
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: 'none', borderRadius: 8, background: 'transparent', cursor: 'pointer',
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ChevronLeft20Regular style={{ width: 16, height: 16, color: '#242424' }} />
            </button>
            <span style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#242424', padding: '0 4px', minWidth: 36, textAlign: 'center' }}>
              1/16
            </span>
            <button style={{
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: 'none', borderRadius: 8, background: 'transparent', cursor: 'pointer',
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ChevronRight20Regular style={{ width: 16, height: 16, color: '#242424' }} />
            </button>
          </div>
        </div>

        {/* Slide strip */}
        <div style={{ overflowX: 'auto', flexShrink: 0, paddingBottom: 4 }}>
          <div style={{ display: 'flex', gap: 19, alignItems: 'flex-start' }}>
            {slides.map(slide => (
              <div key={slide.num} style={{ display: 'flex', flexDirection: 'column', gap: 4, flexShrink: 0, position: 'relative' }}>
                <span style={{ ...seg, fontSize: 9, color: '#666', lineHeight: '12px' }}>{slide.num}</span>
                <div style={{
                  width: 164, height: 92, borderRadius: 2, overflow: 'hidden', position: 'relative',
                  border: slide.selected ? '1.2px solid #464feb' : 'none',
                  cursor: 'pointer',
                }}>
                  <img src={slide.src} alt={`Slide ${slide.num}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {/* Play badge */}
                  {slide.badge && (
                    <div style={{
                      position: 'absolute', top: 2, right: 2,
                      backgroundColor: '#f5f5f5', border: '0.6px solid #e0e0e0',
                      borderRadius: 3, width: 18, height: 13,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1,
                    }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M2 1.5L6.5 4L2 6.5V1.5Z" fill="#424242" />
                      </svg>
                      <span style={{ ...seg, fontSize: 6, fontWeight: 600, color: '#424242' }}>1</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
