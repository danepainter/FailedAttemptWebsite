const Photos = () => {
  // Empty array ready for photos
  const photos: string[] = [
    // Example structure:
    // "/photos/photo1.jpg",
    // "/photos/photo2.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-6xl mb-8 text-center pb-6 font-bold">
        Photos
      </h1>

      {photos.length === 0 ? (
        // Empty State
        <div className="text-center py-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-12 md:p-16 max-w-3xl mx-auto border border-blue-200">
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-accent font-semibold">
              Gallery Coming Soon
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
              className="inline-block bg-accent text-white px-10 py-5 font-display text-xl rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View on Instagram
            </a>
          </div>
        </div>
      ) : (
        // Photo Gallery Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all aspect-square border border-gray-200"
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
      <div className="mt-12 bg-surface rounded-2xl shadow-md p-8 border border-gray-200">
        <h2 className="font-display text-2xl mb-4 font-semibold">Photo Submissions</h2>
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

