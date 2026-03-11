import Link from 'next/link';
import type { Event } from '@/lib/site-data';

export function EventsSection({ events }: { events: Event[] }) {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((event) => event.date >= today);
  const past = events.filter((event) => event.date < today);

  return (
    <section id="events" className="section alt">
      <div className="container">
        <h2>Events</h2>
        <p className="section-intro">Create dedicated event pages and galleries from the Sanity event schema.</p>
        <div className="events-layout">
          <div>
            <h3>Upcoming Events</h3>
            {upcoming.map((event) => (
              <article key={event.slug} className="card event-card">
                <p className="muted">{event.date} · {event.location}</p>
                <h4><Link href={`/events/${event.slug}`}>{event.title}</Link></h4>
                <p>{event.description}</p>
                {event.registerUrl && <a className="button primary" href={event.registerUrl} target="_blank">Register</a>}
              </article>
            ))}
          </div>
          <div>
            <h3>Past Events</h3>
            {past.map((event) => (
              <article key={event.slug} className="card event-card">
                <p className="muted">{event.date} · {event.location}</p>
                <h4><Link href={`/events/${event.slug}`}>{event.title}</Link></h4>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
