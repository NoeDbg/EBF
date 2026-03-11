import { events as fallbackEvents, members as fallbackMembers } from '@/lib/site-data';
import { sanityClient, sanityEnabled } from '@/lib/sanity';

export async function getMembers() {
  if (!sanityEnabled) return fallbackMembers;
  try {
    const data = await sanityClient.fetch(`*[_type == "member"] | order(order asc){name, role, bio, pole, instagram}`);
    return data?.length ? data : fallbackMembers;
  } catch {
    return fallbackMembers;
  }
}

export async function getEvents() {
  if (!sanityEnabled) return fallbackEvents;
  try {
    const data = await sanityClient.fetch(
      `*[_type == "event"] | order(date desc){slug, title, date, location, description, registerUrl}`
    );
    return data?.length ? data : fallbackEvents;
  } catch {
    return fallbackEvents;
  }
}
