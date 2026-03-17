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
    <div style={{ ...seg, display: 'flex', flexDirection: 'column', gap: 12 }}>

      {/* ── Agent byline ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 32 }}>
        <img src={zavcoreLogo} alt="" style={{ width: 24, height: 24 }} />
        <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '22px', color: '#424242' }}>
          ZavaCore Agent
        </span>
      </div>

      {/* ── Main text ── */}
      <div style={{ fontSize: 24, lineHeight: '28px', color: '#424242' }}>

        <p style={{ margin: '0 0 28px', fontWeight: 700 }}>
          ZavaCore Agent helps you stay on top of work—and get things done.
        </p>

        <p style={{ margin: '0 0 28px', fontWeight: 400 }}>
          You can use me to understand what's happening across ZavaCore, take care of everyday tasks, and find the right information without jumping between tools.
        </p>

        <p style={{ margin: '0 0 28px', fontWeight: 400 }}>Here's how I can help:</p>

        <ul style={{ margin: '0 0 28px', paddingLeft: 36, display: 'flex', flexDirection: 'column', gap: 28 }}>

          <li style={{ listStyle: 'disc' }}>
            <span style={{ fontWeight: 700 }}>Catch up quickly</span>
            <br />
            <span style={{ fontWeight: 400 }}>Get a weekly wrap of what's new, listen to a short audio summary, or see what needs your attention today—based on what's relevant to your work.</span>
          </li>

          <li style={{ listStyle: 'disc' }}>
            <span style={{ fontWeight: 700 }}>Take action on common work tasks</span>
            <br />
            <span style={{ fontWeight: 400 }}>Do things like:</span>
            <ul style={{ marginTop: 0, paddingLeft: 36, display: 'flex', flexDirection: 'column', gap: 0 }}>
              <li style={{ listStyle: 'disc', fontWeight: 400 }}>View your recent paystub</li>
              <li style={{ listStyle: 'disc', fontWeight: 400 }}>Review or manage your benefits</li>
              <li style={{ listStyle: 'disc', fontWeight: 400 }}>Book a shuttle or check schedules</li>
              <li style={{ listStyle: 'disc', fontWeight: 400 }}>Order lunch or manage your time</li>
            </ul>
          </li>

          <li style={{ listStyle: 'disc' }}>
            <span style={{ fontWeight: 700 }}>Find answers you can trust</span>
            <br />
            <span style={{ fontWeight: 400 }}>Ask questions about policies, tools, or workplace resources and get clear answers using ZavaCore information.</span>
          </li>

          <li style={{ listStyle: 'disc' }}>
            <span style={{ fontWeight: 700 }}>Navigate apps and resources</span>
            <br />
            <span style={{ fontWeight: 400 }}>I can point you to the right app, page, or tool—so you don't have to remember where everything lives.</span>
          </li>

          <li style={{ listStyle: 'disc' }}>
            <span style={{ fontWeight: 700 }}>Keep your work personalized</span>
            <br />
            <span style={{ fontWeight: 400 }}>Bring together updates, tasks, and information that matter to you, all in one place.</span>
          </li>

        </ul>

        <p style={{ margin: '0 0 28px', fontWeight: 400 }}>
          You can ask in your own words, request summaries, or jump straight into action.
        </p>

        <p style={{ margin: 0, fontWeight: 400 }}>What would you like to do next?</p>

      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, backgroundColor: 'rgba(0, 30, 68, 0.05)', margin: '4px 0' }} />

      {/* ── Footer ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 8 }}>

        {/* Sources pill */}
        <div>
          <button style={{
            ...seg,
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
              {[0, 1, 2].map(i => (
                <img key={i} src={zavcoreLogo} alt="" style={{ width: 16, height: 16, borderRadius: 2, objectFit: 'cover' }} />
              ))}
            </div>
            <ChevronDown16Regular style={{ width: 16, height: 16, color: '#424242', flexShrink: 0 }} />
          </button>
        </div>

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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-end', paddingTop: 8 }}>
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
