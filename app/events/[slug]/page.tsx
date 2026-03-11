import { notFound } from 'next/navigation';
import { getEvents } from '@/lib/content';

export default async function EventPage({ params }: { params: { slug: string } }) {
  const events = await getEvents();
  const event = events.find((entry) => entry.slug === params.slug);
  if (!event) notFound();

  return (
    <main className="section container">
      <a href="/">← Back to home</a>
      <h1>{event.title}</h1>
      <p className="muted">{event.date} · {event.location}</p>
      <p>{event.description}</p>
      {event.registerUrl && <a className="button primary" href={event.registerUrl} target="_blank">Register now</a>}
      <p className="muted" style={{ marginTop: '20px' }}>Photo gallery placeholder. Connect Sanity image array for event photos.</p>
    </main>
  );
}
