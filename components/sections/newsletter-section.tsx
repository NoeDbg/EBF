'use client';

import { FormEvent, useState } from 'react';

export function NewsletterSection() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    });

    setStatus(response.ok ? 'Thanks! Please check your email to confirm opt-in.' : 'Subscription failed.');
    event.currentTarget.reset();
  }

  return (
    <section id="newsletter" className="section container">
      <h2>Newsletter</h2>
      <p className="section-intro">Subscribe to receive market notes, event invites, and EBF updates.</p>
      <form className="inline-form" onSubmit={onSubmit}>
        <input type="email" name="email" required placeholder="you@escp.eu" />
        <button className="button primary" type="submit">Subscribe</button>
      </form>
      {status && <p className="muted">{status}</p>}
    </section>
  );
}
