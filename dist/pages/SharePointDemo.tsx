import { useNavigate } from 'react-router-dom';
import { SharePointShell } from '../lib';
import SiteHeader from '../components/SiteHeader';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import QuickLinksSection from '../components/QuickLinksSection';
import CarouselSection from '../components/CarouselSection';
import EventsSection from '../components/EventsSection';
import EngageSection from '../components/EngageSection';

export default function SharePointDemo() {
  const navigate = useNavigate();

  const sharePointConfig = {
    header: {
      gridIcon: <img src="/assets/icons/Grid Dots.svg" alt="Grid" style={{ width: '24px', height: '24px' }} />,
      logo: '/assets/images/Zava-Full.svg',
      siteName: 'SharePoint',
      onGridClick: () => navigate('/'),
      actions: [
        {
          id: 'copilot',
          icon: <img src="/assets/icons/CopilotOutline.svg" alt="Copilot" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'feedback',
          icon: <img src="/assets/icons/Person Feedback.svg" alt="Feedback" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'megaphone',
          icon: <img src="/assets/icons/Megaphone.svg" alt="Announcements" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'settings',
          icon: <img src="/assets/icons/Settings.svg" alt="Settings" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'help',
          icon: <img src="/assets/icons/Question.svg" alt="Help" style={{ width: '24px', height: '24px' }} />
        }
      ],
      userAvatar: (
        <img src="/assets/images/Avatar (SP).png" alt="User Avatar" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
      ),
    },
    appRail: {
      items: [
        { id: 'zava', label: 'Zava', icon: '/assets/images/ZavaCore_logo.svg' },
        { id: 'discover', label: 'Discover', icon: '/assets/icons/Compass Northwest.svg' },
        { id: 'publish', label: 'Publish', icon: '/assets/icons/Pen.svg' },
        { id: 'build', label: 'Build', icon: '/assets/icons/Broad Activity Feed.svg' },
        { id: 'onedrive', label: 'OneDrive', icon: '/assets/icons/OneDrive.svg' },
      ],
      defaultSelectedId: 'zava',
    },
  };

  return (
    <SharePointShell {...sharePointConfig}>
      {(isPanelOpen) => (
        <div style={{ backgroundColor: 'white', width: '100%' }}>
          <SiteHeader isPanelOpen={isPanelOpen} />
          <HeroSection />
          <NewsSection />
          <QuickLinksSection />
          <CarouselSection />
          <EventsSection />
          <EngageSection />
        </div>
      )}
    </SharePointShell>
  );
}
