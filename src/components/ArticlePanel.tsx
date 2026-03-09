import React from 'react';
import {
  Dismiss20Regular,
  ArrowUpRight20Regular,
  ThumbLike20Regular,
  ThumbLike16Regular,
  Chat20Regular,
  Chat16Regular,
  Bookmark20Regular,
  Eye20Regular,
  MoreHorizontal16Regular,
} from '@fluentui/react-icons';
import zavalLogo from '../assets/images/ZavaCore_logo.svg';

interface ArticlePanelProps {
  isOpen: boolean;
  onClose: () => void;
  articleType?: 'helixweave' | 'quarterly';
}

const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };
const merriweather: React.CSSProperties = { fontFamily: '"Merriweather", Georgia, serif' };
const bigShoulders: React.CSSProperties = { fontFamily: '"Big Shoulders Display", "Arial Black", sans-serif' };

const imgTitleRegion = 'https://www.figma.com/api/mcp/asset/4e4b3496-c249-4b7b-9354-fbb2fae486c2';
const imgLeft = 'https://www.figma.com/api/mcp/asset/df013b2a-588c-4d82-ae52-574e7490ee09';
const imgTopRight = 'https://www.figma.com/api/mcp/asset/9fbb9f16-46b3-45cb-966b-12d97ae46553';
const imgBottomRight = 'https://www.figma.com/api/mcp/asset/1d000646-9a9b-44f5-946d-59e5921ae02b';
const imgSlightlySmilingFace = 'https://www.figma.com/api/mcp/asset/c5f51278-532b-45b2-b5f2-24121c524759';

const comments = [
  {
    name: 'Daisy Phillips',
    time: '3hr ago',
    avatar: '/assets/images/Avatar-1.png',
    text: 'Congrats! Really nice analysis, deserves to be shared broadly with the org.',
    reactions: [
      { emoji: '👍', label: 'Thumbs up' },
      { emoji: '❤️', label: 'Red heart' },
    ],
    reactionCount: '15',
  },
  {
    name: 'Miguel Garcia',
    time: '45 min ago',
    avatar: '/assets/images/Avatar-2.png',
    text: 'Exciting!\nI will have to A primary driver of propeller performance is the development of next-generation composites that offer an optimal balance of stiffness, strength, and weight.',
    reactions: [
      { emoji: '👍', label: 'Thumbs up' },
    ],
    reactionCount: '8',
  },
  {
    name: 'Kat Larsson',
    time: '20 min ago',
    avatar: '/assets/images/Avatar-3.png',
    text: 'Challenges? Navigating complex and evolving regulatory frameworks, ensuring operational safety and airspace integration, addressing security vulnerabilities like hijacking, and managing funding and economic hurdles.',
    reactions: [],
    reactionCount: null,
  },
];

function SubtleButton({ icon, label, small = false }: { icon: React.ReactNode; label: string; small?: boolean }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      style={{
        display: 'flex', alignItems: 'center', gap: small ? 3 : 4,
        padding: small ? '3px 6px' : '4px 8px',
        background: hover ? '#f0f0f0' : 'transparent',
        border: 'none', borderRadius: 4, cursor: 'pointer',
        ...seg, fontSize: small ? 12 : 14, color: '#333', fontWeight: 400,
        transition: 'background 0.1s',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default function ArticlePanel({ isOpen, onClose, articleType = 'helixweave' }: ArticlePanelProps) {
  const isQuarterly = articleType === 'quarterly';
  return (
    <div
      className={`h-screen flex-shrink-0 flex flex-col overflow-hidden bg-white transition-[width] duration-300 ease-in-out border-l border-[#e0e0e0] ${
        isOpen ? 'w-[48vw] lg:w-[55vw] xl:w-[62vw]' : 'w-0'
      }`}
    >
      {/* Panel Header */}
      <div style={{
        height: 60, padding: '0 16px', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid #e0e0e0', minWidth: 300,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, flex: 1 }}>
          <img src={zavalLogo} alt="ZavaCore" style={{ width: 20, height: 20, flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{ ...seg, fontSize: 14, fontWeight: 600, color: '#242424', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {isQuarterly ? 'HelixWeave™ brings real-time adaptive response...' : 'ZavaCore unveils adaptive weave break...'}
            </span>
            <span style={{ ...seg, fontSize: 12, color: '#616161' }}>{isQuarterly ? 'The Source · 2h' : 'Zava News · 7h'}</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <button
            style={{
              display: 'flex', alignItems: 'center', gap: 4,
              padding: '5px 10px', backgroundColor: 'transparent',
              border: '1px solid #d1d1d1', borderRadius: 6, cursor: 'pointer',
              ...seg, fontSize: 13, color: '#242424',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <span>Open in SharePoint</span>
            <ArrowUpRight20Regular style={{ width: 16, height: 16 }} />
          </button>
          <button
            onClick={onClose}
            style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 6 }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <Dismiss20Regular style={{ width: 20, height: 20, color: '#424242' }} />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>

        {/* ── Title Region ── */}
        <div style={{
          position: 'relative', width: '100%', flexShrink: 0,
          display: 'flex', flexDirection: 'column', gap: 17,
          alignItems: 'center', padding: 34,
          overflow: 'hidden',
        }}>
          {/* Background layers */}
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'white' }} />
            <img
              alt=""
              src={isQuarterly ? `${import.meta.env.BASE_URL}assets/images/helix-banner.jpg` : imgTitleRegion}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
            }} />
          </div>

          {/* Content wrapper */}
          <div style={{
            position: 'relative', display: 'flex', flexDirection: 'column',
            gap: 34, alignItems: 'center', width: '100%', maxWidth: 774, flexShrink: 0,
          }}>
            {/* Badge */}
            <div style={{
              border: 0, borderColor: '#f7630c', borderStyle: 'solid',
              display: 'flex', flexDirection: 'column', gap: 0,
              alignItems: 'flex-start', justifyContent: 'center',
              padding: 0,
            }}>
              <p style={{
                ...bigShoulders, fontWeight: 900,
                fontSize: 14, lineHeight: 1.6, color: 'white',
                textAlign: 'center', letterSpacing: '0.28px',
                textTransform: 'uppercase', whiteSpace: 'nowrap', margin: 0,
              }}>
                {isQuarterly ? 'Internal Update' : 'Status Update'}
              </p>
            </div>

            {/* Headline */}
            <p style={{
              ...bigShoulders, fontWeight: 700,
              fontSize: 56, lineHeight: 1.2, color: 'white',
              textAlign: 'center', margin: 0, minWidth: '100%', width: 'min-content',
              textShadow: '0px 0px 8px rgba(0,0,0,0.2), 0px 32px 64px rgba(0,0,0,0.24)',
            }}>
              {isQuarterly
                ? 'HelixWeave™ brings real-time adaptive response to next-generation performance textiles'
                : 'ZavaCore unveils adaptive weave breakthrough for extreme endurance environments'}
            </p>
          </div>
        </div>

        {/* ── Body Section ── */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex', gap: 17, alignItems: 'center', justifyContent: 'center',
          padding: 34, flexShrink: 0, width: '100%',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '100%', maxWidth: 774 }}>
            {isQuarterly ? (
              <div style={{ ...merriweather, fontSize: 16, color: '#333', width: '100%' }}>
                <p style={{ lineHeight: 1.6, marginBottom: 32, marginTop: 0 }}>
                  <span style={{ fontWeight: 700 }}>ZavaCore introduces HelixWeave™ adaptive fabric engineered for real-time performance response. </span>
                  <span style={{ fontWeight: 400 }}>The HelixWeave™ initiative marks a major step forward in ZavaCore's pursuit of responsive performance textiles. Developed through multiple prototype cycles, the new fabric architecture introduces a dynamic fiber system capable of adapting to the physical demands placed on it during movement.</span>
                </p>
                <p style={{ lineHeight: 1.6, marginBottom: 32, marginTop: 0 }}>
                  HelixWeave™ is built on a lattice of micro-responsive strands that react instantly to shifts in temperature, exertion, and directional movement. Rather than behaving as a static material, the textile continuously adjusts its internal structure, reinforcing areas under strain while relaxing zones that require flexibility or ventilation.
                </p>
                <p style={{ lineHeight: 1.6, marginBottom: 32, marginTop: 0 }}>
                  <span style={{ fontWeight: 700 }}>What's new: </span>
                  <span style={{ fontWeight: 400 }}>HelixWeave™ integrates responsive fiber bundles that expand, contract, and redistribute tension in real time. This allows the fabric to dynamically balance support, mobility, and airflow depending on the intensity and type of activity.</span>
                </p>
                <p style={{ lineHeight: 1.6, marginBottom: 0, marginTop: 0 }}>
                  <span style={{ fontWeight: 700 }}>Why it matters: </span>
                  <span style={{ fontWeight: 400 }}>Traditional performance fabrics are engineered for a fixed set of conditions. HelixWeave™ moves beyond that limitation by adapting to the athlete or operator as conditions change. The result is improved endurance, reduced fatigue, and more consistent comfort across varied environments and workloads.</span>
                </p>
              </div>
            ) : (
              <div style={{ ...merriweather, fontSize: 16, color: '#333', width: '100%' }}>
                <p style={{ lineHeight: 1.6, marginBottom: 32, marginTop: 0 }}>
                  <span style={{ fontWeight: 700 }}>The Zephyr project has reached an exciting milestone: </span>
                  <span style={{ fontWeight: 400 }}>the completion of our initial prototype. This marks a significant step forward in our mission to create a drone that empowers sustainability and conservation efforts. WiZavaCore has introduced HelixWeave™, a next-gen textile architecture that dynamically stiffens under impact and relaxes during recovery, redefining how performance fabrics respond in motion.</span>
                </p>
                <p style={{ lineHeight: 1.6, marginBottom: 32, marginTop: 0 }}>
                  <span style={{ fontWeight: 700 }}>What's new: </span>
                  <span style={{ fontWeight: 400 }}>Built with embedded micro-responsive fibers, the material senses temperature shifts, muscle exertion, and directional force in real time. </span>
                </p>
                <p style={{ lineHeight: 1.6, marginBottom: 0, marginTop: 0 }}>
                  <span style={{ fontWeight: 700 }}>Why it matters: </span>
                  <span style={{ fontWeight: 400 }}>From elite athletics to industrial safety gear, adaptive textiles could reduce fatigue, improve recovery cycles, and enhance durability under repeated stress. With the prototype in hand, we're now gearing up for rigorous testing to validate its performance in real-world conditions. Simultaneously, preparations for early-stage manufacturing are underway, with a focus on refining processes to ensure quality and scalability.</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── Performance Trends Section ── */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex', flexDirection: 'column', gap: 17,
          alignItems: 'center', justifyContent: 'center',
          padding: 34, flexShrink: 0, width: '100%',
        }}>
          {/* Heading wrapper */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 0,
            alignItems: 'center', paddingTop: 0, flexShrink: 0, width: '100%', maxWidth: 774,
          }}>
            <p style={{
              ...bigShoulders, fontWeight: 700,
              fontSize: 32, lineHeight: 1.2, color: '#333',
              textAlign: 'center', width: '100%', margin: 0,
            }}>
              {isQuarterly ? 'Performance Trends and Product Impact' : 'Performance Trends and Product Impact'}
            </p>
          </div>

          {/* Body wrapper */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 0,
            alignItems: 'center', flexShrink: 0, width: '100%', maxWidth: 774,
          }}>
            <div style={{ ...merriweather, lineHeight: 1.6, fontSize: 16, color: '#333', width: '100%' }}>
              {isQuarterly ? (
                <>
                  <p style={{ marginBottom: 32, marginTop: 0 }}>
                    Since the introduction of HelixWeave™ into early testing programs, pilot participants have reported stronger performance stability across both endurance and high-intensity movement scenarios. Early field evaluations indicate measurable improvements in heat regulation and structural recovery following repeated stress cycles.
                  </p>
                  <p style={{ marginBottom: 32, marginTop: 0 }}>
                    Testing environments have also highlighted the textile's ability to maintain consistent responsiveness during extended wear periods, particularly in conditions involving rapid shifts in activity level or environmental temperature.
                  </p>
                  <p style={{ margin: 0 }}>
                    Initial data from controlled trials shows a 37% improvement in adaptive airflow regulation compared with conventional performance fabrics. Researchers also observed faster structural recovery after repeated compression events, suggesting strong potential for applications across athletics, industrial safety apparel, and next-generation wearable systems.
                  </p>
                </>
              ) : (
                <>
                  <p style={{ marginBottom: 32, marginTop: 0 }}>
                    Since the launch of ZavaCore Fiber v2 in mid-May 2026, pilot program feedback has surged by 52%, signaling strong engagement but also surfacing critical performance considerations. While adoption momentum remains high, field testing revealed durability and adaptive-response variability in high-exertion environments.
                  </p>
                  <p style={{ margin: 0 }}>
                    Quantitative metrics show a 29% increase in high-load stress reports during extreme endurance simulations compared to baseline fabric models, indicating deeper performance calibration opportunities under sustained strain.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Image Grid Section ── */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex', gap: 17, height: 680,
          alignItems: 'flex-start', justifyContent: 'center',
          padding: 34, flexShrink: 0, width: '100%',
        }}>
          <div style={{
            display: 'flex', flex: '1 0 0',
            gap: 32, height: '100%',
            alignItems: 'flex-start', justifyContent: 'flex-end',
            minHeight: 0, minWidth: 0, position: 'relative',
          }}>
            {/* Left tall image */}
            <div style={{ flex: '1 0 0', height: '100%', minHeight: 0, minWidth: 0, position: 'relative', borderRadius: 4, overflow: 'hidden' }}>
              <img
                alt=""
                src={isQuarterly ? `${import.meta.env.BASE_URL}assets/images/helix-weave-left.jpg` : imgLeft}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none', borderRadius: 4, pointerEvents: 'none' }}
              />
            </div>

            {/* Right stacked images */}
            <div style={{
              display: 'flex', flex: '1 0 0', flexDirection: 'column',
              gap: 34, height: '100%',
              alignItems: 'flex-start', justifyContent: 'center',
              minHeight: 0, minWidth: 0, position: 'relative',
            }}>
              <div style={{ flex: '1 0 0', minHeight: 0, minWidth: 0, position: 'relative', borderRadius: 4, overflow: 'hidden', width: '100%' }}>
                <img
                  alt=""
                  src={isQuarterly ? `${import.meta.env.BASE_URL}assets/images/helix-weave-top.jpg` : imgTopRight}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none', borderRadius: 4, pointerEvents: 'none' }}
                />
              </div>
              <div style={{ flex: '1 0 0', minHeight: 0, minWidth: 0, position: 'relative', borderRadius: 4, overflow: 'hidden', width: '100%' }}>
                <img
                  alt=""
                  src={isQuarterly ? `${import.meta.env.BASE_URL}assets/images/fiber-v2-bg.png` : imgBottomRight}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none', borderRadius: 4, pointerEvents: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Looking Ahead Section ── */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 17,
          alignItems: 'center', padding: 34, flexShrink: 0, width: '100%',
        }}>
          {/* Heading wrapper */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 0,
            alignItems: 'center', paddingTop: 0, flexShrink: 0, width: '100%', maxWidth: 774,
          }}>
            <p style={{
              ...bigShoulders, fontWeight: 700,
              fontSize: 32, lineHeight: 1.2, color: '#333',
              textAlign: 'center', width: '100%', margin: 0,
            }}>
              {isQuarterly ? 'Looking Ahead' : 'Looking Ahead'}
            </p>
          </div>

          {/* Body wrapper */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 0,
            alignItems: 'center', flexShrink: 0, width: '100%', maxWidth: 774,
          }}>
            <div style={{ ...merriweather, fontSize: 16, color: '#333', width: '100%' }}>
              {isQuarterly ? (
                <>
                  <p style={{ lineHeight: '28px', marginBottom: 32, marginTop: 0, color: '#424242' }}>
                    Three emerging insights have surfaced through prototype testing and field validation programs:
                  </p>
                  <ul style={{ listStyle: 'disc', paddingLeft: 24, marginBottom: 32, marginTop: 0 }}>
                    <li style={{ color: '#424242', fontSize: 16 }}>
                      <span style={{ lineHeight: '28px', fontWeight: 700 }}>Dynamic structural reinforcement </span>
                      <span style={{ lineHeight: '28px' }}>occurred most frequently during explosive movement phases, where HelixWeave™ fibers temporarily increased localized tension to stabilize motion.</span>
                    </li>
                    <li style={{ color: '#424242', fontSize: 16 }}>
                      <span style={{ lineHeight: '28px', fontWeight: 700 }}>Thermal response calibration </span>
                      <span style={{ lineHeight: '28px' }}>improved airflow consistency during extended activity periods, allowing the fabric to increase breathability as body temperature rose.</span>
                    </li>
                    <li style={{ color: '#424242', fontSize: 16 }}>
                      <span style={{ lineHeight: '28px', fontWeight: 700 }}>Adaptive load balancing </span>
                      <span style={{ lineHeight: '28px' }}>redistributed pressure across fiber channels during repeated stress cycles, helping maintain flexibility without sacrificing support.</span>
                    </li>
                  </ul>
                  <p style={{ lineHeight: '28px', marginBottom: 32, marginTop: 0, color: '#424242' }}>
                    Customer response has been overwhelmingly positive, particularly from partners exploring advanced performance apparel applications. In recent product validation surveys, 68% of testing partners identified adaptive responsiveness as the most valuable characteristic for next-generation textile platforms.
                  </p>
                  <p style={{ lineHeight: '28px', margin: 0, color: '#424242' }}>
                    Ongoing validation programs continue to expand across additional use cases, including endurance athletics, technical outerwear, and industrial performance gear. Early indicators suggest HelixWeave™ may serve as the foundation for a new category of intelligent textiles capable of evolving alongside the demands of human performance.
                  </p>
                </>
              ) : (
                <>
                  <p style={{ lineHeight: '28px', marginBottom: 32, marginTop: 0, color: '#424242' }}>
                    Three dominant themes have emerged across pilot programs and validation logs:
                  </p>
                  <ul style={{ listStyle: 'disc', paddingLeft: 24, marginBottom: 32, marginTop: 0 }}>
                    <li style={{ color: '#424242', fontSize: 16 }}>
                      <span style={{ lineHeight: '28px' }}>Dynamic tension lag </span>
                      <span style={{ lineHeight: '28px' }}>was observed in 34% of high-exertion trials, particularly during rapid directional shifts in field athletics testing.</span>
                    </li>
                    <li style={{ color: '#424242', fontSize: 16 }}>
                      <span style={{ lineHeight: '28px' }}>Thermal response variance led to inconsistent breathability in extended heat exposure scenarios, prompting recalibration of micro-responsive fibers.</span>
                    </li>
                    <li style={{ color: '#424242', fontSize: 16 }}>
                      <span style={{ lineHeight: '28px' }}>Load distribution imbalance under repeated compression cycles was flagged in industrial wear simulations, with measurable stiffness drift after prolonged strain.</span>
                    </li>
                  </ul>
                  <p style={{ lineHeight: '28px', marginBottom: 32, marginTop: 0, color: '#424242' }}>
                    Customer sentiment reflects both enthusiasm and precision feedback. In the Product Validation Summary, 63% of enterprise partners cited performance consistency as the top priority for full-scale deployment.
                  </p>
                  <p style={{ lineHeight: '28px', margin: 0, color: '#424242' }}>
                    Weekly validation reports show a noticeable spike in cross-pattern anomalies beginning May 18, aligning directly with expanded endurance testing protocols.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Discussion Section ── */}
        <div style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #b8b8b8',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          overflowX: 'clip', paddingTop: 34, paddingBottom: 34,
          flexShrink: 0, width: '100%',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexShrink: 0, width: '100%', maxWidth: 774 }}>

            {/* Discussion header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '100%', marginBottom: 12,
            }}>
              <p style={{
                ...seg, fontWeight: 600, fontSize: 24, lineHeight: '32px',
                color: '#333', margin: 0, whiteSpace: 'nowrap',
              }}>
                Discussion
              </p>
            </div>

            {/* Comments bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingTop: 8, paddingBottom: 8, width: '100%',
            }}>
              {/* Action buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <SubtleButton icon={<ThumbLike20Regular style={{ width: 20, height: 20, color: '#333' }} />} label="Like" />
                  <SubtleButton icon={<Chat20Regular style={{ width: 20, height: 20, color: '#333' }} />} label="Comment" />
                  <SubtleButton icon={<Bookmark20Regular style={{ width: 20, height: 20, color: '#333' }} />} label="Save for later" />
                  <SubtleButton icon={<Eye20Regular style={{ width: 20, height: 20, color: '#333' }} />} label="119 Views" />
                </div>
              </div>

              {/* Reactions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 20, lineHeight: 1, width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👍</span>
                <span style={{ fontSize: 20, lineHeight: 1, width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>❤️</span>
                <div style={{ position: 'relative', width: 20, height: 20, flexShrink: 0, overflow: 'clip' }}>
                  <img alt="" src={imgSlightlySmilingFace} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
                </div>
                <span style={{ ...seg, fontSize: 14, color: '#333' }}>Daisy Phillips and 34 others</span>
              </div>
            </div>

            {/* Comment 1 — Daisy Phillips */}
            {comments.map((comment) => (
              <div
                key={comment.name}
                style={{
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                  paddingBottom: 32, paddingTop: 12, width: '100%',
                }}
              >
                {/* Avatar */}
                <img
                  src={comment.avatar}
                  alt={comment.name}
                  style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />

                {/* Bubble */}
                <div style={{
                  flex: '1 0 0', minWidth: 0, minHeight: 0, position: 'relative',
                  backgroundColor: '#fafafa',
                  padding: '10px 12px',
                  borderRadius: 4,
                  display: 'flex', flexDirection: 'column', gap: 2,
                }}>
                  {/* Details row */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 17,
                    color: '#333', whiteSpace: 'nowrap',
                  }}>
                    <span style={{ ...seg, fontWeight: 600, fontSize: 12, lineHeight: '16px' }}>{comment.name}</span>
                    <span style={{ ...seg, fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#616161' }}>{comment.time}</span>
                  </div>

                  {/* Body text */}
                  <p style={{
                    ...seg, fontWeight: 400, fontSize: 14, lineHeight: '20px',
                    color: '#333', margin: 0, whiteSpace: 'pre-wrap',
                  }}>
                    {comment.text}
                  </p>

                  {/* Reaction badge (top-right, absolute) */}
                  {comment.reactions.length > 0 && (
                    <div style={{
                      position: 'absolute', top: -13, right: 12,
                      backgroundColor: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
                      gap: 4, padding: 4,
                      borderRadius: 9999,
                      boxShadow: '0px 2px 4px rgba(0,0,0,0.14), 0px 0px 2px rgba(0,0,0,0.12)',
                    }}>
                      {comment.reactions.map(r => (
                        <span key={r.label} style={{ fontSize: 16, lineHeight: 1, width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'clip', flexShrink: 0 }}>
                          {r.emoji}
                        </span>
                      ))}
                      <span style={{ ...seg, fontSize: 12, lineHeight: '16px', color: '#333' }}>{comment.reactionCount}</span>
                    </div>
                  )}

                  {/* Comment action buttons (absolute, bottom-[-28px]) */}
                  <div style={{
                    position: 'absolute', bottom: -28, left: 0,
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}>
                    <SubtleButton small icon={<ThumbLike16Regular style={{ width: 16, height: 16, color: '#616161' }} />} label="Like" />
                    <SubtleButton small icon={<Chat16Regular style={{ width: 16, height: 16, color: '#616161' }} />} label="Comment" />
                    <SubtleButton small icon={<MoreHorizontal16Regular style={{ width: 16, height: 16, color: '#616161' }} />} label="Comment" />
                  </div>
                </div>
              </div>
            ))}

            {/* Comment input row */}
            <div style={{
              display: 'flex', gap: 8, alignItems: 'center',
              width: '100%',
            }}>
              {/* User avatar */}
              <img
                src="/assets/images/Carole Poland.png"
                alt="Carole Poland"
                style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />

              {/* Input field */}
              <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                <div style={{
                  flex: '1 0 0', height: '100%', minHeight: 0, minWidth: 0,
                  backgroundColor: '#fafafa',
                  border: '1px solid #e0e0e0', borderRadius: 18,
                  padding: '8px 16px',
                  display: 'flex', alignItems: 'flex-start',
                }}>
                  <div style={{
                    flex: '1 0 0', minWidth: 0, minHeight: 0,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  }}>
                    <p style={{ ...seg, fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#616161', margin: 0 }}>
                      Write a comment
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
