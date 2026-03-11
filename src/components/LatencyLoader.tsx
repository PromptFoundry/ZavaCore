export default function LatencyLoader() {
  return (
    <div style={{ position: 'relative', width: '100%', height: 12, overflow: 'hidden' }}>
      <style>{`
        @keyframes latency-traverse {
          0%   { transform: translateX(-50%) scale(0);   opacity: 0; }
          50%  { transform: translateX(0%)   scale(1);   opacity: 1; }
          100% { transform: translateX(50%)  scale(0);   opacity: 0; }
        }
        .latency-dot {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border-radius: 50%;
          animation: latency-traverse 3600ms cubic-bezier(0.8, 0, 0.2, 1) infinite;
        }
        .latency-dot-1 {
          background: linear-gradient(to right, rgb(209, 97, 170), rgb(233, 109, 128));
          animation-delay: 0ms;
        }
        .latency-dot-2 {
          background: linear-gradient(to right, rgb(66, 163, 166), rgb(115, 175, 105));
          animation-delay: -1200ms;
        }
        .latency-dot-3 {
          background: linear-gradient(to right, rgb(101, 165, 221), rgb(129, 115, 238));
          animation-delay: -2400ms;
        }
      `}</style>
      <div className="latency-dot latency-dot-1" />
      <div className="latency-dot latency-dot-2" />
      <div className="latency-dot latency-dot-3" />
    </div>
  );
}
