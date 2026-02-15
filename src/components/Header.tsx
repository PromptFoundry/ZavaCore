import {
  ChevronDown20Regular,
  MoreHorizontal20Regular,
  ShieldTask20Regular,
} from '@fluentui/react-icons';

export default function Header() {
  return (
    <header className="h-[60px] bg-[#fafafa] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0 relative z-10">
      <div className="flex items-center justify-between h-full px-5">
        {/* Left Nav */}
        <div className="flex items-center gap-3 w-[320px]">
          {/* Left actions */}
          <div className="flex items-center gap-2">
            {/* Agent Icon */}
            <img src="/src/assets/icons/Data icon.svg" alt="Agent" className="w-6 h-6" />

            {/* Breadcrumb Button */}
            <button className="flex items-center gap-1 px-2 h-8 rounded hover:bg-[#e6e6e6] transition-colors">
              <span className="text-sm font-normal text-[#242424]">ZavaCore</span>
              <ChevronDown20Regular className="w-3 h-3 text-[#424242]" />
            </button>
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-2 justify-end w-[320px]">
          {/* New Chat Split Button */}
          <div className="flex items-center h-8 rounded">
            {/* Primary action */}
            <button className="flex items-center justify-center h-8 px-1.5 bg-[#464FEB] rounded-l border-r border-white hover:bg-[#3d42c7] transition-colors">
              <img src="/src/assets/icons/Compose.svg" alt="New chat" className="w-5 h-5" />
            </button>

            {/* Secondary action (dropdown) */}
            <button className="flex items-center justify-center h-8 w-6 bg-[#464FEB] rounded-r hover:bg-[#3d42c7] transition-colors">
              <ChevronDown20Regular className="w-3 h-3 text-white" />
            </button>
          </div>

          {/* Protection Button */}
          <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-[#e6e6e6] transition-colors">
            <img src="/src/assets/icons/Shield Task.svg" alt="Protection" className="w-5 h-5" />
          </button>

          {/* More Options Button */}
          <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-[#e6e6e6] transition-colors">
            <MoreHorizontal20Regular className="w-5 h-5 text-[#424242]" />
          </button>
        </div>
      </div>
    </header>
  );
}
