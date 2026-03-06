import {
  PanelLeftText20Regular,
  PanelLeft20Regular,
  MoreHorizontal20Regular,
  Apps20Regular,
} from '@fluentui/react-icons';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LeftNavProps {
  onMobileItemClick?: () => void;
  onMobileClose?: () => void;
}

export default function LeftNav({ onMobileItemClick, onMobileClose }: LeftNavProps) {
  const [selectedItem, setSelectedItem] = useState('zavacore');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
    // Close mobile nav when item is clicked
    if (onMobileItemClick) {
      onMobileItemClick();
    }
  };

  return (
    <nav className={`flex flex-col h-full bg-[#f5f5f5] transition-all duration-300 relative z-20 ${isCollapsed ? 'w-[60px]' : 'w-[320px]'} [&_*]:!outline-none`}>
      {/* Close button for mobile - positioned absolutely */}
      {onMobileClose && (
        <button
          className="lg:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded hover:bg-[#e6e6e6] transition-colors z-10"
          onClick={onMobileClose}
          aria-label="Close menu"
        >
          <XMarkIcon className="w-6 h-6 text-[#424242]" />
        </button>
      )}

      {isCollapsed ? (
        /* Collapsed state - only show toggle button (hidden on mobile) */
        <div className="hidden lg:flex items-center justify-center px-3 py-3 shrink-0">
          <button
            className="p-1.5 hover:bg-[#e6e6e6] rounded transition-colors"
            onClick={() => setIsCollapsed(false)}
          >
            <PanelLeft20Regular className="w-5 h-5 text-[#424242]" />
          </button>
        </div>
      ) : (
        <>
          {/* Top bar */}
          <div className="flex items-center justify-between px-3 py-3 shrink-0">
            <div className="flex items-center gap-2">
              <img src="/assets/icons/Copilot.svg" alt="Copilot" className="w-5 h-5 shrink-0" />
              <span className="text-sm font-semibold text-[#242424]">M365 Copilot</span>
            </div>
            {/* Collapse button - hidden on mobile */}
            <button
              className="hidden lg:block p-1.5 hover:bg-[#e6e6e6] rounded transition-colors"
              onClick={() => setIsCollapsed(true)}
            >
              <PanelLeftText20Regular className="w-5 h-5 text-[#424242]" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-auto flex flex-col gap-3 py-3">
            {/* Navigation */}
            <div className="flex flex-col gap-1 px-3">
              {/* New chat */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('newchat')}
              >
                {selectedItem === 'newchat' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors outline-none border border-transparent ${
                  selectedItem === 'newchat'
                    ? 'bg-[#fafafa] !border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img
                    src={selectedItem === 'newchat' ? "/assets/icons/Chat icon color.svg" : "/assets/icons/Chat icon.svg"}
                    alt=""
                    className="w-5 h-5 mr-[9px]"
                  />
                  <span className="text-sm text-[#242424]">New chat</span>
                </div>
              </div>

              {/* Search */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('search')}
              >
                {selectedItem === 'search' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'search'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img
                    src={selectedItem === 'search' ? "/assets/icons/Search icon color.svg" : "/assets/icons/Search icon.svg"}
                    alt=""
                    className="w-5 h-5 mr-[9px]"
                  />
                  <span className="text-sm text-[#242424]">Search</span>
                </div>
              </div>

              {/* Library */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('library')}
              >
                {selectedItem === 'library' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'library'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img
                    src={selectedItem === 'library' ? "/assets/icons/Library icon color.svg" : "/assets/icons/Library icon.svg"}
                    alt=""
                    className="w-5 h-5 mr-[9px]"
                  />
                  <span className="text-sm text-[#242424]">Library</span>
                </div>
              </div>

              {/* Create */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('create')}
              >
                {selectedItem === 'create' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'create'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img
                    src={selectedItem === 'create' ? "/assets/icons/Create icon color.svg" : "/assets/icons/Create icon.svg"}
                    alt=""
                    className="w-5 h-5 mr-[9px]"
                  />
                  <span className="text-sm text-[#242424]">Create</span>
                </div>
              </div>

              {/* Frontier */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('frontier')}
              >
                {selectedItem === 'frontier' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'frontier'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img
                    src={selectedItem === 'frontier' ? "/assets/icons/Frontier icon color.svg" : "/assets/icons/Frontier icon.svg"}
                    alt=""
                    className="w-5 h-5 mr-[9px]"
                  />
                  <span className="text-sm text-[#242424]">Frontier</span>
                </div>
              </div>
            </div>

            {/* Agents */}
            <div className="flex flex-col gap-1 px-3">
              <div className="pl-5 py-2">
                <span className="text-xs text-[#616161]">Agents</span>
              </div>

              {/* ZavaCore */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('zavacore')}
              >
                {selectedItem === 'zavacore' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'zavacore'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img src="/assets/images/ZavaCore_logo.svg" alt="ZavaCore" className="w-5 h-5 mr-[9px] shrink-0" />
                  <span className="text-sm text-[#242424]">ZavaCore</span>
                </div>
              </div>

              {/* Researcher */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('researcher')}
              >
                {selectedItem === 'researcher' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'researcher'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img src="/assets/icons/Researcher icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
                  <span className="text-sm text-[#242424]">Researcher</span>
                </div>
              </div>

              {/* Agent 1 */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('agent1')}
              >
                {selectedItem === 'agent1' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'agent1'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img src="/assets/icons/Agent icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
                  <span className="text-sm text-[#242424]">Agent</span>
                </div>
              </div>

              {/* Agent 2 */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('agent2')}
              >
                {selectedItem === 'agent2' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'agent2'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img src="/assets/icons/Agent icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
                  <span className="text-sm text-[#242424]">Agent</span>
                </div>
              </div>

              {/* Agent 3 */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('agent3')}
              >
                {selectedItem === 'agent3' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'agent3'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img src="/assets/icons/Agent icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
                  <span className="text-sm text-[#242424]">Agent</span>
                </div>
              </div>

              {/* New agent */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('newagent')}
              >
                {selectedItem === 'newagent' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'newagent'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img src="/assets/icons/Add new agent icon.svg" alt="" className="w-5 h-5 mr-[9px]" />
                  <span className="text-sm text-[#242424]">New agent</span>
                </div>
              </div>

              {/* All agents */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('allagents')}
              >
                {selectedItem === 'allagents' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'allagents'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <MoreHorizontal20Regular className="w-5 h-5 text-[#424242] mr-[9px]" />
                  <span className="text-sm text-[#242424]">All agents</span>
                </div>
              </div>
            </div>

            {/* Notebooks */}
            <div className="flex flex-col gap-1 px-3">
              <div className="pl-5 py-2">
                <span className="text-xs text-[#616161]">Notebooks</span>
              </div>

              {/* All notebooks */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('allnotebooks')}
              >
                {selectedItem === 'allnotebooks' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'allnotebooks'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <MoreHorizontal20Regular className="w-5 h-5 text-[#424242] mr-[9px]" />
                  <span className="text-sm text-[#242424]">All notebooks</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-1 px-3">
              <div className="pl-5 py-2">
                <span className="text-xs text-[#616161]">Quick Links</span>
              </div>

              {/* Gallery */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => {
                  handleItemClick('gallery');
                  navigate('/gallery');
                }}
              >
                {(selectedItem === 'gallery' || location.pathname === '/gallery') && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'gallery' || location.pathname === '/gallery'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <svg className="w-5 h-5 mr-[9px] shrink-0 text-[#424242]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="text-sm text-[#242424]">Gallery</span>
                </div>
              </div>
            </div>

            {/* Chats */}
            <div className="flex flex-col gap-1 px-3">
              <div className="pl-5 py-2">
                <span className="text-xs text-[#616161]">Chats</span>
              </div>

              {[
                { id: 'chat1', label: 'Summit Center project Q2 plan' },
                { id: 'chat2', label: 'HelixWeave fiber v2 validation' },
                { id: 'chat3', label: 'Summarize my news for today' },
                { id: 'chat4', label: 'Smart-fiber roadmap priorities' },
                { id: 'chat5', label: 'Team staffing changes update' },
              ].map(chat => (
                <div
                  key={chat.id}
                  className="flex items-center gap-0 cursor-pointer focus:outline-none"
                  onClick={() => handleItemClick(chat.id)}
                >
                  {selectedItem === chat.id && (
                    <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                  )}
                  <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                    selectedItem === chat.id
                      ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                      : 'hover:bg-[#e6e6e6] pl-5'
                  } pr-3`}>
                    <span className="text-sm text-[#242424] truncate">{chat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 px-3 pb-3 shrink-0 border-t border-[#e0e0e0] pt-3">
            {/* Apps */}
            <div
              className="flex items-center gap-0 cursor-pointer focus:outline-none"
              onClick={() => setSelectedItem('apps')}
            >
              {selectedItem === 'apps' && (
                <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
              )}
              <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                selectedItem === 'apps'
                  ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                  : 'hover:bg-[#e6e6e6] pl-5'
              } pr-3`}>
                <Apps20Regular className="w-5 h-5 text-[#424242] mr-[9px]" />
                <span className="text-sm text-[#242424]">Apps</span>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between h-9 px-1">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 shrink-0">
                  <img src="/assets/images/Carole Poland.png" alt="User avatar" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-sm text-[#424242]">Carole Poland</span>
              </div>
              <button className="p-1 hover:bg-[#e6e6e6] rounded transition-colors">
                <MoreHorizontal20Regular className="w-5 h-5 text-[#424242]" />
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
