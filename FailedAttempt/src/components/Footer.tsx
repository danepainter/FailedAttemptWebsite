import { socialLinks } from '../data/bandInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface shadow-lg mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl mb-2 font-semibold">Failed Attempt</p>
            <p className="text-text-secondary text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-accent text-white hover:bg-blue-600 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md"
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

