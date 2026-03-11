import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { sanityClient, sanityEnabled } from '@/lib/sanity';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  if (sanityEnabled) {
    await sanityClient.create({ _type: 'newsletterSubscriber', email, subscribedAt: new Date().toISOString() });
  }

  if (resend) {
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'EBF <onboarding@resend.dev>',
      to: [email],
      subject: 'Confirm your EBF newsletter subscription',
      text: 'Thank you for subscribing to EBF. Reply YES to confirm your interest.'
    });
  }

  return NextResponse.json({ ok: true });
}
