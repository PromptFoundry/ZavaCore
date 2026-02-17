const coworkers = [
  { firstName: 'Serena', lastName: 'Davis', image: '/src/assets/images/Coworker-1.png' },
  { firstName: 'Dalaya', lastName: 'Buxton', image: '/src/assets/images/Coworker-2.png' },
  { firstName: 'Noih', lastName: 'Atkins', image: '/src/assets/images/Coworker-3.png' },
  { firstName: 'Kevin', lastName: 'Powers', image: '/src/assets/images/Coworker-4.png' },
];

export default function CoworkerCard() {
  return (
    <div
      className="relative w-full flex-1 bg-white border border-[#e6e6e6] rounded-[24px] flex flex-col z-0"
      style={{
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)'
      }}
    >
      {/* Coworkers Grid */}
      <div className="flex-1 flex gap-4 items-start px-6 pt-4">
        {coworkers.map((coworker, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-1 py-1"
            style={{ width: '71px' }}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <img
                src={coworker.image}
                alt={`${coworker.firstName} ${coworker.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm text-[#242424] text-center flex flex-col" style={{ lineHeight: '20px', letterSpacing: '-0.24px' }}>
              <span>{coworker.firstName}</span>
              <span>{coworker.lastName}</span>
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
          Catch up with coworkers
        </button>
      </div>
    </div>
  );
}
