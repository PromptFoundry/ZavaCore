import {
  PanelLeftText20Regular,
  PanelLeft20Regular,
  MoreHorizontal20Regular,
  Apps20Regular,
} from '@fluentui/react-icons';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LeftNavProps {
  onMobileItemClick?: () => void;
  onMobileClose?: () => void;
}

export default function LeftNav({ onMobileItemClick, onMobileClose }: LeftNavProps) {
  const [selectedItem, setSelectedItem] = useState('zavacore');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

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

              {/* SharePoint */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => {
                  handleItemClick('sharepoint');
                  navigate('/sharepoint');
                }}
              >
                {selectedItem === 'sharepoint' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'sharepoint'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <img src="/assets/icons/SharePoint.svg" alt="SharePoint" className="w-7 h-7 mr-[9px] shrink-0" />
                  <span className="text-sm text-[#242424]">SharePoint</span>
                </div>
              </div>
            </div>

            {/* Chats */}
            <div className="flex flex-col gap-1 px-3">
              <div className="pl-5 py-2">
                <span className="text-xs text-[#616161]">Chats</span>
              </div>

              {/* Chat item 1 */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('chat1')}
              >
                {selectedItem === 'chat1' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'chat1'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <span className="text-sm text-[#242424] truncate">How to find relevant con...</span>
                </div>
              </div>

              {/* Chat item 2 */}
              <div
                className="flex items-center gap-0 cursor-pointer focus:outline-none"
                onClick={() => handleItemClick('chat2')}
              >
                {selectedItem === 'chat2' && (
                  <div className="w-[3px] h-4 bg-[#464FEB] rounded-full shrink-0" />
                )}
                <div className={`flex items-center flex-1 h-9 rounded-[12px] transition-colors ${
                  selectedItem === 'chat2'
                    ? 'bg-[#fafafa] border border-[#F2F2F2] pl-4'
                    : 'hover:bg-[#e6e6e6] pl-5'
                } pr-3`}>
                  <span className="text-sm text-[#242424] truncate">How to find relevant con...</span>
                </div>
              </div>
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
                  <img src="/assets/icons/avatar.svg" alt="User avatar" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-[#424242]">Erika Fuller</span>
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
