import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import ChatInput from './ChatInput';
import LeftNav from './LeftNav';
import Header from './Header';
import QuickActions from './QuickActions';
import AnimatedLoader from './AnimatedLoader';
import EntityCard from './EntityCard';
import RightPanel from './RightPanel';
import PromptStarter from './PromptStarter';
import NewsHero from './NewsHero';
import RecommendedSection from './RecommendedSection';
import RecentActivitySection from './RecentActivitySection';
import EngageResponse from './EngageResponse';


interface Message {
  type: 'user' | 'assistant';
  content: string;
}

export default function Layout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showEngageResponse, setShowEngageResponse] = useState(false);
  const [isEngageLoading, setIsEngageLoading] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  const handleSubmitMessage = (content: string) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content }]);
    setIsLoading(true);

    // Simulate assistant response after delay
    setTimeout(() => {
      setIsLoading(false);
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: 'Based on the information provided, I can help you understand the key details. The Summit Center project planning starts in Q2 2025, with an estimated timeline of 18 months for completion. Would you like me to provide more specific details about any particular aspect of the project?'
        }
      ]);
    }, 3000);
  };

  const handleReset = () => {
    setMessages([]);
    setIsLoading(false);
    setIsPanelOpen(false);
    setShowEngageResponse(false);
    setIsEngageLoading(false);
  };

  const handleEngageSummarize = () => {
    setIsEngageLoading(true);
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsEngageLoading(false);
      setShowEngageResponse(true);
    }, 2000);
  };

  const handleEntityCardClick = () => {
    setIsPanelOpen(true);
  };

  const handlePanelClose = () => {
    setIsPanelOpen(false);
  };

  const hasConversation = messages.length > 0 || isLoading || isEngageLoading || showEngageResponse;


  return (
    <div className="min-h-screen bg-[#fcfcfc] flex">
      {/* Mobile Nav Backdrop */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}

      {/* Left Navigation */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 h-screen shrink-0
          transform transition-transform duration-300 ease-in-out
          ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <LeftNav
          onMobileItemClick={() => setIsMobileNavOpen(false)}
          onMobileClose={() => setIsMobileNavOpen(false)}
        />
      </aside>

      {/* Right side with Header and Content */}
      <div className={`flex-1 flex flex-col h-screen transition-all duration-300 ${isPanelOpen ? 'hidden md:block md:mr-[600px] lg:mr-[800px] xl:mr-[956px]' : 'mr-0'}`}>
        <Header
          onToggleNav={toggleMobileNav}
          isNavOpen={isMobileNavOpen}
          onReset={handleReset}
        />

        {/* Main Content */}
        <main
          ref={mainRef}
          className="flex-1 overflow-auto py-8 md:py-16 lg:py-[126px] px-4 md:px-6 lg:px-8 relative bg-white flex flex-col gap-8"
          style={!hasConversation ? {
            backgroundImage: 'url("/assets/images/Zava agent background - gradient.png")',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto'
          } : {}}
        >
          {/* Agent Top */}
          <div data-name="agent-top" className="w-full max-w-[790px] mx-auto flex flex-col items-center gap-8 md:gap-12 lg:gap-[53px]">
            {/* Agent Header */}
            {!hasConversation && (
              <div className="w-full flex flex-col items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-2 h-10 md:h-12">
                    {/* Agent Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white border border-[#f0f0f0] rounded-xl md:rounded-2xl flex items-center justify-center">
                      <img
                        src="/assets/images/ZavaCore_logo.svg"
                        alt="ZavaCore"
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </div>
                    {/* Agent Name */}
                    <h1 className="text-2xl md:text-3xl lg:text-[32px] leading-8 md:leading-10 lg:leading-[40px] font-bold text-[#333333]">
                      ZavaCore Agent
                    </h1>
                  </div>
                  {/* Authorship */}
                  <div className="flex items-center gap-1 text-xs md:text-sm text-[#616161]">
                    <span>Created by</span>
                    <span className="font-medium">ZavaCore</span>
                    <CheckBadgeIcon className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="w-full flex flex-col gap-6 md:gap-8">
              {!hasConversation && <ChatInput onSubmit={handleSubmitMessage} />}

              {/* Conversation View */}
              {hasConversation && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-2.5 py-1">
                    <span className="text-xs text-[#707070]">Today</span>
                    <div className="flex-1 h-px bg-[#e0e0e0]" />
                  </div>

                  {/* Engage response flow */}
                  {(isEngageLoading || showEngageResponse) && (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end">
                        <div className="bg-[#f5f5f5] rounded-2xl px-4 py-3 max-w-[590px]">
                          <p className="text-base leading-6 text-[#424242]">Summarize all activity</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6">
                            <img src="/assets/images/ZavaCore_logo.svg" alt="Copilot" className="w-full h-full" />
                          </div>
                          <span className="font-semibold text-base text-[#616161]">Copilot</span>
                        </div>
                        {isEngageLoading ? (
                          <>
                            <p className="text-base leading-6 text-[#808080]">Summarizing Engage activity…</p>
                            <AnimatedLoader />
                          </>
                        ) : (
                          <EngageResponse />
                        )}
                      </div>
                    </div>
                  )}

                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.type === 'user' ? (
                        <div className="bg-[#f5f5f5] rounded-2xl px-4 py-3 max-w-[590px]">
                          <p className="text-base leading-6 text-[#424242]">{msg.content}</p>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4 max-w-[590px]">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6">
                              <img src="/assets/images/ZavaCore_logo.svg" alt="Copilot" className="w-full h-full" />
                            </div>
                            <span className="font-semibold text-base text-[#616161]">Copilot</span>
                          </div>
                          <p className="text-base leading-6 text-[#808080]">{msg.content}</p>
                          <div onClick={handleEntityCardClick} className="cursor-pointer">
                            <EntityCard title="Summit Center Project Plan" metadata="Modified 2 hours ago • Project Document" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex flex-col gap-2 max-w-[590px]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6">
                          <img src="/assets/images/ZavaCore_logo.svg" alt="Copilot" className="w-full h-full" />
                        </div>
                        <span className="font-semibold text-base text-[#616161]">Copilot</span>
                      </div>
                      <p className="text-base leading-6 text-[#808080]">Creating a day at a glance…</p>
                      <AnimatedLoader />
                    </div>
                  )}
                </div>
              )}

              {/* Prompt Starters */}
              {!hasConversation && (
                <div className="flex flex-col gap-4 md:gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <PromptStarter size="large" icon={<ChatBubbleLeftIcon />} title="Plan my day" description="What should I prioritize based on my schedule?" footer="Your close connection" />
                    <PromptStarter size="large" icon={<ChatBubbleLeftIcon />} title="Take action" description="Find marketing documents that need my feedback" footer="Arrive prepared" />
                    <PromptStarter size="large" icon={<ChatBubbleLeftIcon />} title="Catch up" description="Highlight town hall updates relevant to my work" footer="Recently shared with you" />
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center gap-1 px-3 py-1.5 text-xs md:text-sm text-[#424242] hover:bg-gray-50 rounded-md transition-colors">
                      <span>See more</span>
                      <ChevronDownIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Widget Container */}
          {!hasConversation && (
            <div data-name="widget-container" className="w-full max-w-[1200px] mx-auto flex flex-col gap-12">
              <div data-name="news-hero"><NewsHero /></div>
              <div data-name="recommended"><RecommendedSection /></div>
              <div data-name="quick-actions"><QuickActions /></div>
              <div data-name="recent-activity"><RecentActivitySection onEngageClick={handleEngageSummarize} /></div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile backdrop for panel */}
      {isPanelOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={handlePanelClose}
        />
      )}

      {/* Right Panel */}
      <RightPanel
        isOpen={isPanelOpen}
        onClose={handlePanelClose}
        entityTitle="Summit Center Project Plan"
        entityType="Document"
      />

    </div>
  );
}
