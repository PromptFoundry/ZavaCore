import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StandardShell, MinimalShell, SharePointShell, ZavaCore_Start } from '../lib';
import { AppShell, Navigation, AppHeader, AppRail, SharePointHeader, CatalystPanel } from '../lib/primitives';
import EntityCard from '../components/EntityCard';
import QuickActions from '../components/QuickActions';
import EngageWidget from '../components/EngageWidget';
import BenefitsWidget from '../components/BenefitsWidget';
import LearningWidget from '../components/LearningWidget';
import AnimatedLoader from '../components/AnimatedLoader';
import PromptStarter from '../components/PromptStarter';
import WidgetContainer from '../components/WidgetContainer';
import NewsHero from '../components/NewsHero';
import { Home20Regular, Settings20Regular, Document20Regular } from '@fluentui/react-icons';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function ComponentGallery() {
  const [activeTab, setActiveTab] = useState('shells');
  const [selectedShell, setSelectedShell] = useState('standard');

  const tabs = [
    { id: 'shells', label: 'Shells' },
    { id: 'primitives', label: 'Primitives' },
    { id: 'components', label: 'Components' },
  ];

  // Sample configs
  const standardConfig = {
    branding: { logo: '/assets/images/ZavaCore_logo.svg', name: 'StandardShell' },
    navigation: [
      {
        items: [
          { id: 'home', label: 'Home', icon: <Home20Regular /> },
          { id: 'docs', label: 'Documents', icon: <Document20Regular /> },
          { id: 'settings', label: 'Settings', icon: <Settings20Regular /> },
        ]
      }
    ],
    headerActions: [
      { id: 'new', label: 'New', variant: 'primary' as const }
    ],
    user: { avatar: '/avatar.jpg', name: 'John Doe' },
    selectedNavId: 'home'
  };

  const minimalConfig = {
    branding: { logo: '/assets/images/ZavaCore_logo.svg', name: 'MinimalShell' },
    headerActions: [
      { id: 'login', label: 'Log In', variant: 'ghost' as const },
      { id: 'signup', label: 'Sign Up', variant: 'primary' as const }
    ]
  };

  const sharePointConfig = {
    header: {
      gridIcon: <img src="/assets/icons/Grid Dots.svg" alt="Grid" style={{ width: '24px', height: '24px' }} />,
      logo: '/assets/images/Zava-Full.svg',
      siteName: 'SharePoint',
      actions: [
        {
          id: 'copilot',
          icon: <img src="/assets/icons/CopilotOutline.svg" alt="Copilot" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'feedback',
          icon: <img src="/assets/icons/Person Feedback.svg" alt="Feedback" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'megaphone',
          icon: <img src="/assets/icons/Megaphone.svg" alt="Announcements" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'settings',
          icon: <img src="/assets/icons/Settings.svg" alt="Settings" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'help',
          icon: <img src="/assets/icons/Question.svg" alt="Help" style={{ width: '24px', height: '24px' }} />
        }
      ],
      userAvatar: (
        <img src="/assets/images/Avatar (SP).png" alt="User Avatar" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
      ),
    },
    appRail: {
      items: [
        { id: 'zava', label: 'Zava', icon: '/assets/images/ZavaCore_logo.svg' },
        { id: 'discover', label: 'Discover', icon: '/assets/icons/Compass Northwest.svg' },
        { id: 'publish', label: 'Publish', icon: '/assets/icons/Pen.svg' },
        { id: 'build', label: 'Build', icon: '/assets/icons/Broad Activity Feed.svg' },
        { id: 'onedrive', label: 'OneDrive', icon: '/assets/icons/OneDrive.svg' },
      ],
      defaultSelectedId: 'zava',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to App
              </Link>
              <h1 className="text-2xl font-bold">Component Gallery</h1>
            </div>
            <div className="flex gap-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#464FEB] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Shells Tab */}
        {activeTab === 'shells' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Shell Previews</h2>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSelectedShell('standard')}
                  className={`px-4 py-2 rounded ${
                    selectedShell === 'standard'
                      ? 'bg-[#464FEB] text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  StandardShell
                </button>
                <button
                  onClick={() => setSelectedShell('minimal')}
                  className={`px-4 py-2 rounded ${
                    selectedShell === 'minimal'
                      ? 'bg-[#464FEB] text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  MinimalShell
                </button>
                <button
                  onClick={() => setSelectedShell('sharepoint')}
                  className={`px-4 py-2 rounded ${
                    selectedShell === 'sharepoint'
                      ? 'bg-[#464FEB] text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  SharePointShell
                </button>
                <button
                  onClick={() => setSelectedShell('zavacore')}
                  className={`px-4 py-2 rounded ${
                    selectedShell === 'zavacore'
                      ? 'bg-[#464FEB] text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  ZavaCore_Start
                </button>
              </div>

              <div className="border rounded-lg overflow-hidden" style={{ height: '600px' }}>
                {selectedShell === 'standard' ? (
                  <StandardShell config={standardConfig}>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">StandardShell Content Area</h3>
                      <p className="text-gray-600">
                        This shell includes navigation sidebar, header with actions,
                        and full layout management.
                      </p>
                    </div>
                  </StandardShell>
                ) : selectedShell === 'minimal' ? (
                  <MinimalShell config={minimalConfig}>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">MinimalShell Content Area</h3>
                      <p className="text-gray-600">
                        This shell only includes header, perfect for landing pages.
                      </p>
                    </div>
                  </MinimalShell>
                ) : selectedShell === 'zavacore' ? (
                  <ZavaCore_Start />
                ) : (
                  <SharePointShell {...sharePointConfig}>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">SharePointShell Content Area</h3>
                      <p className="text-gray-600 mb-4">
                        This shell includes SharePoint-style header, app rail navigation,
                        and an AI-powered catalyst panel on the right.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-gray-100 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">SharePoint Header</h4>
                          <p className="text-sm text-gray-600">Modern header with search and actions</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">App Rail</h4>
                          <p className="text-sm text-gray-600">Vertical icon navigation</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Catalyst Panel</h4>
                          <p className="text-sm text-gray-600">AI assistant sidebar</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Main Content</h4>
                          <p className="text-sm text-gray-600">Your app content here</p>
                        </div>
                      </div>
                    </div>
                  </SharePointShell>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Primitives Tab */}
        {activeTab === 'primitives' && (
          <div className="space-y-8">
            {/* AppHeader */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">AppHeader</h2>
              <div className="border rounded-lg overflow-hidden">
                <AppHeader
                  logo="/assets/images/ZavaCore_logo.svg"
                  breadcrumbs={[
                    { label: 'Home' },
                    { label: 'Documents' },
                    { label: 'Current' }
                  ]}
                  actions={[
                    { id: 'new', label: 'New', variant: 'primary' }
                  ]}
                />
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<AppHeader
  logo="/assets/images/ZavaCore_logo.svg"
  breadcrumbs={[...]}
  actions={[...]}
/>`}
              </pre>
            </div>

            {/* AppRail */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">AppRail</h2>
              <div className="border rounded-lg overflow-hidden flex" style={{ height: '600px' }}>
                <AppRail
                  items={[
                    { id: 'zava', label: 'Zava', icon: '/assets/images/ZavaCore_logo.svg' },
                    { id: 'discover', label: 'Discover', icon: '/assets/icons/Compass Northwest.svg' },
                    { id: 'publish', label: 'Publish', icon: '/assets/icons/Pen.svg' },
                    { id: 'build', label: 'Build', icon: '/assets/icons/Broad Activity Feed.svg' },
                    { id: 'onedrive', label: 'OneDrive', icon: '/assets/icons/OneDrive.svg' },
                  ]}
                  defaultSelectedId="zava"
                />
                <div className="flex-1 bg-gray-50 p-8">
                  <h3 className="text-xl font-bold">Content Area</h3>
                  <p className="text-gray-600 mt-2">AppRail provides vertical icon navigation</p>
                </div>
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<AppRail
  items={[
    { id: 'zava', label: 'Zava', icon: '/assets/images/ZavaCore_logo.svg' },
    { id: 'discover', label: 'Discover', icon: '/icons/compass.svg' },
    { id: 'publish', label: 'Publish', icon: '/icons/pen.svg' }
  ]}
  defaultSelectedId="zava"
/>`}
              </pre>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Navigation</h2>
              <div className="border rounded-lg overflow-hidden" style={{ height: '500px' }}>
                <Navigation
                  branding={{ logo: '/assets/images/ZavaCore_logo.svg', name: 'App Name' }}
                  sections={[
                    {
                      items: [
                        { id: 'home', label: 'Home', icon: <Home20Regular /> },
                        { id: 'docs', label: 'Documents', icon: <Document20Regular />, badge: 3 },
                      ]
                    },
                    {
                      title: 'Settings',
                      items: [
                        { id: 'settings', label: 'Settings', icon: <Settings20Regular /> }
                      ]
                    }
                  ]}
                  selectedItemId="home"
                  user={{ avatar: '/assets/icons/avatar.svg', name: 'John Doe' }}
                />
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<Navigation
  branding={{ logo: '/assets/images/ZavaCore_logo.svg', name: 'App Name' }}
  sections={[...]}
  selectedItemId="home"
  user={...}
/>`}
              </pre>
            </div>

            {/* AppShell */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">AppShell</h2>
              <div className="border rounded-lg overflow-hidden" style={{ height: '600px' }}>
                <AppShell
                  nav={
                    <Navigation
                      branding={{ logo: '/assets/images/ZavaCore_logo.svg', name: 'App' }}
                      sections={[
                        { items: [{ id: 'home', label: 'Home', icon: <Home20Regular /> }] }
                      ]}
                    />
                  }
                  header={<AppHeader logo="/assets/images/ZavaCore_logo.svg" />}
                  backgroundColor="#f9fafb"
                >
                  <div className="p-8">
                    <h3 className="text-xl font-bold">Content Area</h3>
                    <p>AppShell composing nav and header</p>
                  </div>
                </AppShell>
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<AppShell
  nav={<Navigation {...} />}
  header={<AppHeader {...} />}
>
  <YourContent />
</AppShell>`}
              </pre>
            </div>

            {/* SharePointHeader */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">SharePointHeader</h2>
              <div className="border rounded-lg overflow-hidden">
                <SharePointHeader
                  gridIcon={<img src="/assets/icons/Grid Dots.svg" alt="Grid" style={{ width: '24px', height: '24px' }} />}
                  logo="/assets/images/Zava-Full.svg"
                  siteName="SharePoint"
                  actions={[
                    {
                      id: 'copilot',
                      icon: <img src="/assets/icons/CopilotOutline.svg" alt="Copilot" style={{ width: '24px', height: '24px' }} />
                    },
                    {
                      id: 'feedback',
                      icon: <img src="/assets/icons/Person Feedback.svg" alt="Feedback" style={{ width: '24px', height: '24px' }} />
                    },
                    {
                      id: 'megaphone',
                      icon: <img src="/assets/icons/Megaphone.svg" alt="Announcements" style={{ width: '24px', height: '24px' }} />
                    },
                    {
                      id: 'settings',
                      icon: <img src="/assets/icons/Settings.svg" alt="Settings" style={{ width: '24px', height: '24px' }} />
                    },
                    {
                      id: 'help',
                      icon: <img src="/assets/icons/Question.svg" alt="Help" style={{ width: '24px', height: '24px' }} />
                    }
                  ]}
                  userAvatar={
                    <img src="/assets/images/Avatar (SP).png" alt="User Avatar" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                  }
                />
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<SharePointHeader
  siteName="SharePoint"
  pageTitle="Innovating smart materials for tomorrow"
  actions={[...]}
  userAvatar={<Avatar />}
/>`}
              </pre>
            </div>

            {/* CatalystPanel */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">CatalystPanel</h2>
              <div className="border rounded-lg overflow-auto flex justify-end" style={{ height: '1000px' }}>
                <CatalystPanel
                  title="Chat"
                  promptStarters={[
                    { id: '1', text: 'What should I prioritize based on my schedule?' },
                    { id: '2', text: 'Find marketing documents that need my feedback' },
                    { id: '3', text: 'Highlight town hall updates relevant to my work' }
                  ]}
                  widgets={[
                    {
                      id: '1',
                      title: 'Card title',
                      content: 'Content area',
                      buttonLabel: 'Button'
                    }
                  ]}
                />
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<CatalystPanel
  title="Chat"
  promptStarters={[
    { id: '1', text: 'What should I prioritize based on my schedule?' },
    { id: '2', text: 'Find marketing documents that need my feedback' }
  ]}
  widgets={[
    { id: '1', title: 'Card title', content: 'Content area', buttonLabel: 'Button' }
  ]}
/>`}
              </pre>
            </div>
          </div>
        )}

        {/* Components Tab */}
        {activeTab === 'components' && (
          <div className="space-y-8">
            {/* NewsHero */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-1">NewsHero</h2>
              <p className="text-sm text-gray-500 mb-4">
                High-visibility media component with a large slider card and two static side cards.
              </p>
              <div className="border rounded-lg p-6 bg-gray-50">
                <NewsHero />
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<NewsHero
  slides={[
    {
      id: '1',
      background: 'linear-gradient(...)',
      icon: '/assets/images/ZavaCore_logo.svg',
      title: 'Listen to an audio summary',
      source: 'News summary',
      timestamp: '6m 31s',
      buttonLabel: 'Summarize my news',
    },
  ]}
  sideCards={[
    {
      id: '1',
      background: 'linear-gradient(...)',
      badge: 'News',
      title: 'Introducing the Falcon Quadcopter',
      source: 'Skyline news',
      timestamp: '1hr ago',
    },
  ]}
/>`}
              </pre>
            </div>

            {/* PromptStarter */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">PromptStarter</h2>
              <div className="border rounded-lg p-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Large variant (main app)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Small variant (catalyst panel)</h3>
                  <div className="max-w-md space-y-3">
                    <PromptStarter
                      size="small"
                      description="What should I prioritize based on my schedule?"
                    />
                    <PromptStarter
                      size="small"
                      description="Find marketing documents that need my feedback"
                    />
                  </div>
                </div>
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// Large variant
<PromptStarter
  size="large"
  icon={<ChatBubbleLeftIcon />}
  title="Plan my day"
  description="What should I prioritize based on my schedule?"
  footer="Your close connection"
/>

// Small variant
<PromptStarter
  size="small"
  description="What should I prioritize based on my schedule?"
/>`}
              </pre>
            </div>

            {/* AnimatedLoader */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">AnimatedLoader</h2>
              <div className="border rounded-lg p-8 flex items-center justify-center">
                <AnimatedLoader />
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<AnimatedLoader />`}
              </pre>
            </div>

            {/* EntityCard */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">EntityCard</h2>
              <div className="border rounded-lg p-8">
                <EntityCard
                  icon={<Document20Regular />}
                  iconBgColor="#E8F5E9"
                  title="Summit Center"
                  metadata="Planning phase • Q2 2025"
                  onPrimaryAction={() => {}}
                  onSecondaryAction={() => {}}
                />
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<EntityCard
  icon={<Document20Regular />}
  iconBgColor="#E8F5E9"
  title="Summit Center"
  metadata="Planning phase • Q2 2025"
  primaryButtonLabel="View Details"
  secondaryButtonLabel="Share"
/>`}
              </pre>
            </div>

            {/* QuickActions */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">QuickActions</h2>
              <div className="border rounded-lg p-8">
                <QuickActions />
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<QuickActions />`}
              </pre>
            </div>

            {/* WidgetContainer */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">WidgetContainer</h2>
              <div className="border rounded-lg p-8">
                <div style={{ maxWidth: '400px', height: '400px' }}>
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
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V7.25H13.25C13.6642 7.25 14 7.58579 14 8C14 8.41421 13.6642 8.75 13.25 8.75H8.75V13.25C8.75 13.6642 8.41421 14 8 14C7.58579 14 7.25 13.6642 7.25 13.25V8.75H2.75C2.33579 8.75 2 8.41421 2 8C2 7.58579 2.33579 7.25 2.75 7.25H7.25V2.75C7.25 2.33579 7.58579 2 8 2Z"
                              fill="#242424"
                            />
                          </svg>
                        ),
                      },
                    ]}
                  >
                    <div style={{ padding: '24px', textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: '#242424' }}>
                        Content area
                      </p>
                    </div>
                  </WidgetContainer>
                </div>
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<WidgetContainer
  title="Card title"
  headerActions={<SettingsIcon />}
  footerActions={[
    { id: 'action1', label: 'Button', icon: <SparkleIcon /> }
  ]}
>
  <div>Your content here</div>
</WidgetContainer>`}
              </pre>
            </div>

            {/* EngageWidget */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">EngageWidget</h2>
              <div className="border rounded-lg p-8">
                <div style={{ maxWidth: '400px', height: '400px' }}>
                  <EngageWidget />
                </div>
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<EngageWidget />`}
              </pre>
            </div>

            {/* BenefitsWidget */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">BenefitsWidget</h2>
              <div className="border rounded-lg p-8">
                <div style={{ maxWidth: '400px', height: '400px' }}>
                  <BenefitsWidget />
                </div>
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<BenefitsWidget />`}
              </pre>
            </div>

            {/* LearningWidget */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">LearningWidget</h2>
              <div className="border rounded-lg p-8">
                <div style={{ maxWidth: '400px', height: '400px' }}>
                  <LearningWidget />
                </div>
              </div>
              <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<LearningWidget />`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
