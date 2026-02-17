import {
  LockClosed16Regular,
  Circle20Regular,
  MoreHorizontal20Regular,
} from '@fluentui/react-icons';

interface EntityCardProps {
  icon?: React.ReactNode;
  iconBgColor?: string;
  title?: string;
  metadata?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export default function EntityCard({
  icon,
  iconBgColor = '#f6dbd4',
  title = 'Entity title',
  metadata = 'Additional metadata',
  onPrimaryAction,
  onSecondaryAction,
}: EntityCardProps) {
  return (
    <div className="bg-white flex flex-col rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] w-full">
      {/* Entity title section */}
      <div className="flex gap-2 items-center px-2 md:px-3 py-2 md:py-3">
        {/* Icon container */}
        <div
          className="flex items-center justify-center rounded-lg shrink-0 w-8 h-8 md:w-9 md:h-9"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon || (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
              <path
                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                stroke="#C4521E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2V8H20"
                stroke="#C4521E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* Text section */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Primary text with lock icon */}
          <div className="flex gap-0.5 items-center w-full">
            <p className="font-['Segoe_UI',sans-serif] font-semibold text-sm md:text-base leading-5 md:leading-[22px] text-[#242424] truncate">
              {title}
            </p>
            <LockClosed16Regular className="w-3 h-3 md:w-4 md:h-4 text-[#424242] shrink-0" />
          </div>

          {/* Metadata */}
          <div className="flex gap-0.5 items-center w-full">
            <div className="w-3 h-3 shrink-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#616161]" />
            </div>
            <p className="font-['Segoe_UI',sans-serif] text-xs leading-4 text-[#616161] truncate flex-1">
              {metadata}
            </p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex gap-0.5 md:gap-1 items-center shrink-0">
          <button
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded hover:bg-[#f5f5f5] transition-colors border border-[#d1d1d1]"
            onClick={onPrimaryAction}
            aria-label="Primary action"
          >
            <Circle20Regular className="w-4 h-4 md:w-5 md:h-5 text-[#424242]" />
          </button>
          <button
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded hover:bg-[#f5f5f5] transition-colors border border-transparent"
            onClick={onSecondaryAction}
            aria-label="More options"
          >
            <MoreHorizontal20Regular className="w-4 h-4 md:w-5 md:h-5 text-[#424242]" />
          </button>
        </div>
      </div>
    </div>
  );
}
