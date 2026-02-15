import {
  Search20Regular,
  Chat20Regular,
  ChevronDown20Regular,
  ChevronUp20Regular,
  Circle12Filled,
  PanelLeftText20Regular,
  NotebookSection20Regular,
  Grid20Regular,
  AppsList20Regular,
  MoreHorizontal20Regular,
} from '@fluentui/react-icons';
import { useState } from 'react';

export default function LeftNav() {
  const [agentsExpanded, setAgentsExpanded] = useState(true);
  const [conversationsExpanded, setConversationsExpanded] = useState(true);
  const [pagesExpanded, setPagesExpanded] = useState(false);

  return (
    <nav className="left-nav flex flex-col h-full bg-[#fafafa] border-r border-[#e0e0e0]">
      {/* Header */}
      <div className="header flex items-center justify-between px-3 py-2 border-b border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-br from-[#00a4ef] to-[#0078d4] rounded-sm" />
          <span className="text-sm font-semibold text-[#242424]">M365 Copilot</span>
        </div>
        <button className="p-1 hover:bg-[#e6e6e6] rounded transition-colors">
          <PanelLeftText20Regular className="w-5 h-5 text-[#424242]" />
        </button>
      </div>

      {/* Search */}
      <div className="search-section px-3 py-2">
        <div className="relative">
          <Search20Regular className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#616161]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-[#d1d1d1] rounded hover:border-[#b3b3b3] focus:border-[#0078d4] focus:outline-none transition-colors text-[#242424] placeholder:text-[#616161]"
          />
        </div>
      </div>

      {/* Chat Button */}
      <div className="chat-section px-3 py-1">
        <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors">
          <Chat20Regular className="w-5 h-5 text-[#424242]" />
          <span>Chat</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content flex-1 overflow-auto px-3 py-2">
        {/* Agents Section */}
        <div className="agents-section mb-2">
          <button
            onClick={() => setAgentsExpanded(!agentsExpanded)}
            className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors"
          >
            <span>Agents</span>
            {agentsExpanded ? (
              <ChevronUp20Regular className="w-5 h-5 text-[#616161]" />
            ) : (
              <ChevronDown20Regular className="w-5 h-5 text-[#616161]" />
            )}
          </button>

          {agentsExpanded && (
            <div className="mt-0.5">
              <button className="w-full flex items-center gap-2 pl-6 pr-2 py-1.5 text-sm text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors">
                <Circle12Filled className="w-3 h-3 text-[#0078d4]" />
                <span>Researcher</span>
              </button>
              <button className="w-full flex items-center gap-2 pl-6 pr-2 py-1.5 text-sm text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors">
                <Circle12Filled className="w-3 h-3 text-[#0078d4]" />
                <span>Analyst</span>
              </button>
              <button className="w-full flex items-center gap-2 pl-4 pr-2 py-1.5 text-sm font-semibold text-[#242424] bg-[#e6f2ff] hover:bg-[#d6ebff] rounded transition-colors">
                <div className="w-5 h-5 bg-gradient-to-br from-[#00b7c3] to-[#00a3b5] rounded-sm flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                  Z
                </div>
                <span>ZavaCore</span>
              </button>
            </div>
          )}
        </div>

        {/* Conversations Section */}
        <div className="conversations-section">
          <button
            onClick={() => setConversationsExpanded(!conversationsExpanded)}
            className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors"
          >
            <span>Conversations</span>
            {conversationsExpanded ? (
              <ChevronUp20Regular className="w-5 h-5 text-[#616161]" />
            ) : (
              <ChevronDown20Regular className="w-5 h-5 text-[#616161]" />
            )}
          </button>

          {conversationsExpanded && (
            <div className="mt-0.5">
              <button
                onClick={() => setPagesExpanded(!pagesExpanded)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-sm text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors"
              >
                <span>Pages</span>
                {pagesExpanded ? (
                  <ChevronUp20Regular className="w-4 h-4 text-[#616161]" />
                ) : (
                  <ChevronDown20Regular className="w-4 h-4 text-[#616161]" />
                )}
              </button>

              <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors">
                <NotebookSection20Regular className="w-5 h-5 text-[#424242]" />
                <span>Notebooks</span>
              </button>

              <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors">
                <Grid20Regular className="w-5 h-5 text-[#424242]" />
                <span>Create</span>
              </button>

              <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-[#242424] hover:bg-[#e6e6e6] rounded transition-colors">
                <AppsList20Regular className="w-5 h-5 text-[#424242]" />
                <span>Apps</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="footer flex items-center justify-between px-3 py-2 border-t border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#6264a7] to-[#4b4d99] rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0">
            EF
          </div>
          <span className="text-sm text-[#424242]">Erika Fuller</span>
        </div>
        <button className="p-1 hover:bg-[#e6e6e6] rounded transition-colors">
          <MoreHorizontal20Regular className="w-5 h-5 text-[#424242]" />
        </button>
      </div>
    </nav>
  );
}
