import heroBg from '../assets/images/Zava agent background - gradient.png';

export default function HeroSection() {
  return (
    <div style={{ position: 'relative', width: '100%', padding: '114px 41px' }}>
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <img
          src={heroBg}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(8px)',
          backgroundColor: '#d9d9d9',
          mixBlendMode: 'color-burn',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1170px',
          }}
        >
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: '18px',
              lineHeight: 1.6,
              letterSpacing: '0.36px',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            OUR MISSION
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontSize: '59px',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Develop and deliver the most technically advanced, reliable, and innovative smart fiber materials solutions
            for a broad reach of industries.
          </p>
        </div>
      </div>
    </div>
  );
}
