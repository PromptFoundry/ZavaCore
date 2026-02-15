import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  CheckBadgeIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import ChatInput from './ChatInput';
import LeftNav from './LeftNav';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex">
      {/* Left Navigation - Hidden on mobile, visible on lg+ */}
      <aside className="hidden lg:block w-[320px] xl:w-[320px] h-screen shrink-0">
        <LeftNav />
      </aside>

      {/* Right side with Header and Content */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Header */}
        <header className="h-[52px] bg-white border-b border-[#818181] shrink-0 px-4 lg:px-0 flex items-center z-10">
          {/* Mobile menu button */}
          <button className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Bars3Icon className="w-6 h-6 text-[#424242]" />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto py-8 md:py-16 lg:py-[126px] px-4 md:px-6 lg:px-8">
          <div className="w-full max-w-[790px] mx-auto flex flex-col gap-4 md:gap-6 lg:gap-7">
            {/* Agent Composer */}
            <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[53px]">
              {/* Agent Header */}
              <div className="w-full max-w-[784px] flex flex-col items-center gap-4 md:gap-6">
                {/* Icon and Name */}
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-2 h-10 md:h-12">
                    {/* Agent Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white border border-[#f0f0f0] rounded-xl md:rounded-2xl flex items-center justify-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#00a4ef] to-[#0078d4] rounded-sm flex items-center justify-center text-white text-xs font-bold">
                        Z
                      </div>
                    </div>

                    {/* Agent Name */}
                    <h1 className="text-2xl md:text-3xl lg:text-[32px] leading-8 md:leading-10 lg:leading-[40px] font-bold text-[#333333]">
                      ZavaCore Agent
                    </h1>
                  </div>

                  {/* Authorship */}
                  <div className="flex items-center gap-1 text-xs md:text-sm text-[#616161]">
                    <span>Created by</span>
                    <span className="font-medium">ZavaCore</span>
                    <CheckBadgeIcon className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Chat Input and Prompt Starters */}
              <div className="w-full max-w-[1072px] flex flex-col gap-6 md:gap-8">
                {/* Chat Input */}
                <ChatInput />

                {/* Prompt Starters */}
                <div className="flex flex-col gap-4 md:gap-5">
                  {/* Cards Grid - 1 col on mobile, 2 cols on sm, 3 cols on md+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {/* Plan my day */}
                    <div className="bg-white border border-[#e0e0e0] rounded-3xl md:rounded-[28px] p-3 md:p-4 flex flex-col gap-2 min-h-[120px] md:h-[134px] hover:border-[#c7c7c7] transition-colors cursor-pointer">
                      <div className="flex items-start gap-2">
                        <ChatBubbleLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-[#424242] shrink-0" />
                        <h3 className="text-sm font-semibold text-[#424242]">Plan my day</h3>
                      </div>
                      <p className="text-xs md:text-sm text-[#424242] line-clamp-3 flex-1">
                        What should I prioritize based on my schedule?
                      </p>
                      <p className="text-[10px] text-[#616161]">Your close connection</p>
                    </div>

                    {/* Take action */}
                    <div className="bg-white border border-[#e0e0e0] rounded-3xl md:rounded-[28px] p-3 md:p-4 flex flex-col gap-2 min-h-[120px] md:h-[134px] hover:border-[#c7c7c7] transition-colors cursor-pointer">
                      <div className="flex items-start gap-2">
                        <ChatBubbleLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-[#424242] shrink-0" />
                        <h3 className="text-sm font-semibold text-[#424242]">Take action</h3>
                      </div>
                      <p className="text-xs md:text-sm text-[#424242] line-clamp-3 flex-1">
                        Find marketing documents that need my feedback
                      </p>
                      <p className="text-[10px] text-[#616161]">Arrive prepared</p>
                    </div>

                    {/* Catch up */}
                    <div className="bg-white border border-[#e0e0e0] rounded-3xl md:rounded-[28px] p-3 md:p-4 flex flex-col gap-2 min-h-[120px] md:h-[134px] hover:border-[#c7c7c7] transition-colors cursor-pointer">
                      <div className="flex items-start gap-2">
                        <ChatBubbleLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-[#424242] shrink-0" />
                        <h3 className="text-sm font-semibold text-[#424242]">Catch up</h3>
                      </div>
                      <p className="text-xs md:text-sm text-[#424242] line-clamp-3 flex-1">
                        Highlight town hall updates relevant to my work
                      </p>
                      <p className="text-[10px] text-[#616161]">Recently shared with you</p>
                    </div>
                  </div>

                  {/* See more button */}
                  <div className="flex justify-end">
                    <button className="flex items-center gap-1 px-3 py-1.5 text-xs md:text-sm text-[#424242] hover:bg-gray-50 rounded-md transition-colors">
                      <span>See more</span>
                      <ChevronDownIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Container */}
            <div className="w-full h-[200px] md:h-[250px] lg:h-[302px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />

            {/* Widget Section 1 - Stack on mobile/tablet, side-by-side on lg+ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[18px]">
              <div className="w-full h-[300px] md:h-[350px] lg:h-[383px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
              <div className="w-full flex flex-col gap-3 md:gap-[13px]">
                <div className="h-[140px] md:h-[165px] lg:h-[185px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
                <div className="h-[140px] md:h-[165px] lg:h-[185px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
              </div>
            </div>

            {/* QA Widget Grid - 1 col on mobile, 2 cols on sm, 3 cols on md+ */}
            <div className="flex flex-col gap-3 md:gap-[13px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-[31px]">
                <div className="w-full h-[100px] md:h-[103px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
                <div className="w-full h-[100px] md:h-[103px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
                <div className="w-full h-[100px] md:h-[103px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-[31px]">
                <div className="w-full h-[100px] md:h-[103px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
                <div className="w-full h-[100px] md:h-[103px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
                <div className="w-full h-[100px] md:h-[103px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
              </div>
            </div>

            {/* Bottom Widget Section - Stack on mobile/tablet, side-by-side on lg+ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="w-full h-[300px] md:h-[350px] lg:h-[383px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
              <div className="w-full h-[300px] md:h-[350px] lg:h-[383px] bg-white border border-[#818181] rounded-xl md:rounded-2xl" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
