const Media = () => {
  return (
    <div className="w-full mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-6xl mb-8 text-center pb-6 font-bold text-accent">
        Media
      </h1>

      {/* YouTube Section */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8 font-semibold text-accent">YouTube</h2>
        <div className="bg-gradient-to-br from-[#0B090A] to-[#161A1D] rounded-3xl shadow-lg p-10 md:p-12 border border-[#161A1D]">
          <p className="text-text-primary text-lg md:text-xl mb-8 max-w-3xl">
            Check out our latest videos, live performances, and music videos on YouTube.
          </p>
          <a
            href="https://www.youtube.com/@FailedAttemptHxC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-10 py-4 font-display text-lg rounded-xl hover:bg-[#BA181B] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Visit Channel
          </a>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8 font-semibold text-accent">Instagram</h2>
        <div className="bg-gradient-to-br from-[#0B090A] to-[#161A1D] rounded-3xl shadow-lg p-10 md:p-12 border border-[#161A1D]">
          <p className="text-text-primary text-lg md:text-xl mb-8 max-w-3xl">
            Follow us on Instagram for behind-the-scenes content, show updates, and more.
          </p>
          <a
            href="https://www.instagram.com/failedattempt.hc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-10 py-4 font-display text-lg rounded-xl hover:bg-[#BA181B] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            @failedattempt.hc
          </a>
        </div>
      </div>

      {/* Video Embeds Section - Placeholder */}
      <div className="mb-12">
        <h2 className="font-display text-3xl mb-6 font-semibold text-accent">Featured Videos</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-surface rounded-2xl shadow-md p-8 text-center border border-[#161A1D]">
            <p className="text-text-secondary">
              Featured video embeds coming soon. Add YouTube embed codes here when available.
            </p>
            <p className="text-text-secondary text-sm mt-4">
              Example: Replace the src below with your YouTube video embed URL
            </p>
          </div>
          
          {/* Example YouTube Embed - Update with actual video IDs
          <div className="bg-surface border-4 border-text-secondary p-4">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="font-display text-xl mt-4">VIDEO TITLE</h3>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default Media;

