import { useNavigate } from 'react-router-dom';
import { SharePointShell } from '../lib';
import gridDotsIcon from '../assets/icons/Grid Dots.svg';
import zavaFull from '../assets/images/Zava-Full.svg';
import copilotOutlineIcon from '../assets/icons/CopilotOutline.svg';
import personFeedbackIcon from '../assets/icons/Person Feedback.svg';
import megaphoneIcon from '../assets/icons/Megaphone.svg';
import settingsIcon from '../assets/icons/Settings.svg';
import questionIcon from '../assets/icons/Question.svg';
import carolePng from '../assets/images/Carole Poland.png';
import zavcoreLogo from '../assets/images/ZavaCore_logo.svg';
import compassIcon from '../assets/icons/Compass Northwest.svg';
import penIcon from '../assets/icons/Pen.svg';
import broadActivityIcon from '../assets/icons/Broad Activity Feed.svg';
import onedriveIcon from '../assets/icons/OneDrive.svg';
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
      gridIcon: <img src={gridDotsIcon} alt="Grid" style={{ width: '24px', height: '24px' }} />,
      logo: zavaFull,
      siteName: 'SharePoint',
      onGridClick: () => navigate('/'),
      actions: [
        {
          id: 'copilot',
          icon: <img src={copilotOutlineIcon} alt="ZavaCore Agent" style={{ width: '24px', height: '24px' }} />,
        },
        {
          id: 'feedback',
          icon: <img src={personFeedbackIcon} alt="Feedback" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'megaphone',
          icon: <img src={megaphoneIcon} alt="Announcements" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'settings',
          icon: <img src={settingsIcon} alt="Settings" style={{ width: '24px', height: '24px' }} />
        },
        {
          id: 'help',
          icon: <img src={questionIcon} alt="Help" style={{ width: '24px', height: '24px' }} />
        }
      ],
      userAvatar: (
        <img src={carolePng} alt="User Avatar" style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
      ),
    },
    appRail: {
      items: [
        { id: 'zava', label: 'Zava', icon: zavcoreLogo },
        { id: 'discover', label: 'Discover', icon: compassIcon },
        { id: 'publish', label: 'Publish', icon: penIcon },
        { id: 'build', label: 'Build', icon: broadActivityIcon },
        { id: 'onedrive', label: 'OneDrive', icon: onedriveIcon },
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
