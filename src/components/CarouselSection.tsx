import { useState, useEffect, useRef } from 'react';

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  overlayType?: 'solid' | 'gradient';
}

export interface CarouselSectionProps {
  /** Custom className */
  className?: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 'item-1',
    title: 'ZavaCore Smart Mesh',
    description: 'Adaptive fabric technology that responds to performance needs in real-time',
    image: '/assets/images/Carousel-Background-center.png', // Center slide on load
    backgroundColor: '#ff9d47',
    overlayType: 'solid',
  },
  {
    id: 'item-2',
    title: 'Smart Mesh Technology',
    description: 'Experience the future of athletic performance with our intelligent footwear system. Dynamic sensors adjust traction in real-time while collecting valuable performance data.',
    image: '/assets/images/Carousel-Background-1.png',
    backgroundColor: 'linear-gradient(90deg, #fa8500 0%, #01b9f3 100%)',
    overlayType: 'gradient',
  },
  {
    id: 'item-3',
    title: 'Zava Systems',
    description: 'Integrated platform for monitoring and optimizing athletic performance',
    image: '/assets/images/Carousel-Background-2.png',
    backgroundColor: '#008fb1',
    overlayType: 'solid',
  },
  {
    id: 'item-4',
    title: 'Advanced Analytics',
    description: 'Comprehensive data insights to track progress and optimize training outcomes',
    image: '/assets/images/Carousel-Background-3.png',
    backgroundColor: '#03787C',
    overlayType: 'solid',
  },
  {
    id: 'item-5',
    title: 'Performance Optimization',
    description: 'AI-powered recommendations to enhance athlete performance and recovery',
    image: '/assets/images/Carousel-Background-4.png',
    backgroundColor: '#ff6b35',
    overlayType: 'solid',
  },
];

/**
 * CarouselSection - Technology spotlight carousel
 *
 * A horizontal carousel showcasing technology highlights with infinite seamless looping.
 *
 * @example
 * ```tsx
 * <CarouselSection />
 * ```
 */
export default function CarouselSection({
  className = '',
}: CarouselSectionProps) {
  // Start at index 2 to show cards properly (with clones on both sides)
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [containerWidth, setContainerWidth] = useState(1920);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const cardWidth = 1204;
  const gap = 32;
  const itemWidth = cardWidth + gap;

  // Update container width on mount, resize, and when container size changes
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();

    // Use ResizeObserver to detect container size changes (e.g., when panel opens/closes)
    const resizeObserver = new ResizeObserver(() => {
      updateContainerWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateContainerWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  // Create infinite loop by cloning items at start and end
  const extendedItems = [
    ...carouselItems.slice(-2), // Last 2 items at the start
    ...carouselItems,           // All items
    ...carouselItems.slice(0, 2) // First 2 items at the end
  ];

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 2); // Add 2 to account for cloned items at start
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    setIsTransitioning(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const offset = e.clientX - dragStartX;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const threshold = 50; // pixels to trigger slide change

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right, go to previous
        handlePrevious();
      } else {
        // Dragged left, go to next
        handleNext();
      }
    } else {
      // Snap back to current position
      setIsTransitioning(true);
    }

    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Handle infinite loop transitions
  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      // If we're at a cloned item, jump to the real item without transition
      if (currentIndex <= 1) {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + carouselItems.length);
      } else if (currentIndex >= carouselItems.length + 2) {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - carouselItems.length);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener('transitionend', handleTransitionEnd);
      return () => track.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [currentIndex, isTransitioning]);

  // Calculate the transform to center the current card within its container
  const calculateTranslateX = () => {
    const containerCenter = containerWidth / 2;
    const cardCenter = cardWidth / 2;
    const baseTranslate = containerCenter - cardCenter - (currentIndex * itemWidth);
    return baseTranslate + dragOffset;
  };

  const translateX = calculateTranslateX();

  // Get the actual item index for pagination (accounting for clones)
  const getActualIndex = (idx: number) => {
    if (idx <= 1) return idx + carouselItems.length - 2;
    if (idx >= carouselItems.length + 2) return idx - carouselItems.length - 2;
    return idx - 2;
  };

  const actualCurrentIndex = getActualIndex(currentIndex);

  return (
    <section
      className={className}
      style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '40px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <div style={{ maxWidth: '774px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '18px',
            lineHeight: 1.2,
            letterSpacing: '0.36px',
            textTransform: 'uppercase',
            color: '#242424',
            margin: 0,
          }}
        >
          Technology spotlight
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '640px',
          overflow: 'hidden',
        }}
      >
        {/* Carousel Track */}
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'flex',
            gap: '32px',
            height: '100%',
            transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            transform: `translateX(${translateX}px)`,
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
          }}
        >
          {extendedItems.map((item, index) => {
            const distanceFromCenter = Math.abs(index - currentIndex);
            const isActive = distanceFromCenter === 0;
            const opacity = isActive ? 1 : 0.5;

            return (
              <div
                key={`${item.id}-${index}`}
                style={{
                  width: '1204px',
                  height: '640px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  flexShrink: 0,
                  opacity,
                  transition: 'opacity 0.5s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: isActive ? 'space-between' : 'flex-end',
                  padding: isActive ? '40px 240px' : '24px 32px 24px 48px',
                  gap: '12px',
                }}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* Overlay */}
                {item.overlayType === 'gradient' ? (
                  <>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: item.backgroundColor,
                        mixBlendMode: 'screen',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.7) 100%)',
                      }}
                    />
                  </>
                ) : (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: item.backgroundColor,
                      mixBlendMode: 'multiply',
                      opacity: 0.6,
                    }}
                  />
                )}

                {/* Text Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h2
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      fontSize: isActive ? '64px' : '32px',
                      lineHeight: 1.2,
                      color: 'white',
                      margin: 0,
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
                  </h2>
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 500,
                      fontSize: isActive ? '16px' : '14px',
                      lineHeight: isActive ? 1.2 : '26px',
                      color: 'white',
                      margin: 0,
                      textAlign: 'center',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Edge Fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '200px',
            background: 'linear-gradient(to right, white, transparent)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />

        {/* Right Edge Fade */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '200px',
            background: 'linear-gradient(to left, white, transparent)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      </div>

      {/* Navigation Controls */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="#242424"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            gap: 4,
            alignItems: 'center',
          }}
        >
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                flex: 1,
                padding: '4px 0',
                background: 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={actualCurrentIndex === index ? 'true' : 'false'}
            >
              <div
                style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: '#242424',
                  borderRadius: '9999px',
                  opacity: actualCurrentIndex === index ? 1 : 0.25,
                  transition: 'opacity 0.3s ease',
                }}
              />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#242424"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
