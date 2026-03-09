import React from 'react';
import foodIcon from '../assets/icons/Food.svg';
import shiftsIcon from '../assets/icons/Shifts Activity.svg';
import chatQuestionIcon from '../assets/icons/Chat Bubbles Question.svg';
import rocketIcon from '../assets/icons/Rocket.svg';
import savingsIcon from '../assets/icons/Savings.svg';
import premiumIcon from '../assets/icons/Premium.svg';

const segoe: React.CSSProperties = { fontFamily: '"Segoe UI", sans-serif' };
const shadow = '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)';
const iconGradient = 'linear-gradient(135deg, #4750eb 0%, #6b54f0 35%, #8f58f5 65%, #d660ff 100%)';

const actions = [
  { icon: foodIcon,         title: 'Order Lunch',         description: 'Find and order your favorite meal from the café in seconds.' },
  { icon: shiftsIcon,       title: 'Manage time',         description: 'Schedule time away and automatically update meetings and availability.' },
  { icon: chatQuestionIcon, title: 'Ask a question',      description: 'Get quick answers about policies, tools, or company resources.' },
  { icon: rocketIcon,       title: 'Book a shuttle',      description: 'Reserve a campus shuttle and see upcoming routes and times.' },
  { icon: savingsIcon,      title: 'View recent paystub', description: 'Quickly access your latest paystub and payroll details.' },
  { icon: premiumIcon,      title: 'Navigate MyBenefits', description: 'Explore your benefits and understand what\'s available to you.' },
];

interface QuickActionsProps {
  onOrderLunch?: () => void;
  shimmerTarget?: string | null;
}

export default function QuickActions({ onOrderLunch, shimmerTarget }: QuickActionsProps) {
  const rows = [actions.slice(0, 3), actions.slice(3, 6)];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <h2 style={{ ...segoe, margin: 0, fontSize: '24px', fontWeight: 700, lineHeight: '32px', color: '#242424' }}>
        Quick actions
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="quick-actions-row">
            {row.map(({ icon, title, description }, i) => (
              <div
                key={i}
                onClick={title === 'Order Lunch' ? onOrderLunch : undefined}
                data-shimmer-id={title === 'Order Lunch' ? 'order-lunch' : undefined}
                className={title === 'Order Lunch' && shimmerTarget === 'order-lunch' ? 'zava-shimmer' : undefined}
                style={{
                  background: '#fff',
                  border: '0.5px solid #f0f0f0',
                  borderRadius: 12,
                  boxShadow: shadow,
                  padding: 24,
                  height: 140,
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  cursor: title === 'Order Lunch' ? 'pointer' : 'not-allowed',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#fafafa')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
              >
                {/* Icon + Title row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: iconGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <img src={icon} alt="" style={{ width: 24, height: 24 }} />
                  </div>
                  <span style={{ ...segoe, fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#424242', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {title}
                  </span>
                </div>

                {/* Description */}
                <p style={{ ...segoe, margin: 0, fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#424242' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
