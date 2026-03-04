import type { ReactNode } from 'react';

export interface PromptStarterProps {
  /** Size variation - large for main app, small for catalyst panel */
  size?: 'large' | 'small';
  /** Icon (only shown in large variant) */
  icon?: ReactNode;
  /** Title (only shown in large variant) */
  title?: string;
  /** Main description text */
  description: string;
  /** Footer text (only shown in large variant) */
  footer?: string;
  /** Click handler */
  onClick?: () => void;
  /** Custom className */
  className?: string;
}

/**
 * PromptStarter - Prompt suggestion card
 *
 * A card component for displaying prompt suggestions with two size variants:
 * - Large: Full card with icon, title, description, and footer
 * - Small: Simple card with just description text
 *
 * @example
 * ```tsx
 * // Large variant (main app)
 * <PromptStarter
 *   size="large"
 *   icon={<ChatBubbleLeftIcon />}
 *   title="Plan my day"
 *   description="What should I prioritize based on my schedule?"
 *   footer="Your close connection"
 * />
 *
 * // Small variant (catalyst panel)
 * <PromptStarter
 *   size="small"
 *   description="What should I prioritize based on my schedule?"
 * />
 * ```
 */
export default function PromptStarter({
  size = 'large',
  icon,
  title,
  description,
  footer,
  onClick,
  className = '',
}: PromptStarterProps) {
  if (size === 'small') {
    return (
      <button
        onClick={onClick}
        className={`w-full text-left ${className}`}
        style={{
          padding: '16px',
          backgroundColor: '#ffffff',
          border: '1px solid #e0e0e0',
          borderRadius: '28px',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          color: '#242424',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
          e.currentTarget.style.borderColor = '#d0d0d0';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.borderColor = '#e0e0e0';
        }}
      >
        {description}
      </button>
    );
  }

  // Large variant
  return (
    <div
      onClick={onClick}
      className={`bg-white border border-[#e0e0e0] rounded-3xl md:rounded-[28px] p-3 md:p-4 flex flex-col gap-2 min-h-[120px] md:h-[134px] hover:border-[#c7c7c7] transition-colors cursor-pointer ${className}`}
    >
      {/* Icon and Title */}
      {(icon || title) && (
        <div className="flex items-start gap-2">
          {icon && <div className="w-4 h-4 md:w-5 md:h-5 text-[#424242] shrink-0">{icon}</div>}
          {title && <h3 className="text-sm font-semibold text-[#424242]">{title}</h3>}
        </div>
      )}

      {/* Description */}
      <p className="text-xs md:text-sm text-[#424242] line-clamp-3 flex-1">{description}</p>

      {/* Footer */}
      {footer && <p className="text-[10px] text-[#616161]">{footer}</p>}
    </div>
  );
}
