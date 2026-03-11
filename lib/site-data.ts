export type Member = {
  name: string;
  role: string;
  bio: string;
  pole: string;
  instagram?: string;
};

export type Event = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  registerUrl?: string;
};

export const members: Member[] = [
  { name: 'Irvine Ayme', role: 'President', bio: 'Leading EBF strategic direction and partnerships.', pole: 'Board' },
  { name: 'Arthur Cluzel', role: 'President', bio: 'Driving operations and member engagement across committees.', pole: 'Board' },
  { name: 'Louis Mercier', role: 'VP Treasury & Legal', bio: 'Supervising governance, legal framework, and budget tracking.', pole: 'Board' },
  { name: 'Sarah Menu', role: 'Partnerships Lead', bio: 'Building relationships with banks, boutiques, and sponsors.', pole: 'Partnerships' },
  { name: 'Charlotte Deglise-Favre', role: 'Marketing Lead', bio: 'Managing branding, communications, and campaign planning.', pole: 'Marketing' },
  { name: 'Clément Bogrel', role: 'Investments Lead', bio: 'Coordinating investment committee and fund monitoring.', pole: 'Investments' },
  { name: 'Federico Guanlandi', role: 'Internships Lead', bio: 'Supporting members with internships and career opportunities.', pole: 'Internships' },
  { name: 'Kiyan Khoilar', role: 'News Lead', bio: 'Publishing market news and macro-finance updates for students.', pole: 'News' }
];

export const events: Event[] = [
  {
    slug: 'conference-january-14',
    title: 'Conference – January 14',
    date: '2027-01-14',
    location: 'ESCP Campus Paris',
    description:
      'Panel with Simon AST, Chiara Operto, BNP HR leadership and MDs from elite boutiques/banks.',
    registerUrl: 'https://example.com/tickets'
  },
  {
    slug: 'afterwork',
    title: 'AfterWork',
    date: '2025-10-10',
    location: 'Paris',
    description: 'Networking evening with alumni and finance professionals.'
  }
];

export const fundSeries = [
  { date: 'W1', value: 100 },
  { date: 'W2', value: 101.2 },
  { date: 'W3', value: 102.1 },
  { date: 'W4', value: 101.9 },
  { date: 'W5', value: 103.4 },
  { date: 'W6', value: 104.7 }
];
