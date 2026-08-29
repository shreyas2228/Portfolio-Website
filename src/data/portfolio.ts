import type { Project, Experience, Skill, Achievement, TimelineItem } from '@/types'

export const developer = {
  name: 'Shreyas Sheregar',
  title: 'Full Stack Developer',
  role: 'Full Stack Developer',
  description: 'Building fast, scalable, and user-focused web applications with modern frontend and backend technologies.',
  longDescription: `I am a Master of Computer Applications student at The National Institute of Engineering (NIE), Mysore, and a web developer focused on building scalable, user-centered applications. I work across frontend and backend development, with strong hands-on experience in React, Node.js, Express.js, MongoDB, and AI-powered product ideas. I also serve as a Placement Coordinator and enjoy turning real-world problems into polished digital products.`,
  email: 'shreyasheregar@gmail.com',
  location: 'Mysore, India',
  socials: {
    github: 'https://github.com/shreyas2228',
    linkedin: 'https://www.linkedin.com/in/shreyas-sheregar-4811a1255/',
    leetcode: 'https://leetcode.com/u/Shreyas2828/',
    portfolio: 'https://portfoliowebsite-sandy-six.vercel.app/',
    twitter: 'https://leetcode.com/u/Shreyas2828/',
    email: 'mailto:shreyashsheregar@gmail.com',
  },
}

export const timeline: TimelineItem[] = [
  {
    id: '1',
    year: '2022',
    title: 'BCA Foundation',
    description: 'Completed Bachelor of Computer Applications at PeopleTree College, Belgaum.',
    icon: '🎓',
  },
  {
    id: '2',
    year: '2025',
    title: 'Web Development Intern',
    description: 'Worked as a Web Development Intern at Eventic, building responsive and performance-focused interfaces.',
    icon: '💼',
  },
  {
    id: '3',
    year: '2026',
    title: 'Placement Coordinator',
    description: 'Support student placement activities and recruiter coordination at NIE Mysore.',
    icon: '🚀',
  },
  {
    id: '4',
    year: '2025 - 2027',
    title: 'MCA Journey',
    description: 'Pursuing Master of Computer Applications at The National Institute of Engineering, Mysore.',
    icon: '📚',
  },
  {
    id: '5',
    year: 'Now',
    title: 'AI Product Building',
    description: 'Creating AI-powered applications focused on productivity, interviewing, and developer workflows.',
    icon: '🤖',
  },
  {
    id: '6',
    year: 'Future',
    title: 'Software Engineer',
    description: 'Building impactful software products with strong product thinking and scalable engineering.',
    icon: '⭐',
  },
]

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Web Development Intern',
    company: 'Eventic',
    period: 'Feb 2025 – Aug 2025',
    role: 'Web Development Intern',
    description:
      'Developed responsive and user-focused web applications using modern development practices, with emphasis on performance, maintainability, and smooth UI interactions.',
    responsibilities: [
      'Developed responsive web interfaces for real-world user-facing products.',
      'Built interactive UI features using JavaScript, HTML, CSS, and modern web patterns.',
      'Implemented smooth animations and improved user experience across pages.',
      'Optimized frontend performance and translated product requirements into accessible interfaces.',
      'Collaborated closely with the team to ship polished web experiences.',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS', 'GSAP', 'Python', 'Django', 'Jinja'],
  },
  {
    id: '2',
    title: 'Placement Coordinator',
    company: 'The National Institute of Engineering',
    period: 'Feb 2026 – Present',
    role: 'Placement Coordinator',
    description:
      'Coordinate placement activities, support recruiters, and help students navigate the recruitment process with better preparation and communication.',
    responsibilities: [
      'Manage campus hiring activities and coordinate recruitment cycles.',
      'Support recruiters during the hiring process and assessments.',
      'Organize placement-related events, workshops, and technical activities.',
      'Assist students with interview preparation and career readiness.',
      'Streamline communication between students, recruiters, and placement teams.',
    ],
    technologies: ['Communication', 'Recruitment', 'Coordination', 'Career Support'],
  },
]

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'frontend', proficiency: 'intermediate' },
  { id: '2', name: 'Next.js', category: 'frontend', proficiency: 'advanced' },
  { id: '3', name: 'TypeScript', category: 'frontend', proficiency: 'advanced' },
  { id: '4', name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert' },
  { id: '5', name: 'GSAP', category: 'frontend', proficiency: 'advanced' },
  { id: '6', name: 'Framer Motion', category: 'frontend', proficiency: 'advanced' },

  // Backend
  { id: '7', name: 'Node.js', category: 'backend', proficiency: 'expert' },
  { id: '8', name: 'Express.js', category: 'backend', proficiency: 'advanced' },
  { id: '9', name: 'Django', category: 'backend', proficiency: 'intermediate' },

  // Languages
  { id: '10', name: 'C++', category: 'languages', proficiency: 'advanced' },
  { id: '11', name: 'Python', category: 'languages', proficiency: 'advanced' },
  { id: '12', name: 'JavaScript', category: 'languages', proficiency: 'expert' },
  { id: '13', name: 'TypeScript', category: 'languages', proficiency: 'advanced' },
  { id: '14', name: 'C', category: 'languages', proficiency: 'intermediate' },

  // Database
  { id: '15', name: 'MongoDB', category: 'database', proficiency: 'advanced' },
  { id: '16', name: 'MySQL', category: 'database', proficiency: 'advanced' },

  // Tools
  { id: '17', name: 'Git', category: 'tools', proficiency: 'expert' },
  { id: '18', name: 'GitHub', category: 'tools', proficiency: 'expert' },
  { id: '19', name: 'REST APIs', category: 'tools', proficiency: 'advanced' },
  { id: '20', name: 'Postman', category: 'tools', proficiency: 'advanced' },
  { id: '21', name: 'JWT', category: 'tools', proficiency: 'advanced' },

  // AI
  { id: '22', name: 'Gemini AI', category: 'ai', proficiency: 'intermediate' },
  { id: '23', name: 'LLMs', category: 'ai', proficiency: 'intermediate' },
  { id: '24', name: 'Ollama', category: 'ai', proficiency: 'intermediate' },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'GenDev AI',
    subtitle: 'AI-Powered Web IDE',
    description:
      'A high-performance, browser-based AI web IDE featuring a custom file explorer, interactive terminal, and AI-assisted code generation and refactoring workflows with local model integration.',
    tech: ['Next.js', 'TypeScript', 'Monaco', 'Ollama', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/shreyas/gendev-ai',
    demo: 'https://gendev-ai-demo.example.com',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80',
    accent: 'from-cyan-400/30 via-blue-400/10 to-transparent',
    featured: true,
    status: 'completed',
  },
  {
    id: '2',
    title: 'SkillSync AI',
    subtitle: 'AI-Powered Interview Prep',
    description:
      'A full-stack AI interview platform that analyzes candidate resumes against job descriptions, generates interview reports, and personalizes learning plans using Gemini AI.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'JWT', 'Puppeteer'],
    github: 'https://github.com/shreyas/skillsync-ai',
    demo: 'https://skillsync-ai.example.com',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    accent: 'from-emerald-400/30 via-teal-400/10 to-transparent',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Moment Crafters',
    subtitle: 'Event Management Platform',
    description:
      'A full-stack event management platform for showcasing events, managing registrations, coordinating schedules, and improving attendee engagement across event workflows.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'GSAP'],
    github: 'https://github.com/shreyas/moment-crafters',
    demo: 'https://momentcrafters.example.com',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80',
    accent: 'from-fuchsia-400/30 via-indigo-400/10 to-transparent',
    featured: true,
  },
]

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Competitive Programming',
    description: 'Solved 500+ problems across coding platforms with concentration on DSA patterns, optimization, and problem-solving strategies.',
    type: 'milestone',
    icon: '🏆',
  },
  {
    id: '2',
    title: 'Full Stack Development',
    description: 'Built and shipped scalable web applications using React, Node.js, Express, and MongoDB with a focus on real-world products.',
    type: 'milestone',
    icon: '⚡',
  },
  {
    id: '3',
    title: 'AI Product Exploration',
    description: 'Built AI-powered workflows and practical developer tooling with Gemini and local LLM integration.',
    type: 'contribution',
    icon: '🤖',
  },
  {
    id: '4',
    title: 'Core CS Knowledge',
    description: 'Strong understanding of Data Structures, Algorithms, OOP, Operating Systems, DBMS, and Computer Networks.',
    type: 'contribution',
    icon: '🧠',
  },
]
