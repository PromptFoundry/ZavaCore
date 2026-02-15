import {
  Add20Regular,
  Options20Regular,
  Briefcase20Regular,
  Mic20Regular,
  DeviceEq20Regular,
} from '@fluentui/react-icons';

export default function ChatInput() {
  return (
    <div className="chat-input flex flex-col gap-0 items-center rounded-[32px] w-full h-full">
      {/* Container with gradient border */}
      <div className="relative w-full p-[1px] rounded-[28px] bg-gradient-to-b from-[#f0f0f0] via-[#e8e8e8] to-[#d4d4d4] shadow-[0_2px_8px_rgba(0,0,0,0.08),0_10px_12px_rgba(0,0,0,0.04)]">
        {/* Container */}
        <div className="container bg-white flex flex-col items-start px-3 rounded-[28px] w-full">
          {/* Textarea */}
          <div className="textarea flex items-start pb-3 pt-4 px-2 w-full">
            <textarea
              placeholder="Ask me anything"
              className="w-full font-['Segoe_UI',sans-serif] text-base leading-6 text-[#707070] resize-none outline-none border-none bg-transparent"
              rows={1}
            />
          </div>

          {/* Footer */}
          <div className="footer flex items-start justify-between pb-[10px] pt-[6px] w-full">
            {/* Utility controls (left side) */}
            <div className="utility-controls flex gap-2 h-10 items-center">
              {/* Add Button */}
              <button
                className="add-button p-2 hover:bg-gray-100 rounded transition-colors"
                aria-label="Add attachment"
              >
                <Add20Regular className="w-5 h-5 text-[#424242]" />
              </button>

              {/* Tools Button */}
              <button className="tools-button flex gap-1.5 items-center justify-center px-3 py-1.5 hover:bg-gray-100 rounded transition-colors">
                <Options20Regular className="w-5 h-5 text-[#424242]" />
                <div className="flex items-center justify-center h-5 pb-0.5">
                  <span className="font-['Segoe_UI',sans-serif] font-semibold text-sm leading-5 text-[#424242] whitespace-nowrap">
                    Tools
                  </span>
                </div>
              </button>

              {/* Sources Button */}
              <button className="sources-button flex gap-1.5 items-center justify-center px-3 py-1.5 hover:bg-gray-100 rounded transition-colors">
                <Briefcase20Regular className="w-5 h-5 text-[#424242]" />
                <div className="flex items-center justify-center h-5 pb-0.5">
                  <span className="font-['Segoe_UI',sans-serif] font-semibold text-sm leading-5 text-[#424242] whitespace-nowrap">
                    Sources
                  </span>
                </div>
              </button>
            </div>

            {/* Voice controls (right side) */}
            <div className="voice-controls flex items-center">
              {/* Dictate Button */}
              <button
                className="dictate-button flex items-center justify-center px-1.5 py-1.5 rounded-full hover:bg-gray-100 transition-colors w-10 h-10"
                aria-label="Voice input"
              >
                <Mic20Regular className="w-5 h-5 text-[#424242]" />
              </button>

              {/* Device EQ Button */}
              <button
                className="device-eq-button flex items-center justify-center px-1.5 py-1.5 rounded-full hover:bg-gray-100 transition-colors w-10 h-10"
                aria-label="Audio settings"
              >
                <DeviceEq20Regular className="w-5 h-5 text-[#424242]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
