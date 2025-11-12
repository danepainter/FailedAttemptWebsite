import { streamingPlatforms } from '../data/bandInfo';
// import AudioPlayer from '../components/AudioPlayer'; // Uncomment when adding audio samples

const Music = () => {
  return (
    <div className="w-full mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-6xl mb-8 text-center pb-6 font-bold text-accent">
        Music
      </h1>

      {/* Streaming Platforms */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-8 font-semibold text-accent">Stream Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {streamingPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface rounded-2xl shadow-md p-8 hover:shadow-xl transition-all group cursor-pointer border border-[#161A1D] hover:border-accent"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors font-semibold">
                {platform.name}
              </h3>
              <p className="text-text-secondary text-base group-hover:text-accent transition-colors">
                Listen on {platform.name} →
              </p>
            </a>
          ))}
        </div>

        {/* Spotify Embed */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl mb-6 font-semibold text-accent">Spotify Player</h3>
          <div className="bg-surface p-6 rounded-2xl shadow-md border-2 border-accent">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/480sb9ILAMg0RVSRpEysVR?utm_source=generator&theme=1"
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
              title="Spotify Player"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;

