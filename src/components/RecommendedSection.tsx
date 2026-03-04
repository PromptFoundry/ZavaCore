import gameChangerImg from '../assets/images/game changer.png';
import avatar1 from '../assets/images/Avatar/People Card-Avatar/Avatar.png';
import avatar2 from '../assets/images/Avatar/People Card-Avatar/Avatar-1.png';
import avatar3 from '../assets/images/Avatar/People Card-Avatar/Avatar-2.png';
import avatar4 from '../assets/images/Avatar/People Card-Avatar/Avatar-3.png';

// Background images
const imgEventBg   = '/assets/icons/figma/e776d7414b99a26f2356a45d9e181619111ef9c6.png';
const imgVideoBg1  = '/assets/icons/figma/662c3703497ecb0cbabd9bdb61b81b30b02d66f1.png';
const imgVideoBg2  = '/assets/icons/figma/e1513b7c8e1d03d16ec83fe6ecbb53118b8ff825.png';
const imgVideoBg3  = '/assets/icons/figma/b4bb867da8e1eadb1dc92d70a84566996cd165cd.png';

// Calendar badge layers (Color 1–4)
const calColor4 = '/assets/icons/figma/bbff3dc4db695d3eaf095f248db7693dbc4d7d46.svg';
const calColor3 = '/assets/icons/figma/7fb8dcb6b502cf15a02fa123914454702679b8fb.svg';
const calColor2 = '/assets/icons/figma/edc7a7b96970afce06e2f5e95f23e9a48c5b2d6e.svg';
const calColor1 = '/assets/icons/figma/9d45cab8a9f224b16aaae0f9454c04f4c3e54844.svg';

// Video badge layers
const videoOuter  = '/assets/icons/figma/edd2c69eed243e24460e30ac2edf8f793fff704d.svg';
const videoInner  = '/assets/icons/figma/7a9eeba63e6922c727dd3321de35d7952d5b221a.svg';
const videoPlay   = '/assets/icons/figma/1599e9f02367ebeb26343196b1b748f3f54ca9ee.svg';

// Stat pill icons (white SVGs rendered on gradient bg)
const iconComment   = '/assets/icons/figma/619f7b899755b728d879306d9053b95b76758acc.svg';
const iconMention   = '/assets/icons/figma/9b871106d8237288482f9ee451ced2bd86feea39.svg';
const iconCheckmark = '/assets/icons/figma/03ee87a362f889ede11223975659c6bf78734da2.svg';

// Video clip & play icons
const iconVideoClip = '/assets/icons/figma/2214b597637ab0d899b58040545efa0647269f39.svg';
const iconPlayCircle = '/assets/icons/figma/73f1e30c6c4edfba1a7ba1cf72014347a8fae915.svg';
const iconPlayArrow = '/assets/icons/figma/b355400a76e91767768126c8b2eabf46bede511b.svg';

// Avatars
const avatars = [avatar1, avatar2, avatar3, avatar4];

const shadow = '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)';
const statGradient = 'linear-gradient(222.481deg, rgb(49,215,241) 12.925%, rgb(138,97,210) 94.343%)';

function CalendarBadge() {
  return (
    <div style={{ position: 'absolute', top: 10, right: 10, width: 40, height: 40, borderRadius: 8, backgroundColor: 'rgba(230,230,230,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 32, height: 32.65, overflow: 'hidden' }}>
        {/* Color 4 — calendar body */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, calc(-50% + 2.8px))', width: 24.257, height: 18.659 }}>
          <img src={calColor4} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
        {/* Color 3 — inner area */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, calc(-50% + 2.8px))', width: 24.257, height: 18.659 }}>
          <img src={calColor3} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
        {/* Color 2 — date dots */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, calc(-50% + 2.8px))', width: 13.061, height: 7.464 }}>
          <img src={calColor2} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
        {/* Color 1 — header bar */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, calc(-50% - 8.86px))', width: 24.257, height: 6.531 }}>
          <img src={calColor1} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
      </div>
    </div>
  );
}

function VideoBadge() {
  return (
    <div style={{ position: 'absolute', top: 10, right: 10, width: 40, height: 40, borderRadius: 8, backgroundColor: 'rgba(230,230,230,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 29.854, height: 29.854 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 24.257, height: 24.257 }}>
          <img src={videoOuter} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 22.391, height: 22.391 }}>
          <img src={videoInner} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(calc(-50% + 0.47px), -50%)', width: 10.262, height: 11.195 }}>
          <img src={videoPlay} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
      </div>
    </div>
  );
}

function StatPill({ icon, count, label, iconOffsetY = '50%' }: { icon: string; count: string; label: string; iconOffsetY?: string }) {
  return (
    <div style={{ flex: 1, backgroundColor: '#fdfdff', border: '0.7px solid #e5e5e5', borderRadius: 12, padding: 8, display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden', minWidth: 0 }}>
      {/* Gradient icon box — 32×32, clip area starts at left:4 top:4.05, size:23.894 */}
      <div style={{ width: 32, height: 32, borderRadius: 8, background: statGradient, flexShrink: 0, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 4, top: 4.05, width: 23.894, height: 23.894, overflow: 'hidden' }}>
          <img
            src={icon}
            alt=""
            style={{
              position: 'absolute',
              left: '50%',
              top: iconOffsetY,
              transform: 'translate(-50%, -50%)',
              width: 19.912,
              height: 19.912,
              display: 'block',
            }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, height: 32, justifyContent: 'center', overflow: 'hidden' }}>
        <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: 14, fontWeight: 700, lineHeight: '20px', color: '#242424', overflow: 'hidden' }}>{count}</p>
        <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: 10, fontWeight: 400, lineHeight: '14px', color: '#616161', overflow: 'hidden' }}>{label}</p>
      </div>
    </div>
  );
}

export default function RecommendedSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* Section heading */}
      <h2 style={{
        margin: 0,
        fontFamily: '"Segoe UI", sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '32px',
        color: '#242424',
        fontVariationSettings: "'opsz' 36",
      }}>
        Recommended for you
      </h2>

      {/* 3-col grid */}
      <div className="widget-grid-3col recommended-grid">

        {/* ── Left: Event Card ── */}
        <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: shadow, cursor: 'pointer' }}>
          <div style={{ position: 'absolute', inset: -32, backgroundImage: `url("${imgEventBg}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(225.832deg, rgba(255,0,135,0.2) 1.7136%, rgba(68,38,127,0.9) 92.1%)' }} />
          <CalendarBadge />
          <div style={{ position: 'absolute', bottom: 25, left: 28, width: 218, display: 'flex', flexDirection: 'column', gap: 8, color: '#fff' }}>
            <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: '22px', fontVariationSettings: "'opsz' 10.5" }}>
              From Production To Precision: How AI Is Reshaping Manufacturing
            </p>
            <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>
              Upcoming event · Nov 14, 2026
            </p>
          </div>
        </div>

        {/* ── Middle: 2 Prompt Cards ── */}
        <div className="recommended-middle" style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%', justifyContent: 'center' }}>

          {/* Card 1 – Summarize: wrapper is relative/full-width, inner card is absolute inset-0 */}
          <div style={{ position: 'relative', height: 133, borderRadius: 24, flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fff', border: '0.5px solid #f0f0f0', boxShadow: shadow, borderRadius: 24, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 13, cursor: 'pointer' }}>
              <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: 16, fontWeight: 600, lineHeight: '22px', color: 'rgba(0,0,0,0.86)', whiteSpace: 'pre-wrap' }}>
                {'Summarize what people in my \norg are working on...'}
              </p>
              {/* Avatar group — pr:6, overlap -8px */}
              <div style={{ display: 'flex', alignItems: 'center', paddingRight: 6 }}>
                {avatars.map((src, i) => (
                  <div key={i} style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', border: '2px solid #fff', marginLeft: i > 0 ? -12 : 0, flexShrink: 0 }}>
                    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
                <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#e0e0e0', border: '2px solid #fff', marginLeft: -12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Segoe UI", sans-serif', fontSize: 13, fontWeight: 600, color: '#424242' }}>
                  +5
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 – Attention */}
          <div style={{ position: 'relative', height: 133, borderRadius: 24, flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fff', border: '0.5px solid #f0f0f0', boxShadow: shadow, borderRadius: 24, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 13, cursor: 'pointer' }}>
              <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: 16, fontWeight: 600, lineHeight: '22px', color: 'rgba(0,0,0,0.86)', whiteSpace: 'pre-wrap' }}>
                {'Highlight what needs \nmy attention today'}
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <StatPill icon={iconComment}   count="12" label="Comments" iconOffsetY="calc(50% + 0.5px)" />
                <StatPill icon={iconMention}   count="3"  label="Mentions"  />
                <StatPill icon={iconCheckmark} count="8"  label="Tasks"     />
              </div>
            </div>
          </div>

        </div>

        {/* ── Right: Video Card ── */}
        <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: shadow, cursor: 'pointer' }}>
          <div style={{ position: 'absolute', inset: -32, backgroundImage: `url("${gameChangerImg}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: '105px', background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }} />

          <VideoBadge />

          {/* Play button */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', width: 40, height: 40 }}>
            <img src={iconPlayCircle} alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} />
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(calc(-50% + 1.54px), -50%)', width: 16.921, height: 18.463 }}>
              <img src={iconPlayArrow} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
            </div>
          </div>

          {/* Text */}
          <div style={{ position: 'absolute', bottom: 24, left: 24, width: 303, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: '22px', color: '#fff', fontVariationSettings: "'opsz' 10.5" }}>
              Game Changer: How Gen AI Is Revolutionizing SmartMesh™
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 20, height: 20, overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={iconVideoClip} alt="" style={{ width: 12, height: 10, display: 'block' }} />
              </div>
              <span style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#fff' }}>Spotlight · 6m</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
