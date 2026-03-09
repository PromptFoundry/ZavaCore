import React, { useEffect, useRef, useState } from 'react';
import { CheckmarkCircle16Filled } from '@fluentui/react-icons';

const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };

const imgLineActive  = 'https://www.figma.com/api/mcp/asset/649dbc72-4950-4190-a5f2-cca803d8721a';
const imgLinePending = 'https://www.figma.com/api/mcp/asset/18216b3e-393d-4f5d-9540-bf03bdb417c2';
const imgSpinner     = 'https://www.figma.com/api/mcp/asset/916bdfa0-fca9-40f9-ab66-1249ce36bda6';

const STEP_LABELS = ['Ordered', 'Preparing', 'Cooking', 'Ready to go!'];
const STEP_INTERVAL = 1200; // ms between each step advance
const FADE_OUT_DELAY = 1800; // ms after reaching last step before fading out
const FADE_DURATION = 500;   // ms for fade + collapse transition

interface OrderTrackerProps {
  dish: string;
  emoji: string;
  onDismiss: () => void;
}

export default function OrderTracker({ dish, emoji, onDismiss }: OrderTrackerProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  // activeStep = number of steps completed (1 = Ordered done, 4 = all done)
  const [activeStep, setActiveStep] = useState(1);
  // Stable order number — generated once on mount
  const orderNum = useRef(Math.floor(10000000 + Math.random() * 90000000)).current;

  // Slide-in on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Cycle through steps, then fade + collapse after a short delay
  useEffect(() => {
    if (activeStep < STEP_LABELS.length) {
      const timer = setTimeout(() => setActiveStep(s => s + 1), STEP_INTERVAL);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDismissed(true);
        setTimeout(onDismiss, FADE_DURATION);
      }, FADE_OUT_DELAY);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div style={{
      opacity: dismissed ? 0 : visible ? 1 : 0,
      maxHeight: dismissed ? 0 : 120,
      overflow: 'hidden',
      transition: dismissed
        ? `opacity ${FADE_DURATION}ms ease, max-height ${FADE_DURATION}ms ease`
        : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease',
      transform: visible && !dismissed ? 'translateY(0)' : dismissed ? 'translateY(0)' : 'translateY(-100%)',
    }}>
      <div style={{
        backgroundColor: '#feffff',
        border: '1px solid #e0e0e0',
        borderRadius: 12,
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        width: '100%',
        boxSizing: 'border-box',
      }}>

        {/* Left — emoji + dish name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36, backgroundColor: '#f5f5f5', borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            fontSize: 20,
          }}>
            {emoji}
          </div>
          <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#424242', whiteSpace: 'nowrap' }}>
            {dish}
          </span>
        </div>

        {/* Center — status tracker */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {STEP_LABELS.map((label, i) => {
            const done = i < activeStep;
            const isLast = i === STEP_LABELS.length - 1;
            return (
              <React.Fragment key={label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                  {done ? (
                    <CheckmarkCircle16Filled style={{ width: 16, height: 16, color: '#107C10', flexShrink: 0 }} />
                  ) : (
                    <img src={imgSpinner} alt="" style={{ width: 12, height: 12, flexShrink: 0 }} />
                  )}
                  <span style={{
                    ...seg, fontSize: 14, lineHeight: '20px', whiteSpace: 'nowrap',
                    color: done ? '#107C10' : '#616161',
                    fontWeight: done ? 600 : 400,
                    transition: 'color 0.3s ease, font-weight 0.3s ease',
                  }}>
                    {label}
                  </span>
                </div>
                {!isLast && (
                  <img
                    src={done ? imgLineActive : imgLinePending}
                    alt=""
                    style={{ width: 41, height: 17, flexShrink: 0, transition: 'opacity 0.3s ease' }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right — date + order info */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0,
          border: '1px solid #dbdbdb', borderRadius: 12, padding: '8px 16px',
        }}>
          <span style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#484644', whiteSpace: 'nowrap' }}>
            {dateStr}&nbsp;&nbsp;·&nbsp;&nbsp;Order #{orderNum.toString()}
          </span>
          <span style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#0f6cbd', cursor: 'default', whiteSpace: 'nowrap' }}>
            View Details
          </span>
        </div>

      </div>
    </div>
  );
}
