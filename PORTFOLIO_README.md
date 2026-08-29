# Shreyas' Portfolio - A Digital Universe 🌌

> An award-winning, cinematic developer portfolio designed for Awwwards, FWA, and Godly standards.

![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-Latest-black?logo=three.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.14-green)
![Vite](https://img.shields.io/badge/Vite-5.3-purple?logo=vite)

## 🚀 Features

### **Visual Experience**
- 🎬 **Cinematic Loading Sequence** - Premium particle assembly animation
- 🌌 **Premium Dark Space Aesthetic** - Deep blacks with nebula-inspired gradients
- ✨ **Glassmorphism Design** - Frosted glass cards with blur effects
- 🎨 **Aurora Gradients** - Smooth cyan, purple, and blue color transitions
- 🌠 **Floating Particles & Orbs** - Ambient space environment effects
- 🔮 **Volumetric Lighting** - Glowing elements and bloom effects

### **Interactive Elements**
- 🖱️ **Custom Magnetic Cursor** - Particle-emitting cursor that reacts to elements
- 🔄 **Smooth Scroll Experience** - Lenis smooth scrolling with physics
- 🎯 **Micro-interactions** - Cards tilt, buttons glow, elements react to mouse
- ⚡ **Scroll Progress Indicator** - Real-time scroll position visualization
- 🎪 **Hero Parallax** - Mouse-reactive background parallax effects

### **Performance**
- ⚡ **60 FPS Animations** - Optimized GSAP and Framer Motion
- 🎯 **Lighthouse 95+** - Performance, SEO, Accessibility optimized
- 📦 **Code Splitting** - Lazy-loaded sections and components
- 🖼️ **Optimized Assets** - Compressed textures and images
- 🚀 **Fast Loading** - Strategic preloading and caching

### **Developer Experience**
- 📝 **TypeScript** - Full type safety and IDE support
- 🏗️ **Component Architecture** - Modular, reusable, scalable
- 🎨 **Tailwind CSS** - Utility-first styling with custom animations
- 📱 **Responsive Design** - Mobile-first, works on all devices
- ♿ **Accessibility** - WCAG compliant, keyboard navigation

## 🛠️ Tech Stack

```
Frontend Framework:  React 18.3 + TypeScript
Build Tool:         Vite 5.3
3D Graphics:        Three.js + React Three Fiber + Drei
Animation:          GSAP 3.14 + Framer Motion + React Spring
Styling:            TailwindCSS 3.4 + PostCSS
Scroll:             Lenis Smooth Scroll
Icons:              React Icons
Form Handling:      EmailJS
Routing:            React Router
State:              Suspense + Error Boundaries
```

## 📋 Project Structure

```
portfolio-web/
├── src/
│   ├── components/
│   │   ├── effects/              # Visual effects
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── ParticleEffect.tsx
│   │   ├── layout/               # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Preloader.tsx
│   │   ├── sections/             # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── three/                # 3D scenes
│   │   │   └── HeroScene.tsx
│   │   └── ui/                   # Reusable UI components
│   │       └── MagneticButton.tsx
│   ├── data/
│   │   └── portfolio.ts          # Content & configuration
│   ├── hooks/                    # Custom React hooks
│   │   ├── index.ts
│   │   └── useLenisScroll.ts
│   ├── types/
│   │   └── index.ts              # TypeScript types
│   ├── utils/
│   │   └── helpers.ts            # Utility functions
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio-web

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
# Build
npm run build

# Preview build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🎨 Sections & Features

### **1. Hero Section**
- Animated gradient heading
- Scroll indicator animation
- CTA buttons with hover effects
- Parallax background layers
- Mouse-reactive elements

### **2. About Section**
- Developer introduction
- Statistics showcase
- Mission statement
- Interactive cards

### **3. Experience Section**
- Timeline of experiences
- Company & role details
- Responsibilities list
- Technology tags

### **4. Projects Section**
- Featured project cards
- Project descriptions
- Tech stack badges
- GitHub & Live links
- Image with gradient overlays

### **5. Skills Section**
- Categorized skills
- Filter by technology type
- Proficiency levels
- Interactive skill cards

### **6. Journey Section**
- Timeline visualization
- Career progression
- Milestone markers
- Animated connections

### **7. Contact Section**
- Contact form
- Direct email/phone
- Email validation
- Loading states

### **8. Footer**
- Social links
- Copyright info
- Back-to-top button

## ⚙️ Customization

### Update Portfolio Content

Edit `src/data/portfolio.ts`:

```typescript
export const developer = {
  name: 'Your Name',
  title: 'Your Title',
  // ... more fields
}

export const projects = [
  // Add your projects
]

export const skills = [
  // Add your skills
]
```

### Modify Colors

Edit `src/index.css` (CSS variables):

```css
:root {
  --brand-bg: #04060b;
  --brand-neon: #7effdc;
  --brand-accent: #5db4ff;
  /* ... more colors */
}
```

Or update `tailwind.config.js` for Tailwind utilities.

### Customize Animations

Animations are in:
- `tailwind.config.js` - Tailwind animations
- `src/index.css` - CSS keyframes
- Individual components - Framer Motion

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Optimized touch interactions
- **Tablet**: Adapted layouts
- **Desktop**: Full experience with all effects

3D elements intelligently reduce complexity on mobile devices.

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation support
- ✅ Screen reader optimized
- ✅ Reduced motion support
- ✅ Semantic HTML

## 📊 Performance Metrics

Target Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

Achieved through:
- Code splitting
- Image optimization
- Lazy loading
- Efficient animations
- Minified bundles

## 🔐 Environment Variables

Create `.env.local` from `.env.example`:

```
VITE_GITHUB_TOKEN=your_token
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📦 Dependencies

### Core
- react (18.3)
- react-dom (18.3)
- typescript (5.5)

### 3D & Animation
- three (0.183)
- @react-three/fiber (8.17)
- @react-three/drei (9.108)
- gsap (3.14)
- framer-motion (12.36)
- react-spring (9.7)

### UI & Styling
- tailwindcss (3.4)
- tailwindcss-animate (1.0)
- lucide-react / react-icons

### Utilities
- lenis (1.1)
- react-intersection-observer (10.0)
- clsx / tailwind-merge

## 🎯 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS 12+, Android 8+

## 📝 License

MIT - Feel free to use this portfolio as a template for your own!

## 🤝 Contributing

Contributions welcome! Please feel free to submit a PR.

## 📞 Contact

For questions or suggestions, reach out via:
- Email: shreyas@example.com
- GitHub: [@shreyas](https://github.com/shreyas)
- LinkedIn: [Shreyas](https://linkedin.com/in/shreyas)

---

Made with ✨ by Shreyas Sheregar
