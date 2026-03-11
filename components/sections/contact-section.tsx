'use client';

import { FormEvent, useState } from 'react';

export function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    });

    setStatus(response.ok ? 'Message sent successfully.' : 'Message failed.');
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2>Contact</h2>
        <p>6 Avenue de la Porte de Champerret, 75017 Paris · escpbscfinance@gmail.com</p>
        <form className="contact-form" onSubmit={onSubmit}>
          <input name="name" required placeholder="Name" />
          <input type="email" name="email" required placeholder="Email" />
          <input name="subject" required placeholder="Subject" />
          <textarea name="message" required placeholder="Your message" rows={5} />
          <input name="captcha" placeholder="Type EBF to pass anti-spam" required pattern="EBF" />
          <button className="button primary" type="submit">Send message</button>
        </form>
        {status && <p className="muted">{status}</p>}
        <div className="socials">
          <a href="https://www.instagram.com/escpbscfinance/" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/company/escp-bachelor-finance-society/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
