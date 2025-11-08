import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[80vh]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary to-background py-20 md:py-32 border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Logo - references /logo.png that user will add */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Failed Attempt Logo" 
              className="max-w-md w-full h-auto"
              onError={(e) => {
                // Fallback if logo isn't uploaded yet
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Band Name as fallback or additional text */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 text-accent tracking-wider">
            FAILED ATTEMPT
          </h1>

          <p className="text-xl md:text-2xl font-display tracking-wider text-text-secondary mb-8">
            HARDCORE
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              to="/music"
              className="bg-accent text-primary px-8 py-3 font-display text-lg uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-colors border-4 border-primary"
            >
              LISTEN NOW
            </Link>
            <Link
              to="/shows"
              className="bg-secondary text-text-primary px-8 py-3 font-display text-lg uppercase tracking-wider hover:bg-accent hover:text-primary transition-colors border-4 border-accent"
            >
              SHOWS
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Link
            to="/music"
            className="bg-surface border-4 border-text-secondary p-8 md:p-10 hover:border-accent hover:bg-primary transition-all group cursor-pointer"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors">
              MUSIC
            </h2>
            <p className="text-text-secondary text-base md:text-lg group-hover:text-text-primary transition-colors">
              Stream on all platforms. New music out now.
            </p>
          </Link>

          <Link
            to="/shows"
            className="bg-surface border-4 border-text-secondary p-8 md:p-10 hover:border-accent hover:bg-primary transition-all group cursor-pointer"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors">
              SHOWS
            </h2>
            <p className="text-text-secondary text-base md:text-lg group-hover:text-text-primary transition-colors">
              Check out our upcoming tour dates.
            </p>
          </Link>

          <Link
            to="/media"
            className="bg-surface border-4 border-text-secondary p-8 md:p-10 hover:border-accent hover:bg-primary transition-all group cursor-pointer"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors">
              MEDIA
            </h2>
            <p className="text-text-secondary text-base md:text-lg group-hover:text-text-primary transition-colors">
              Videos, photos, and more from the pit.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

