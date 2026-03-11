import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDownRegular,
  CopyRegular,
  CheckmarkRegular,
  Home20Regular,
  Settings20Regular,
  Document20Regular,
  Apps20Regular,
  ArrowLeftRegular,
  LayoutCellFour20Regular,
} from '@fluentui/react-icons';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

// Shells & primitives
import { MinimalShell, SharePointShell, ZavaCore_Start } from '../lib';
import { AppShell, Navigation, AppHeader, AppRail, SharePointHeader, CatalystPanel } from '../lib/primitives';

// Components
import LeftNav from '../components/LeftNav';
import EntityCard from '../components/EntityCard';
import QuickActions from '../components/QuickActions';
import EngageWidget from '../components/EngageWidget';
import BenefitsWidget from '../components/BenefitsWidget';
import LearningWidget from '../components/LearningWidget';
import AnimatedLoader from '../components/AnimatedLoader';
import PromptStarter from '../components/PromptStarter';
import WidgetContainer from '../components/WidgetContainer';
import NewsHero from '../components/NewsHero';
import CoworkerCard from '../components/CoworkerCard';
import ActivityCard from '../components/ActivityCard';
import ChatInput from '../components/ChatInput';

// ─── Types ──────────────────────────────────────────────────────────────────────

type BadgeType = 'Shell' | 'Primitive' | 'Component';
type CanvasMode = 'padded' | 'scroll' | 'fullscreen' | 'sidebar';

interface ChangelogEntry {
  date: string;
  type: 'added' | 'changed' | 'fixed' | 'removed';
  component: string;
  componentId: string;
  description: string;
}

interface GalleryItem {
  id: string;
  label: string;
  description: string;
  badge: BadgeType;
  canvasMode: CanvasMode;
  code: string;
  render: () => React.ReactNode;
}

interface NavSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: GalleryItem[];
}

// ─── Badge ──────────────────────────────────────────────────────────────────────

const badgeStyles: Record<BadgeType, React.CSSProperties> = {
  Shell:     { backgroundColor: '#e8f5e9', color: '#2e7d32' },
  Primitive: { backgroundColor: '#fff3e0', color: '#b45309' },
  Component: { backgroundColor: '#f3e5f5', color: '#7b1fa2' },
};

function Badge({ type }: { type: BadgeType }) {
  return (
    <span style={{
      ...badgeStyles[type],
      fontSize: 11, fontWeight: 600, padding: '2px 8px',
      borderRadius: 100, fontFamily: '"Segoe UI", sans-serif',
      letterSpacing: '0.02em',
    }}>
      {type.toUpperCase()}
    </span>
  );
}

// ─── Code block ─────────────────────────────────────────────────────────────────

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', backgroundColor: '#1e1e1e' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#888' }}>TSX</span>
        <button onClick={copy} style={{
          display: 'flex', alignItems: 'center', gap: 5, padding: '3px 10px',
          backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 5, color: '#ccc', fontSize: 12, cursor: 'pointer',
          fontFamily: '"Segoe UI", sans-serif',
        }}>
          {copied
            ? <><CheckmarkRegular style={{ width: 13, height: 13, color: '#4ec9b0' }} /> Copied</>
            : <><CopyRegular style={{ width: 13, height: 13 }} /> Copy</>
          }
        </button>
      </div>
      <pre style={{
        margin: 0, padding: '16px 20px', overflowX: 'auto',
        fontFamily: '"Cascadia Code", "Fira Code", Consolas, monospace',
        fontSize: 13, lineHeight: '22px', color: '#d4d4d4',
      }}>{code}</pre>
    </div>
  );
}

// ─── Canvas ──────────────────────────────────────────────────────────────────────

type Viewport = 'desktop' | 'tablet' | 'mobile';

const viewports: { id: Viewport; label: string; width: number | '100%'; icon: React.ReactNode }[] = [
  {
    id: 'desktop', label: 'Desktop', width: '100%',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="2" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M5 13h5M7.5 11v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'tablet', label: 'Tablet', width: 768,
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="2" y="1" width="11" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="7.5" cy="12" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'mobile', label: 'Mobile', width: 390,
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="3.5" y="1" width="8" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="7.5" cy="12" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
];

function Canvas({ item }: { item: GalleryItem }) {
  const isFullscreen = item.canvasMode === 'fullscreen' || item.canvasMode === 'sidebar';
  const [viewport, setViewport] = useState<Viewport>('desktop');

  const current = viewports.find(v => v.id === viewport)!;

  const innerStyles: Record<CanvasMode, React.CSSProperties> = {
    padded:     { padding: 40, backgroundColor: '#f9f9f9', minHeight: 200 },
    scroll:     { padding: 40, backgroundColor: '#fff', maxHeight: 680, overflowY: 'auto' },
    fullscreen: { padding: 0, backgroundColor: '#fff', height: '100%', overflow: 'hidden' },
    sidebar:    { padding: 0, backgroundColor: '#fff', height: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'flex-end' },
  };

  return (
    <div style={{ border: '1px solid #e6e6e6', borderRadius: 12, overflow: 'hidden', boxShadow: '0px 1px 4px rgba(0,0,0,0.06)' }}>

      {/* Toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 14px', backgroundColor: '#fafafa', borderBottom: '1px solid #e6e6e6',
      }}>
        {/* Left spacer — keeps switcher centered */}
        <div style={{ width: 80 }} />

        {/* Viewport switcher — only shown for fullscreen items */}
        {isFullscreen ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#f0f0f0', borderRadius: 8, padding: 3 }}>
            {viewports.map(v => {
              const active = viewport === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setViewport(v.id)}
                  title={v.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 28, height: 24, borderRadius: 6, border: 'none', cursor: 'pointer',
                    backgroundColor: active ? '#ffffff' : 'transparent',
                    color: active ? '#464feb' : '#888',
                    boxShadow: active ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
                    transition: 'all 0.1s',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#424242'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#888'; }}
                >
                  {v.icon}
                </button>
              );
            })}
          </div>
        ) : (
          <span style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: 12, color: '#aaa' }}>Preview</span>
        )}

        {/* Right spacer */}
        <div style={{ width: 80 }} />
      </div>

      {/* Viewport frame */}
      <div style={{
        backgroundColor: isFullscreen ? '#e8e8e8' : 'transparent',
        padding: isFullscreen ? '20px 24px 24px' : 0,
        overflow: 'hidden',
      }}>
        <div style={{
          width: current.width,
          maxWidth: '100%',
          margin: '0 auto',
          height: isFullscreen ? 700 : 'auto',
          borderRadius: isFullscreen && viewport !== 'desktop' ? 12 : (isFullscreen ? 8 : 0),
          overflow: 'hidden',
          boxShadow: isFullscreen ? '0 4px 24px rgba(0,0,0,0.18)' : 'none',
          flexShrink: 0,
        }}>
          <div style={{ ...innerStyles[item.canvasMode], height: isFullscreen ? '100%' : undefined }}>
            {item.render()}
          </div>
        </div>
      </div>

    </div>
  );
}

// ─── Gallery data ────────────────────────────────────────────────────────────────

const minimalConfig = {
  branding: { logo: '/assets/images/ZavaCore_logo.svg', name: 'MinimalShell' },
  headerActions: [
    { id: 'login', label: 'Log In', variant: 'ghost' as const },
    { id: 'signup', label: 'Sign Up', variant: 'primary' as const },
  ],
};

const sharePointConfig = {
  header: {
    gridIcon: <img src="/assets/icons/Grid Dots.svg" alt="" style={{ width: 24, height: 24 }} />,
    logo: '/assets/images/Zava-Full.svg',
    siteName: 'SharePoint',
    actions: [
      { id: 'copilot',  icon: <img src="/assets/icons/CopilotOutline.svg"    alt="" style={{ width: 24, height: 24 }} /> },
      { id: 'feedback', icon: <img src="/assets/icons/Person Feedback.svg"   alt="" style={{ width: 24, height: 24 }} /> },
      { id: 'settings', icon: <img src="/assets/icons/Settings.svg"          alt="" style={{ width: 24, height: 24 }} /> },
      { id: 'help',     icon: <img src="/assets/icons/Question.svg"          alt="" style={{ width: 24, height: 24 }} /> },
    ],
    userAvatar: <img src="/assets/images/Avatar (SP).png" alt="" style={{ width: 24, height: 24, borderRadius: '50%' }} />,
  },
  appRail: {
    items: [
      { id: 'zava',      label: 'Zava',     icon: '/assets/images/ZavaCore_logo.svg' },
      { id: 'discover',  label: 'Discover', icon: '/assets/icons/Compass Northwest.svg' },
      { id: 'publish',   label: 'Publish',  icon: '/assets/icons/Pen.svg' },
      { id: 'onedrive',  label: 'OneDrive', icon: '/assets/icons/OneDrive.svg' },
    ],
    defaultSelectedId: 'zava',
  },
};

// ─── Changelog data ──────────────────────────────────────────────────────────────

const CHANGELOG: ChangelogEntry[] = [
  { date: 'Mar 10, 2026', type: 'added',   component: 'PeopleOrgResponse',   componentId: 'res-people',    description: 'New org-wide activity response. Shows initiative clusters and a recently-active people list with presence badges and document chips.' },
  { date: 'Mar 10, 2026', type: 'added',   component: 'Component Library',    componentId: '',              description: 'Library rebuilt with left nav, Storybook-style canvas, viewport switchers (Desktop / Tablet / Mobile), and per-component code snippets.' },
  { date: 'Mar 10, 2026', type: 'changed', component: 'RecommendedSection',   componentId: '',              description: 'People card ("Summarize what people in my org are working on") is now clickable and wired to PeopleOrgResponse. Added shimmer rotation.' },
  { date: 'Mar 10, 2026', type: 'added',   component: 'CoworkerCard',         componentId: 'comp-coworker', description: 'Added to gallery with live preview and usage snippet.' },
  { date: 'Mar 10, 2026', type: 'added',   component: 'ActivityCard',         componentId: 'comp-activity', description: 'Added to gallery with live preview and usage snippet.' },
  { date: 'Mar 10, 2026', type: 'added',   component: 'ChatInput',            componentId: 'comp-chatinput','description': 'Added to gallery with live preview and usage snippet.' },
  { date: 'Mar 5, 2026',  type: 'changed', component: 'PlanMyDayResponse',    componentId: 'res-day',       description: 'People tab now includes presence badges, document activity, and Meeting-at time chips.' },
  { date: 'Mar 5, 2026',  type: 'changed', component: 'NewsResponseMessage',  componentId: 'res-news',      description: 'Article panel integration — clicking a news card opens an inline right panel with full article view.' },
  { date: 'Mar 5, 2026',  type: 'added',   component: 'OrderLunchResponse',   componentId: 'res-lunch',     description: 'Multi-step lunch ordering flow with confetti confirmation animation.' },
  { date: 'Feb 28, 2026', type: 'added',   component: 'EngageResponse',       componentId: 'res-engage',    description: 'Viva Engage community summary with quick-summary cards, topic cards, community cards, and a people carousel.' },
  { date: 'Feb 28, 2026', type: 'changed', component: 'NewsHero',             componentId: 'comp-newshero', description: 'Shimmer animation added to the "Summarize my news" card. Carousel auto-advances every 6 seconds.' },
  { date: 'Mar 10, 2026', type: 'changed', component: 'CopilotShell',          componentId: 'shell-copilot', description: 'Renamed from StandardShell. Preview now renders the real LeftNav sidebar with agents, notebooks, chats, and quick links.' },
  { date: 'Feb 21, 2026', type: 'added',   component: 'CopilotShell',          componentId: 'shell-copilot', description: 'Initial shell with collapsible nav sidebar, sticky header, and breadcrumbs.' },
  { date: 'Feb 21, 2026', type: 'added',   component: 'SharePointShell',      componentId: 'shell-sp',      description: 'SharePoint-style shell with branded header, vertical app rail, and AI panel slot.' },
  { date: 'Feb 14, 2026', type: 'added',   component: 'AnimatedLoader',       componentId: 'comp-loader',   description: 'Pulsing skeleton loader used as a thinking indicator in all agent response flows.' },
  { date: 'Feb 14, 2026', type: 'added',   component: 'PromptStarter',        componentId: 'comp-prompt',   description: 'Suggested prompt card in two sizes: large (3-up grid) and small (panel list).' },
];

const typeStyles: Record<ChangelogEntry['type'], { label: string; color: string; bg: string }> = {
  added:   { label: 'Added',   color: '#166534', bg: '#dcfce7' },
  changed: { label: 'Changed', color: '#1e40af', bg: '#dbeafe' },
  fixed:   { label: 'Fixed',   color: '#7c3aed', bg: '#ede9fe' },
  removed: { label: 'Removed', color: '#991b1b', bg: '#fee2e2' },
};

function ChangelogPanel({ onNavigate }: { onNavigate: (id: string) => void }) {
  const seg = { fontFamily: '"Segoe UI", sans-serif' };

  // Group entries by date
  const grouped = CHANGELOG.reduce<Record<string, ChangelogEntry[]>>((acc, entry) => {
    (acc[entry.date] ??= []).push(entry);
    return acc;
  }, {});

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflowY: 'auto', backgroundColor: '#fff' }}>
      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        backgroundColor: '#fff', borderBottom: '1px solid #e6e6e6',
        padding: '12px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, ...seg, fontSize: 13, color: '#616161' }}>
          <span>Library</span>
          <span style={{ color: '#d1d1d1' }}>/</span>
          <span style={{ color: '#242424', fontWeight: 600 }}>Changelog</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '32px 40px', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        <h1 style={{ ...seg, fontSize: 24, fontWeight: 700, color: '#242424', margin: '0 0 6px' }}>Changelog</h1>
        <p style={{ ...seg, fontSize: 14, color: '#888', margin: '0 0 40px', lineHeight: '22px' }}>
          A running log of additions, updates, and fixes across all components.
        </p>

        {Object.entries(grouped).map(([date, entries]) => (
          <div key={date} style={{ display: 'flex', gap: 32, marginBottom: 40 }}>
            {/* Date column */}
            <div style={{ width: 110, flexShrink: 0, paddingTop: 2 }}>
              <span style={{ ...seg, fontSize: 12, fontWeight: 600, color: '#aaa', whiteSpace: 'nowrap' }}>{date}</span>
            </div>

            {/* Entries column */}
            <div style={{ flex: 1, borderLeft: '2px solid #f0f0f0', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {entries.map((entry, i) => {
                const ts = typeStyles[entry.type];
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      {/* Type pill */}
                      <span style={{ ...seg, fontSize: 10, fontWeight: 700, color: ts.color, backgroundColor: ts.bg, padding: '2px 7px', borderRadius: 6, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        {ts.label}
                      </span>
                      {/* Component name — clickable if it has an id */}
                      {entry.componentId ? (
                        <button
                          onClick={() => onNavigate(entry.componentId)}
                          style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#464feb', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'none' }}
                          onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                          onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                        >
                          {entry.component}
                        </button>
                      ) : (
                        <span style={{ ...seg, fontSize: 13, fontWeight: 600, color: '#242424' }}>{entry.component}</span>
                      )}
                    </div>
                    <p style={{ ...seg, fontSize: 13, color: '#616161', margin: 0, lineHeight: '20px' }}>
                      {entry.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Gallery data ────────────────────────────────────────────────────────────────

function buildSections(): NavSection[] {
  return [
    {
      id: 'shells',
      label: 'Shells',
      icon: <Document20Regular style={{ width: 16, height: 16 }} />,
      items: [
        {
          id: 'shell-copilot', label: 'Copilot Shell', badge: 'Shell', canvasMode: 'fullscreen',
          description: 'Copilot-style shell with a collapsible sidebar featuring agents, notebooks, chats, and quick links — plus a sticky header with breadcrumb navigation.',
          code: `<AppShell\n  nav={<LeftNav />}\n  header={\n    <AppHeader\n      logo="/assets/images/ZavaCore_logo.svg"\n      breadcrumbs={[{ label: 'Home' }, { label: 'ZavaCore Agent' }]}\n    />\n  }\n>\n  <YourContent />\n</AppShell>`,
          render: () => (
            <div style={{ display: 'flex', height: '100%', backgroundColor: '#fcfcfc', overflow: 'hidden' }}>
              <LeftNav />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <AppHeader
                  logo="/assets/images/ZavaCore_logo.svg"
                  breadcrumbs={[{ label: 'Home' }, { label: 'ZavaCore Agent' }]}
                />
                <div style={{ flex: 1, overflow: 'auto', padding: '48px 40px', backgroundColor: '#fff' }}>
                  <div style={{ maxWidth: 790, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Copilot Shell</h3>
                    <p style={{ color: '#616161', fontSize: 14, margin: 0, lineHeight: '22px' }}>
                      Copilot-style navigation sidebar with agents, notebooks, and chat history. Use this as the base shell for Copilot-integrated apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'shell-minimal', label: 'Minimal Shell', badge: 'Shell', canvasMode: 'fullscreen',
          description: 'Header-only shell for landing pages and focused flows. No side navigation.',
          code: `<MinimalShell config={{\n  branding: { logo: '...', name: 'App' },\n  headerActions: [\n    { id: 'login',  label: 'Log In',  variant: 'ghost' },\n    { id: 'signup', label: 'Sign Up', variant: 'primary' },\n  ],\n}}>\n  <YourContent />\n</MinimalShell>`,
          render: () => (
            <MinimalShell config={minimalConfig}>
              <div style={{ padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>MinimalShell</h3>
                <p style={{ color: '#616161', fontSize: 14 }}>Header only — ideal for landing pages.</p>
              </div>
            </MinimalShell>
          ),
        },
        {
          id: 'shell-sp', label: 'SharePoint Shell', badge: 'Shell', canvasMode: 'fullscreen',
          description: 'SharePoint-style shell with branded header, vertical app rail, and optional AI panel slot.',
          code: `<SharePointShell\n  header={{ siteName: 'SharePoint', actions: [...], userAvatar: <Avatar /> }}\n  appRail={{ items: [...], defaultSelectedId: 'zava' }}\n>\n  <YourContent />\n</SharePointShell>`,
          render: () => (
            <SharePointShell {...sharePointConfig}>
              <div style={{ padding: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>SharePointShell</h3>
                <p style={{ color: '#616161', fontSize: 14 }}>Header + app rail + AI panel slot.</p>
              </div>
            </SharePointShell>
          ),
        },
      ],
    },
    {
      id: 'templates',
      label: 'Templates',
      icon: <LayoutCellFour20Regular style={{ width: 16, height: 16 }} />,
      items: [
        {
          id: 'shell-zava', label: 'ZavaCore Start', badge: 'Shell', canvasMode: 'fullscreen',
          description: 'The full ZavaCore agent start experience with chat, widgets, and prompt starters.',
          code: `<ZavaCore_Start />`,
          render: () => <ZavaCore_Start />,
        },
      ],
    },
    {
      id: 'primitives',
      label: 'Primitives',
      icon: <Settings20Regular style={{ width: 16, height: 16 }} />,
      items: [
        {
          id: 'prim-appheader', label: 'AppHeader', badge: 'Primitive', canvasMode: 'padded',
          description: 'Sticky top header with logo, breadcrumb trail, and configurable action buttons.',
          code: `<AppHeader\n  logo="/assets/images/ZavaCore_logo.svg"\n  breadcrumbs={[\n    { label: 'Home' },\n    { label: 'Documents' },\n    { label: 'Current' },\n  ]}\n  actions={[{ id: 'new', label: 'New', variant: 'primary' }]}\n/>`,
          render: () => (
            <div style={{ backgroundColor: '#fff', border: '1px solid #e6e6e6', borderRadius: 8, overflow: 'hidden' }}>
              <AppHeader
                logo="/assets/images/ZavaCore_logo.svg"
                breadcrumbs={[{ label: 'Home' }, { label: 'Documents' }, { label: 'Current' }]}
                actions={[{ id: 'new', label: 'New', variant: 'primary' }]}
              />
            </div>
          ),
        },
        {
          id: 'prim-apprail', label: 'AppRail', badge: 'Primitive', canvasMode: 'padded',
          description: 'Vertical icon navigation rail. Typically placed on the far left of the screen.',
          code: `<AppRail\n  items={[\n    { id: 'zava',    label: 'Zava',    icon: '/zavacore.svg' },\n    { id: 'compass', label: 'Discover', icon: '/compass.svg' },\n    { id: 'pen',     label: 'Publish', icon: '/pen.svg' },\n  ]}\n  defaultSelectedId="zava"\n/>`,
          render: () => (
            <div style={{ display: 'flex', height: 480, backgroundColor: '#fff', border: '1px solid #e6e6e6', borderRadius: 8, overflow: 'hidden' }}>
              <AppRail
                items={[
                  { id: 'zava', label: 'Zava', icon: '/assets/images/ZavaCore_logo.svg' },
                  { id: 'discover', label: 'Discover', icon: '/assets/icons/Compass Northwest.svg' },
                  { id: 'publish', label: 'Publish', icon: '/assets/icons/Pen.svg' },
                  { id: 'onedrive', label: 'OneDrive', icon: '/assets/icons/OneDrive.svg' },
                ]}
                defaultSelectedId="zava"
              />
              <div style={{ flex: 1, padding: 24, color: '#616161', fontSize: 14 }}>Content area</div>
            </div>
          ),
        },
        {
          id: 'prim-navigation', label: 'Navigation', badge: 'Primitive', canvasMode: 'padded',
          description: 'Collapsible left navigation with branding, grouped sections, badge counts, and user profile footer.',
          code: `<Navigation\n  branding={{ logo: '/zavacore.svg', name: 'App Name' }}\n  sections={[\n    { items: [\n      { id: 'home', label: 'Home', icon: <HomeIcon /> },\n      { id: 'docs', label: 'Docs',  icon: <DocIcon />, badge: 3 },\n    ]},\n  ]}\n  selectedItemId="home"\n  user={{ avatar: '/avatar.svg', name: 'John Doe' }}\n/>`,
          render: () => (
            <div style={{ height: 480, border: '1px solid #e6e6e6', borderRadius: 8, overflow: 'hidden' }}>
              <Navigation
                branding={{ logo: '/assets/images/ZavaCore_logo.svg', name: 'App Name' }}
                sections={[
                  { items: [
                    { id: 'home', label: 'Home', icon: <Home20Regular /> },
                    { id: 'docs', label: 'Documents', icon: <Document20Regular />, badge: 3 },
                  ]},
                  { title: 'Settings', items: [
                    { id: 'settings', label: 'Settings', icon: <Settings20Regular /> },
                  ]},
                ]}
                selectedItemId="home"
                user={{ avatar: '/assets/icons/avatar.svg', name: 'John Doe' }}
              />
            </div>
          ),
        },
        {
          id: 'prim-appshell', label: 'AppShell', badge: 'Primitive', canvasMode: 'fullscreen',
          description: 'Composition primitive that accepts nav and header slots. The foundation for StandardShell.',
          code: `<AppShell\n  nav={<Navigation {...navProps} />}\n  header={<AppHeader {...headerProps} />}\n  backgroundColor="#f9fafb"\n>\n  <YourContent />\n</AppShell>`,
          render: () => (
            <AppShell
              nav={<Navigation branding={{ logo: '/assets/images/ZavaCore_logo.svg', name: 'App' }} sections={[{ items: [{ id: 'home', label: 'Home', icon: <Home20Regular /> }] }]} />}
              header={<AppHeader logo="/assets/images/ZavaCore_logo.svg" />}
              backgroundColor="#f9fafb"
            >
              <div style={{ padding: 32 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600 }}>AppShell content area</h3>
              </div>
            </AppShell>
          ),
        },
        {
          id: 'prim-spheader', label: 'SharePointHeader', badge: 'Primitive', canvasMode: 'padded',
          description: 'SharePoint-branded header bar with grid icon, logo, site name, action icons, and user avatar.',
          code: `<SharePointHeader\n  siteName="SharePoint"\n  actions={[{ id: 'copilot', icon: <CopilotIcon /> }]}\n  userAvatar={<Avatar />}\n/>`,
          render: () => (
            <div style={{ backgroundColor: '#fff', border: '1px solid #e6e6e6', borderRadius: 8, overflow: 'hidden' }}>
              <SharePointHeader
                gridIcon={<img src="/assets/icons/Grid Dots.svg" alt="" style={{ width: 24, height: 24 }} />}
                logo="/assets/images/Zava-Full.svg"
                siteName="SharePoint"
                actions={[
                  { id: 'copilot',  icon: <img src="/assets/icons/CopilotOutline.svg"  alt="" style={{ width: 24, height: 24 }} /> },
                  { id: 'settings', icon: <img src="/assets/icons/Settings.svg"         alt="" style={{ width: 24, height: 24 }} /> },
                  { id: 'help',     icon: <img src="/assets/icons/Question.svg"          alt="" style={{ width: 24, height: 24 }} /> },
                ]}
                userAvatar={<img src="/assets/images/Avatar (SP).png" alt="" style={{ width: 24, height: 24, borderRadius: '50%' }} />}
              />
            </div>
          ),
        },
        {
          id: 'prim-catalyst', label: 'CatalystPanel', badge: 'Primitive', canvasMode: 'sidebar',
          description: 'AI assistant side panel with chat input, prompt starters, and widget slots.',
          code: `<CatalystPanel />`,
          render: () => <CatalystPanel />,
        },
      ],
    },
    {
      id: 'components',
      label: 'Components',
      icon: <Apps20Regular style={{ width: 16, height: 16 }} />,
      items: [
        {
          id: 'comp-newshero', label: 'NewsHero', badge: 'Component', canvasMode: 'padded',
          description: 'High-visibility media section with a large hero slider and two static side cards.',
          code: `<NewsHero\n  onSummarizeNews={() => handleSummarize()}\n  onEngageClick={() => handleEngage()}\n/>`,
          render: () => <NewsHero />,
        },
        {
          id: 'comp-prompt', label: 'PromptStarter', badge: 'Component', canvasMode: 'padded',
          description: 'Suggested prompt card in two sizes: large (3-up grid) and small (panel list).',
          code: `// Large\n<PromptStarter\n  size="large"\n  icon={<ChatIcon />}\n  title="Plan my day"\n  description="What should I prioritize?"\n  footer="Your close connection"\n/>\n\n// Small\n<PromptStarter\n  size="small"\n  description="Find marketing docs that need my feedback"\n/>`,
          render: () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#616161', marginBottom: 12, fontFamily: '"Segoe UI", sans-serif' }}>LARGE VARIANT</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <PromptStarter size="large" icon={<ChatBubbleLeftIcon />} title="Plan my day" description="What should I prioritize based on my schedule?" footer="Your close connection" />
                  <PromptStarter size="large" icon={<ChatBubbleLeftIcon />} title="Take action" description="Find marketing documents that need my feedback" />
                </div>
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#616161', marginBottom: 12, fontFamily: '"Segoe UI", sans-serif' }}>SMALL VARIANT</p>
                <div style={{ maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <PromptStarter size="small" description="What should I prioritize based on my schedule?" />
                  <PromptStarter size="small" description="Find marketing documents that need my feedback" />
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'comp-loader', label: 'AnimatedLoader', badge: 'Component', canvasMode: 'padded',
          description: 'Pulsing skeleton loader used as a thinking indicator in all agent response flows.',
          code: `<AnimatedLoader />`,
          render: () => (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
              <AnimatedLoader />
            </div>
          ),
        },
        {
          id: 'comp-entity', label: 'EntityCard', badge: 'Component', canvasMode: 'padded',
          description: 'Document/entity card with icon, title, metadata, optional slide preview, and expand/collapse.',
          code: `<EntityCard\n  icon={<Document20Regular />}\n  iconBgColor="#E8F5E9"\n  title="Summit Center"\n  metadata="Planning phase · Q2 2025"\n  onPrimaryAction={() => openPanel()}\n/>`,
          render: () => (
            <div style={{ maxWidth: 520 }}>
              <EntityCard icon={<Document20Regular />} iconBgColor="#E8F5E9" title="Summit Center" metadata="Planning phase · Q2 2025" onPrimaryAction={() => {}} />
            </div>
          ),
        },
        {
          id: 'comp-quickactions', label: 'QuickActions', badge: 'Component', canvasMode: 'padded',
          description: 'Grid of quick-action cards for common tasks: New Document, Order Lunch, View Calendar, etc.',
          code: `<QuickActions\n  onOrderLunch={() => handleOrderLunch()}\n/>`,
          render: () => <QuickActions />,
        },
        {
          id: 'comp-widget', label: 'WidgetContainer', badge: 'Component', canvasMode: 'padded',
          description: 'Reusable widget shell with title, header action slot, content area, and footer buttons.',
          code: `<WidgetContainer\n  title="Card title"\n  headerActions={<SettingsIcon />}\n  footerActions={[{ id: 'action1', label: 'Button', icon: <PlusIcon /> }]}\n>\n  <YourContent />\n</WidgetContainer>`,
          render: () => (
            <div style={{ maxWidth: 360, height: 360 }}>
              <WidgetContainer
                title="Card title"
                headerActions={<button style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', borderRadius: 4, cursor: 'pointer' }}><Settings20Regular /></button>}
                footerActions={[{ id: 'btn', label: 'Button', icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z" fill="#242424"/></svg> }]}
              >
                <div style={{ padding: 24, textAlign: 'center', color: '#616161', fontSize: 13, fontFamily: '"Segoe UI", sans-serif' }}>Content area</div>
              </WidgetContainer>
            </div>
          ),
        },
        {
          id: 'comp-engage', label: 'EngageWidget', badge: 'Component', canvasMode: 'padded',
          description: 'Viva Engage activity widget showing community posts and engagement counts.',
          code: `<EngageWidget />`,
          render: () => <div style={{ maxWidth: 360, height: 360 }}><EngageWidget /></div>,
        },
        {
          id: 'comp-benefits', label: 'BenefitsWidget', badge: 'Component', canvasMode: 'padded',
          description: 'Employee benefits summary widget with key benefit categories.',
          code: `<BenefitsWidget />`,
          render: () => <div style={{ maxWidth: 360, height: 360 }}><BenefitsWidget /></div>,
        },
        {
          id: 'comp-learning', label: 'LearningWidget', badge: 'Component', canvasMode: 'padded',
          description: 'Learning & development widget showing recommended courses and progress.',
          code: `<LearningWidget />`,
          render: () => <div style={{ maxWidth: 360, height: 360 }}><LearningWidget /></div>,
        },
        {
          id: 'comp-coworker', label: 'CoworkerCard', badge: 'Component', canvasMode: 'padded',
          description: 'Compact coworker grid card showing 4 avatar circles with names and a CTA button.',
          code: `<CoworkerCard />`,
          render: () => <div style={{ maxWidth: 340 }}><CoworkerCard /></div>,
        },
        {
          id: 'comp-activity', label: 'ActivityCard', badge: 'Component', canvasMode: 'padded',
          description: 'Activity summary card showing comments, mentions, and tasks with orange gradient indicators.',
          code: `<ActivityCard />`,
          render: () => <div style={{ maxWidth: 340 }}><ActivityCard /></div>,
        },
        {
          id: 'comp-chatinput', label: 'ChatInput', badge: 'Component', canvasMode: 'padded',
          description: 'Message input with gradient border, tools/sources dropdowns, and Shift+Enter multiline support.',
          code: `<ChatInput\n  onSubmit={(message) => handleMessage(message)}\n/>`,
          render: () => <ChatInput onSubmit={() => {}} />,
        },
      ],
    },
  ];
}

// ─── Gallery nav ─────────────────────────────────────────────────────────────────

function GalleryNav({
  sections,
  selectedId,
  onSelect,
  showChangelog,
  onChangelogClick,
}: {
  sections: NavSection[];
  selectedId: string;
  onSelect: (id: string) => void;
  showChangelog: boolean;
  onChangelogClick: () => void;
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <nav style={{
      width: 252, flexShrink: 0, backgroundColor: '#ffffff',
      borderRight: '1px solid #ebebeb', display: 'flex', flexDirection: 'column',
      height: '100vh', overflow: 'hidden', position: 'sticky', top: 0,
    }}>

      {/* Header */}
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: '#f0f1ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <img src="/assets/images/ZavaCore_logo.svg" alt="" style={{ width: 16, height: 16 }} />
          </div>
          <div>
            <div style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: 13, fontWeight: 700, color: '#1a1a1a', lineHeight: '18px' }}>Component Library</div>
            <div style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: 11, color: '#aaa', lineHeight: '16px' }}>ZavaCore · v1.0</div>
          </div>
        </div>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: 12, color: '#999', textDecoration: 'none',
          fontFamily: '"Segoe UI", sans-serif', padding: '4px 8px',
          borderRadius: 6, margin: '-4px -8px', transition: 'color 0.1s',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = '#464feb'; e.currentTarget.style.backgroundColor = '#f0f1ff'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#999'; e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          <ArrowLeftRegular style={{ width: 12, height: 12 }} />
          Back to app
        </Link>
      </div>

      {/* Sections */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0 16px' }}>
        {sections.map(section => {
          const isOpen = !collapsed[section.id];
          return (
            <div key={section.id} style={{ marginTop: 12 }}>

              {/* Section label row */}
              <button
                onClick={() => toggle(section.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '4px 20px 6px', backgroundColor: 'transparent', border: 'none',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#616161', display: 'flex' }}>{section.icon}</span>
                  <span style={{
                    fontFamily: '"Segoe UI", sans-serif', fontSize: 11, fontWeight: 700,
                    color: '#424242', letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    {section.label}
                  </span>
                  <span style={{
                    fontFamily: '"Segoe UI", sans-serif', fontSize: 10, fontWeight: 600,
                    color: '#888', backgroundColor: '#efefef',
                    padding: '1px 5px', borderRadius: 6, lineHeight: '14px',
                    marginLeft: 2,
                  }}>
                    {section.items.length}
                  </span>
                </div>
                <ChevronDownRegular style={{
                  width: 13, height: 13, color: '#ccc',
                  transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                  transition: 'transform 0.15s',
                  flexShrink: 0,
                }} />
              </button>

              {/* Items */}
              {isOpen && (
                <div style={{ padding: '2px 10px 4px' }}>
                  {section.items.map(item => {
                    const selected = selectedId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        style={{
                          display: 'block', width: '100%', textAlign: 'left',
                          padding: '8px 12px',
                          margin: '1px 0',
                          backgroundColor: selected ? '#eef0ff' : 'transparent',
                          border: 'none',
                          borderRadius: 8, cursor: 'pointer',
                          fontFamily: '"Segoe UI", sans-serif', fontSize: 13,
                          color: selected ? '#464feb' : '#555',
                          fontWeight: selected ? 600 : 400,
                          lineHeight: '18px',
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                          transition: 'background-color 0.1s, color 0.1s',
                        }}
                        onMouseEnter={e => { if (!selected) { e.currentTarget.style.backgroundColor = '#f5f5f7'; e.currentTarget.style.color = '#1a1a1a'; } }}
                        onMouseLeave={e => { if (!selected) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#555'; } }}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Changelog entry */}
      <div style={{ padding: '8px 10px 12px', borderTop: '1px solid #f0f0f0' }}>
        <button
          onClick={onChangelogClick}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', padding: '8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
            backgroundColor: showChangelog ? '#eef0ff' : 'transparent',
            fontFamily: '"Segoe UI", sans-serif', fontSize: 13,
            color: showChangelog ? '#464feb' : '#555',
            fontWeight: showChangelog ? 600 : 400,
            transition: 'background-color 0.1s, color 0.1s',
          }}
          onMouseEnter={e => { if (!showChangelog) { e.currentTarget.style.backgroundColor = '#f5f5f7'; e.currentTarget.style.color = '#1a1a1a'; }}}
          onMouseLeave={e => { if (!showChangelog) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#555'; }}}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Changelog
          </div>
          <span style={{
            fontFamily: '"Segoe UI", sans-serif', fontSize: 10, fontWeight: 600,
            color: showChangelog ? '#464feb' : '#888', backgroundColor: showChangelog ? '#d8dcff' : '#efefef',
            padding: '1px 5px', borderRadius: 6, lineHeight: '14px',
          }}>
            {CHANGELOG.length}
          </span>
        </button>
      </div>

    </nav>
  );
}

// ─── Content panel ───────────────────────────────────────────────────────────────

function ContentPanel({ item }: { item: GalleryItem }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflowY: 'auto', backgroundColor: '#fff' }}>
      {/* Breadcrumb header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        backgroundColor: '#fff', borderBottom: '1px solid #e6e6e6',
        padding: '12px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: '"Segoe UI", sans-serif', fontSize: 13, color: '#616161' }}>
          <span>Library</span>
          <span style={{ color: '#d1d1d1' }}>/</span>
          <span style={{ color: '#242424', fontWeight: 600 }}>{item.label}</span>
        </div>
        <Badge type={item.badge} />
      </div>

      {/* Title + description — always top-left, no centering */}
      <div style={{ padding: '32px 40px 0' }}>
        <h1 style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: 24, fontWeight: 700, color: '#242424', margin: '0 0 8px' }}>
          {item.label}
        </h1>
        <p style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: 14, color: '#616161', margin: 0, lineHeight: '22px', maxWidth: 600 }}>
          {item.description}
        </p>
      </div>

      {/* Canvas + code — centered column up to 1440px */}
      <div style={{ maxWidth: 1440, marginLeft: 'auto', marginRight: 'auto', width: '100%', padding: '28px 40px 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>

        {/* Canvas */}
        <div>
          <p style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 10px' }}>
            Preview
          </p>
          <Canvas item={item} />
        </div>

        {/* Code */}
        <div style={{ maxWidth: 900 }}>
          <p style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 10px' }}>
            Usage
          </p>
          <CodeBlock code={item.code} />
        </div>

      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────────

export default function ComponentGallery() {
  const sections = buildSections();
  const allItems = sections.flatMap(s => s.items);
  const [selectedId, setSelectedId] = useState(allItems[0].id);
  const [showChangelog, setShowChangelog] = useState(false);

  const selectedItem = allItems.find(i => i.id === selectedId)!;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setShowChangelog(false);
  };

  const handleChangelogNavigate = (id: string) => {
    if (id) handleSelect(id);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: '#fff' }}>
      <GalleryNav
        sections={sections}
        selectedId={showChangelog ? '' : selectedId}
        onSelect={handleSelect}
        showChangelog={showChangelog}
        onChangelogClick={() => setShowChangelog(true)}
      />
      {showChangelog
        ? <ChangelogPanel onNavigate={handleChangelogNavigate} />
        : <ContentPanel item={selectedItem} />
      }
    </div>
  );
}
