import type { BandMember, SocialLink, StreamingPlatform } from '../types';

export const bandName = "Failed Attempt";

export const bandBio = `Failed Attempt is a hardcore band founded in 2024 in South Florida.
   We are a 5 piece band that is dedicated to making music that is true to the genre and to the fans.  
   Formed from a shared vision of creating uncompromising, aggressive music, 
            Failed Attempt pushes the boundaries of modern hardcore. Every riff, every 
            breakdown, and every lyric is crafted to deliver maximum impact.`;

export const bandMembers: BandMember[] = [
  { name: "Juan", role: "Vocals" },
  { name: "Max", role: "Guitar" },
  { name: "Dane", role: "Guitar" },
  { name: "Zion", role: "Bass" },
  { name: "Jason", role: "Drums" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/failedattempt.hc/",
    label: "@failedattempt.hc"
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@FailedAttemptHxC",
    label: "@FailedAttemptHxC"
  }
];

export const streamingPlatforms: StreamingPlatform[] = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/480sb9ILAMg0RVSRpEysVR",
    embedUrl: "https://open.spotify.com/embed/artist/480sb9ILAMg0RVSRpEysVR"
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/ca/artist/failed-attempt/1840261752"
  },
  {
    name: "Bandcamp",
    url: "https://failedattempt.bandcamp.com/album/failed-attempt",
    embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=3850885425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@FailedAttemptHxC"
  }
];

export const contactEmail = "failedattempt.hc@gmail.com";

