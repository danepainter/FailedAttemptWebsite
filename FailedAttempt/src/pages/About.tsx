import { bandName, bandBio, bandMembers } from '../data/bandInfo';
import DarkVeil from '../components/Background';

const About = () => {
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
        About
      </h1>

      {/* Band Bio */}
      <div className="mb-16">
        <div className="rounded-3xl p-10 md:p-16">
          <h2 className="font-display text-3xl md:text-4xl mb-8 text-accent font-semibold text-center">{bandName}</h2>
          <div className="flex justify-center mb-8">
            <p className="text-lg md:text-xl leading-relaxed text-text-primary text-center max-w-4xl">
              {bandBio}
            </p>
          </div>
        </div>
      </div>

      {/* Band Members */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8 font-semibold text-accent">The Band</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bandMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md p-8 md:p-10 hover:shadow-xl transition-all group border border-[#161A1D] hover:border-accent"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors font-semibold">{member.name}</h3>
              <p className="text-accent text-base md:text-lg font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default About;

