import DarkVeil from '../components/Background';

const Media = () => {
  return (
    <div className="min-h-[80vh] relative">
      {/* Page Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <DarkVeil hueShift={249} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
    <div className="w-full mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-6xl mb-8 text-center pb-6 font-bold text-accent">
        Media
      </h1>

      {/* YouTube Section */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8 font-semibold text-accent text-center">YouTube</h2>
        <div className="rounded-3xl p-10 md:p-12 text-center">
          <div className="flex justify-center mb-8">
            <p className="text-text-primary text-lg md:text-xl max-w-3xl text-center">
              Check out our latest videos, live performances, and music videos on YouTube.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@FailedAttemptHxC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 font-display text-lg font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-[#BA181B] transition-all shadow-2xl hover:shadow-[0_0_20px_rgba(229,56,59,0.6)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Visit our YouTube channel"
          >
            <span>Watch on YouTube</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8 font-semibold text-accent text-center">Instagram</h2>
        <div className="rounded-3xl p-10 md:p-12 text-center">
          <div className="flex justify-center mb-8">
            <p className="text-text-primary text-lg md:text-xl max-w-3xl text-center">
              Follow us on Instagram for behind-the-scenes content, show updates, and more.
            </p>
          </div>
          <a
            href="https://www.instagram.com/failedattempt.hc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 font-display text-lg font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-[#BA181B] transition-all shadow-2xl hover:shadow-[0_0_20px_rgba(229,56,59,0.6)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Follow us on Instagram"
          >
            <span>Follow @failedattempt.hc</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Media;

