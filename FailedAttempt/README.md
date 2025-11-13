gi# Failed Attempt - Band Website

A hardcore band website built with React, TypeScript, Vite, TailwindCSS, and WebGL.

## 🎸 Features

- **6 Pages**: Home, Music, Shows, Media, About, Contact
- **Animated WebGL Background**: Dynamic DarkVeil background effect using OGL
- **React Router**: Client-side navigation
- **TailwindCSS**: Fully responsive, dark theme
- **TypeScript**: Type-safe code
- **CSS Custom Properties**: Easy theme customization
- **Mobile Responsive**: Works on all devices
- **Modern UI**: Clean design with animated backgrounds

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
  --color-primary: #FFFFFF;      /* Main white */
  --color-secondary: #B1A7A6;    /* Gray */
  --color-accent: #E5383B;       /* Red accent */
  --color-background: #0B090A;   /* Near black */
  --color-surface: #161A1D;      /* Card backgrounds */
  --color-text-primary: #FFFFFF; /* White text */
  --color-text-secondary: #D3D3D3; /* Gray text */
}
```

### Animated Background

The site features an animated WebGL background (`DarkVeil`) that can be customized on each page:

```typescript
<DarkVeil 
  hueShift={249}        // Color hue shift (0-360)
  noiseIntensity={0}    // Noise effect intensity
  scanlineIntensity={0} // Scanline effect intensity
  speed={0.5}           // Animation speed
  scanlineFrequency={0} // Scanline frequency
  warpAmount={0}        // Warp distortion amount
  resolutionScale={1}   // Resolution scaling
/>
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── AudioPlayer.tsx  # Audio sample player
│   ├── Background.tsx  # DarkVeil WebGL animated background
│   ├── Footer.tsx       # Site footer
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navigation.tsx   # Navigation menu
│   └── PillNav.tsx     # Pill-shaped navigation component
├── pages/              # Route pages
│   ├── Home.tsx        # Landing page with video & quick actions
│   ├── Music.tsx       # Streaming platforms & Spotify embed
│   ├── Shows.tsx       # Tour dates & booking info
│   ├── Media.tsx       # YouTube & Instagram links
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

### Video Embeds
The Home page includes a YouTube video embed. Update the video ID in `src/pages/Home.tsx`:

```typescript
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  // ...
/>
```

### Animated Background
The DarkVeil background is applied to all pages. To customize it, modify the `hueShift` prop in each page file:

```typescript
<DarkVeil hueShift={249} />  // Adjust hueShift (0-360) to match your color scheme
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

- ✅ Animated WebGL background (DarkVeil) on all pages
- ✅ YouTube video embed on Home page
- ✅ Spotify player embed on Music page
- ✅ Show listings with ticket links
- ✅ Streaming platform links
- ✅ Social media integration (YouTube, Instagram)
- ✅ Contact form with email link
- ✅ Band member profiles

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
- **TailwindCSS 4** - Styling
- **React Router 7** - Navigation
- **OGL** - WebGL library for animated backgrounds
- **GSAP** - Animation library (available for future use)

## 📄 License

All rights reserved © Failed Attempt

---

Built with 🤘 for the hardcore scene.
