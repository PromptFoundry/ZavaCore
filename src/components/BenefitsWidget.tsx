import { Settings20Regular } from '@fluentui/react-icons';

const benefits = [
  {
    icon: '/assets/icons/Benefits Icon - Clipboard Text Edit.svg',
    title: 'Update to Benefits form',
    subtitle: 'Opened 7/23/2026',
  },
  {
    icon: '/assets/icons/Benefits Icon -  Search Sparkle.svg',
    title: 'Update to Perks+ claim',
    subtitle: '7/21/2026',
  },
  {
    icon: '/assets/icons/Benefits Icon - Calendar.svg',
    title: 'Enrollment deadline approaching',
    subtitle: 'Deadline 9/01/2026',
  },
  {
    icon: '/assets/icons/Benefits Icon - Pin.svg',
    title: 'Updated to dental plan for all employees',
    subtitle: '7/23/2026',
  },
];

export default function BenefitsWidget() {
  return (
    <div
      data-name="Benefits card"
      className="relative w-full bg-white border border-[#edebe9] rounded-[24px] flex flex-col z-0"
      style={{
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-[2px]">
        <h2
          className="text-[#242424]"
          style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}
        >
          Benefits
        </h2>
        <button
          className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
          aria-label="Settings"
        >
          <Settings20Regular className="w-5 h-5 text-[#424242]" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 px-5 py-4 flex flex-col gap-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-default"
          >
            {/* Icon */}
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <img src={benefit.icon} alt="" className="w-8 h-8" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p
                className="font-semibold text-[#424242] truncate"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                {benefit.title}
              </p>
              <p
                className="text-[#616161] truncate"
                style={{ fontSize: '12px', lineHeight: '16px' }}
              >
                {benefit.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center justify-start">
        <button
          className="px-3 py-[5px] bg-white border border-[#d1d1d1] rounded-[4px] text-sm font-semibold text-[#242424] hover:bg-[#f5f5f5] transition-colors"
          style={{ lineHeight: '20px' }}
        >
          Summarize all activity
        </button>
      </div>
    </div>
  );
}
