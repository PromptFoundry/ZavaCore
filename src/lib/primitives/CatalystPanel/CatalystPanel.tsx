import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  Add20Regular,
  Options20Regular,
  Briefcase20Regular,
  Mic20Regular,
  DeviceEq20Regular,
  Home20Regular,
  Document20Regular,
  Settings20Regular,
} from '@fluentui/react-icons';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import PromptStarter from '../../../components/PromptStarter';
import Navigation from '../Navigation';
import WidgetContainer from '../../../components/WidgetContainer';

export interface PromptStarter {
  id: string;
  text: string;
  onClick?: () => void;
}

export interface WidgetCard {
  id: string;
  title: string;
  content: ReactNode;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export interface CatalystPanelProps {
  /** Title displayed in header */
  title?: string;
  /** Handler for new chat button */
  onNewChat?: () => void;
  /** Handler for dismiss/close button */
  onDismiss?: () => void;
  /** Handler for more options button */
  onMoreOptions?: () => void;
  /** Prompt starter cards */
  promptStarters?: PromptStarter[];
  /** Widget cards to display at bottom */
  widgets?: WidgetCard[];
  /** Chat input change handler */
  onChatInputChange?: (value: string) => void;
  /** Chat submit handler */
  onChatSubmit?: (message: string) => void;
  /** Custom className */
  className?: string;
}

/**
 * CatalystPanel - Side panel with chat interface
 *
 * A side panel component featuring the ZavaCore Agent chat interface with prompt starters and widgets.
 *
 * @example
 * ```tsx
 * <CatalystPanel
 *   title="Chat"
 *   promptStarters={[
 *     { id: '1', text: 'What should I prioritize based on my schedule?' },
 *     { id: '2', text: 'Find marketing documents that need my feedback' }
 *   ]}
 *   widgets={[
 *     { id: '1', title: 'Card title', content: 'Content area', buttonLabel: 'Button' }
 *   ]}
 * />
 * ```
 */
export default function CatalystPanel({
  title: _title = 'Chat',
  onNewChat: _onNewChat,
  onDismiss,
  onMoreOptions,
  promptStarters = [
    { id: '1', text: 'What should I prioritize based on my schedule?' },
    { id: '2', text: 'Find marketing documents that need my feedback' },
    { id: '3', text: 'Highlight town hall updates relevant to my work' },
  ],
  widgets: _widgets = [],
  onChatInputChange,
  onChatSubmit,
  className = '',
}: CatalystPanelProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedNavId, setSelectedNavId] = useState('home');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('chat-input') as HTMLInputElement;
    if (input.value.trim()) {
      onChatSubmit?.(input.value);
      input.value = '';
    }
  };

  return (
    <div
      className={className}
      style={{
        width: '720px',
        height: '100%',
        backgroundColor: '#ffffff',
        borderLeft: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Blue gradient background */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '335px',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <img
          src="/assets/images/Zava agent background - blue.png"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Navigation Overlay */}
      {isNavOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsNavOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 40,
              animation: 'fadeIn 0.25s ease-in-out',
            }}
          />

          {/* Navigation Panel */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '280px',
              backgroundColor: '#ffffff',
              zIndex: 50,
              boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
              animation: 'slideIn 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
            }}
          >
            <Navigation
              branding={{ logo: '/assets/images/ZavaCore_logo.svg', name: 'ZavaCore' }}
              sections={[
                {
                  items: [
                    {
                      id: 'home',
                      label: 'Home',
                      icon: <Home20Regular />,
                      onClick: () => setSelectedNavId('home')
                    },
                    {
                      id: 'docs',
                      label: 'Documents',
                      icon: <Document20Regular />,
                      onClick: () => setSelectedNavId('docs')
                    },
                    {
                      id: 'settings',
                      label: 'Settings',
                      icon: <Settings20Regular />,
                      onClick: () => setSelectedNavId('settings')
                    },
                  ],
                },
              ]}
              selectedItemId={selectedNavId}
              onMobileClose={() => setIsNavOpen(false)}
              onCollapse={() => setIsNavOpen(false)}
              collapseIcon="/assets/icons/Left Panel.svg"
            />
          </div>

          {/* CSS Animations */}
          <style>{`
            @keyframes slideIn {
              from {
                transform: translateX(-100%);
              }
              to {
                transform: translateX(0);
              }
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
        </>
      )}

      {/* Header */}
      <div
        className="header"
        style={{
          height: '60px',
          padding: '8px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left Nav - Menu and Shield Task */}
        <div style={{ display: 'flex', flex: '1 0 0', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {/* List Menu Button */}
            <button
              onClick={() => setIsNavOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <img src="/assets/icons/List.svg" alt="Menu" style={{ width: '20px', height: '20px' }} />
            </button>

            {/* Shield Task Button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <img src="/assets/icons/Shield Task.svg" alt="" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>

        {/* Center Nav - Empty */}
        <div style={{ display: 'flex', flex: '1 0 0', gap: '10px', height: '60px', alignItems: 'center', justifyContent: 'center', padding: '10px' }} />

        {/* Right Nav - Actions */}
        <div style={{ display: 'flex', flex: '1 0 0', gap: '8px', alignItems: 'center', justifyContent: 'flex-end' }}>
          {/* Generic Buttons */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {/* More Options */}
            <button
              onClick={onMoreOptions}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <img src="/assets/icons/More Horizontal.svg" alt="More" style={{ width: '20px', height: '20px' }} />
            </button>

            {/* Dismiss */}
            <button
              onClick={onDismiss}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <img src="/assets/icons/Dismiss.svg" alt="Close" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '24px',
          position: 'relative',
        }}
      >
        {/* ZavaCore Agent Branding */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Icon and Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '48px' }}>
            {/* Agent Icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'white',
                border: '1px solid #f0f0f0',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/images/ZavaCore_logo.svg"
                alt="ZavaCore"
                style={{ width: '24px', height: '24px' }}
              />
            </div>

            {/* Agent Name */}
            <h1
              style={{
                fontSize: '32px',
                lineHeight: '40px',
                fontWeight: 700,
                color: '#333333',
                margin: 0,
              }}
            >
              ZavaCore Agent
            </h1>
          </div>

          {/* Authorship */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '14px',
              color: '#616161',
            }}
          >
            <span>Created by</span>
            <span style={{ fontWeight: 500 }}>ZavaCore</span>
            <CheckBadgeIcon style={{ width: '20px', height: '20px', color: '#16a34a' }} />
          </div>
        </div>

        {/* Chat Input - Using same styling as main app composer */}
        <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
          <div className="chat-input flex flex-col gap-0 items-center rounded-[32px] w-full h-full">
            {/* Container with gradient border */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                padding: '1px',
                borderRadius: '28px',
                background: 'linear-gradient(to bottom, #f0f0f0, #e8e8e8, #d4d4d4)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 10px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* Container */}
              <div
                style={{
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0 12px',
                  borderRadius: '28px',
                  width: '100%',
                }}
              >
                {/* Textarea */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    paddingBottom: '12px',
                    paddingTop: '16px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    width: '100%',
                  }}
                >
                  <textarea
                    name="chat-input"
                    placeholder="Ask me anything"
                    onChange={(e) => onChatInputChange?.(e.target.value)}
                    style={{
                      width: '100%',
                      fontFamily: '"Segoe UI", sans-serif',
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#707070',
                      resize: 'none',
                      outline: 'none',
                      border: 'none',
                      backgroundColor: 'transparent',
                    }}
                    rows={1}
                  />
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    paddingBottom: '10px',
                    paddingTop: '6px',
                    width: '100%',
                  }}
                >
                  {/* Utility controls (left side) */}
                  <div style={{ display: 'flex', gap: '8px', height: '40px', alignItems: 'center' }}>
                    {/* Add Button */}
                    <button
                      type="button"
                      style={{
                        padding: '8px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      aria-label="Add attachment"
                    >
                      <Add20Regular className="w-5 h-5 text-[#424242]" />
                    </button>

                    {/* Tools Button */}
                    <button
                      type="button"
                      style={{
                        display: 'flex',
                        gap: '6px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px 12px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <Options20Regular className="w-5 h-5 text-[#424242]" />
                      <span
                        style={{
                          fontFamily: '"Segoe UI", sans-serif',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '20px',
                          color: '#424242',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Tools
                      </span>
                    </button>

                    {/* Sources Button */}
                    <button
                      type="button"
                      style={{
                        display: 'flex',
                        gap: '6px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px 12px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <Briefcase20Regular className="w-5 h-5 text-[#424242]" />
                      <span
                        style={{
                          fontFamily: '"Segoe UI", sans-serif',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '20px',
                          color: '#424242',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Sources
                      </span>
                    </button>
                  </div>

                  {/* Voice controls (right side) */}
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Dictate Button */}
                    <button
                      type="button"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        border: 'none',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      aria-label="Voice input"
                    >
                      <Mic20Regular className="w-5 h-5 text-[#424242]" />
                    </button>

                    {/* Device EQ Button */}
                    <button
                      type="button"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        border: 'none',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      aria-label="Audio settings"
                    >
                      <DeviceEq20Regular className="w-5 h-5 text-[#424242]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Prompt Starters */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {promptStarters.map((prompt) => (
            <PromptStarter
              key={prompt.id}
              size="small"
              description={prompt.text}
              onClick={prompt.onClick}
            />
          ))}
        </div>

        {/* Widgets - 1 left (tall), 2 stacked right */}
        <div
          style={{
            display: 'flex',
            gap: '21px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left side - 1 tall widget */}
          <div style={{ flex: 1 }} data-column="left">
            <WidgetContainer
              title="Card title"
              headerActions={
                <button
                  className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                  aria-label="Settings"
                >
                  <Settings20Regular className="w-5 h-5 text-[#424242]" />
                </button>
              }
              footerActions={[
                {
                  id: 'action1',
                  label: 'Button',
                },
              ]}
              className="h-full"
            />
          </div>

          {/* Right side - 2 widgets stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', flex: 1 }} data-column="right">
            <div style={{ height: '175px' }}>
              <WidgetContainer
                title="Card title"
                headerActions={
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                    aria-label="Settings"
                  >
                    <Settings20Regular className="w-5 h-5 text-[#424242]" />
                  </button>
                }
                footerActions={[
                  {
                    id: 'action2',
                    label: 'Button',
                  },
                ]}
                className="h-full"
                contentBorderRadius="8px"
              />
            </div>
            <div style={{ height: '175px' }}>
              <WidgetContainer
                title="Card title"
                headerActions={
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                    aria-label="Settings"
                  >
                    <Settings20Regular className="w-5 h-5 text-[#424242]" />
                  </button>
                }
                footerActions={[
                  {
                    id: 'action3',
                    label: 'Button',
                  },
                ]}
                className="h-full"
                contentBorderRadius="8px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
