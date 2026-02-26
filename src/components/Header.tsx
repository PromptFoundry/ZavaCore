import {
  ChevronDown20Regular,
  MoreHorizontal20Regular,
  PanelLeft20Regular,
} from '@fluentui/react-icons';

interface HeaderProps {
  onToggleNav: () => void;
  isNavOpen: boolean;
  onReset?: () => void;
}

export default function Header({ onToggleNav, isNavOpen, onReset }: HeaderProps) {
  return (
    <header className="h-[60px] bg-[#fafafa] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0 relative z-10">
      <div className="flex items-center justify-between h-full px-3 md:px-5">
        {/* Left Nav */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
          {/* Panel Toggle Button - Only visible on mobile */}
          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded hover:bg-[#e6e6e6] transition-colors shrink-0"
            onClick={onToggleNav}
            aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
          >
            <PanelLeft20Regular className="w-5 h-5 text-[#424242]" />
          </button>

          {/* Left actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* ZavaCore Logo */}
            <img src="/src/assets/images/ZavaCore_logo.svg" alt="ZavaCore" className="w-5 h-5 md:w-6 md:h-6" />

            {/* Breadcrumb Button */}
            <button
              className="flex items-center gap-1 px-1 md:px-2 h-8 rounded hover:bg-[#e6e6e6] transition-colors"
              onClick={onReset}
            >
              <span className="text-xs md:text-sm font-normal text-[#242424] truncate">ZavaCore</span>
              <ChevronDown20Regular className="w-3 h-3 text-[#424242] shrink-0" />
            </button>
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-1 md:gap-2 justify-end shrink-0">
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
