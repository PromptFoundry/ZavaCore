export interface EventItem {
  id: string;
  image: string;
  date: string;
  title: string;
  organizer: string;
  avatars: string[];
}

export interface EventsSectionProps {
  /** Custom className */
  className?: string;
}

const events: EventItem[] = [
  {
    id: 'event-1',
    image: '/assets/images/Thumbnail.png',
    date: 'THU, MAR 14, 2:00 PM',
    title: 'New Employee Orientation',
    organizer: 'Organized by HR Team',
    avatars: [
      '/assets/images/Avatar (SP).png',
      '/assets/images/Avatar pie.png',
      '/assets/images/Avatar.svg',
    ],
  },
  {
    id: 'event-2',
    image: '/assets/images/Thumbnail-1.png',
    date: 'FRI, MAR 15, 10:00 AM',
    title: 'Q1 Strategy Review',
    organizer: 'Organized by Executive Team',
    avatars: [
      '/assets/images/Avatar pie.png',
      '/assets/images/Avatar (SP).png',
    ],
  },
  {
    id: 'event-3',
    image: '/assets/images/Thumbnail-2.png',
    date: 'MON, MAR 18, 3:00 PM',
    title: 'Product Launch Planning',
    organizer: 'Organized by Product Team',
    avatars: [
      '/assets/images/Avatar.svg',
      '/assets/images/Avatar (SP).png',
      '/assets/images/Avatar pie.png',
      '/assets/images/Avatar (SP).png',
    ],
  },
  {
    id: 'event-4',
    image: '/assets/images/Thumbnail-3.png',
    date: 'TUE, MAR 19, 1:00 PM',
    title: 'Team Building Workshop',
    organizer: 'Organized by Culture Committee',
    avatars: [
      '/assets/images/Avatar (SP).png',
      '/assets/images/Avatar.svg',
    ],
  },
];

/**
 * EventsSection - Upcoming events showcase
 *
 * Displays a horizontal row of upcoming event cards with images, dates, titles, and organizer avatars.
 *
 * @example
 * ```tsx
 * <EventsSection />
 * ```
 */
export default function EventsSection({
  className = '',
}: EventsSectionProps) {
  return (
    <section
      className={className}
      style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '80px 10px',
        position: 'relative',
      }}
    >
      {/* Hexagon on right side - pointy top, 250% larger */}
      <div
        style={{
          position: 'absolute',
          right: '-250px',
          bottom: '-868px',
          width: '1000px',
          height: '1155px',
          backgroundColor: '#F0F0F0',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          zIndex: 0,
        }}
      />

      {/* Hexagon on bottom left - peaks down into Engage section */}
      <div
        style={{
          position: 'absolute',
          left: '-150px',
          bottom: '-450px',
          width: '500px',
          height: '577px',
          backgroundColor: '#F0F0F0',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          zIndex: 0,
        }}
      />
      {/* Title */}
      <div style={{ maxWidth: '1204px', margin: '0 auto 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
          Upcoming events
        </p>
      </div>

      {/* Events Grid */}
      <div
        style={{
          maxWidth: '1204px',
          margin: '0 auto',
          display: 'flex',
          gap: '32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              flex: 1,
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'white',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0px 2px 8px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Featured Image */}
            <img
              src={event.image}
              alt=""
              style={{
                width: '100%',
                height: '116px',
                objectFit: 'cover',
              }}
            />

            {/* Event Details */}
            <div
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {/* Date */}
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '10px',
                  lineHeight: 1.2,
                  color: '#424242',
                  margin: 0,
                }}
              >
                {event.date}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.375,
                  color: '#242424',
                  margin: 0,
                  maxHeight: '44px',
                  overflow: 'hidden',
                }}
              >
                {event.title}
              </h3>

              {/* Organizer with Avatars */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '4px',
                }}
              >
                {/* Avatar Stack */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {event.avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt=""
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '2px solid white',
                        marginRight: index < event.avatars.length - 1 ? '-4px' : '0',
                      }}
                    />
                  ))}
                </div>

                {/* Organizer Text */}
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500,
                    fontSize: '10px',
                    lineHeight: 1.2,
                    color: '#616161',
                    margin: 0,
                  }}
                >
                  {event.organizer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
