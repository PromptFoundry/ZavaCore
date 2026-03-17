import {
  ChevronDownIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const chatIconColor = `${import.meta.env.BASE_URL}assets/icons/Chat icon color.svg`;
const ChatIcon = () => <img src={chatIconColor} alt="" style={{ width: 20, height: 20 }} />;
import zavcoreLogo from '../assets/images/ZavaCore_logo.svg';
import agentBgGradientFade from '../assets/images/Zava agent background - gradient fade.png';
import React, { useState, useRef } from 'react';
import ChatInput from './ChatInput';
import LeftNav from './LeftNav';
import Header from './Header';
import QuickActions from './QuickActions';
import LatencyLoader from './LatencyLoader';
import EntityCard from './EntityCard';
import RightPanel from './RightPanel';
import ArticlePanel from './ArticlePanel';
import PromptStarter from './PromptStarter';
import NewsHero from './NewsHero';
import RecentActivitySection from './RecentActivitySection';
import EngageResponse from './EngageResponse';
import NewsResponseMessage from './NewsResponseMessage';
import PlanMyDayResponse from './PlanMyDayResponse';
import { CheckmarkCircleFilled } from '@fluentui/react-icons';
import OrderLunchResponse from './OrderLunchResponse';
import OrderTracker from './OrderTracker';
import PeopleOrgResponse from './PeopleOrgResponse';
import AgentCapabilitiesResponse from './AgentCapabilitiesResponse';


interface Message {
  type: 'user' | 'assistant';
  content: string;
}

const seg = { fontFamily: '"Segoe UI", -apple-system, sans-serif' } as React.CSSProperties;

function SummitCenterResponse() {
  const sections = [
    {
      emoji: '🤝',
      label: 'Overview',
      body: 'The Summit Center project is a multi-phase initiative focused on developing a centralized hub for collaboration, innovation, and community engagement. Initial planning and stakeholder alignment began in Q2 2025, with the project currently moving through the design and feasibility phase.',
    },
    {
      emoji: '📅',
      label: 'Timeline',
      body: 'The proposed timeline estimates approximately 18 months for completion, with key milestones including site preparation, architectural planning, and phased construction of the primary facility. Once completed, the Summit Center is expected to provide modern meeting spaces, flexible work environments, and shared amenities intended to support cross-team collaboration and large-scale events.',
    },
    {
      emoji: '🌱',
      label: 'Sustainability & Future-Readiness',
      body: 'Early planning discussions highlight goals around sustainability, accessibility, and future-ready infrastructure, ensuring the facility can adapt to evolving organizational and community needs.',
    },
  ];

  const suggestions = [
    { emoji: '🗓️', text: 'Key project milestones and delivery phases' },
    { emoji: '💰', text: 'Budget and funding considerations' },
    { emoji: '🏗️', text: 'Planned facilities and amenities' },
    { emoji: '👥', text: 'Stakeholder teams involved in the project' },
  ];

  return (
    <div style={{ ...seg, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <p style={{ margin: 0, fontSize: 16, lineHeight: '26px', color: '#424242' }}>
        Based on the information available, here's an overview of the Summit Center Project.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {sections.map(({ emoji, label, body }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: '#333333' }}>{emoji} {label}</span>
            <p style={{ margin: 0, fontSize: 15, lineHeight: '26px', color: '#242424' }}>{body}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p style={{ margin: 0, fontSize: 15, lineHeight: '24px', color: '#424242' }}>I can also provide more detail on:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {suggestions.map(({ emoji, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span style={{ fontSize: 15, lineHeight: '24px' }}>{emoji}</span>
              <span style={{ fontSize: 15, lineHeight: '24px', color: '#242424' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={{ margin: 0, fontSize: 15, lineHeight: '24px', color: '#424242' }}>
        Just let me know which area you'd like to explore further.
      </p>
    </div>
  );
}

export default function Layout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showEngageResponse, setShowEngageResponse] = useState(false);
  const [isEngageLoading, setIsEngageLoading] = useState(false);
  const [showNewsResponse, setShowNewsResponse] = useState(false);
  const [isNewsLoading, setIsNewsLoading] = useState(false);
  const [isArticlePanelOpen, setIsArticlePanelOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<'helixweave' | 'quarterly'>('helixweave');
  const [showPlanMyDay, setShowPlanMyDay] = useState(false);
  const [isPlanMyDayLoading, setIsPlanMyDayLoading] = useState(false);
  const [showOrderLunch, setShowOrderLunch] = useState(false);
  const [isOrderLunchLoading, setIsOrderLunchLoading] = useState(false);
  const [showPeopleOrg, _setShowPeopleOrg] = useState(false);
  const [isPeopleOrgLoading, _setIsPeopleOrgLoading] = useState(false);
  const [showAgentCapabilities, setShowAgentCapabilities] = useState(false);
  const [isAgentCapabilitiesLoading, setIsAgentCapabilitiesLoading] = useState(false);
  const [orderTracker, setOrderTracker] = useState<{ dish: string; emoji: string } | null>(null);
  const [_showDayAtAGlance, setShowDayAtAGlance] = useState(false);
  const [showAddedToast, setShowAddedToast] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [activeShimmer, _setActiveShimmer] = useState<string | null>(null);
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
          content: `🏢 Based on the information available, here's an overview of the Summit Center Project.\n\n🤝 The Summit Center project is a multi-phase initiative focused on developing a centralized hub for collaboration, innovation, and community engagement. Initial planning and stakeholder alignment began in Q2 2025, with the project currently moving through the design and feasibility phase.\n\n📅 The proposed timeline estimates approximately 18 months for completion, with key milestones including site preparation, architectural planning, and phased construction of the primary facility. Once completed, the Summit Center is expected to provide modern meeting spaces, flexible work environments, and shared amenities intended to support cross-team collaboration and large-scale events.\n\n🌱 Early planning discussions also highlight goals around sustainability, accessibility, and future-ready infrastructure, ensuring the facility can adapt to evolving organizational and community needs.\n\nIf helpful, I can also provide more information on:\n• 🗓️ Key project milestones and delivery phases\n• 💰 Budget and funding considerations\n• 🏗️ Planned facilities and amenities\n• 👥 Stakeholder teams involved in the project\n\nJust let me know which area you'd like to explore further.`
        }
      ]);
    }, 3000);
  };

  const handleOrderComplete = (dish: string, emoji: string) => {
    handleReset();
    setOrderTracker({ dish, emoji });
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderLunch = () => {
    setIsOrderLunchLoading(true);
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsOrderLunchLoading(false);
      setShowOrderLunch(true);
    }, 2000);
  };

  const handlePlanMyDay = () => {
    setIsPlanMyDayLoading(true);
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsPlanMyDayLoading(false);
      setShowPlanMyDay(true);
    }, 2000);
  };

  const handleReset = () => {
    setMessages([]);
    setIsLoading(false);
    setIsPanelOpen(false);
    setShowEngageResponse(false);
    setIsEngageLoading(false);
    setShowNewsResponse(false);
    setIsNewsLoading(false);
    setIsArticlePanelOpen(false);
    setShowPlanMyDay(false);
    setIsPlanMyDayLoading(false);
    setShowOrderLunch(false);
    setIsOrderLunchLoading(false);
    setOrderTracker(null);
    _setShowPeopleOrg(false);
    _setIsPeopleOrgLoading(false);
    setShowAgentCapabilities(false);
    setIsAgentCapabilitiesLoading(false);
  };

  const handleAddToHome = () => {
    setShowDayAtAGlance(true);
    setShowAddedToast(true);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
    setTimeout(() => setShowAddedToast(false), 3100);
  };

  const handleSummarizeNews = () => {
    setIsNewsLoading(true);
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsNewsLoading(false);
      setShowNewsResponse(true);
    }, 2000);
  };


  const handleAgentCapabilities = () => {
    setIsAgentCapabilitiesLoading(true);
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsAgentCapabilitiesLoading(false);
      setShowAgentCapabilities(true);
    }, 2000);
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

  const hasConversation = messages.length > 0 || isLoading || isEngageLoading || showEngageResponse || isNewsLoading || showNewsResponse || isPlanMyDayLoading || showPlanMyDay || isOrderLunchLoading || showOrderLunch || isPeopleOrgLoading || showPeopleOrg || isAgentCapabilitiesLoading || showAgentCapabilities;

  // Shimmer effect disabled
  // useEffect(() => { ... }, [hasConversation]);


  return (
    <div className="min-h-screen bg-[#fcfcfc] flex overflow-hidden h-screen">
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
          forceCollapse={isPanelOpen || isArticlePanelOpen}
        />
      </aside>

      {/* Main content - no margin tricks */}
      <div className="flex-1 min-w-0 flex flex-col h-screen transition-all duration-300 relative">
        <Header
          onToggleNav={toggleMobileNav}
          isNavOpen={isMobileNavOpen}
          onReset={handleReset}
          breadcrumbLabel={
            (showAgentCapabilities || isAgentCapabilitiesLoading) ? 'Agent Overview' :
            (showPlanMyDay || isPlanMyDayLoading) ? 'Day at a Glance' :
            (showNewsResponse || isNewsLoading) ? 'News Summary' :
            (showEngageResponse || isEngageLoading) ? 'Engage Summary' :
            (showOrderLunch || isOrderLunchLoading) ? 'Order Lunch' :
            (showPeopleOrg || isPeopleOrgLoading) ? 'Org Summary' :
            (messages.length > 0 || isLoading) ? 'Summit Center Project' :
            undefined
          }
        />

        {/* Main Content */}
        <main
          ref={mainRef}
          className={`flex-1 overflow-auto py-8 md:py-16 lg:py-[126px] px-4 md:px-6 lg:px-8 relative bg-white flex flex-col gap-8`}
          style={!hasConversation ? {
            backgroundImage: `url("${agentBgGradientFade}")`,
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto'
          } : { paddingTop: '24px', paddingBottom: '220px' }}
        >
          {/* Agent Top */}
          <div data-name="agent-top" className={`w-full mx-auto flex flex-col items-center gap-8 md:gap-12 lg:gap-[53px] ${(showPlanMyDay || isPlanMyDayLoading) ? 'max-w-[1100px]' : 'max-w-[790px]'}`}>
            {/* Agent Header */}
            {!hasConversation && (
              <div className="w-full flex flex-col items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-2 h-10 md:h-12">
                    {/* Agent Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white border border-[#f0f0f0] rounded-xl md:rounded-2xl flex items-center justify-center">
                      <img
                        src={zavcoreLogo}
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
                  <div className="flex items-center gap-1 text-xs md:text-sm text-[#333333]">
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

                  {/* Agent capabilities response flow */}
                  {(isAgentCapabilitiesLoading || showAgentCapabilities) && (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end">
                        <div className="bg-[#f5f5f5] rounded-2xl px-4 py-3 max-w-[590px]">
                          <p className="text-base leading-6 text-[#424242]">Show me what ZavaCore Agent can do for me. What does it help with?</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        {isAgentCapabilitiesLoading ? (
                          <>
                            <div className="flex items-center gap-2">
                              <img src={zavcoreLogo} alt="ZavaCore Agent" className="w-6 h-6" />
                              <span className="font-semibold text-base text-[#333333]">ZavaCore Agent</span>
                            </div>
                            <p className="text-base leading-6 text-[#333333]">Pulling together what I can help with…</p>
                            <LatencyLoader />
                          </>
                        ) : (
                          <AgentCapabilitiesResponse />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Order lunch response flow */}
                  {(isOrderLunchLoading || showOrderLunch) && (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end">
                        <div className="bg-[#f5f5f5] rounded-2xl px-4 py-3 max-w-[590px]">
                          <p className="text-base leading-6 text-[#424242]">Order lunch</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <img src={zavcoreLogo} alt="ZavaCore Agent" className="w-6 h-6" />
                          <span className="font-semibold text-base text-[#333333]">ZavaCore Agent</span>
                        </div>
                        {isOrderLunchLoading ? (
                          <>
                            <p className="text-base leading-6 text-[#333333]">Looking up your order history…</p>
                            <LatencyLoader />
                          </>
                        ) : (
                          <>
                            <p className="text-base leading-6 text-[#424242]">Here are your most recent orders.</p>
                            <OrderLunchResponse onOrderComplete={handleOrderComplete} />
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Plan my day response flow */}
                  {(isPlanMyDayLoading || showPlanMyDay) && (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end">
                        <div className="bg-[#f5f5f5] rounded-2xl px-4 py-3 max-w-[590px]">
                          <p className="text-base leading-6 text-[#424242]">Give me a quick snapshot of my day, including upcoming and recent meetings, key emails, mentions, action items, and important activity from people I work with.</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <img src={zavcoreLogo} alt="ZavaCore Agent" className="w-6 h-6" />
                          <span className="font-semibold text-base text-[#333333]">ZavaCore Agent</span>
                        </div>
                        {isPlanMyDayLoading ? (
                          <>
                            <p className="text-base leading-6 text-[#333333]">Planning your day…</p>
                            <LatencyLoader />
                          </>
                        ) : (
                          <PlanMyDayResponse onAddToHome={handleAddToHome} />
                        )}
                      </div>
                    </div>
                  )}

                  {/* News summary response flow */}
                  {(isNewsLoading || showNewsResponse) && (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end">
                        <div className="bg-[#f5f5f5] rounded-2xl px-4 py-3 max-w-[590px]">
                          <p className="text-base leading-6 text-[#424242]">Create a summary of what's trending across my organization in SharePoint. Include this week's top news posts, trending topics based on engagement, key leadership updates, and upcoming events. Present the summary as a highlights video.</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        {isNewsLoading ? (
                          <>
                            <div className="flex items-center gap-2">
                              <img src={zavcoreLogo} alt="ZavaCore Agent" className="w-6 h-6" />
                              <span className="font-semibold text-base text-[#333333]">ZavaCore Agent</span>
                            </div>
                            <p className="text-base leading-6 text-[#333333]">Summarizing your news…</p>
                            <LatencyLoader />
                          </>
                        ) : (
                          <NewsResponseMessage onArticleClick={(type) => { setActiveArticle(type); setIsArticlePanelOpen(true); }} />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Engage response flow */}
                  {(isEngageLoading || showEngageResponse) && (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end">
                        <div className="bg-[#f5f5f5] rounded-2xl px-4 py-3 max-w-[590px]">
                          <p className="text-base leading-6 text-[#424242]">Summarize my recent Engage updates and activity</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6">
                            <img src={zavcoreLogo} alt="ZavaCore Agent" className="w-full h-full" />
                          </div>
                          <span className="font-semibold text-base text-[#333333]">ZavaCore Agent</span>
                        </div>
                        {isEngageLoading ? (
                          <>
                            <p className="text-base leading-6 text-[#333333]">Summarizing Engage activity…</p>
                            <LatencyLoader />
                          </>
                        ) : (
                          <EngageResponse />
                        )}
                      </div>
                    </div>
                  )}

                  {/* People org response flow */}
                  {(isPeopleOrgLoading || showPeopleOrg) && (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end">
                        <div className="bg-[#f5f5f5] rounded-2xl px-4 py-3 max-w-[590px]">
                          <p className="text-base leading-6 text-[#424242]">Summarize what people in my org are working on</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <img src={zavcoreLogo} alt="ZavaCore Agent" className="w-6 h-6" />
                          <span className="font-semibold text-base text-[#333333]">ZavaCore Agent</span>
                        </div>
                        {isPeopleOrgLoading ? (
                          <>
                            <p className="text-base leading-6 text-[#333333]">Looking up your org activity…</p>
                            <LatencyLoader />
                          </>
                        ) : (
                          <PeopleOrgResponse />
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
                              <img src={zavcoreLogo} alt="ZavaCore Agent" className="w-full h-full" />
                            </div>
                            <span className="font-semibold text-base text-[#333333]">ZavaCore Agent</span>
                          </div>
                          <SummitCenterResponse />
                          <div onClick={handleEntityCardClick} className="cursor-pointer">
                            <EntityCard title="Summit Center Project Plan" metadata="PowerPoint" condensed={isPanelOpen} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex flex-col gap-2 max-w-[590px]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6">
                          <img src={zavcoreLogo} alt="ZavaCore Agent" className="w-full h-full" />
                        </div>
                        <span className="font-semibold text-base text-[#333333]">ZavaCore Agent</span>
                      </div>
                      <p className="text-base leading-6 text-[#333333]">Gathering information about the Summit Center project…</p>
                      <LatencyLoader />
                    </div>
                  )}
                </div>
              )}

              {/* Prompt Starters */}
              {!hasConversation && (
                <div className="flex flex-col gap-4 md:gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <div data-shimmer-id="plan-my-day"><PromptStarter size="large" icon={<ChatIcon />} title="Agent overview" description="Show me what the ZavaCore Agent can do" onClick={handleAgentCapabilities} className={activeShimmer === 'plan-my-day' ? 'zava-shimmer' : ''} /></div>
                    <PromptStarter size="large" icon={<ChatIcon />} title="Leadership updates" description="Summarize the latest updates from leadership" />
                    <PromptStarter size="large" icon={<ChatIcon />} title="This week's deadlines" description="Show deadlines across learning, HR or benefits, and key tasks" />
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
              {orderTracker && (
                <OrderTracker
                  dish={orderTracker.dish}
                  emoji={orderTracker.emoji}
                  onDismiss={() => setOrderTracker(null)}
                />
              )}
              <div data-name="news-hero"><NewsHero onSummarizeNews={handleSummarizeNews} onEngageClick={handleEngageSummarize} onPlanMyDay={handlePlanMyDay} shimmerTarget={activeShimmer} /></div>
              <div data-name="quick-actions"><QuickActions onOrderLunch={handleOrderLunch} shimmerTarget={activeShimmer} /></div>
              <div data-name="recent-activity"><RecentActivitySection onEngageClick={handleEngageSummarize} shimmerTarget={activeShimmer} /></div>
            </div>
          )}
        </main>

        {/* Floating chat input — shown during conversation, sits below scroll area */}
        {hasConversation && (
          <div className="chat-input-container absolute bottom-0 left-0 right-0 px-4 md:px-6 lg:px-8 pb-5 pt-0 z-50" style={{ background: 'none' }}>
            <div className="max-w-[790px] mx-auto">
              <ChatInput onSubmit={handleSubmitMessage} />
            </div>
          </div>
        )}
      </div>

      {/* Inline Right Panel */}
      <RightPanel
        isOpen={isPanelOpen}
        onClose={handlePanelClose}
        entityTitle="Summit Center Project Plan"
        entityType="Document"
      />

      {/* Inline Article Panel */}
      <ArticlePanel
        isOpen={isArticlePanelOpen}
        onClose={() => setIsArticlePanelOpen(false)}
        articleType={activeArticle}
      />

      {/* Add to home toast */}
      {showAddedToast && (
        <div style={{
          position: 'fixed', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          backgroundColor: '#107c10', color: '#fff',
          borderRadius: 100, padding: '10px 20px',
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: '"Segoe UI", -apple-system, sans-serif',
          fontSize: 14, fontWeight: 600,
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          zIndex: 9999, whiteSpace: 'nowrap',
          opacity: toastVisible ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}>
          <CheckmarkCircleFilled style={{ width: 18, height: 18, color: '#fff', flexShrink: 0 }} />
          Day at a Glance added to home
        </div>
      )}

    </div>
  );
}
