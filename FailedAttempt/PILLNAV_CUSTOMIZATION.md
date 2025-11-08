# PillNav Customization Guide

## 🎨 Current Configuration

Your PillNav is currently configured in `src/components/Navigation.tsx`:

```typescript
<PillNav
  logo="/logo.png"                        // Your logo from public folder
  logoAlt="Failed Attempt"
  items={navItems}                        // Navigation items
  activeHref={location.pathname}          // Current page
  className=""
  ease="power3.easeOut"
  baseColor="#ffffff"                     // White background
  pillColor="#1e293b"                     // Dark slate pills
  hoveredPillTextColor="#ffffff"          // White text on hover
  pillTextColor="#ffffff"                 // White text
  initialLoadAnimation={true}
/>
```

---

## 🎨 Color Themes

### 1. Dark Mode (Black Background)
```typescript
<PillNav
  logo="/logo.png"
  logoAlt="Failed Attempt"
  items={navItems}
  activeHref={location.pathname}
  baseColor="#000000"           // Black background
  pillColor="#ffffff"           // White pills
  hoveredPillTextColor="#000000" // Black text on hover
  pillTextColor="#000000"       // Black text
/>
```

### 2. Blue Theme
```typescript
<PillNav
  logo="/logo.png"
  logoAlt="Failed Attempt"
  items={navItems}
  activeHref={location.pathname}
  baseColor="#3b82f6"           // Blue background
  pillColor="#1e293b"           // Dark pills
  hoveredPillTextColor="#3b82f6" // Blue text on hover
  pillTextColor="#ffffff"       // White text
/>
```

### 3. Red/Black (Hardcore Theme)
```typescript
<PillNav
  logo="/logo.png"
  logoAlt="Failed Attempt"
  items={navItems}
  activeHref={location.pathname}
  baseColor="#000000"           // Black background
  pillColor="#dc2626"           // Red pills
  hoveredPillTextColor="#000000" // Black text on hover
  pillTextColor="#ffffff"       // White text
/>
```

### 4. Gray/White (Minimal)
```typescript
<PillNav
  logo="/logo.png"
  logoAlt="Failed Attempt"
  items={navItems}
  activeHref={location.pathname}
  baseColor="#f3f4f6"           // Light gray background
  pillColor="#1f2937"           // Dark gray pills
  hoveredPillTextColor="#f3f4f6" // Light gray on hover
  pillTextColor="#ffffff"       // White text
/>
```

---

## 🎬 Animation Options

### Fast Animations
```typescript
ease="power2.easeOut"  // Faster, snappier
```

### Smooth Animations (Current)
```typescript
ease="power3.easeOut"  // Smooth and professional
```

### Bouncy Animations
```typescript
ease="back.out(1.7)"   // Adds a bounce effect
```

### Elastic Animations
```typescript
ease="elastic.out(1, 0.3)"  // Spring-like effect
```

---

## 🖼️ Logo Options

### Option 1: PNG Logo (Current)
```typescript
logo="/logo.png"
```
Place your `logo.png` in the `public/` folder.

### Option 2: SVG Logo (Recommended)
```typescript
logo="/logo.svg"
```
SVG scales better and loads faster.

### Option 3: Logo from Assets
```typescript
import logo from '../assets/logo.png';

<PillNav
  logo={logo}
  // ...
/>
```

### Option 4: External URL
```typescript
logo="https://example.com/logo.png"
```

### Option 5: Data URI (Embedded)
```typescript
const logoSvg = `data:image/svg+xml,...`;

<PillNav
  logo={logoSvg}
  // ...
/>
```

---

## 🎯 Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `string` | Required | Path or URL to logo image |
| `logoAlt` | `string` | `"Logo"` | Alt text for logo |
| `items` | `PillNavItem[]` | Required | Navigation items |
| `activeHref` | `string` | `undefined` | Current active page URL |
| `className` | `string` | `""` | Additional CSS classes |
| `ease` | `string` | `"power3.easeOut"` | GSAP easing function |
| `baseColor` | `string` | `"#fff"` | Background color |
| `pillColor` | `string` | `"#060010"` | Pill background color |
| `hoveredPillTextColor` | `string` | `"#060010"` | Text color on hover |
| `pillTextColor` | `string` | `baseColor` | Default text color |
| `onMobileMenuClick` | `function` | `undefined` | Mobile menu callback |
| `initialLoadAnimation` | `boolean` | `true` | Enable load animation |

---

## 📱 Disable Load Animation

If you find the load animation distracting:

```typescript
<PillNav
  initialLoadAnimation={false}  // Disable on-load animation
  // ... other props
/>
```

---

## 🎨 Advanced: CSS Variables Override

The PillNav uses CSS custom properties. You can override them:

```css
/* In your CSS file */
.custom-nav {
  --nav-h: 50px;      /* Height of nav */
  --pill-pad-x: 24px; /* Horizontal padding */
  --pill-gap: 5px;    /* Gap between pills */
}
```

Then use:
```typescript
<PillNav
  className="custom-nav"
  // ...
/>
```

---

## 🔧 Navigation Items Format

```typescript
const navItems = [
  { 
    label: 'Home',           // Display text
    href: '/',               // URL path
    ariaLabel: 'Home Page'   // Optional: Accessibility label
  },
  { label: 'Music', href: '/music' },
  { label: 'Shows', href: '/shows' },
  // ...
];
```

### External Links
```typescript
{ 
  label: 'Shop', 
  href: 'https://store.example.com'  // External links work too!
}
```

### Email Links
```typescript
{ 
  label: 'Contact', 
  href: 'mailto:band@example.com' 
}
```

---

## 🎨 Match Your Brand Colors

To match the PillNav with your existing brand:

1. **Extract your brand colors** from `src/index.css`:
   ```css
   --color-primary: #1e293b;
   --color-accent: #3b82f6;
   ```

2. **Use them in PillNav**:
   ```typescript
   baseColor="var(--color-accent)"
   pillColor="var(--color-primary)"
   ```

   Or use the hex values directly:
   ```typescript
   baseColor="#3b82f6"
   pillColor="#1e293b"
   ```

---

## 💡 Tips

1. **Logo Size**: Keep logos under 100KB for fast loading
2. **Square Format**: 1:1 ratio logos work best in the circular container
3. **High Contrast**: Ensure text is readable on hover
4. **Test Mobile**: Always check mobile menu on small screens
5. **Colors**: Test in both light and dark environments

---

## 🎬 Animation Performance

For best performance:
- Logo should be optimized (compressed)
- Use SVG for logos when possible
- Keep animation ease functions simple
- Avoid very slow animations (duration > 1s)

---

## 📝 Example: Complete Custom Configuration

```typescript
import { useLocation } from 'react-router-dom';
import PillNav from './PillNav';
import logo from '../assets/band-logo.svg';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Music', href: '/music' },
    { label: 'Tour', href: '/tour' },
    { label: 'Merch', href: 'https://shop.band.com' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <PillNav
      logo={logo}
      logoAlt="Band Name"
      items={navItems}
      activeHref={location.pathname}
      className="band-nav"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ff0000"
      hoveredPillTextColor="#000000"
      pillTextColor="#ffffff"
      initialLoadAnimation={true}
      onMobileMenuClick={() => console.log('Menu toggled')}
    />
  );
};

export default Navigation;
```

---

**Need help?** Check the `GSAP_PILLNAV_IMPLEMENTATION.md` for more details!

