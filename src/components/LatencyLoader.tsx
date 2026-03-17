export default function LatencyLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, height: 20 }}>
      <style>{`
        @keyframes latency-bounce {
          0%, 60%, 100% { transform: translateY(0);   opacity: 0.4; }
          30%            { transform: translateY(-5px); opacity: 1;   }
        }
        .ld { width: 7px; height: 7px; border-radius: 50%; animation: latency-bounce 1.2s ease-in-out infinite; }
        .ld-1 { background: #2db4ff; animation-delay: 0ms; }
        .ld-2 { background: #464feb; animation-delay: 150ms; }
        .ld-3 { background: #d660ff; animation-delay: 300ms; }
      `}</style>
      <div className="ld ld-1" />
      <div className="ld ld-2" />
      <div className="ld ld-3" />
    </div>
  );
}
