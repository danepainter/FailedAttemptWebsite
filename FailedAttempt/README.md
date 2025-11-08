# Failed Attempt - Band Website

A hardcore band website built with React, TypeScript, Vite, and TailwindCSS.

## 🎸 Features

- **7 Pages**: Home, Music, Shows, Media, Photos, About, Contact
- **React Router**: Client-side navigation
- **TailwindCSS**: Fully responsive, dark theme
- **TypeScript**: Type-safe code
- **CSS Custom Properties**: Easy theme customization
- **Mobile Responsive**: Works on all devices
- **No Animations**: Straightforward, bold design

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Build for Production
```bash
npm run build
npm run preview
```

## 🎨 Customizing the Theme

All colors are defined using CSS custom properties in `src/index.css`. Simply change these variables to customize the entire site:

```css
:root {
  --color-primary: #000000;      /* Main black */
  --color-secondary: #1a1a1a;    /* Dark gray */
  --color-accent: #ff0000;       /* Red accent */
  --color-background: #0a0a0a;   /* Near black */
  --color-surface: #1a1a1a;      /* Card backgrounds */
  --color-text-primary: #ffffff; /* White text */
  --color-text-secondary: #cccccc; /* Gray text */
}
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── AudioPlayer.tsx  # Audio sample player
│   ├── Footer.tsx       # Site footer
│   ├── Layout.tsx       # Main layout wrapper
│   └── Navigation.tsx   # Navigation menu
├── pages/              # Route pages
│   ├── Home.tsx        # Landing page
│   ├── Music.tsx       # Streaming platforms & audio
│   ├── Shows.tsx       # Tour dates
│   ├── Media.tsx       # Social media embeds
│   ├── Photos.tsx      # Photo gallery
│   ├── About.tsx       # Band bio & members
│   └── Contact.tsx     # Contact info & social links
├── data/               # Data files
│   ├── bandInfo.ts     # Band details, members, links
│   └── shows.ts        # Show dates array
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles & theme
```

## 📝 Adding Content

### Logo
Add your logo to `public/logo.png`. The Home page will automatically display it.

### Band Members
Update member names in `src/data/bandInfo.ts`:

```typescript
export const bandMembers: BandMember[] = [
  { name: "Your Name", role: "Vocals" },
  { name: "Your Name", role: "Guitar" },
  // ...
];
```

### Band Bio
Edit the `bandBio` variable in `src/data/bandInfo.ts` to update your band's story.

### Shows
Add tour dates in `src/data/shows.ts`:

```typescript
export const shows: Show[] = [
  {
    id: "1",
    date: "2025-12-15",
    venue: "The Underground",
    city: "Los Angeles",
    state: "CA",
    ticketLink: "https://example.com/tickets",
    supportingActs: ["Band 1", "Band 2"]
  }
];
```

### Audio Samples
1. Add audio files to `public/audio/`
2. In `src/pages/Music.tsx`, uncomment and update the AudioPlayer:

```typescript
<AudioPlayer
  title="Track Name"
  audioUrl="/audio/your-track.mp3"
  maxDuration={15}
/>
```

### Photos
1. Add photos to `public/photos/`
2. In `src/pages/Photos.tsx`, add photo paths to the array:

```typescript
const photos: string[] = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
];
```

### Video Embeds
In `src/pages/Media.tsx`, uncomment and update the YouTube embed with your video ID:

```typescript
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  // ...
/>
```

## 🔗 Links

All streaming and social media links are defined in `src/data/bandInfo.ts`. Update them to match your profiles:

```typescript
export const streamingPlatforms: StreamingPlatform[] = [
  { name: "Spotify", url: "your-spotify-url", embedUrl: "..." },
  // ...
];

export const socialLinks: SocialLink[] = [
  { platform: "Instagram", url: "your-instagram", label: "@yourband" },
  // ...
];
```

## 🎯 Features Ready for Content

The following features are built and ready - just add your content:

- ✅ Audio player for 15-second samples
- ✅ Show listings with ticket links
- ✅ Photo gallery grid
- ✅ Video embed sections
- ✅ Streaming platform links
- ✅ Social media integration

## 📱 Responsive Design

The site is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🛠️ Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **React Router** - Navigation

## 📄 License

All rights reserved © Failed Attempt

---

Built with 🤘 for the hardcore scene.
