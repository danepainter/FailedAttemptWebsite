import { shows } from '../data/shows';

const Shows = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-5xl md:text-7xl mb-8 text-center border-b-4 border-accent pb-4">
        SHOWS
      </h1>

      {shows.length === 0 ? (
        // Empty State
        <div className="text-center py-20">
          <div className="bg-surface border-4 border-accent p-12 md:p-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-accent">
              NO SHOWS SCHEDULED
            </h2>
            <p className="text-text-primary text-lg md:text-xl mb-6 mx-auto">
              Check back soon for upcoming tour dates.
            </p>
            <p className="text-text-secondary text-base md:text-lg">
              Follow us on social media for the latest updates.
            </p>
          </div>
        </div>
      ) : (
        // Shows List
        <div className="space-y-4">
          {shows.map((show) => (
            <div
              key={show.id}
              className="bg-surface border-4 border-text-secondary p-6 hover:border-accent transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="font-display text-2xl text-accent">
                      {formatDate(show.date)}
                    </span>
                    <span className="text-text-secondary text-sm uppercase">
                      {show.city}, {show.state}
                    </span>
                  </div>
                  <h3 className="font-display text-xl mb-2">{show.venue}</h3>
                  {show.supportingActs && show.supportingActs.length > 0 && (
                    <p className="text-text-secondary text-sm">
                      with {show.supportingActs.join(', ')}
                    </p>
                  )}
                </div>
                {show.ticketLink && (
                  <a
                    href={show.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-primary px-6 py-3 font-display uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-colors border-2 border-primary text-center"
                  >
                    TICKETS
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info Section */}
      <div className="mt-16 bg-surface border-4 border-accent p-10 md:p-12">
        <h2 className="font-display text-3xl md:text-4xl mb-6">BOOKING</h2>
        <p className="text-text-primary text-lg md:text-xl mb-6 max-w-3xl">
          Interested in booking Failed Attempt for your venue or festival?
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-primary px-8 py-4 font-display text-lg uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-all border-4 border-primary hover:scale-105"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default Shows;

