export default function AnimatedLoader() {
  return (
    <div style={{ width: '120px', height: '12px', overflow: 'hidden', borderRadius: '6px' }}>
      <style>{`
        @keyframes copilot-aurora {
          0% {
            transform: scaleX(0.04) scaleY(0.5);
            opacity: 0.7;
          }
          15% {
            transform: scaleX(0.35) scaleY(0.75);
            opacity: 0.9;
          }
          50% {
            transform: scaleX(1) scaleY(1);
            opacity: 1;
          }
          85% {
            transform: scaleX(0.35) scaleY(0.75);
            opacity: 0.9;
          }
          100% {
            transform: scaleX(0.04) scaleY(0.5);
            opacity: 0.7;
          }
        }
      `}</style>
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '6px',
          background: 'linear-gradient(90deg, #6572EB 0%, #AB6EF7 25%, #D65BAF 50%, #F6886F 75%, #35A2A9 100%)',
          animation: 'copilot-aurora 2.46s ease-in-out infinite',
          transformOrigin: '30% center',
        }}
      />
    </div>
  );
}
