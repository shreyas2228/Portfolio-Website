# Shreyas 3D Portfolio

<!-- this is a premium developer portfolio with a dark futuristic visual language, interactive 3D hero environment, GSAP scroll choreography, and a polished recruiter-first project narrative. -->

A premium developer portfolio with a dark futuristic visual language, interactive 3D hero environment, GSAP scroll choreography, and a polished recruiter-first project narrative.

## Tech Stack

- React (Vite)
- Three.js via React Three Fiber
- GSAP + ScrollTrigger
- Framer Motion
- TailwindCSS
- EmailJS

## Project Structure

```text
portfolio-web/
	src/
		components/
			effects/
				CustomCursor.jsx
				ScrollProgress.jsx
			layout/
				Navbar.jsx
				SectionTitle.jsx
			sections/
				AboutSection.jsx
				AchievementsSection.jsx
				ContactSection.jsx
				Footer.jsx
				HeroSection.jsx
				ProjectsSection.jsx
				SkillsSection.jsx
			three/
				HeroScene.jsx
		data/
			portfolioData.js
		App.jsx
		index.css
		main.jsx
	index.html
	tailwind.config.js
	postcss.config.js
		public/
			favicon.svg
```

	## Feature Highlights

	- Fullscreen hero with React Three Fiber scene (floating geometry + particle field)
	- Glassmorphism cards and neon accent system with reusable utility classes
	- GSAP + ScrollTrigger section reveal and parallax behavior
	- Framer Motion transitions for headings, cards, and CTA content
	- Interactive custom cursor on desktop
	- Contact form integration with EmailJS
	- Lazy-loaded sections for better initial load performance
	- SEO-friendly metadata and social preview tags

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the local URL shown in your terminal.

## EmailJS Configuration

Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form will show a fallback message if these keys are missing.

## Production Build

```bash
npm run build
npm run preview
```

## Deploy To Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add environment variables in Vercel project settings:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

7. Deploy.

## Lighthouse And Performance Notes

- Three.js canvas uses capped DPR (`[1, 1.7]`) and restrained geometry complexity.
- Sections below the hero are lazy-loaded to reduce initial bundle work.
- Project images use native lazy loading.
- Animations are mostly transform/opacity-based for smooth GPU rendering.
- `prefers-reduced-motion` fallback is included for accessibility and performance.

## Performance Notes

- 3D scene uses controlled particle count and capped DPR.
- Sections are lazy loaded with `React.lazy` + `Suspense`.
- Hero/project imagery uses native `loading="lazy"` where appropriate.
- Motion is GPU-friendly and tuned for smooth scrolling.
# Portfolio-Website
