# Raha Partners - Hero Section

Hero section and navigation menu built with Next.js, TypeScript, Tailwind CSS, and modern animation libraries.

## 🚀 Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - React animation library for smooth transitions
- **GSAP** - Professional-grade animation for text reveals
- **Lenis** - Smooth scroll library for buttery-smooth scrolling

## 🎨 Features Implemented

### Navigation
- Fixed header with "Raha Partners" logo
- Animated hamburger menu icon (transforms into X on click)
- Full-screen overlay menu with smooth transitions
- Orange accent color (#FF5722) matching the original

### Hero Section
- **Large animated headline** with GSAP text reveals
- **Particle background effect** with:
  - Animated particles floating across the screen
  - Connecting lines between nearby particles
  - Orange glow effects on particles
  - Smooth performance using Canvas API
- **CTA section** with orange button and descriptive text
- **Statistics section** showing "40% Lower Cost" and "+300% Faster"
- **Responsive layout** that works on all screen sizes

### Animations
- **Smooth scroll** using Lenis for enhanced user experience
- **Text animations** with GSAP for professional reveals
- **Hover effects** on interactive elements
- **Menu transitions** using Framer Motion
- **Scroll-based opacity** fade on hero section

## 🎯 Color Palette

- **Primary Background**: `#000000` (Black)
- **Accent Color**: `#FF5722` (Vibrant Orange)
- **Text Color**: `#FFFFFF` (White)
- **Gray Text**: `#999999`

## 🏃‍♂️ Running the Project

The development server is already running! 

```bash
# If you need to restart:
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
raha/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page with all components
├── components/
│   ├── Navigation.tsx       # Header with hamburger menu
│   ├── Hero.tsx             # Hero section with text and stats
│   ├── ParticleBackground.tsx  # Animated particle canvas
│   └── SmoothScroll.tsx     # Lenis smooth scroll provider
└── package.json
```

## ✨ Key Implementation Details

### Particle Background
- Canvas-based animation with requestAnimationFrame
- Particles move with velocity and bounce off edges
- Connections drawn between nearby particles using distance calculation
- Orange radial gradients for glow effects

### Text Animation
- GSAP timeline for sequential text reveals
- Staggered animations for each line
- Smooth easing functions for professional feel

### Smooth Scrolling
- Lenis library integrated at app level
- Custom easing function for natural scroll behavior
- Optimized performance with proper cleanup

### Menu Animation
- Framer Motion for smooth open/close transitions
- Hamburger transforms into X with rotation animations
- Full-screen overlay with staggered link reveals

## 🎭 Design Philosophy

- Dark, premium aesthetic
- Bold orange accents for energy and innovation
- Generous whitespace
- Smooth, professional animations
- Modern, clean typography

## 🔄 Next Steps

Want to extend this? Consider adding:
- Additional sections (Work, Services, Process, Team)
- More complex scroll animations
- Mobile menu enhancements
- Performance optimizations for larger sites

---

## Development
Initial dev setup