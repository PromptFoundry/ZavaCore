import {
  PanelLeftText20Regular,
  MoreHorizontal20Regular,
  Apps20Regular,
} from '@fluentui/react-icons';

export default function LeftNav() {
  return (
    <nav className="flex flex-col h-full bg-[#f5f5f5]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-3 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-[#00a4ef] to-[#0078d4] rounded-sm" />
          <span className="text-sm font-semibold text-[#242424]">M365 Copilot</span>
        </div>
        <button className="p-1.5 hover:bg-[#e6e6e6] rounded transition-colors">
          <PanelLeftText20Regular className="w-5 h-5 text-[#424242]" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto flex flex-col gap-3 py-3">
        {/* Navigation */}
        <div className="flex flex-col gap-1 px-3">
        {/* New chat */}
        <div className="flex items-center h-9 px-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Chat icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">New chat</span>
        </div>

        {/* Search */}
        <div className="flex items-center h-9 px-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Search icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">Search</span>
        </div>

        {/* Library */}
        <div className="flex items-center h-9 px-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Library icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">Library</span>
        </div>

        {/* Create */}
        <div className="flex items-center h-9 px-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Create icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">Create</span>
        </div>

        {/* Frontier */}
        <div className="flex items-center h-9 px-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Frontier icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">Frontier</span>
        </div>
      </div>

      {/* Agents */}
      <div className="flex flex-col gap-1 px-3">
        <div className="pl-5 py-2">
          <span className="text-xs text-[#616161]">Agents</span>
        </div>

        {/* ZavaCore - Selected */}
        <div className="flex items-center gap-0">
          <div className="w-[3px] h-9 bg-[#0078d4] rounded-r-sm shrink-0" />
          <div className="flex items-center flex-1 h-9 bg-[#fafafa] rounded-[20px] pl-4 pr-3">
            <img src="/src/assets/icons/Data icon.svg" alt="ZavaCore" className="w-5 h-5 mr-[9px] shrink-0" />
            <span className="text-sm text-[#242424]">ZavaCore</span>
          </div>
        </div>

        {/* Researcher */}
        <div className="flex items-center h-9 pl-5 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Researcher icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">Researcher</span>
        </div>

        {/* Agent */}
        <div className="flex items-center h-9 pl-5 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Agent icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">Agent</span>
        </div>

        {/* Agent */}
        <div className="flex items-center h-9 pl-5 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Agent icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">Agent</span>
        </div>

        {/* Agent */}
        <div className="flex items-center h-9 pl-5 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Agent icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">Agent</span>
        </div>

        {/* New agent */}
        <div className="flex items-center h-9 pl-5 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <img src="/src/assets/icons/Add new agent icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
          <span className="text-sm text-[#242424]">New agent</span>
        </div>

        {/* All agents */}
        <div className="flex items-center h-9 pl-5 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <MoreHorizontal20Regular className="w-5 h-5 text-[#424242] mr-[9px]" />
          <span className="text-sm text-[#242424]">All agents</span>
        </div>
      </div>

      {/* Notebooks */}
      <div className="flex flex-col gap-1 px-3">
        <div className="px-3 py-2">
          <span className="text-xs text-[#616161]">Notebooks</span>
        </div>

        {/* All notebooks */}
        <div className="flex items-center h-9 pl-5 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <MoreHorizontal20Regular className="w-5 h-5 text-[#424242] mr-[9px]" />
          <span className="text-sm text-[#242424]">All notebooks</span>
        </div>
      </div>

        {/* Chats */}
        <div className="flex flex-col gap-1 px-3">
          <div className="px-3 py-2">
            <span className="text-xs text-[#616161]">Chats</span>
          </div>

          {/* Chat item */}
          <div className="flex items-center h-9 pl-3 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
            <span className="text-sm text-[#242424] truncate">How to find relevant con...</span>
          </div>

          {/* Chat item */}
          <div className="flex items-center h-9 pl-3 pr-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
            <span className="text-sm text-[#242424] truncate">How to find relevant con...</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 px-3 pb-3 shrink-0 border-t border-[#e0e0e0] pt-3">
        {/* Apps */}
        <div className="flex items-center h-9 px-3 rounded-3xl hover:bg-[#e6e6e6] transition-colors cursor-pointer">
          <Apps20Regular className="w-5 h-5 text-[#424242] mr-[9px]" />
          <span className="text-sm text-[#242424]">Apps</span>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between h-9 px-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6264a7] to-[#4b4d99] rounded-full flex items-center justify-center text-white text-xs font-semibold">
              EF
            </div>
            <span className="text-sm text-[#424242]">Erika Fuller</span>
          </div>
          <button className="p-1 hover:bg-[#e6e6e6] rounded transition-colors">
            <MoreHorizontal20Regular className="w-5 h-5 text-[#424242]" />
          </button>
        </div>
      </div>
    </nav>
  );
}
