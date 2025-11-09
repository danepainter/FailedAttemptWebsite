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
      baseColor="#1e293b"
      pillColor="#f8fafc"
      hoveredPillTextColor="#0f172a"
      pillTextColor="#0f172a"
      initialLoadAnimation={true}
    />
  );
};

export default Navigation;

