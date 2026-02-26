import {
  LockClosed16Regular,
  Sparkle20Filled,
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
    <div className="bg-white flex flex-col rounded-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] w-full">
      <div className="flex gap-2 items-center p-3">

        {/* Icon container — 36x36, rounded-[8px] */}
        <div
          className="flex items-center justify-center rounded-[8px] shrink-0 w-9 h-9"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon || (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

        {/* Text */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Title + lock */}
          <div className="flex gap-0.5 items-center w-full">
            <p className="font-['Segoe_UI',sans-serif] font-semibold text-base leading-[22px] text-[#242424] truncate">
              {title}
            </p>
            <LockClosed16Regular className="w-4 h-4 text-[#424242] shrink-0" />
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
        <div className="flex gap-1 items-center shrink-0">
          {/* Sparkle / primary action — bordered */}
          <button
            className="w-8 h-8 flex items-center justify-center rounded-[4px] border border-[#d1d1d1] hover:bg-[#f5f5f5] transition-colors"
            onClick={onPrimaryAction}
            aria-label="AI action"
          >
            <Sparkle20Filled className="w-5 h-5" style={{ color: '#464FEB' }} />
          </button>

          {/* More options — no border */}
          <button
            className="w-8 h-8 flex items-center justify-center rounded-[4px] hover:bg-[#f5f5f5] transition-colors"
            onClick={onSecondaryAction}
            aria-label="More options"
          >
            <MoreHorizontal20Regular className="w-5 h-5 text-[#424242]" />
          </button>
        </div>

      </div>
    </div>
  );
}
