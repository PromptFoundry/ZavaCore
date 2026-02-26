const activities = [
  {
    icon: '/assets/images/activity icon - comment.svg',
    count: '12 comments',
    description: 'in Manufacturin...',
  },
  {
    icon: '/assets/images/activity icon - mention.svg',
    count: '3 mentions',
    description: 'across several files',
  },
  {
    icon: '/assets/images/activity icon - task.svg',
    count: '8 tasks',
    description: 'action items',
  },
];

export default function ActivityCard() {
  return (
    <div
      className="relative w-full flex-1 bg-white border-[0.5px] border-[#e6e6e6] rounded-[24px] flex flex-col z-0"
      style={{
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
      }}
    >
      {/* Activities Grid */}
      <div className="flex-1 flex gap-[26px] items-center justify-center px-6 pt-3 pb-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[7px]"
          >
            {/* Icon Container */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(180deg, #ff5600 0%, #f3c100 100%)'
              }}
            >
              <img
                src={activity.icon}
                alt=""
                className="w-12 h-12"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center text-center whitespace-nowrap">
              <p
                className="font-semibold text-[#424242]"
                style={{ fontSize: '16px', lineHeight: '20px' }}
              >
                {activity.count}
              </p>
              <p
                className="text-[#616161]"
                style={{ fontSize: '12px', lineHeight: 'normal' }}
              >
                {activity.description}
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
          Summarize updates
        </button>
      </div>
    </div>
  );
}
