import { useState } from 'react';
import {
  Home20Regular,
  Document20Regular,
  Settings20Regular,
} from '@fluentui/react-icons';
import { CheckBadgeIcon, ChatBubbleLeftIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import ChatInput from '../../../components/ChatInput';
import PromptStarter from '../../../components/PromptStarter';
import AnimatedLoader from '../../../components/AnimatedLoader';
import EntityCard from '../../../components/EntityCard';
import NewsHero from '../../../components/NewsHero';
import RecommendedSection from '../../../components/RecommendedSection';
import QuickActions from '../../../components/QuickActions';
import Navigation from '../Navigation';

export interface CatalystPanelProps {
  onDismiss?: () => void;
  onMoreOptions?: () => void;
  className?: string;
}

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

export default function CatalystPanel({
  onDismiss,
  onMoreOptions,
  className = '',
}: CatalystPanelProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedNavId, setSelectedNavId] = useState('home');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const hasConversation = messages.length > 0 || isLoading;

  const handleSubmitMessage = (content: string) => {
    setMessages(prev => [...prev, { type: 'user', content }]);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: 'Based on the information provided, I can help you understand the key details. The Summit Center project planning starts in Q2 2025, with an estimated timeline of 18 months for completion. Would you like me to provide more specific details about any particular aspect of the project?',
        },
      ]);
    }, 3000);
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

      {/* Navigation Overlay */}
      {isNavOpen && (
        <>
          <div
            onClick={() => setIsNavOpen(false)}
            style={{
              position: 'absolute', inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 40,
              animation: 'fadeIn 0.25s ease-in-out',
            }}
          />
          <div
            style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
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
                    { id: 'home', label: 'Home', icon: <Home20Regular />, onClick: () => setSelectedNavId('home') },
                    { id: 'docs', label: 'Documents', icon: <Document20Regular />, onClick: () => setSelectedNavId('docs') },
                    { id: 'settings', label: 'Settings', icon: <Settings20Regular />, onClick: () => setSelectedNavId('settings') },
                  ],
                },
              ]}
              selectedItemId={selectedNavId}
              onMobileClose={() => setIsNavOpen(false)}
              onCollapse={() => setIsNavOpen(false)}
              collapseIcon="/assets/icons/Left Panel.svg"
            />
          </div>
          <style>{`
            @keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }
            @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
          `}</style>
        </>
      )}

      {/* Header */}
      <div
        style={{
          height: '60px',
          padding: '8px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', flex: '1 0 0', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              onClick={() => setIsNavOpen(true)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <img src="/assets/icons/List.svg" alt="Menu" style={{ width: '20px', height: '20px' }} />
            </button>
            <button
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <img src="/assets/icons/Shield Task.svg" alt="" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flex: '1 0 0', gap: '8px', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button
            onClick={onMoreOptions}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <img src="/assets/icons/More Horizontal.svg" alt="More" style={{ width: '20px', height: '20px' }} />
          </button>
          <button
            onClick={onDismiss}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <img src="/assets/icons/Dismiss.svg" alt="Close" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          padding: hasConversation ? '0 32px 28px' : '0 32px 48px',
          ...(!hasConversation ? {
            backgroundImage: 'url("/assets/images/Zava agent background - gradient fade.png")',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
          } : {}),
        }}
      >
        {/* Agent top: branding + chat input + prompts */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '53px',
          }}
        >
          {/* Agent branding */}
          {!hasConversation && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingTop: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '48px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'white', border: '1px solid #f0f0f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/assets/images/ZavaCore_logo.svg" alt="ZavaCore" style={{ width: '24px', height: '24px' }} />
                </div>
                <h1 style={{ fontSize: '32px', lineHeight: '40px', fontWeight: 700, color: '#333333', margin: 0 }}>
                  ZavaCore Agent
                </h1>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: '#616161' }}>
                <span>Created by</span>
                <span style={{ fontWeight: 500 }}>ZavaCore</span>
                <CheckBadgeIcon style={{ width: '20px', height: '20px', color: '#16a34a' }} />
              </div>
            </div>
          )}

          {/* Chat input + conversation */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {!hasConversation && <ChatInput onSubmit={handleSubmitMessage} />}

            {/* Conversation */}
            {hasConversation && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 0' }}>
                  <span style={{ fontSize: '12px', color: '#707070' }}>Today</span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
                </div>


                {messages.map((msg, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                    {msg.type === 'user' ? (
                      <div style={{ backgroundColor: '#f5f5f5', borderRadius: '16px', padding: '12px 16px', maxWidth: '500px' }}>
                        <p style={{ margin: 0, fontSize: '16px', lineHeight: '24px', color: '#424242' }}>{msg.content}</p>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <img src="/assets/images/ZavaCore_logo.svg" alt="Copilot" style={{ width: '24px', height: '24px' }} />
                          <span style={{ fontWeight: 600, fontSize: '16px', color: '#616161' }}>Copilot</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '16px', lineHeight: '24px', color: '#808080' }}>{msg.content}</p>
                        <EntityCard title="Summit Center Project Plan" metadata="Modified 2 hours ago • Project Document" />
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '500px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img src="/assets/images/ZavaCore_logo.svg" alt="Copilot" style={{ width: '24px', height: '24px' }} />
                      <span style={{ fontWeight: 600, fontSize: '16px', color: '#616161' }}>Copilot</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '24px', color: '#808080' }}>Creating a day at a glance…</p>
                    <AnimatedLoader />
                  </div>
                )}
              </div>
            )}

            {/* Prompt starters */}
            {!hasConversation && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                  <PromptStarter size="large" icon={<ChatBubbleLeftIcon />} title="Plan my day" description="What should I prioritize based on my schedule?" footer="Your close connection" />
                  <PromptStarter size="large" icon={<ChatBubbleLeftIcon />} title="Take action" description="Find marketing documents that need my feedback" footer="Arrive prepared" />
                  <PromptStarter size="large" icon={<ChatBubbleLeftIcon />} title="Catch up" description="Highlight town hall updates relevant to my work" footer="Recently shared with you" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', fontSize: '14px', color: '#424242', background: 'none', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span>See more</span>
                    <ChevronDownIcon style={{ width: '12px', height: '12px' }} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Widget sections */}
        {!hasConversation && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div className="catalyst-news-hero">
              <NewsHero />
            </div>
            <div className="catalyst-recommended">
              <RecommendedSection />
            </div>
            <div className="catalyst-quick-actions">
              <QuickActions />
            </div>
          </div>
        )}
      </div>

      {/* Floating chat input — shown during conversation, sits below scroll area */}
      {hasConversation && (
        <div style={{ padding: '0 32px 20px', backgroundColor: '#ffffff' }}>
          <ChatInput onSubmit={handleSubmitMessage} />
        </div>
      )}
    </div>
  );
}
