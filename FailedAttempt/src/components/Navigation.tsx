import { useLocation } from 'react-router-dom';
import PillNav from './PillNav';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Music', href: '/music' },
    { label: 'Shows', href: '/shows' },
    { label: 'Media', href: '/media' },
    { label: 'Photos', href: '/photos' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <PillNav
      logo="/logo.png"
      logoAlt="Failed Attempt"
      items={navItems}
      activeHref={location.pathname}
      className=""
      ease="power3.easeOut"
      baseColor="#0B090A"
      pillColor="#E5383B"
      hoveredPillTextColor="#FFFFFF"
      pillTextColor="#FFFFFF"
      initialLoadAnimation={true}
    />
  );
};

export default Navigation;

