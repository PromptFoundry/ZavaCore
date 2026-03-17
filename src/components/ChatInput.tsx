import {
  Add20Regular,
  Mic20Regular,
} from '@fluentui/react-icons';
import { useState } from 'react';
import type { KeyboardEvent } from 'react';

interface ChatInputProps {
  onSubmit?: (message: string) => void;
}

export default function ChatInput({ onSubmit }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() && onSubmit) {
      onSubmit(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="chat-input flex flex-col gap-0 items-center rounded-[32px] w-full h-full">
      {/* Container with gradient border */}
      <div className="relative w-full p-[1px] rounded-[28px] bg-gradient-to-b from-[#f0f0f0] via-[#e8e8e8] to-[#d4d4d4] shadow-[0_2px_8px_rgba(0,0,0,0.08),0_10px_12px_rgba(0,0,0,0.04)]">
        {/* Container */}
        <div className="container bg-white flex flex-col items-start px-3 rounded-[28px] w-full">
          {/* Textarea */}
          <div className="textarea flex items-start pb-3 pt-4 px-2 w-full">
            <textarea
              placeholder="Message ZavaCore Agent"
              className="w-full font-['Segoe_UI',sans-serif] text-base leading-6 text-[#707070] resize-none outline-none border-none bg-transparent"
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* Footer */}
          <div className="footer flex items-center justify-between pb-[10px] pt-[6px] w-full">
            {/* Add Button */}
            <button
              className="add-button p-2 hover:bg-gray-100 rounded transition-colors"
              aria-label="Add attachment"
            >
              <Add20Regular className="w-5 h-5 text-[#424242]" />
            </button>

            {/* Mic Button */}
            <button
              className="dictate-button flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Voice input"
            >
              <Mic20Regular className="w-5 h-5 text-[#424242]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
