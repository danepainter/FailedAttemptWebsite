const Media = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-5xl md:text-7xl mb-8 text-center border-b-4 border-accent pb-4">
        MEDIA
      </h1>

      {/* YouTube Section */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8">YOUTUBE</h2>
        <div className="bg-surface border-4 border-accent p-10 md:p-12">
          <p className="text-text-primary text-lg md:text-xl mb-8 max-w-3xl">
            Check out our latest videos, live performances, and music videos on YouTube.
          </p>
          <a
            href="https://www.youtube.com/@FailedAttemptHxC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-primary px-8 py-4 font-display text-lg uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-all border-4 border-primary hover:scale-105"
          >
            VISIT CHANNEL
          </a>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8">INSTAGRAM</h2>
        <div className="bg-surface border-4 border-accent p-10 md:p-12">
          <p className="text-text-primary text-lg md:text-xl mb-8 max-w-3xl">
            Follow us on Instagram for behind-the-scenes content, show updates, and more.
          </p>
          <a
            href="https://www.instagram.com/failedattempt.hc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-primary px-8 py-4 font-display text-lg uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-all border-4 border-primary hover:scale-105"
          >
            @FAILEDATTEMPT.HC
          </a>
        </div>
      </div>

      {/* Video Embeds Section - Placeholder */}
      <div className="mb-12">
        <h2 className="font-display text-3xl mb-6">FEATURED VIDEOS</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-surface border-4 border-text-secondary p-8 text-center">
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

      {/* Press / Media Kit */}
      <div className="bg-surface border-4 border-accent p-8">
        <h2 className="font-display text-2xl mb-4">PRESS / MEDIA</h2>
        <p className="text-text-secondary mb-4">
          Looking for press photos, logos, or other media materials? Contact us for our media kit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-primary px-6 py-2 font-display uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-colors border-2 border-primary"
        >
          GET MEDIA KIT
        </a>
      </div>
    </div>
  );
};

export default Media;

