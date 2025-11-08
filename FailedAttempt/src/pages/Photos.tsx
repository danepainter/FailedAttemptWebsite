const Photos = () => {
  // Empty array ready for photos
  const photos: string[] = [
    // Example structure:
    // "/photos/photo1.jpg",
    // "/photos/photo2.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-5xl md:text-7xl mb-8 text-center border-b-4 border-accent pb-4">
        PHOTOS
      </h1>

      {photos.length === 0 ? (
        // Empty State
        <div className="text-center py-20">
          <div className="bg-surface border-4 border-accent p-12 md:p-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-accent">
              GALLERY COMING SOON
            </h2>
            <p className="text-text-primary text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              We're working on adding photos from shows, studio sessions, and more.
            </p>
            <p className="text-text-secondary text-base md:text-lg mb-10">
              Check out our Instagram for the latest photos in the meantime.
            </p>
            <a
              href="https://www.instagram.com/failedattempt.hc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-10 py-5 font-display text-xl uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-all border-4 border-primary hover:scale-105"
            >
              VIEW ON INSTAGRAM
            </a>
          </div>
        </div>
      ) : (
        // Photo Gallery Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-surface border-4 border-text-secondary overflow-hidden hover:border-accent transition-all aspect-square"
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Photo Credit / Info Section */}
      <div className="mt-12 bg-surface border-4 border-accent p-8">
        <h2 className="font-display text-2xl mb-4">PHOTO SUBMISSIONS</h2>
        <p className="text-text-secondary mb-4">
          Got photos from one of our shows? Tag us on Instagram or send them our way.
        </p>
        <p className="text-text-secondary text-sm">
          All photo credits will be properly attributed.
        </p>
      </div>
    </div>
  );
};

export default Photos;

