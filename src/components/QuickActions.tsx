const actions = [
  {
    icon: '/assets/images/Icon-0.svg',
    title: 'Order lunch',
    subtitle: 'Cafe',
  },
  {
    icon: '/assets/images/Icon-1.svg',
    title: 'Submit time off',
    subtitle: 'HR',
  },
  {
    icon: '/assets/images/Icon-2.svg',
    title: 'Ask a question',
    subtitle: 'Help desk',
  },
  {
    icon: '/assets/images/Icon-3.svg',
    title: 'Book a shuttle',
    subtitle: 'Transportation',
  },
  {
    icon: '/assets/images/Icon-4.svg',
    title: 'Paystub',
    subtitle: 'ADP',
  },
  {
    icon: '/assets/images/Icon-5.svg',
    title: 'Clock in',
    subtitle: 'Time management',
  },
];

export default function QuickActions() {
  return (
    <div data-name="quick actions" className="flex flex-col gap-4 relative z-10">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {actions.slice(0, 3).map((action, index) => (
          <div
            key={index}
            className="bg-white border border-[#e6e6e6] rounded-xl px-3 py-4 flex items-center gap-2 hover:bg-[#fafafa] transition-colors cursor-pointer relative"
            style={{
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
            }}
          >
            {/* Icon Container */}
            <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shrink-0">
              <img src={action.icon} alt="" className="w-8 h-8" />
            </div>

            {/* Text */}
            <div className="flex flex-col min-w-0 flex-1">
              <p className="font-semibold text-[#0487a7] text-base leading-[22px] truncate">
                {action.title}
              </p>
              <p className="text-[#00bee8] text-xs leading-4 truncate">
                {action.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {actions.slice(3, 6).map((action, index) => (
          <div
            key={index}
            className="bg-white border border-[#e6e6e6] rounded-xl px-3 py-4 flex items-center gap-2 hover:bg-[#fafafa] transition-colors cursor-pointer relative"
            style={{
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
            }}
          >
            {/* Icon Container */}
            <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shrink-0">
              <img src={action.icon} alt="" className="w-8 h-8" />
            </div>

            {/* Text */}
            <div className="flex flex-col min-w-0 flex-1">
              <p className="font-semibold text-[#0487a7] text-base leading-[22px] truncate">
                {action.title}
              </p>
              <p className="text-[#00bee8] text-xs leading-4 truncate">
                {action.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
