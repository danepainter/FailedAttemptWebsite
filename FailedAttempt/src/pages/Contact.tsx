import { socialLinks, contactEmail } from '../data/bandInfo';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-6xl mb-8 text-center pb-6 font-bold">
        Contact
      </h1>

      {/* Email Contact */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-10 md:p-16 text-center border border-blue-200">
          <h2 className="font-display text-3xl md:text-4xl mb-8 font-semibold">Get in Touch</h2>
          <p className="text-text-primary text-lg md:text-xl mb-8 mx-auto max-w-2xl">
            For booking inquiries, press, or general questions:
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-block bg-accent text-white px-10 py-5 font-display text-xl rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl mb-6 hover:scale-105"
          >
            Email Us
          </a>
          <p className="text-text-secondary text-base mt-6">
            {contactEmail}
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8 text-center font-semibold">Follow Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface rounded-2xl shadow-md p-10 md:p-12 hover:shadow-xl transition-all group text-center cursor-pointer border border-gray-200 hover:border-accent"
            >
              <h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors font-semibold">
                {link.platform}
              </h3>
              <p className="text-text-secondary text-base md:text-lg group-hover:text-accent transition-colors">
                {link.label}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Booking Info */}
      <div className="bg-surface rounded-2xl shadow-md p-8 md:p-12 border border-gray-200">
        <h2 className="font-display text-2xl mb-6 font-semibold">Booking</h2>
        <div className="space-y-4 text-text-secondary">
          <p>
            <strong className="text-text-primary">Booking Inquiries:</strong> Email us with your venue details, 
            date, and any other information.
          </p>
          <p>
            <strong className="text-text-primary">Press / Media:</strong> For interviews, press photos, 
            or media kits, reach out via email.
          </p>
          <p>
            <strong className="text-text-primary">General Questions:</strong> We'll get back to you 
            as soon as possible.
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12 text-center">
        <p className="text-text-secondary mb-4">Listen to our music on:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://open.spotify.com/artist/480sb9ILAMg0RVSRpEysVR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent transition-colors font-display uppercase tracking-wider"
          >
            Spotify
          </a>
          <span className="text-text-secondary">|</span>
          <a
            href="https://music.apple.com/ca/artist/failed-attempt/1840261752"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent transition-colors font-display uppercase tracking-wider"
          >
            Apple Music
          </a>
          <span className="text-text-secondary">|</span>
          <a
            href="https://failedattempt.bandcamp.com/album/failed-attempt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent transition-colors font-display uppercase tracking-wider"
          >
            Bandcamp
          </a>
          <span className="text-text-secondary">|</span>
          <a
            href="https://www.youtube.com/@FailedAttemptHxC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent transition-colors font-display uppercase tracking-wider"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

