import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[80vh]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0B090A] to-[#161A1D] py-16 md:py-24">
        <div className="w-full px-4 text-center">
          {/* Logo - references /logo.png that user will add */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Failed Attempt Logo" 
              className="max-w-md w-full h-auto rounded-2xl shadow-xl"
              onError={(e) => {
                // Fallback if logo isn't uploaded yet
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Band Name as fallback or additional text */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4 text-accent font-bold text-center">
            Failed Attempt
          </h1>

          <div className="w-full flex justify-center mb-12">
            <p className="text-xl md:text-2xl text-text-secondary font-medium">
              Hardcore Music
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full px-4 py-16 flex justify-center">
        <div className="max-w-4xl w-full mb-16">
          <h2 className="font-display text-3xl md:text-4xl mb-8 text-center font-semibold text-accent">Latest Video</h2>
          <div className="bg-surface rounded-2xl shadow-lg p-6 border-2 border-accent overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/aWHRAM_Qld0"
                title="Failed Attempt - Latest Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Cards Section - Unified Grid */}
      <div className="w-full px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Music Card */}
          <Link
            to="/music"
            className="bg-surface rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group cursor-pointer border-2 border-accent hover:border-[#BA181B] hover:scale-105"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🎵</div>
              <h2 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors font-semibold">
                Music
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                Stream on all platforms
              </p>
            </div>
          </Link>

          {/* Shows Card */}
          <Link
            to="/shows"
            className="bg-surface rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group cursor-pointer border-2 border-accent hover:border-[#BA181B] hover:scale-105"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🎤</div>
              <h2 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors font-semibold">
                Shows
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                Tour dates & tickets
              </p>
            </div>
          </Link>

          {/* Media Card */}
          <Link
            to="/media"
            className="bg-surface rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group cursor-pointer border-2 border-accent hover:border-[#BA181B] hover:scale-105"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">📺</div>
              <h2 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors font-semibold">
                Media
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                Videos & photos
              </p>
            </div>
          </Link>

          {/* About Card */}
          <Link
            to="/about"
            className="bg-surface rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group cursor-pointer border-2 border-accent hover:border-[#BA181B] hover:scale-105"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">ℹ️</div>
              <h2 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors font-semibold">
                About
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                Our story & members
              </p>
            </div>
          </Link>

          {/* Contact Card */}
          <Link
            to="/contact"
            className="bg-surface rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group cursor-pointer border-2 border-accent hover:border-[#BA181B] hover:scale-105"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h2 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors font-semibold">
                Contact
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                Get in touch
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

