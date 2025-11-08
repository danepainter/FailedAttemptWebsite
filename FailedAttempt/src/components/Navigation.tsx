import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/music', label: 'MUSIC' },
    { path: '/shows', label: 'SHOWS' },
    { path: '/media', label: 'MEDIA' },
    { path: '/photos', label: 'PHOTOS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-secondary border-b-4 border-accent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-3 md:px-6 py-3 md:py-4 font-display text-xs md:text-sm lg:text-base
                  transition-all duration-200
                  border-2 border-text-secondary
                  ${isActive(link.path)
                    ? 'bg-accent text-primary border-accent scale-105'
                    : 'bg-secondary text-text-primary hover:bg-accent hover:text-primary hover:border-accent hover:scale-105'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

