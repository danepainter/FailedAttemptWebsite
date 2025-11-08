import { bandName, bandBio, bandMembers } from '../data/bandInfo';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-5xl md:text-7xl mb-8 text-center border-b-4 border-accent pb-4">
        ABOUT
      </h1>

      {/* Band Bio */}
      <div className="mb-16">
        <div className="bg-surface border-4 border-accent p-10 md:p-16">
          <h2 className="font-display text-4xl md:text-5xl mb-8 text-accent">{bandName}</h2>
          <p className="text-lg md:text-xl leading-relaxed text-text-primary mb-8 max-w-none">
            {bandBio}
          </p>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-none">
            Formed from a shared vision of creating uncompromising, aggressive music, 
            Failed Attempt pushes the boundaries of modern hardcore. Every riff, every 
            breakdown, and every lyric is crafted to deliver maximum impact.
          </p>
        </div>
      </div>

      {/* Band Members */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8">THE BAND</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bandMembers.map((member, index) => (
            <div
              key={index}
              className="bg-surface border-4 border-text-secondary p-8 md:p-10 hover:border-accent hover:bg-primary transition-all group"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors">{member.name}</h3>
              <p className="text-accent uppercase tracking-wider text-base md:text-lg font-bold">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Genre & Style */}
      <div className="mb-16">
        <h2 className="font-display text-3xl mb-6">STYLE</h2>
        <div className="bg-surface border-4 border-accent p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-xl mb-3 text-accent">GENRE</h3>
              <p className="text-text-primary">Hardcore</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3 text-accent">VIBE</h3>
              <p className="text-text-primary">Dark, Evil, Aggressive</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3 text-accent">ERA</h3>
              <p className="text-text-primary">Early 2000s Inspired</p>
            </div>
          </div>
        </div>
      </div>

      {/* Listen Section */}
      <div className="text-center bg-primary border-4 border-accent p-12">
        <h2 className="font-display text-4xl mb-6">EXPERIENCE THE CHAOS</h2>
        <p className="text-text-secondary mb-8 text-lg">
          Listen to our music on all major streaming platforms.
        </p>
        <a
          href="/music"
          className="inline-block bg-accent text-primary px-8 py-4 font-display text-xl uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-colors border-4 border-primary"
        >
          LISTEN NOW
        </a>
      </div>
    </div>
  );
};

export default About;

