import DarkVeil from '../components/Background';

const Home = () => {
  return (
    <div className="min-h-[80vh] relative">
      {/* Page Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <DarkVeil hueShift={249} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      {/* Hero Section */}
      <div className="py-16 md:py-24">
        <div className="w-full px-4 text-center">
          {/* Logo - references /logo.png that user will add */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Failed Attempt Logo" 
              className="max-w-md w-3/4 h-auto rounded-2xl"
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
      <div className="w-full px-4 py-16 mb-24 flex justify-center">
        <div className="max-w-4xl w-full">
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
      </div>
    </div>
  );
};

export default Home;

