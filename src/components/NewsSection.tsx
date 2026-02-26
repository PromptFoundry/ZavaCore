export default function NewsSection() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        padding: '40px 32px 80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1170px', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
        {/* Title */}
        <div style={{ width: '774px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '18px',
            lineHeight: 1.2,
            letterSpacing: '0.36px',
            textTransform: 'uppercase',
            color: '#242424',
            margin: 0,
          }}
        >
          Latest news
        </p>
      </div>

        {/* News Grid */}
        <div style={{ display: 'flex', gap: '32px', width: '100%', minWidth: '375px' }}>
        {/* Left Column - Featured News */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            minWidth: '375px',
          }}
        >
          <div
            style={{
              flex: 1,
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              padding: '16px',
              minHeight: '200px',
            }}
          >
            <img
              src="/src/assets/images/Thumbnail.png"
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'relative',
                backgroundColor: '#008aaa',
                padding: '4px 12px',
                borderRadius: '6px',
                display: 'inline-block',
              }}
            >
              <span style={{ fontSize: '12px', color: 'white', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                NEW
              </span>
            </div>
          </div>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: 1.2,
              color: '#242424',
              margin: 0,
            }}
          >
            Adaptive fabric technology that responds to performance needs in realtime
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: 1.4,
              color: '#616161',
              margin: 0,
            }}
          >
            Imagine trainers that adapt to terrain, track performance metrics, and optimize grip dynamically, combining
            advanced pressure sensors with AI-driven feedback loop.
          </p>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#008aaa',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                }}
              >
                S
              </div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '10px', color: '#605e5c' }}>
                Cassandra Dunn
              </span>
            </div>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '10px', color: '#605e5c' }}>
              2 days ago
            </span>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '10px', color: '#605e5c' }}>
              342 views
            </span>
          </div>
        </div>

        {/* Right Column - News List */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            minWidth: '375px',
          }}
        >
          {/* News Item 1 */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <img
              src="/src/assets/images/Thumbnail-1.png"
              alt=""
              style={{
                width: '160px',
                height: '100px',
                borderRadius: '8px',
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.2,
                  color: '#323130',
                  margin: 0,
                }}
              >
                SmartMesh – The Future of Connected Performance
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: 1.4,
                  color: '#616161',
                  margin: 0,
                  flex: 1,
                }}
              >
                SmartMesh is redefining how products communicate and adapt in real time. This ultra-light,
                sensor-integrated mesh enables seamless data flow between apparel, footwear, and external devices.
              </p>
              <div style={{ display: 'flex', gap: '8px', fontSize: '10px' }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'black' }}>
                  Laurence Gilbertson
                </span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#605e5c' }}>5 days ago</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#605e5c' }}>521 views</span>
              </div>
            </div>
          </div>

          {/* News Item 2 */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <img
              src="/src/assets/images/Thumbnail-2.png"
              alt=""
              style={{
                width: '160px',
                height: '100px',
                borderRadius: '8px',
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.2,
                  color: '#323130',
                  margin: 0,
                }}
              >
                Advanced Fabrics – Sustainability Meets Smart Functionality
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: 1.4,
                  color: '#616161',
                  margin: 0,
                  flex: 1,
                }}
              >
                Smart Cleats combine advanced pressure sensors with AI-driven feedback loops, offering athletes
                unparalleled control.
              </p>
              <div style={{ display: 'flex', gap: '8px', fontSize: '10px' }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'black' }}>
                  Marcus Johnson
                </span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#605e5c' }}>12 days ago</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#605e5c' }}>121 views</span>
              </div>
            </div>
          </div>

          {/* News Item 3 */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <img
              src="/src/assets/images/Thumbnail-3.png"
              alt=""
              style={{
                width: '160px',
                height: '100px',
                borderRadius: '8px',
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.2,
                  color: '#323130',
                  margin: 0,
                }}
              >
                SmartMesh – The Future of Connected Performance
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: 1.4,
                  color: '#616161',
                  margin: 0,
                  flex: 1,
                }}
              >
                Our latest fabric advancements combine eco-friendly materials with embedded micro-sensors, enabling
                garments to monitor temperature, moisture, and movement.
              </p>
              <div style={{ display: 'flex', gap: '8px', fontSize: '10px' }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'black' }}>Kat Larrsen</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#605e5c' }}>25 days ago</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#605e5c' }}>631 views</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
