import React from 'react';
import {
  ShieldLock16Regular,
  ArrowMaximize20Regular,
  ArrowMinimize20Regular,
} from '@fluentui/react-icons';
import imgPowerPointPreview from '../assets/images/PowerPoint image.png';

const seg = { fontFamily: '"Segoe UI", -apple-system, sans-serif' } as React.CSSProperties;

interface EntityCardProps {
  icon?: React.ReactNode;
  iconBgColor?: string;
  title?: string;
  metadata?: string;
  condensed?: boolean;
  onPrimaryAction?: () => void;
}

export default function EntityCard({
  icon,
  iconBgColor = '#f5f5f5',
  title = 'Entity title',
  metadata = 'Additional metadata',
  condensed = false,
  onPrimaryAction,
}: EntityCardProps) {
  return (
    <div style={{
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: 24,
      overflow: 'hidden',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {/* Header row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '16px 24px',
      }}>
        {/* Icon */}
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          backgroundColor: iconBgColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {icon || <img src="/assets/icons/PowerPoint.svg" alt="PowerPoint" style={{ width: 24, height: 24 }} />}
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <p style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', lineHeight: '22px' }}>
              {title}
            </p>
            <ShieldLock16Regular style={{ width: 16, height: 16, color: '#616161', flexShrink: 0 }} />
          </div>
          <p style={{ ...seg, fontSize: 12, color: '#616161', margin: 0, lineHeight: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {metadata}
          </p>
        </div>

        {/* Expand / collapse action */}
        <button
          onClick={onPrimaryAction}
          style={{
            width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: 'none', borderRadius: 4, background: 'transparent', cursor: 'pointer',
            color: '#424242', flexShrink: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          aria-label={condensed ? 'Collapse' : 'Expand'}
        >
          {condensed
            ? <ArrowMinimize20Regular style={{ width: 20, height: 20 }} />
            : <ArrowMaximize20Regular style={{ width: 20, height: 20 }} />
          }
        </button>
      </div>

      {/* Slide preview — hidden when condensed */}
      {!condensed && (
        <div style={{ margin: '0 12px 12px', borderRadius: 16, border: '1px solid #d1d1d1', overflow: 'hidden', height: 324, position: 'relative' }}>
          <img src={imgPowerPointPreview} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />

          {/* Slide navigation pill */}
          <div style={{
            position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.4)', borderRadius: 30, padding: '6px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ color: 'white', fontSize: 14, lineHeight: 1 }}>‹</span>
            <span style={{ ...seg, color: 'white', fontSize: 13, fontWeight: 600 }}>1 / 12</span>
            <span style={{ color: 'white', fontSize: 14, lineHeight: 1 }}>›</span>
          </div>
        </div>
      )}
    </div>
  );
}
