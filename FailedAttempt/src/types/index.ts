export interface Show {
  id: string;
  date: string;
  venue: string;
  city: string;
  state: string;
  ticketLink?: string;
  supportingActs?: string[];
}

export interface BandMember {
  name: string;
  role: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface StreamingPlatform {
  name: string;
  url: string;
  embedUrl?: string;
}

export interface AudioSample {
  title: string;
  url: string;
  duration: number;
}

