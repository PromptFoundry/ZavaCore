import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import {
  Replay16Regular,
  Share16Regular,
  MoreHorizontal16Regular,
} from '@fluentui/react-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatInput from './ChatInput';
import LeftNav from './LeftNav';
import Header from './Header';
import EngageWidget from './EngageWidget';
import CoworkerCard from './CoworkerCard';
import ActivityCard from './ActivityCard';
import QuickActions from './QuickActions';
import BenefitsWidget from './BenefitsWidget';
import LearningWidget from './LearningWidget';
import AnimatedLoader from './AnimatedLoader';
import EntityCard from './EntityCard';
import RightPanel from './RightPanel';
import PromptStarter from './PromptStarter';

// Slide data with placeholder gradients
const slides = [
  {
    id: 1,
    background: 'url(/assets/images/hero-card-background.png)',
    title: "Carole, here's your daily update",
    subtitle: "Zava highlights, personalized for you"
  },
  {
    id: 2,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    title: "Your meetings for today",
    subtitle: "3 meetings scheduled"
  },
  {
    id: 3,
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    title: "Team updates",
    subtitle: "New messages from your team"
  },
  {
    id: 4,
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    title: "Tasks overview",
    subtitle: "5 tasks need your attention"
  },
  {
    id: 5,
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    title: "Weekly summary",
    subtitle: "Your productivity this week"
  }
];

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

export default function Layout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

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
  };

  const handleEntityCardClick = () => {
    setIsPanelOpen(true);
  };

  const handlePanelClose = () => {
    setIsPanelOpen(false);
  };

  const hasConversation = messages.length > 0 || isLoading;

  // Manual slide selection
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

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
          className="flex-1 overflow-auto py-8 md:py-16 lg:py-[126px] px-4 md:px-6 lg:px-8 relative bg-white"
          style={!hasConversation ? {
            backgroundImage: 'url("/assets/images/Zava agent background - blue.png")',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto'
          } : {}}
        >
          <div className="w-full max-w-[790px] mx-auto flex flex-col gap-4 md:gap-6 lg:gap-7">
            {/* Agent Composer */}
            <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[53px]">
              {/* Agent Header */}
              {!hasConversation && (
                <div className="w-full max-w-[784px] flex flex-col items-center gap-4 md:gap-6">
                  {/* Icon and Name */}
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

              {/* Chat Input and Prompt Starters */}
              <div className="w-full flex flex-col gap-6 md:gap-8">
                {/* Chat Input */}
                {!hasConversation && <ChatInput onSubmit={handleSubmitMessage} />}

                {/* Conversation View */}
                {hasConversation && (
                  <div className="flex flex-col gap-8">
                    {/* Timestamp */}
                    <div className="flex items-center gap-2.5 py-1">
                      <span className="text-xs text-[#707070]">Today</span>
                      <div className="flex-1 h-px bg-[#e0e0e0]" />
                    </div>

                    {/* Messages */}
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
                                <img
                                  src="/assets/images/ZavaCore_logo.svg"
                                  alt="Copilot"
                                  className="w-full h-full"
                                />
                              </div>
                              <span className="font-semibold text-base text-[#616161]">Copilot</span>
                            </div>
                            <p className="text-base leading-6 text-[#808080]">{msg.content}</p>
                            <div onClick={handleEntityCardClick} className="cursor-pointer">
                              <EntityCard
                                title="Summit Center Project Plan"
                                metadata="Modified 2 hours ago • Project Document"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Loading State */}
                    {isLoading && (
                      <div className="flex flex-col gap-2 max-w-[590px]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6">
                            <img
                              src="/assets/images/ZavaCore_logo.svg"
                              alt="Copilot"
                              className="w-full h-full"
                            />
                          </div>
                          <span className="font-semibold text-base text-[#616161]">Copilot</span>
                        </div>
                        <p className="text-base leading-6 text-[#808080]">Creating a day at a glance…</p>
                        <AnimatedLoader />
                      </div>
                    )}
                  </div>
                )}

                {/* Initial View */}
                {!hasConversation && (
                  <>
                    {/* Prompt Starters */}
                    <div className="flex flex-col gap-4 md:gap-5">
                  {/* Cards Grid - 1 col on mobile, 2 cols on sm, 3 cols on md+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <PromptStarter
                      size="large"
                      icon={<ChatBubbleLeftIcon />}
                      title="Plan my day"
                      description="What should I prioritize based on my schedule?"
                      footer="Your close connection"
                    />

                    <PromptStarter
                      size="large"
                      icon={<ChatBubbleLeftIcon />}
                      title="Take action"
                      description="Find marketing documents that need my feedback"
                      footer="Arrive prepared"
                    />

                    <PromptStarter
                      size="large"
                      icon={<ChatBubbleLeftIcon />}
                      title="Catch up"
                      description="Highlight town hall updates relevant to my work"
                      footer="Recently shared with you"
                    />
                  </div>

                  {/* See more button */}
                  <div className="flex justify-end">
                    <button className="flex items-center gap-1 px-3 py-1.5 text-xs md:text-sm text-[#424242] hover:bg-gray-50 rounded-md transition-colors">
                      <span>See more</span>
                      <ChevronDownIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* SVG Filter for liquid glass effect */}
                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <defs>
                <filter id="glass-distortion" x="-50%" y="-50%" width="200%" height="200%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.01 0.003" numOctaves="3" seed="2" />
                  <feDisplacementMap in="SourceGraphic" scale="20" />
                </filter>
              </defs>
            </svg>

            {/* Hero Container */}
            <div
              data-name="hero card"
              className="relative w-full h-[200px] md:h-[280px] lg:h-[368px] bg-white rounded-xl md:rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-500"
              style={{
                backgroundImage: currentSlideData.background,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Title Plate */}
              <div
                data-name="title-plate"
                className="absolute left-1/2 -translate-x-1/2 bottom-14 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:w-full max-w-[575px] rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Liquid glass effect layer */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backdropFilter: 'blur(3px)',
                    filter: 'url(#glass-distortion)',
                    overflow: 'hidden',
                    isolation: 'isolate'
                  }}
                />

                {/* Tint layer */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)'
                  }}
                />

                {/* Shine layer */}
                <div
                  className="absolute inset-0 z-[2] overflow-hidden"
                  style={{
                    boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)'
                  }}
                />

                {/* Content layer */}
                <div className="relative z-[3] flex items-center gap-2.5 px-5 py-4">
                  <div className="flex-1">
                    <h2 className="text-white text-2xl font-semibold leading-8 mb-0" style={{ textShadow: '0px 0px 8px rgba(0,0,0,0.2), 0px 14px 28px rgba(0,0,0,0.24), 0px 0px 4px rgba(0,0,0,0.9)' }}>
                      {currentSlideData.title}
                    </h2>
                    <p className="text-white text-xl leading-8" style={{ textShadow: '0px 0px 8px rgba(0,0,0,0.2), 0px 14px 28px rgba(0,0,0,0.24), 0px 0px 4px rgba(0,0,0,0.9)' }}>
                      {currentSlideData.subtitle}
                    </p>
                  </div>
                  <button className="flex items-center justify-center gap-1 px-3 py-2 bg-white text-black border border-[#D1D1D1] rounded-lg hover:bg-[#f5f5f5] transition-colors shrink-0">
                    <Replay16Regular className="w-4 h-4 text-black" />
                    <span className="text-[13px] font-semibold leading-5">Play highlights</span>
                  </button>
                </div>
              </div>

              {/* Pagination Indicators */}
              <div data-name="pagination" className="absolute left-1/2 -translate-x-1/2 bottom-7 flex items-center gap-[3px] w-[138px]">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-1 bg-white/30 rounded-[2px] overflow-hidden relative cursor-pointer"
                    onClick={() => goToSlide(index)}
                  >
                    {index < currentSlide ? (
                      // Completed slides - fully filled
                      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#f2bd3e] to-[#f96c28]" />
                    ) : index === currentSlide ? (
                      // Current slide - animating progress
                      <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#f2bd3e] to-[#f96c28]"
                        style={{ width: `${progress}%` }}
                      />
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-5 right-5 flex gap-1.5">
                <button className="w-7 h-7 flex items-center justify-center bg-[#f5f5f5] border border-[#ebebeb] rounded-lg hover:bg-[#e6e6e6] transition-colors">
                  <Share16Regular className="text-[#424242]" />
                </button>
                <button className="w-7 h-7 flex items-center justify-center bg-[#f5f5f5] border border-[#ebebeb] rounded-lg hover:bg-[#e6e6e6] transition-colors">
                  <MoreHorizontal16Regular className="text-[#424242]" />
                </button>
              </div>
            </div>

            {/* Widget Section 1 - Stack on mobile/tablet, side-by-side on lg+ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[18px]">
              <EngageWidget />
              <div data-name="Work activity" className="w-full flex flex-col gap-4">
                <CoworkerCard />
                <ActivityCard />
              </div>
            </div>

            {/* Quick Actions */}
            <QuickActions />

            {/* Bottom Widget Section - Stack on mobile/tablet, side-by-side on lg+ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <BenefitsWidget />
              <LearningWidget />
            </div>
                  </>
                )}
              </div>
            </div>
          </div>
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

      {/* Dev: Component Gallery Link */}
      <Link
        to="/gallery"
        className="fixed bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        Gallery
      </Link>
    </div>
  );
}
