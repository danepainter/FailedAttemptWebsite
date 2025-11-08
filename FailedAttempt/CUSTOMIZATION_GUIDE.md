# Quick Customization Guide

## 🎨 Changing Colors (Theme)

Open `src/index.css` and modify the CSS variables in the `:root` section:

```css
:root {
  --color-primary: #000000;      /* Change for main dark color */
  --color-secondary: #1a1a1a;    /* Change for card backgrounds */
  --color-accent: #ff0000;       /* Change for accent color (currently red) */
  --color-background: #0a0a0a;   /* Change for page background */
  --color-surface: #1a1a1a;      /* Change for component surfaces */
  --color-text-primary: #ffffff; /* Change for main text color */
  --color-text-secondary: #cccccc; /* Change for secondary text */
}
```

**Example**: For a purple theme:
```css
--color-accent: #9333ea;  /* Purple accent */
```

## 📸 Adding Your Logo

1. Export your logo as `logo.png`
2. Place it in `FailedAttempt/public/logo.png`
3. The home page will automatically display it

**Recommended**: PNG format, transparent background, 800x800px or larger

## 👥 Updating Band Members

File: `src/data/bandInfo.ts`

Replace "TBA" with actual names:

```typescript
export const bandMembers: BandMember[] = [
  { name: "John Doe", role: "Vocals" },
  { name: "Jane Smith", role: "Guitar" },
  { name: "Mike Johnson", role: "Guitar" },
  { name: "Sarah Williams", role: "Bass" },
  { name: "Tom Brown", role: "Drums" },
];
```

## 📖 Updating Band Bio

File: `src/data/bandInfo.ts`

Replace the `bandBio` text with your band's story:

```typescript
export const bandBio = `Your band's story here...`;
```

## 🎤 Adding Tour Dates

File: `src/data/shows.ts`

Add shows to the array:

```typescript
export const shows: Show[] = [
  {
    id: "1",                    // Unique ID
    date: "2025-12-15",        // YYYY-MM-DD format
    venue: "The Underground",   // Venue name
    city: "Los Angeles",       // City
    state: "CA",               // State/Province
    ticketLink: "https://...", // Optional ticket link
    supportingActs: ["Band A"] // Optional support bands
  },
  // Add more shows...
];
```

## 🎵 Adding Audio Samples

### Step 1: Add audio files
Place your audio files in `FailedAttempt/public/audio/`

Example:
- `public/audio/track1.mp3`
- `public/audio/track2.mp3`

### Step 2: Update Music page
File: `src/pages/Music.tsx`

Find the "Audio Samples" section and uncomment/add:

```typescript
<AudioPlayer
  title="Your Track Name"
  audioUrl="/audio/track1.mp3"
  maxDuration={15}
/>
```

## 📷 Adding Photos

### Step 1: Add photo files
Place photos in `FailedAttempt/public/photos/`

### Step 2: Update Photos page
File: `src/pages/Photos.tsx`

Update the photos array:

```typescript
const photos: string[] = [
  "/photos/show1.jpg",
  "/photos/show2.jpg",
  "/photos/band.jpg",
];
```

## 🎥 Adding YouTube Videos

File: `src/pages/Media.tsx`

Find the "Featured Videos" section and uncomment/update:

```typescript
<div className="bg-surface border-4 border-text-secondary p-4">
  <div className="aspect-video">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
  <h3 className="font-display text-xl mt-4">VIDEO TITLE</h3>
</div>
```

**How to find your video ID:**
- YouTube URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ` (the part after `v=`)

## 📧 Changing Contact Email

File: `src/data/bandInfo.ts`

Update the email:

```typescript
export const contactEmail = "your-email@example.com";
```

## 🔗 Updating Social Links

File: `src/data/bandInfo.ts`

Update URLs in `socialLinks` array:

```typescript
export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/yourband/",
    label: "@yourband"
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@YourBand",
    label: "@YourBand"
  }
];
```

## 🎹 Updating Streaming Links

File: `src/data/bandInfo.ts`

Update URLs in `streamingPlatforms` array:

```typescript
export const streamingPlatforms: StreamingPlatform[] = [
  {
    name: "Spotify",
    url: "your-spotify-artist-url",
    embedUrl: "your-spotify-embed-url"
  },
  // Update other platforms...
];
```

## 🚀 Testing Your Changes

1. Save all files
2. The dev server will automatically reload
3. Check `http://localhost:5173` in your browser

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

The production files will be in the `dist/` folder.

---

Need help? Check the main README.md for more detailed information.

