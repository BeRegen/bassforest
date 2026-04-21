export interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export enum SectionId {
  HOME = 'home',
  HOW_IT_WORKS = 'how-it-works',
  DONATE = 'donate',
  LINEUP = 'lineup',
  FAQ = 'faq',
  CONTACT = 'contact',
  PARTNERS = 'partners',
}