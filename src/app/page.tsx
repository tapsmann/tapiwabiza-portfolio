'use client'

import { useState, useEffect, type FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Database,
  Server,
  Wrench,
  Award,
  GraduationCap,
  BookOpen,
  Shield,
  Zap,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Globe2,
  Sun,
  Moon,
} from 'lucide-react'

// Data from CV
const personalInfo = {
  name: 'Tapiwa Jairos Biza',
  title: 'Computing Student & Developer',
  location: '27054 Unit J Ext Seke, Chitungwiza, Zimbabwe',
  phone: '+263 78 258 5268 / +263 77 278 9236',
  email: 'tapiwajairosbiza@gmail.com',
  github: 'github.com/tapsmann',
  summary: "I'm Tapiwa, a Computing student and Advanced UK Diploma holder with a passion for building web applications and solving real-world problems. I combine hands-on experience in IT technical support, web development, and database management with AWS certifications in Cloud services and basic Networking. I thrive on turning complex challenges into elegant digital solutions, and I'm always eager to learn new technologies and frameworks.",
}

const skills = {
  'Programming & Web': [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Python (Foundational)', level: 'Beginner' },
    { name: 'C# (Foundational)', level: 'Beginner' },
  ],
  'Database Management': [
    { name: 'Relational Database Design', level: 'Intermediate' },
    { name: 'Implementation', level: 'Intermediate' },
    { name: 'SQL Management', level: 'Intermediate' },
  ],
  'Networking': [
    { name: 'Network Security Fundamentals', level: 'Intermediate' },
    { name: 'Protocols', level: 'Beginner' },
    { name: 'AWS Educate Certified', level: 'Intermediate' },
  ],
  'Tools & Platforms': [
    { name: 'GitHub', level: 'Expert' },
    { name: 'Version Control', level: 'Intermediate' },
    { name: 'Microsoft Office Suite', level: 'Intermediate' },
    { name: 'Windows', level: 'Advanced' },
    { name: 'Linux (Familiar)', level: 'Beginner' },
  ],
  'Core Competencies': [
    { name: 'Troubleshooting', level: 'Intermediate' },
    { name: 'Process Automation', level: 'Intermediate' },
    { name: 'Documentation', level: 'Advanced' },
    { name: 'Team Collaboration', level: 'Advanced' },
  ],
}

const experience = [
  {
    role: 'IT Technical Support (Part-Time)',
    company: 'Martruther Logistics Pvt Ltd',
    location: 'Harare',
    period: 'January 2026 – Present',
    points: [
      'Troubleshoot hardware, software, and network issues for staff across logistics operations, reducing downtime through rapid diagnosis and resolution',
      'Install, configure, and maintain IT systems and infrastructure',
      'Support digitalization initiatives by documenting procedures and assisting with system rollouts',
      'Collaborate with non-technical staff to translate technical issues into clear solutions',
    ],
  },
  {
    role: 'Web Developer & IT Services Provider',
    company: 'Prospira-Edu',
    location: 'Harare',
    period: '2024 – Present',
    points: [
      'Design and develop educational websites and digital platforms using HTML, CSS, JavaScript, and SQL databases',
      'Automate manual processes, improving operational efficiency for educational delivery',
      'Manage end-to-end deployment including hosting, domain configuration, and maintenance',
      'Provide ongoing technical support and troubleshooting for platform users',
    ],
  },
  {
    role: 'Commis Cook',
    company: 'Simbisa Brands (Chicken Inn)',
    location: 'Harare',
    period: 'April 2022 – January 2026',
    points: [
      'Balanced full-time employment with academic progression, demonstrating strong time management and resilience',
      'Collaborated with team members to maintain smooth operations under pressure',
    ],
  },
]

type Project = {
  name: string
  description: string
  tech: string[]
  status: string
  link: string
  githubLink: string | null
  image: string | null
  screenshots: { src: string; label: string }[]
}

const projects: Project[] = [
  {
    name: 'Martruther Logistics Website',
    description:
      'Designed and developed a modern, responsive website for Martruther Logistics Pvt Ltd, presenting the company’s services with clear navigation and mobile-friendly layouts.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    status: 'Live',
    link: 'https://martruther-dev.vercel.app',
    githubLink: null,
    image: '/projects/martruther.png',
    screenshots: [],
  },
  {
    name: 'Prospira-Edu Educational Platform',
    description:
      'Built an interactive educational website using HTML, CSS, JavaScript, and SQL. Designed database structures for user management and content delivery so educators can manage and share learning materials.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    status: 'Live',
    link: 'https://prospira-edu.vercel.app',
    githubLink: null,
    image: '/projects/prospira-edu.png',
    screenshots: [],
  },
  {
    name: 'ZimParks Anti-Poaching System',
    description:
      'Developed an academic system to detect and prevent wildlife poaching activities, applying programming, data analysis, and system design to a real-world conservation challenge.',
    tech: ['Programming', 'Data Analysis', 'System Design'],
    status: 'Live Demo',
    link: 'https://anti-poaching-system.vercel.app',
    githubLink: null,
    image: '/projects/anti-poaching-dashboard.png',
    screenshots: [
      { src: '/projects/anti-poaching-analytics.png', label: 'Analytics' },
      { src: '/projects/anti-poaching-incidents.png', label: 'Incidents' },
      { src: '/projects/anti-poaching-poachers.png', label: 'Poachers' },
    ],
  },
  {
    name: 'Destiny for Women Zimbabwe',
    description:
      'Created a prototype website for the DWYE Empowerment Trust, showcasing programs, impact statistics, and contact details for a women and youth empowerment organisation.',
    tech: ['HTML', 'CSS', 'GitHub Pages'],
    status: 'Prototype',
    link: 'https://tapsmann.github.io/destiny-for-women.org',
    githubLink: null,
    image: '/projects/destiny-for-women.png',
    screenshots: [],
  },
]

const quickFacts = [
  { icon: Database, title: 'SQL', subtitle: 'Databases' },
  { icon: Server, title: 'AWS', subtitle: 'Networking' },
  { icon: Wrench, title: 'IT Support', subtitle: 'Troubleshooting' },
]

const education = [
  {
    degree: 'BSc Degree in Computing',
    institution: 'University of Greenwich (UK)',
    period: '2024 – Present',
    details: 'Completed Years 1 and 2 with Diplomas. Final Year online studies yet to commence.',
  },
  {
    degree: 'NCC UK Level 5 Diploma in Computing',
    institution: 'Speciss College',
    period: 'Completed 2025',
    details: 'Modules: Computing Project, Database Design and Development, Information Systems Analysis, Network Security and Cryptography',
  },
  {
    degree: 'NCC UK Level 4 Diploma in Computing',
    institution: 'Speciss College',
    period: 'Completed 2024',
    details: 'Passed all modules including Programming, Web Development, and Networking',
  },
  {
    degree: 'NCC UK Certificate in Introduction to Data Science',
    institution: 'Speciss College',
    period: 'Completed 2023',
    details: '',
  },
  {
    degree: 'Zimsec Advanced Level',
    institution: 'Seke 2 High School',
    period: '2020 – 2021',
    details: '2 passes: Mathematics, Business Studies',
  },
  {
    degree: 'Zimsec Ordinary Level',
    institution: 'Zengeza 1 High School',
    period: '2016 – 2019',
    details: '7 passes including Mathematics and English',
  },
]

const certifications = [
  {
    name: 'AWS Educate Getting Started with Networking',
    issuer: 'Amazon Web Services',
    year: '2025',
  },
  {
    name: 'Basic Networking Certificate',
    issuer: 'Amazon Web Services',
    year: '2025',
  },
]

const languages = [
  { name: 'English', level: 'Proficient' },
]

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(storedTheme ? storedTheme === 'dark' : prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current
      window.localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const from = String(formData.get('email') || '').trim()
    const subject = String(formData.get('subject') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const emailSubject = encodeURIComponent(`Portfolio enquiry: ${subject}`)
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${from}\n\n${message}`,
    )

    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-50 transition-colors duration-300 dark:bg-dark-950">
      {/* Blue water inspired gradient background */}
      <div aria-hidden="true" className="water-background pointer-events-none absolute inset-0 -z-10" />

      {/* Navigation */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="#home" className="text-xl font-bold text-dark-900 dark:text-white" aria-label="Home">
              TJB
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 relative ${
                    activeSection === item.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full" />
                  )}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="rounded-xl border border-white/60 bg-white/50 p-2 text-dark-600 backdrop-blur-md transition-colors hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-dark-300 dark:hover:bg-white/10"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={isDark}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="rounded-xl border border-white/60 bg-white/50 p-2 text-dark-600 backdrop-blur-md transition-colors hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-dark-300 dark:hover:bg-white/10"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={isDark}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-xl border border-white/60 bg-white/50 p-2 text-dark-600 backdrop-blur-md transition-colors hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-dark-300 dark:hover:bg-white/10"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="glass-nav border-t border-white/40 dark:border-white/10 lg:hidden">
            <div className="container-custom grid gap-1 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary-100/70 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300'
                      : 'text-dark-600 hover:bg-white/60 dark:text-dark-300 dark:hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 lg:pt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="glass-panel animate-slide-up p-6 sm:p-8 lg:p-10">
              <p className="mb-4 font-medium text-primary-600 dark:text-primary-400">Computing Student & Developer</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white leading-tight mb-6">
                Tapiwa Jairos Biza
              </h1>
              <p className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 mb-8 max-w-xl leading-relaxed">
                {personalInfo.summary}
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#contact"
                  className="btn-primary group"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                >
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
                </a>
                <a
                  href="#projects"
                  className="btn-secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('projects')
                  }}
                >
                  View Projects
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-dark-500 dark:text-dark-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <span>Chitungwiza, Zimbabwe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <span>tapiwajairosbiza@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="relative isolate animate-slide-up animate-delay-200">
              <div className="relative z-10">
                <div className="glass-panel mx-auto flex aspect-square max-w-md items-center justify-center rounded-3xl bg-gradient-to-br from-primary-100/80 via-sky-100/60 to-cyan-100/50 dark:from-primary-900/40 dark:via-sky-900/25 dark:to-cyan-900/20">
                  <div className="text-center p-8">
                    <Code className="w-24 h-24 mx-auto mb-4 text-primary-600 dark:text-primary-400 opacity-80" />
                    <p className="text-lg font-medium text-dark-700 dark:text-dark-300">Full Stack Developer</p>
                    <p className="text-sm text-dark-500 dark:text-dark-400">HTML • CSS • JavaScript • SQL</p>
                  </div>
                </div>
              </div>

              {/* Floating skill tiles on larger screens */}
              <div className="pointer-events-none absolute -right-5 -top-5 z-20 hidden h-32 w-32 lg:block">
                <div className="skill-tile absolute right-0 top-0 h-24 w-24 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <Database className="mb-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <p className="text-xs font-medium text-dark-900 dark:text-white">SQL</p>
                  <p className="text-[10px] text-dark-500 dark:text-dark-400">Databases</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-5 -left-5 z-20 hidden h-32 w-32 lg:block">
                <div className="skill-tile absolute bottom-0 left-0 h-24 w-24 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <Server className="mb-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <p className="text-xs font-medium text-dark-900 dark:text-white">AWS</p>
                  <p className="text-[10px] text-dark-500 dark:text-dark-400">Networking</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-5 top-1/2 z-20 hidden h-32 w-32 -translate-y-1/2 lg:block">
                <div className="skill-tile absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 animate-fade-in" style={{ animationDelay: '500ms' }}>
                  <Wrench className="mb-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <p className="text-xs font-medium text-dark-900 dark:text-white">IT Support</p>
                  <p className="text-[10px] text-dark-500 dark:text-dark-400">Troubleshooting</p>
                </div>
              </div>

              {/* Always-visible tiles on tablet and mobile */}
              <div className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-3 lg:hidden">
                {quickFacts.map((fact, index) => {
                  const Icon = fact.icon
                  return (
                    <div
                      key={fact.title}
                      className="skill-tile h-24 animate-fade-in"
                      style={{ animationDelay: `${300 + index * 100}ms` }}
                    >
                      <Icon className="mb-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <p className="text-xs font-medium text-dark-900 dark:text-white">{fact.title}</p>
                      <p className="text-[10px] text-dark-500 dark:text-dark-400">{fact.subtitle}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-dark-300 dark:text-dark-600" />
          </div>
        </div>
      </section>

      {/* Projects Section - lead with best work per portfolio tips */}
      <section id="projects" className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A focused selection of work that demonstrates web development, database design, and practical problem-solving.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={index}
                className="card group flex h-full animate-slide-up flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl border border-white/60 dark:border-white/10">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} website preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-100/70 via-sky-100/60 to-violet-100/60 dark:from-primary-900/30 dark:via-sky-900/20 dark:to-violet-900/30">
                      <Code className="h-12 w-12 text-primary-600 dark:text-primary-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 via-transparent to-transparent" />
                </div>

                {project.screenshots.length > 0 && (
                  <div className="mb-5 grid grid-cols-3 gap-2">
                    {project.screenshots.map((screenshot, screenshotIndex) => (
                      <div
                        key={screenshotIndex}
                        className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/60 dark:border-white/10"
                      >
                        <Image
                          src={screenshot.src}
                          alt={`${project.name} ${screenshot.label} screenshot`}
                          fill
                          sizes="(max-width: 768px) 33vw, 180px"
                          className="object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                        <span className="absolute bottom-1 left-1 rounded-md border border-white/40 bg-white/70 px-1.5 py-0.5 text-[10px] font-medium text-dark-700 backdrop-blur-md dark:border-white/10 dark:bg-dark-950/70 dark:text-white">
                          {screenshot.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {project.status === 'Live' && (
                    <span className="rounded-full border border-green-200/70 bg-green-100/70 px-2.5 py-1 text-xs font-medium text-green-700 backdrop-blur-md dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300">
                      Live
                    </span>
                  )}
                  {project.status === 'Live Demo' && (
                    <span className="rounded-full border border-emerald-200/70 bg-emerald-100/70 px-2.5 py-1 text-xs font-medium text-emerald-700 backdrop-blur-md dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                      Live Demo
                    </span>
                  )}
                  {project.status === 'Completed' && (
                    <span className="rounded-full border border-blue-200/70 bg-blue-100/70 px-2.5 py-1 text-xs font-medium text-blue-700 backdrop-blur-md dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                      Completed
                    </span>
                  )}
                  {project.status === 'Academic Project' && (
                    <span className="rounded-full border border-purple-200/70 bg-purple-100/70 px-2.5 py-1 text-xs font-medium text-purple-700 backdrop-blur-md dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-300">
                      Academic
                    </span>
                  )}
                  {project.status === 'Prototype' && (
                    <span className="rounded-full border border-amber-200/70 bg-amber-100/70 px-2.5 py-1 text-xs font-medium text-amber-700 backdrop-blur-md dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
                      Prototype
                    </span>
                  )}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-dark-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                  {project.name}
                </h3>
                <p className="mb-4 grow leading-relaxed text-dark-600 dark:text-dark-300">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="glass-chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-col items-start gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      View Project
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary-500 transition-colors hover:text-primary-300"
                    >
                      <Github className="h-3.5 w-3.5" />
                      View Source
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white/40 backdrop-blur-sm dark:bg-white/[0.03]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              I’m Tapiwa, a Computing student at the University of Greenwich with a passion for building web applications and solving real-world problems. I combine hands-on experience in IT technical support, web development, and database management with AWS networking certification. I thrive on turning complex challenges into elegant digital solutions, and I’m always eager to learn new technologies and frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card animate-slide-up">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Education Journey
              </h3>
              <div className="space-y-4">
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <p className="font-medium text-dark-900 dark:text-white">BSc Computing - University of Greenwich</p>
                  <p className="text-sm text-dark-500 dark:text-dark-400">2024 – Present (Years 1 & 2 Complete)</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <p className="font-medium text-dark-900 dark:text-white">NCC UK Level 5 Diploma in Computing</p>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Completed 2025</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <p className="font-medium text-dark-900 dark:text-white">NCC UK Level 4 Diploma in Computing</p>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Completed 2024</p>
                </div>
              </div>
            </div>

            <div className="card animate-slide-up animate-delay-100">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-dark-50 dark:bg-dark-800 rounded-lg">
                    <Shield className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dark-900 dark:text-white">{cert.name}</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card md:col-span-2 animate-slide-up animate-delay-200">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <span key={index} className="skill-badge">
                    {lang.name} <span className="ml-1 text-xs opacity-80">({lang.level})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Proficient in modern web technologies, database management, and IT infrastructure with a focus on practical problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div key={category} className="card animate-slide-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                <div className="flex items-center gap-2 mb-4">
                  {category === 'Programming & Web' && <Code className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  {category === 'Database Management' && <Database className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  {category === 'Networking' && <Server className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  {category === 'Tools & Platforms' && <Wrench className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  {category === 'Core Competencies' && <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                  <h3 className="font-semibold text-dark-900 dark:text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="skill-badge animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                      {skill.name} <span className="ml-1 text-xs opacity-80">({skill.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section bg-white/40 backdrop-blur-sm dark:bg-white/[0.03]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Professional experience spanning IT support, web development, and customer service roles.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-dark-900 dark:text-white">{job.role}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-dark-500 dark:text-dark-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span>{job.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-dark-600 dark:text-dark-300">
                      <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section bg-white/40 backdrop-blur-sm dark:bg-white/[0.03]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">
              Academic background in computing with progressive qualifications from NCC UK to University of Greenwich.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 pb-10 border-l-2 border-dark-100 dark:border-dark-800 last:border-transparent last:pb-0 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute left-[-6px] top-0 w-3 h-3 bg-primary-600 rounded-full border-4 border-white dark:border-dark-950 shadow-sm" />
                <h3 className="font-semibold text-dark-900 dark:text-white">{edu.degree}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mt-1">{edu.institution}</p>
                <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">{edu.period}</p>
                {edu.details && <p className="text-dark-600 dark:text-dark-300 mt-2 text-sm">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              I’m currently seeking an ICT Attachment opportunity and open to discussing web development projects. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:tapiwajairosbiza@gmail.com" className="glass-chip w-full justify-start gap-4 p-3 text-left transition hover:bg-white/80 dark:hover:bg-white/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-200/70 bg-primary-100/70 text-primary-600 backdrop-blur-md transition-transform group-hover:scale-105 dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-300">
                      <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Email</p>
                      <p className="font-medium text-dark-900 dark:text-white">tapiwajairosbiza@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:+263782585268" className="glass-chip w-full justify-start gap-4 p-3 text-left transition hover:bg-white/80 dark:hover:bg-white/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-200/70 bg-primary-100/70 text-primary-600 backdrop-blur-md transition-transform group-hover:scale-105 dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-300">
                      <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Phone</p>
                      <p className="font-medium text-dark-900 dark:text-white">+263 78 258 5268 / +263 77 278 9236</p>
                    </div>
                  </a>
                  <div className="glass-chip w-full justify-start gap-4 p-3 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-200/70 bg-primary-100/70 text-primary-600 backdrop-blur-md dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-300">
                      <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Location</p>
                      <p className="font-medium text-dark-900 dark:text-white">Chitungwiza, Zimbabwe</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Connect With Me</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/tapsmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-chip gap-2 px-4 py-2 transition hover:bg-primary-100/70 hover:text-primary-700 dark:hover:bg-primary-400/10 dark:hover:text-primary-300"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/tapiwa-biza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-chip gap-2 px-4 py-2 transition hover:bg-primary-100/70 hover:text-primary-700 dark:hover:bg-primary-400/10 dark:hover:text-primary-300"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="field"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="field"
                    placeholder="Project Inquiry / ICT Attachment / Other"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="field resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Message
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/60 bg-white/50 backdrop-blur-xl dark:border-white/10 dark:bg-dark-950/80">
        <div className="container-custom py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="glass-panel p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-sky-500 text-white shadow-lg shadow-primary-600/20">
                <Code className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-dark-900 dark:text-white">{personalInfo.name}</h2>
              <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">{personalInfo.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-dark-600 dark:text-dark-300">
                Building practical web applications and supporting the systems behind them.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="https://github.com/tapsmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-chip h-9 w-9 justify-center p-0"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/tapiwa-biza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-chip h-9 w-9 justify-center p-0"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:tapiwajairosbiza@gmail.com"
                  className="glass-chip h-9 w-9 justify-center p-0"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-dark-900 dark:text-white">
                <ChevronRight className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                Pages
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="footer-link">
                      <ChevronRight className="h-3.5 w-3.5 text-primary-500 dark:text-primary-400" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-dark-900 dark:text-white">
                <Globe2 className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                Projects
              </h3>
              <ul className="space-y-2">
                {projects
                  .filter((project) => project.link)
                  .map((project) => (
                    <li key={project.name}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link items-start leading-snug"
                      >
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-500 dark:text-primary-400" />
                        {project.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-dark-900 dark:text-white">
                <Mail className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:tapiwajairosbiza@gmail.com" className="footer-link break-all">
                    <Mail className="h-4 w-4 shrink-0 text-primary-500 dark:text-primary-400" />
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a href="tel:+263782585268" className="footer-link">
                    <Phone className="h-4 w-4 shrink-0 text-primary-500 dark:text-primary-400" />
                    {personalInfo.phone}
                  </a>
                </li>
                <li>
                  <div className="footer-link items-start leading-snug">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-500 dark:text-primary-400" />
                    {personalInfo.location}
                  </div>
                </li>
              </ul>
              <div className="mt-5 border-t border-white/60 pt-4 dark:border-white/10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-dark-500 dark:text-dark-400">
                  Available on
                </p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/tapsmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <Github className="h-4 w-4 text-primary-500 dark:text-primary-400" />
                    GitHub
                    <span className="text-dark-400 dark:text-dark-500">/ tapsmann</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/tapiwa-biza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <Linkedin className="h-4 w-4 text-primary-500 dark:text-primary-400" />
                    LinkedIn
                    <span className="text-dark-400 dark:text-dark-500">/ tapiwa-biza</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/60 pt-6 text-sm text-dark-500 dark:text-dark-400 sm:flex-row">
            <p>© {new Date().getFullYear()} Tapiwa Jairos Biza. All rights reserved.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="footer-link"
            >
              Back to top
              <ArrowUpRight className="h-4 w-4 -rotate-45" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}