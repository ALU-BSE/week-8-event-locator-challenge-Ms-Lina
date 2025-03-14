export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  imageUrl: string;
}

export type EventCategory = 
  | 'music'
  | 'sports'
  | 'arts'
  | 'food'
  | 'technology'
  | 'business';

export interface SearchFilters {
  query: string;
  category: EventCategory | 'all';
  date: string;
}