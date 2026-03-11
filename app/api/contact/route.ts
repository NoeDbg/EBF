import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing fields.' }, { status: 400 });
  }

  if (resend) {
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'EBF Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO ?? 'escpbscfinance@gmail.com'],
      subject: `[EBF Contact] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`
    });
  }

  return NextResponse.json({ ok: true });
}
