import quickLink0 from '../assets/icons/QuickLink.svg';
import quickLink1 from '../assets/icons/QuickLink-1.svg';
import quickLink2 from '../assets/icons/QuickLink-2.svg';
import quickLink3 from '../assets/icons/QuickLink-3.svg';
import quickLink4 from '../assets/icons/QuickLink-4.svg';
import quickLink5 from '../assets/icons/QuickLink-5.svg';

export interface QuickLink {
  id: string;
  icon: string;
  label: string;
}

export interface QuickLinksSectionProps {
  /** Custom className */
  className?: string;
}

const quickLinks: QuickLink[] = [
  { id: 'travel', icon: quickLink0, label: 'BOOK TRAVEL' },
  { id: 'career', icon: quickLink1, label: 'CAREER & DEVELOPMENT' },
  { id: 'glossary', icon: quickLink2, label: 'GLOSSARY' },
  { id: 'expenses', icon: quickLink3, label: 'EXPENSES' },
  { id: 'training', icon: quickLink4, label: 'TRAINING' },
  { id: 'security', icon: quickLink5, label: 'SECURITY' },
];

/**
 * QuickLinksSection - Horizontal row of quick action links
 *
 * Displays a centered row of quick link cards with icons and labels.
 *
 * @example
 * ```tsx
 * <QuickLinksSection />
 * ```
 */
export default function QuickLinksSection({
  className = '',
}: QuickLinksSectionProps) {
  return (
    <section
      className={className}
      style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '80px 10px',
      }}
    >
      <div
        style={{
          maxWidth: '1170px',
          margin: '0 auto',
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {quickLinks.map((link) => (
          <button
            key={link.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 24px 5px',
              border: 'none',
              background: 'transparent',
              cursor: 'not-allowed',
              borderRadius: '16px',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {/* Icon */}
            <img
              src={link.icon}
              alt=""
              style={{
                width: '100px',
                height: '100px',
              }}
            />

            {/* Label */}
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#242424',
                textAlign: 'center',
              }}
            >
              {link.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
