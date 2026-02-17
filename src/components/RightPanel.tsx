import { Dismiss20Regular, ArrowUpRight20Regular } from '@fluentui/react-icons';

interface RightPanelProps {
  isOpen: boolean;
  onClose: () => void;
  entityTitle?: string;
  entityType?: string;
}

export default function RightPanel({
  isOpen,
  onClose,
  entityTitle = 'Summit Center Project Plan',
  entityType = 'Document',
}: RightPanelProps) {
  return (
    <div
      className={`fixed right-0 top-0 h-screen bg-white shadow-[-2px_0_8px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out z-30 w-full md:w-[600px] lg:w-[800px] xl:w-[956px] overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col min-h-full">
        {/* Header */}
        <div className="flex items-center justify-between h-[60px] px-3 md:px-6 border-b border-[#e0e0e0] shrink-0">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#f6dbd4] rounded-lg flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="#C4521E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="#C4521E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <h2 className="font-['Segoe_UI',sans-serif] font-semibold text-sm md:text-base text-[#242424] truncate">
                {entityTitle}
              </h2>
              <p className="font-['Segoe_UI',sans-serif] text-xs text-[#616161] truncate">
                {entityType}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#464FEB] text-white rounded hover:bg-[#3d42c7] transition-colors">
              <span className="font-['Segoe_UI',sans-serif] text-sm">Open in SharePoint</span>
              <ArrowUpRight20Regular className="w-4 h-4" />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f5f5f5] transition-colors"
              onClick={onClose}
              aria-label="Close panel"
            >
              <Dismiss20Regular className="w-5 h-5 text-[#424242]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-3 md:px-6 py-4 md:py-8">
          <div className="max-w-[800px] mx-auto">
            {/* Section Header */}
            <div className="mb-6">
              <p className="font-['Segoe_UI',sans-serif] text-xs text-[#616161] mb-2">
                ZavaCore Fiber Series
              </p>
              <h1 className="font-['Segoe_UI',sans-serif] font-bold text-3xl text-[#242424] mb-4">
                Performance Trends and Product Impact
              </h1>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {/* Introduction */}
              <div className="space-y-4">
                <p className="font-['Segoe_UI',sans-serif] text-base leading-6 text-[#424242]">
                  Since the launch of ZavaCore Fiber v2 in mid-May 2028, pilot program feedback has
                  surged by 52%, signaling strong engagement but also surfacing critical performance
                  considerations. While adoption momentum remains high, field testing revealed
                  durability and adaptive response variability in high-exertion environments.
                </p>
                <p className="font-['Segoe_UI',sans-serif] text-base leading-6 text-[#424242]">
                  Quantitative metrics show a 28% increase in high-load stress reports during
                  endurance simulations compared to baseline fabric models, indicating deeper
                  performance calibration opportunities under sustained strain.
                </p>
              </div>

              {/* Card with Image */}
              <div className="bg-[#fafafa] rounded-xl p-4 md:p-6 border border-[#e0e0e0]">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Segoe_UI',sans-serif] font-semibold text-lg text-[#242424] mb-2">
                      Adaptive Textile Performance Comparison
                    </h3>
                    <p className="font-['Segoe_UI',sans-serif] text-sm text-[#616161] mb-4">
                      Base Model • Updated an hour ago
                    </p>
                    <p className="font-['Segoe_UI',sans-serif] text-sm leading-5 text-[#424242]">
                      Includes lab stress data, environmental simulations, biomechanical mapping, and
                      partner feedback summaries. Useful for evaluating durability benchmarks and
                      response consistency across use cases.
                    </p>
                  </div>
                  <div className="w-full md:w-[200px] h-[120px] rounded-lg overflow-hidden shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-purple-300 via-pink-200 to-purple-400" />
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div>
                <p className="font-['Segoe_UI',sans-serif] text-base leading-6 text-[#424242] mb-4">
                  Three dominant themes have emerged across pilot programs and validation logic:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="font-['Segoe_UI',sans-serif] text-base leading-6 text-[#424242]">
                    <span className="font-semibold">Dynamic tension lag</span> was observed in 34%
                    of high-exertion trials, particularly during rapid directional shifts in field
                    athletics testing.
                  </li>
                  <li className="font-['Segoe_UI',sans-serif] text-base leading-6 text-[#424242]">
                    <span className="font-semibold">Thermal response variance</span> led to
                    inconsistent breathability in extended heat exposure scenarios, prompting
                    recalibration of micro-responsive fibers.
                  </li>
                  <li className="font-['Segoe_UI',sans-serif] text-base leading-6 text-[#424242]">
                    <span className="font-semibold">Load distribution imbalance</span> under
                    repeated compression cycles was flagged in industrial wear simulations, with
                    measurable stiffness drift after prolonged use.
                  </li>
                </ul>
              </div>

              {/* Conclusion */}
              <p className="font-['Segoe_UI',sans-serif] text-base leading-6 text-[#424242]">
                Customer sentiment reflects both enthusiasm and precision feedback. In the Product
                Validation Summary, 82% of enterprise partners cited performance consistency as the
                top priority for full-scale deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
