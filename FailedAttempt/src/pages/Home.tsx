import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[80vh]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
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
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 text-primary font-bold">
            Failed Attempt
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-8 font-medium">
            Hardcore Music
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              to="/music"
              className="bg-accent text-white px-10 py-4 font-display text-lg rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Listen Now
            </Link>
            <Link
              to="/shows"
              className="bg-surface text-text-primary px-10 py-4 font-display text-lg rounded-xl hover:bg-accent hover:text-white transition-all shadow-lg hover:shadow-xl border border-gray-700 hover:scale-105"
            >
              Shows
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Link
            to="/music"
            className="bg-surface rounded-2xl shadow-md p-8 md:p-10 hover:shadow-xl transition-all group cursor-pointer border border-gray-700 hover:border-accent"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors font-semibold">
              Music
            </h2>
            <p className="text-text-secondary text-base md:text-lg">
              Stream on all platforms. New music out now.
            </p>
          </Link>

          <Link
            to="/shows"
            className="bg-surface rounded-2xl shadow-md p-8 md:p-10 hover:shadow-xl transition-all group cursor-pointer border border-gray-700 hover:border-accent"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors font-semibold">
              Shows
            </h2>
            <p className="text-text-secondary text-base md:text-lg">
              Check out our upcoming tour dates.
            </p>
          </Link>

          <Link
            to="/media"
            className="bg-surface rounded-2xl shadow-md p-8 md:p-10 hover:shadow-xl transition-all group cursor-pointer border border-gray-700 hover:border-accent"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors font-semibold">
              Media
            </h2>
            <p className="text-text-secondary text-base md:text-lg">
              Videos, photos, and more from the band.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

