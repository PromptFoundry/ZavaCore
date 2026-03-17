import zavcoreLogo from '../assets/images/ZavaCore_logo.svg';
import {
  Pen20Regular,
  Share20Regular,
  CopyRegular,
  ThumbLikeRegular,
  ThumbDislikeRegular,
  MoreHorizontal20Regular,
  ChevronDown16Regular,
} from '@fluentui/react-icons';

const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };

const suggestions = [
  'Catch me up on the latest workplace news',
  'How do I write a Contoso project brief?',
  'What are the OKRs this quarter?',
];

const actionIcons = [
  { Icon: Pen20Regular, label: 'Edit' },
  { Icon: CopyRegular, label: 'Copy' },
  { Icon: Share20Regular, label: 'Share' },
  { Icon: ThumbLikeRegular, label: 'Good' },
  { Icon: ThumbDislikeRegular, label: 'Bad' },
  { Icon: MoreHorizontal20Regular, label: 'More' },
];

export default function AgentCapabilitiesResponse() {
  return (
    <div style={{ ...seg, display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* ── Agent byline ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <img src={zavcoreLogo} alt="" style={{ width: 20, height: 20 }} />
        <span style={{ fontSize: 13, color: '#616161' }}>· ZavaCore Agent</span>
      </div>

      {/* ── Heading ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h2 style={{ ...seg, margin: 0, fontSize: 28, fontWeight: 600, lineHeight: '36px', color: '#242424' }}>
          ZavaCore Agent helps you stay on top of work—and get things done.
        </h2>

        <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
          You can use me to understand what's happening across ZavaCore, take care of everyday tasks, and find the right information without jumping between tools.
        </p>

        <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
          Here's how I can help:
        </p>
      </div>

      {/* ── Capability list ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {[
          {
            emoji: '📰',
            title: 'Catch up quickly',
            body: 'Get a weekly wrap of what\u2019s new, listen to a short audio summary, or see what needs your attention today\u2014based on what\u2019s relevant to your work.',
          },
          {
            emoji: '💡',
            title: 'Find answers you can trust',
            body: 'Ask questions about policies, tools, or workplace resources and get clear answers using ZavaCore information.',
          },
          {
            emoji: '🧭',
            title: 'Navigate apps and resources',
            body: 'I can point you to the right app, page, or tool\u2014so you don\u2019t have to remember where everything lives.',
          },
          {
            emoji: '✨',
            title: 'Keep your work personalized',
            body: 'Bring together updates, tasks, and information that matter to you, all in one place.',
          },
        ].map(({ emoji, title, body }) => (
          <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424' }}>{emoji} {title}</p>
            <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>{body}</p>
          </div>
        ))}

        {/* Take action — with sub-items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '22px', color: '#242424' }}>✅ Take action on common work tasks</p>
          <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>Do things like:</p>
          <ul style={{ margin: 0, paddingLeft: 24, listStyleType: 'disc' }}>
            {[
              { emoji: '💰', text: 'View your recent paystub' },
              { emoji: '🏥', text: 'Review or manage your benefits' },
              { emoji: '🚌', text: 'Book a shuttle or check schedules' },
              { emoji: '🍱', text: 'Order lunch or manage your time' },
            ].map(({ emoji, text }) => (
              <li key={text} style={{ ...seg, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
                {emoji} {text}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── Closing ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
          You can ask in your own words, request summaries, or jump straight into action.
        </p>
        <p style={{ ...seg, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '28px', color: '#424242' }}>
          What would you like to do next?
        </p>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, backgroundColor: 'rgba(0, 30, 68, 0.05)' }} />

      {/* ── Footer ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Sources pill */}
        <button style={{
          ...seg, alignSelf: 'flex-start',
          display: 'flex', alignItems: 'center', gap: 6,
          height: 40, padding: '6px 12px',
          backgroundColor: 'transparent',
          border: '1px solid #e6e6e6',
          borderRadius: 8, cursor: 'pointer',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <span style={{ fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#424242' }}>Sources</span>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {[
              `${import.meta.env.BASE_URL}assets/images/source-icon-pin.png`,
              `${import.meta.env.BASE_URL}assets/images/source-icon-heart.png`,
              `${import.meta.env.BASE_URL}assets/images/source-icon-drop.png`,
              `${import.meta.env.BASE_URL}assets/images/source-icon-orbit.png`,
            ].map((src, i) => (
              <img key={i} src={src} alt="" style={{ width: 16, height: 16, borderRadius: 2, objectFit: 'cover' }} />
            ))}
          </div>
          <ChevronDown16Regular style={{ width: 16, height: 16, color: '#424242', flexShrink: 0 }} />
        </button>

        {/* Action bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {actionIcons.map(({ Icon, label }) => (
            <button
              key={label}
              title={label}
              style={{
                width: 24, height: 24,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'transparent', border: 'none',
                borderRadius: 4, cursor: 'pointer', color: '#616161', padding: 2,
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <Icon style={{ width: 20, height: 20 }} />
            </button>
          ))}
        </div>

      </div>

      {/* ── Suggestion chips ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-end' }}>
        {suggestions.map(text => (
          <button
            key={text}
            style={{
              ...seg,
              height: 32, padding: '0 12px',
              backgroundColor: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: 8, cursor: 'pointer',
              fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#424242',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {text}
          </button>
        ))}
      </div>

    </div>
  );
}
