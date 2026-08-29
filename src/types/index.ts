export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  github: string
  demo: string
  image: string
  accent: string
  featured?: boolean
  status?: 'completed' | 'in-progress'
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  role?: string
  description?: string
  responsibilities?: string[]
  technologies?: string[]
  achievements?: string[]
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'languages' | 'database' | 'tools' | 'ai'
  icon?: string
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  experience?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  date?: string
  icon?: string
  type?: 'award' | 'milestone' | 'contribution'
}

export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
  icon?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon?: string
  label: string
}
