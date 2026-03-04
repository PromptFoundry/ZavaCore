import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

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
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [preloadedIcons, setPreloadedIcons] = useState<Record<string, { regular: string; filled: string }>>({});

  // Calculate the position of the selection bar
  const selectedIndex = items.findIndex(item => item.id === selectedItemId);
  const hoveredIndex = items.findIndex(item => item.id === hoveredItemId);

  const getFilledIconPath = (iconPath: string): string => {
    if (typeof iconPath !== 'string') return iconPath;
    // Replace the regular icon with the filled version
    const iconName = iconPath.split('/').pop()?.replace('.svg', '');
    return iconPath.replace(`${iconName}.svg`, `${iconName} - Filled.svg`);
  };

  // Preload all icons on mount
  useEffect(() => {
    const loadIcons = async () => {
      const iconCache: Record<string, { regular: string; filled: string }> = {};

      for (const item of items) {
        if (typeof item.icon === 'string' && item.id !== 'zava' && !item.icon.includes('ZavaCore_logo')) {
          try {
            const regularResponse = await fetch(item.icon);
            const regularSvg = await regularResponse.text();

            const filledPath = getFilledIconPath(item.icon);
            const filledResponse = await fetch(filledPath);
            const filledSvg = await filledResponse.text();

            iconCache[item.id] = { regular: regularSvg, filled: filledSvg };
          } catch (err) {
            console.error('Error preloading icons:', err);
          }
        }
      }

      setPreloadedIcons(iconCache);
    };

    loadIcons();
  }, [items]);

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

    return <div ref={containerRef} style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s ease' }} dangerouslySetInnerHTML={{ __html: svg }} />;
  };

  const PreloadedSVGIcon = ({ svg, color, size = 24 }: { svg: string; color: string; size?: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (containerRef.current && svg) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = svg;
        const svgElement = tempDiv.querySelector('svg');

        if (svgElement) {
          svgElement.setAttribute('width', String(size));
          svgElement.setAttribute('height', String(size));

          const paths = svgElement.querySelectorAll('path, circle, rect, polygon, line, polyline');
          paths.forEach(path => {
            const currentFill = path.getAttribute('fill');
            const currentStroke = path.getAttribute('stroke');

            if (currentFill && currentFill !== 'none') {
              path.setAttribute('fill', color);
            }
            if (currentStroke && currentStroke !== 'none') {
              path.setAttribute('stroke', color);
            }
          });

          containerRef.current.innerHTML = '';
          containerRef.current.appendChild(svgElement);
        }
      }
    }, [svg, color, size]);

    return <div ref={containerRef} style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />;
  };

  const renderIcon = (icon: string | ReactNode, color: string, isZavaLogo: boolean = false, itemId: string = '', isHovered: boolean = false) => {
    if (typeof icon === 'string') {
      // Zava logo should keep its original colors
      if (isZavaLogo || icon.includes('ZavaCore_logo')) {
        return <img src={icon} alt="" style={{ width: '24px', height: '24px' }} />;
      }

      // Use preloaded icons if available
      const cachedIcons = preloadedIcons[itemId];
      if (cachedIcons) {
        return (
          <div style={{ position: 'relative', width: '24px', height: '24px' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: isHovered ? 0 : 1, transition: 'opacity 0.15s ease' }}>
              <PreloadedSVGIcon svg={cachedIcons.regular} color={color} size={24} />
            </div>
            <div style={{ position: 'absolute', inset: 0, opacity: isHovered ? 1 : 0, transition: 'opacity 0.15s ease' }}>
              <PreloadedSVGIcon svg={cachedIcons.filled} color={color} size={24} />
            </div>
          </div>
        );
      }

      // Fallback to regular SVGIcon if not preloaded yet
      return <SVGIcon src={icon} color={color} size={24} />;
    }
    return icon;
  };


  return (
    <div
      className={`flex flex-col items-center border-r border-gray-200 ${className}`}
      style={{
        width: '80px',
        height: '100%',
        backgroundColor: '#fafafa',
        paddingRight: '4px',
        position: 'relative'
      }}
    >
      {/* Animated selection bar */}
      {selectedIndex >= 0 && (
        <div
          className="absolute rounded-full"
          style={{
            left: '4px',
            width: '4px',
            height: '20px',
            backgroundColor: '#03787C',
            top: `${selectedIndex * 64 + 32}px`,
            transform: 'translateY(-50%)',
            transition: 'top 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 2
          }}
        />
      )}

      {/* Animated hover bar - only show when hovering non-selected item */}
      {hoveredIndex >= 0 && hoveredItemId !== selectedItemId && (
        <div
          className="absolute rounded-full"
          style={{
            left: '4px',
            width: '4px',
            height: '20px',
            backgroundColor: '#c7c7c7',
            top: `${hoveredIndex * 64 + 32}px`,
            transform: 'translateY(-50%)',
            transition: 'top 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1
          }}
        />
      )}

      {/* Navigation items - including Zava as first item */}
      <div className="flex-1 flex flex-col w-full">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className="flex flex-col items-center justify-center w-full transition-colors relative"
            style={{ height: '64px', cursor: 'pointer' }}
          >

            {/* Icon */}
            {renderIcon(item.icon, selectedItemId === item.id ? '#03787C' : '#616161', item.id === 'zava', item.id, hoveredItemId === item.id || selectedItemId === item.id)}

            {/* Label */}
            <span
              style={{
                fontSize: '10px',
                lineHeight: '14px',
                fontWeight: 600,
                fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
                marginTop: '4px',
                color: selectedItemId === item.id ? '#03787C' : '#242424'
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
