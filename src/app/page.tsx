'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Code,
  Database,
  Server,
  Wrench,
  Award,
  GraduationCap,
  Briefcase,
  Projector,
  BookOpen,
  Shield,
  Zap,
  Rocket,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
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
  website: 'https://martruther-dev.vercel.app',
  summary: "I'm Tapiwa, a Computing student at the University of Greenwich with a passion for building web applications and solving real-world problems. I combine hands-on experience in IT technical support, web development, and database management with AWS networking certification. I thrive on turning complex challenges into elegant digital solutions, and I'm always eager to learn new technologies and frameworks.",
}

const skills = {
  'Programming & Web': [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Expert' },
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
    { name: 'AWS Educate Certified', level: 'Expert' },
  ],
  'Tools & Platforms': [
    { name: 'GitHub', level: 'Expert' },
    { name: 'Version Control', level: 'Expert' },
    { name: 'Microsoft Office Suite', level: 'Intermediate' },
    { name: 'Windows', level: 'Intermediate' },
    { name: 'Linux (Familiar)', level: 'Beginner' },
  ],
  'Core Competencies': [
    { name: 'Troubleshooting', level: 'Expert' },
    { name: 'Process Automation', level: 'Intermediate' },
    { name: 'Documentation', level: 'Intermediate' },
    { name: 'Team Collaboration', level: 'Intermediate' },
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

const projects = [
  {
    name: 'Prospira-Edu Educational Platform',
    description: 'Built an interactive educational website using HTML, CSS, JavaScript, and SQL. Designed database structures for user management and content delivery. The platform enables educators to create, manage, and deliver content effectively.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    status: 'Completed',
    link: 'https://prospira-edu.vercel.app',
    githubLink: 'https://github.com/tapsmann/prospira-edu',
  },
  {
    name: 'Anti-Poaching Detection System',
    description: 'Developed a system to detect and prevent wildlife poaching activities. Applied programming, data analysis, and system design to address a real-world conservation challenge. Used machine learning concepts to identify suspicious patterns in wildlife reserve data.',
    tech: ['Programming', 'Data Analysis', 'System Design'],
    status: 'Academic Project',
    link: null,
    githubLink: 'https://github.com/tapsmann/anti-poaching-detection',
  },
  {
    name: 'Destiny for Women Zimbabwe Website',
    description: 'Developed and deployed a fully functional NGO website using HTML, CSS, and GitHub Pages. Created a platform to support women\'s empowerment initiatives and provide resources for education and training.',
    tech: ['HTML', 'CSS', 'GitHub Pages'],
    status: 'Live',
    link: 'https://tapsmann.github.io/destiny-for-women.org',
    githubLink: 'https://github.com/tapsmann/destiny-for-women.org',
  },
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
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
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
    <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="#" className="text-xl font-bold text-dark-900 dark:text-white" aria-label="Home">
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
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to light mode'}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 lg:pt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in animate-slide-up">
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">Computing Student & Developer</p>
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

            <div className="relative animate-fade-in animate-delay-200 animate-slide-up">
              <div className="relative z-10">
                <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-3xl border border-primary-200 dark:border-primary-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Code className="w-24 h-24 mx-auto mb-4 text-primary-600 dark:text-primary-400 opacity-80" />
                    <p className="text-lg font-medium text-dark-700 dark:text-dark-300">Full Stack Developer</p>
                    <p className="text-sm text-dark-500 dark:text-dark-400">HTML • CSS • JavaScript • SQL</p>
                  </div>
                </div>
              </div>
              {/* Floating skill badges */}
              <div className="absolute -top-4 -right-4 w-32 h-32">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-lg p-3 animate-fade-in animate-delay-300">
                  <Database className="w-5 h-5 text-primary-600 dark:text-primary-400 mb-1" />
                  <p className="text-xs font-medium text-dark-900 dark:text-white">SQL</p>
                  <p className="text-[10px] text-dark-500 dark:text-dark-400">Databases</p>
                </div>
              </div>
              <div className="absolute bottom-4 -left-4 w-32 h-32">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-lg p-3 animate-fade-in animate-delay-400">
                  <Server className="w-5 h-5 text-primary-600 dark:text-primary-400 mb-1" />
                  <p className="text-xs font-medium text-dark-900 dark:text-white">AWS</p>
                  <p className="text-[10px] text-dark-500 dark:text-dark-400">Networking</p>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 w-32 h-32">
                <div className="absolute top-1/2 right-0 w-24 h-24 bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-lg p-3 animate-fade-in animate-delay-500">
                  <Wrench className="w-5 h-5 text-primary-600 dark:text-primary-400 mb-1" />
                  <p className="text-xs font-medium text-dark-900 dark:text-white">IT Support</p>
                  <p className="text-[10px] text-dark-500 dark:text-dark-400">Troubleshooting</p>
                </div>
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
              Selected projects demonstrating web development, database design, and problem-solving skills. 
              I curate 3-5 polished projects (not tutorial clones) that showcase different skills and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article key={index} className="card group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-2 mb-3">
                  {project.status === 'Live' && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                      Live
                    </span>
                  )}
                  {project.status === 'Completed' && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                      Completed
                    </span>
                  )}
                  {project.status === 'Academic Project' && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
                      Academic
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                  >
                    View Project
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.githubLink || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary-500 dark:text-primary-400 hover:text-primary-300 transition-colors group mt-2"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View Source
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              I'm Tapiwa, a Computing student at the University of Greenwich with a passion for building web applications and solving real-world problems. I combine hands-on experience in IT technical support, web development, and database management with AWS networking certification. I thrive on turning complex challenges into elegant digital solutions, and I'm always eager to learn new technologies and frameworks.
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
      <section id="experience" className="section bg-dark-50 dark:bg-dark-900">
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
      <section id="education" className="section bg-dark-50 dark:bg-dark-900">
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
              I'm currently seeking an ICT Attachment opportunity and open to discussing web development projects. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:tapiwajairosbiza@gmail.com" className="flex items-center gap-4 p-3 bg-dark-50 dark:bg-dark-800 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors group">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Email</p>
                      <p className="font-medium text-dark-900 dark:text-white">tapiwajairosbiza@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:+263782585268" className="flex items-center gap-4 p-3 bg-dark-50 dark:bg-dark-800 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors group">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400">Phone</p>
                      <p className="font-medium text-dark-900 dark:text-white">+263 78 258 5268 / +263 77 278 9236</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-3 bg-dark-50 dark:bg-dark-800 rounded-lg">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
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
                    className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/tapiwa-biza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                  <a
                    href="https://martruther-dev.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors group"
                  >
                    <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Portfolio Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                      className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-lg text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-lg text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-lg text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-lg text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
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
      <footer className="bg-dark-950 text-dark-400 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold text-white text-lg">TJB</p>
              <p className="text-sm mt-1">Tapiwa Jairos Biza</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/tapsmann" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/tapiwa-biza" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:tapiwajairosbiza@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-center md:text-right">
              © {new Date().getFullYear()} Tapiwa Jairos Biza. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}