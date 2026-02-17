import { ReactNode, useState, useEffect, useRef } from 'react';

export interface AppRailItem {
  id: string;
  label: string;
  icon: string | ReactNode;
  onClick?: () => void;
}

export interface AppRailProps {
  /** Navigation items (including Zava as first item) */
  items: AppRailItem[];
  /** Initially selected item ID */
  defaultSelectedId?: string;
  /** Custom className */
  className?: string;
}

/**
 * AppRail - Vertical icon-based navigation bar
 *
 * Narrow vertical navigation with icons and labels, similar to VS Code activity bar.
 * Typically used for primary app navigation in modern applications.
 *
 * @example
 * ```tsx
 * <AppRail
 *   logo="/logo.svg"
 *   items={[
 *     { id: 'home', label: 'Home', icon: '/icons/home.svg' },
 *     { id: 'discover', label: 'Discover', icon: '/icons/compass.svg' }
 *   ]}
 *   selectedItemId="home"
 * />
 * ```
 */
export default function AppRail({
  items,
  defaultSelectedId,
  className = '',
}: AppRailProps) {
  const [selectedItemId, setSelectedItemId] = useState(defaultSelectedId || items[0]?.id);

  const handleItemClick = (item: AppRailItem) => {
    setSelectedItemId(item.id);
    item.onClick?.();
  };

  const SVGIcon = ({ src, color, size = 24 }: { src: string; color: string; size?: number }) => {
    const [svg, setSvg] = useState<string>('');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      fetch(src)
        .then(res => res.text())
        .then(text => setSvg(text))
        .catch(err => console.error('Error loading SVG:', err));
    }, [src]);

    useEffect(() => {
      if (containerRef.current && svg) {
        const svgElement = containerRef.current.querySelector('svg');
        if (svgElement) {
          svgElement.setAttribute('width', String(size));
          svgElement.setAttribute('height', String(size));
          // Apply color to all paths without modifying stroke-width
          const paths = svgElement.querySelectorAll('path, circle, rect, polygon, line, polyline');
          paths.forEach(path => {
            const currentFill = path.getAttribute('fill');
            const currentStroke = path.getAttribute('stroke');

            // Only change fill if it exists and isn't 'none'
            if (currentFill && currentFill !== 'none') {
              path.setAttribute('fill', color);
            }
            // Only change stroke if it exists and isn't 'none'
            if (currentStroke && currentStroke !== 'none') {
              path.setAttribute('stroke', color);
            }
          });
        }
      }
    }, [svg, color, size]);

    return <div ref={containerRef} style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg }} />;
  };

  const renderIcon = (icon: string | ReactNode, color: string, isZavaLogo: boolean = false) => {
    if (typeof icon === 'string') {
      // Zava logo should keep its original colors
      if (isZavaLogo || icon.includes('ZavaCore_logo')) {
        return <img src={icon} alt="" style={{ width: '24px', height: '24px' }} />;
      }
      return <SVGIcon src={icon} color={color} size={24} />;
    }
    return icon;
  };


  return (
    <div
      className={`flex flex-col items-center border-r border-gray-200 ${className}`}
      style={{
        width: '80px',
        backgroundColor: '#fafafa',
        paddingRight: '4px'
      }}
    >
      {/* Navigation items - including Zava as first item */}
      <div className="flex-1 flex flex-col w-full">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="flex flex-col items-center justify-center py-4 w-full transition-colors relative"
          >
            {/* Active indicator bar - positioned at left edge */}
            {selectedItemId === item.id && (
              <div
                className="absolute rounded-full"
                style={{
                  left: '4px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '4px',
                  height: '20px',
                  backgroundColor: '#464FEB'
                }}
              />
            )}

            {/* Icon */}
            {renderIcon(item.icon, selectedItemId === item.id ? '#464FEB' : '#616161', item.id === 'zava')}

            {/* Label */}
            <span
              style={{
                fontSize: '10px',
                lineHeight: '14px',
                fontWeight: 600,
                fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
                marginTop: '4px',
                color: selectedItemId === item.id ? '#464FEB' : '#242424'
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
