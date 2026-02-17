export default function LoadingDots() {
  return (
    <div className="relative w-32 h-1 overflow-hidden rounded-full">
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        .copilot-loader-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(139, 92, 246, 0.2) 0%,
            rgba(59, 130, 246, 0.2) 16.67%,
            rgba(6, 182, 212, 0.2) 33.33%,
            rgba(16, 185, 129, 0.2) 50%,
            rgba(245, 158, 11, 0.2) 66.67%,
            rgba(239, 68, 68, 0.2) 83.33%,
            rgba(236, 72, 153, 0.2) 100%
          );
        }

        .copilot-loader-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(139, 92, 246, 0.8) 10%,
            rgba(59, 130, 246, 0.9) 20%,
            rgba(6, 182, 212, 1) 30%,
            rgba(16, 185, 129, 1) 40%,
            rgba(245, 158, 11, 0.9) 50%,
            rgba(239, 68, 68, 0.8) 60%,
            transparent 70%
          );
          animation: shimmer 1.5s infinite ease-in-out;
        }
      `}</style>
      <div className="copilot-loader-bg"></div>
      <div className="copilot-loader-shine"></div>
    </div>
  );
}
