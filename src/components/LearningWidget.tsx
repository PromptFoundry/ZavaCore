import { Settings20Regular } from '@fluentui/react-icons';

const courses = [
  {
    image: '/assets/images/Learning image.png',
    title: 'Safe manufacturing: Ensuring your safety and the safety of others',
    dueDate: 'Due: 7/23/2026',
    info: 'Course | 30 mins',
    isDue: true,
  },
  {
    image: '/assets/images/Learning image-1.png',
    title: 'Innovating smart materials for tomorrow',
    trending: true,
    info: 'Course | 30 mins',
    isDue: false,
  },
];

export default function LearningWidget() {
  return (
    <div
      data-name="Learning widget"
      className="relative w-full bg-white border border-[#edebe9] rounded-[24px] flex flex-col z-0"
      style={{
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-[2px]">
        <h2
          className="text-[#242424]"
          style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}
        >
          Learning
        </h2>
        <button
          className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
          aria-label="Settings"
        >
          <Settings20Regular className="w-5 h-5 text-[#424242]" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 px-5 pt-4 pb-4 flex flex-col justify-start items-start gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            {/* Image */}
            <div className="w-[140px] h-[90px] shrink-0 rounded-lg overflow-hidden">
              <img
                src={course.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              {/* Title */}
              <p
                className="font-semibold text-[#424242] line-clamp-2"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                {course.title}
              </p>

              {/* Due Date or Trending */}
              {course.isDue && course.dueDate && (
                <p
                  className="text-[#b10e1c] truncate"
                  style={{ fontSize: '12px', lineHeight: '16px' }}
                >
                  {course.dueDate}
                </p>
              )}

              {course.trending && (
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 8.5L8 6L6 8L2 4" stroke="#0f6cbd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p
                    className="text-[#0f6cbd] truncate"
                    style={{ fontSize: '12px', lineHeight: '16px' }}
                  >
                    Trending
                  </p>
                </div>
              )}

              {/* Course Info */}
              <p
                className="text-[#616161] truncate"
                style={{ fontSize: '12px', lineHeight: '16px' }}
              >
                {course.info}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center justify-start">
        <button
          className="px-3 py-[5px] bg-white border border-[#d1d1d1] rounded-[4px] text-sm font-semibold text-[#242424] hover:bg-[#f5f5f5] transition-colors"
          style={{ lineHeight: '20px' }}
        >
          What can I learn today?
        </button>
      </div>
    </div>
  );
}
