import { socialLinks } from '../data/bandInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t-4 border-accent mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl tracking-wider mb-2">FAILED ATTEMPT</p>
            <p className="text-text-secondary text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-text-secondary text-text-primary hover:text-primary hover:bg-accent hover:border-accent transition-all duration-200 text-sm font-bold uppercase tracking-wider"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

