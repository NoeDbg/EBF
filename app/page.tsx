import { ContactSection } from '@/components/sections/contact-section';
import { EventsSection } from '@/components/sections/events-section';
import { FundTrackerSection } from '@/components/sections/fund-tracker-section';
import { HeroSection } from '@/components/sections/hero-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { PartnersSection } from '@/components/sections/partners-section';
import { TeamSection } from '@/components/sections/team-section';
import { getEvents, getMembers } from '@/lib/content';

export default async function HomePage() {
  const [members, events] = await Promise.all([getMembers(), getEvents()]);

  return (
    <main>
      <HeroSection />
      <TeamSection members={members} />
      <EventsSection events={events} />
      <FundTrackerSection />
      <PartnersSection />
      <NewsletterSection />
      <ContactSection />
    </main>
  );
}
