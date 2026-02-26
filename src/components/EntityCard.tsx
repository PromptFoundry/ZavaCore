import {
  ShieldLock16Regular,
  Open20Regular,
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
            <img src="/assets/icons/PowerPoint.svg" alt="PowerPoint" className="w-6 h-6" />
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Title + ShieldLock */}
          <div className="flex gap-0.5 items-center w-full">
            <p className="font-['Segoe_UI',sans-serif] font-semibold text-base leading-[22px] text-[#242424] truncate">
              {title}
            </p>
            <ShieldLock16Regular className="w-4 h-4 text-[#616161] shrink-0" />
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
          {/* Open — bordered button */}
          <button
            className="w-8 h-8 flex items-center justify-center rounded-[4px] border border-[#d1d1d1] bg-white hover:bg-[#f5f5f5] transition-colors"
            onClick={onPrimaryAction}
            aria-label="Open"
          >
            <Open20Regular className="w-5 h-5 text-[#424242]" />
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
