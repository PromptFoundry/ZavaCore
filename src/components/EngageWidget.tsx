import { Settings20Regular, MoreHorizontal16Regular } from '@fluentui/react-icons';

export default function EngageWidget() {
  return (
    <div
      data-name="engage-widget"
      className="relative w-full bg-white border border-[#edebe9] rounded-[24px] flex flex-col z-0"
      style={{
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-[2px]">
        <h2
          className="font-semibold text-[#242424]"
          style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '0%' }}
        >
          Engage
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
        {/* Item 1: New responses Q&A */}
        <div className="flex items-center gap-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer py-2">
          {/* Avatar */}
          <div className="w-14 h-14 shrink-0 rounded-[16px] overflow-hidden">
            <img
              src="/assets/images/Avatar.svg"
              alt="Q&A avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 relative">
            <h3
              className="font-semibold text-[#242424] truncate"
              style={{ fontSize: '18px', lineHeight: '22px', letterSpacing: '0%' }}
            >
              New responses Q&A
            </h3>
            <p
              className="text-sm text-[#616161] truncate "
              style={{ lineHeight: '20px' }}
            >
              in Core Community
            </p>

            {/* More button */}
            <button
              className="absolute right-0 top-[10px] w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
              aria-label="More options"
            >
              <MoreHorizontal16Regular className="w-4 h-4 text-[#424242]" />
            </button>
          </div>
        </div>

        {/* Item 2: New leadership updates */}
        <div className="flex items-center gap-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer py-2">
          {/* Avatar Pie */}
          <div className="w-14 h-14 shrink-0 rounded-[16px] overflow-hidden">
            <img
              src="/assets/images/Avatar pie.png"
              alt="Leadership updates avatars"
              className="w-full h-full object-cover"
              key="avatar-pie-updated"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 relative">
            <h3
              className="font-semibold text-[#242424] truncate"
              style={{ fontSize: '18px', lineHeight: '22px', letterSpacing: '0%' }}
            >
              New leadership updates
            </h3>
            <p
              className="text-sm text-[#616161] truncate "
              style={{ lineHeight: '20px' }}
            >
              in Leadership Corner
            </p>

            {/* More button */}
            <button
              className="absolute right-0 top-[10px] w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
              aria-label="More options"
            >
              <MoreHorizontal16Regular className="w-4 h-4 text-[#424242]" />
            </button>
          </div>
        </div>

        {/* AI Insights Container */}
        <div
          className="bg-[#eaf6ff] rounded-[16px] px-3 py-3 flex flex-col gap-[6px]"
        >
          <p
            className="text-sm text-[#242424] "
            style={{ lineHeight: '20px' }}
          >
            Leadership changes were announced company wide and there were 24 answers to questions in...
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center justify-start">
        <button
          className="px-3 py-[5px] bg-white border border-[#d1d1d1] rounded-[4px] text-sm font-semibold text-[#242424] hover:bg-[#f5f5f5] transition-colors "
          style={{ lineHeight: '20px' }}
        >
          Summarize all activity
        </button>
      </div>
    </div>
  );
}
