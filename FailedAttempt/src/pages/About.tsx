import { bandName, bandBio, bandMembers } from '../data/bandInfo';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-6xl mb-8 text-center pb-6 font-bold">
        About
      </h1>

      {/* Band Bio */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-lg p-10 md:p-16 border border-gray-700">
          <h2 className="font-display text-3xl md:text-4xl mb-8 text-accent font-semibold">{bandName}</h2>
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
        <h2 className="font-display text-3xl md:text-4xl mb-8 font-semibold">The Band</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bandMembers.map((member, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl shadow-md p-8 md:p-10 hover:shadow-xl transition-all group border border-gray-700 hover:border-accent"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors font-semibold">{member.name}</h3>
              <p className="text-accent text-base md:text-lg font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Genre & Style */}
      <div className="mb-16">
        <h2 className="font-display text-3xl mb-6 font-semibold">Style</h2>
        <div className="bg-surface rounded-2xl shadow-md p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-xl mb-3 text-accent font-semibold">Genre</h3>
              <p className="text-text-primary">Hardcore</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3 text-accent font-semibold">Vibe</h3>
              <p className="text-text-primary">Energetic & Intense</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3 text-accent font-semibold">Era</h3>
              <p className="text-text-primary">Modern Hardcore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Listen Section */}
      <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-lg p-12 border border-gray-700">
        <h2 className="font-display text-4xl mb-6 font-semibold">Experience Our Music</h2>
        <p className="text-text-secondary mb-8 text-lg">
          Listen to our music on all major streaming platforms.
        </p>
        <a
          href="/music"
          className="inline-block bg-accent text-white px-10 py-4 font-display text-xl rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Listen Now
        </a>
      </div>
    </div>
  );
};

export default About;

