export default function AnimatedLoader() {
  return (
    <div className="flex items-center justify-start gap-1.5 h-5">
      <style>{`
        @keyframes shapeAnimation {
          0% {
            transform: scale(0);
            opacity: 0;
            background: #a855f7;
          }
          10% {
            transform: scale(0.6);
            opacity: 0.8;
            background: #a855f7;
          }
          20% {
            transform: scale(1);
            opacity: 1;
            background: #c026d3;
          }
          30% {
            transform: scale(1.1);
            opacity: 1;
            background: #db2777;
          }
          40% {
            transform: scale(1.15);
            opacity: 1;
            background: #e879a7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
            background: #f87171;
          }
          60% {
            transform: scale(1);
            opacity: 0.9;
            background: #fb923c;
          }
          70% {
            transform: scale(0.9);
            opacity: 0.7;
            background: #14b8a6;
          }
          80% {
            transform: scale(0.7);
            opacity: 0.5;
            background: #3b82f6;
          }
          90% {
            transform: scale(0.4);
            opacity: 0.3;
            background: #8b5cf6;
          }
          100% {
            transform: scale(0);
            opacity: 0;
            background: #a855f7;
          }
        }

        .animated-shape {
          border-radius: 50px;
          animation: shapeAnimation 2.5s ease-in-out infinite;
          transform-origin: center;
        }

        .animated-shape-1 {
          width: 10px;
          height: 10px;
          animation-delay: 0s;
        }

        .animated-shape-2 {
          width: 14px;
          height: 10px;
          animation-delay: 0.15s;
        }

        .animated-shape-3 {
          width: 22px;
          height: 10px;
          animation-delay: 0.3s;
        }

        .animated-shape-4 {
          width: 12px;
          height: 12px;
          animation-delay: 0.45s;
        }

        .animated-shape-5 {
          width: 26px;
          height: 10px;
          animation-delay: 0.6s;
        }

        .animated-shape-6 {
          width: 11px;
          height: 11px;
          animation-delay: 0.75s;
        }
      `}</style>

      <div className="animated-shape animated-shape-1"></div>
      <div className="animated-shape animated-shape-2"></div>
      <div className="animated-shape animated-shape-3"></div>
      <div className="animated-shape animated-shape-4"></div>
      <div className="animated-shape animated-shape-5"></div>
      <div className="animated-shape animated-shape-6"></div>
    </div>
  );
}
