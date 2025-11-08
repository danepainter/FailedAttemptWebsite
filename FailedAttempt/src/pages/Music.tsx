import { streamingPlatforms } from '../data/bandInfo';
// import AudioPlayer from '../components/AudioPlayer'; // Uncomment when adding audio samples

const Music = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-5xl md:text-7xl mb-8 text-center border-b-4 border-accent pb-4">
        MUSIC
      </h1>

      {/* Streaming Platforms */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8">STREAM NOW</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {streamingPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface border-4 border-text-secondary p-8 hover:border-accent hover:bg-primary transition-all group cursor-pointer"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors">
                {platform.name}
              </h3>
              <p className="text-text-secondary text-base uppercase tracking-wider group-hover:text-text-primary transition-colors">
                Listen on {platform.name} →
              </p>
            </a>
          ))}
        </div>

        {/* Spotify Embed */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl mb-6">SPOTIFY PLAYER</h3>
          <div className="bg-surface p-6 border-4 border-accent">
            <iframe
              style={{ borderRadius: '0' }}
              src="https://open.spotify.com/embed/artist/480sb9ILAMg0RVSRpEysVR?utm_source=generator&theme=0"
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
              title="Spotify Player"
            ></iframe>
          </div>
        </div>

        {/* Bandcamp Embed */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl mb-6">BANDCAMP</h3>
          <div className="bg-surface p-6 border-4 border-accent">
            <iframe
              style={{ border: 0, width: '100%', height: '380px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=3850885425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
              className="w-full"
              title="Bandcamp Player"
            >
              <a href="https://failedattempt.bandcamp.com/album/failed-attempt">
                Failed Attempt by Failed Attempt
              </a>
            </iframe>
          </div>
        </div>
      </div>

      {/* Audio Samples Section */}
      <div className="mb-12">
        <h2 className="font-display text-3xl mb-6">AUDIO SAMPLES</h2>
        <p className="text-text-secondary mb-6">
          15-second preview samples. Full tracks available on streaming platforms.
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          {/* Placeholder for audio samples - user can add their own audio files */}
          <div className="bg-surface border-4 border-text-secondary p-6 text-center">
            <p className="text-text-secondary">
              Audio samples coming soon. Add your audio files to the public folder and update the AudioPlayer components here.
            </p>
          </div>
          
          {/* Example AudioPlayer - uncomment and update when audio files are added
          <AudioPlayer
            title="Track Name"
            audioUrl="/audio/sample.mp3"
            maxDuration={15}
          />
          */}
        </div>
      </div>

      {/* YouTube Link */}
      <div className="text-center mt-12">
        <a
          href="https://www.youtube.com/@FailedAttemptHxC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-primary px-8 py-4 font-display text-xl uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-colors border-4 border-primary"
        >
          WATCH ON YOUTUBE
        </a>
      </div>
    </div>
  );
};

export default Music;

