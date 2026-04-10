'use client';

import { useTheme } from './ThemeProvider';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'AI-Powered WhatsApp Conversational Commerce',
    description: 'Designed and developed an AI-powered conversational commerce system that enables users to place product orders via WhatsApp using natural language. The chatbot intelligently detects user intent, incrementally extracts order details, maintains conversational context with Redis, and validates product availability before order confirmation.',
    technologies: ['Node.js', 'Redis', 'Groq LLM APIs', 'WhatsApp Business API', 'Natural Language Processing'],
    type: 'Individual' as const,
    repository: 'neura-whatsapp',
    featured: true,
  },
  {
    title: 'Invoicey - Invoice Management SaaS',
    description: 'Built a scalable SaaS-based invoice management system that enables businesses to securely create, edit, and manage invoices with dynamic PDF generation. Designed with a free-tier usage model and an extensible architecture to support future payment and subscription features.',
    technologies: ['Next.js', 'PostgreSQL', 'Server-side APIs', 'PDF Generation', 'Authentication'],
    type: 'Individual' as const,
    repository: 'invoicey',
    featured: true,
  },
  {
    title: 'CareSync - Hospital Communication Platform',
    description: 'Implemented a solution for Peradeniya Teaching Hospital that transformed communication between patients and doctors by securely sharing medical information through a mobile application. Designed user profiles, patient summary views for doctors, and visualizations for weight and BMI graphs.',
    technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Mobile Development'],
    type: 'Group' as const,
    role: 'Full Stack Developer',
    repositories: [
      { name: 'Frontend', url: 'https://github.com/didulasri/caresync-frontend' },
      { name: 'Backend', url: 'https://github.com/didulasri/caresync-backend' },
    ],
  },
  {
    title: 'FreshMart - E-commerce Platform',
    description: 'Built a modern digital marketplace with a microservice architecture, enabling users to effortlessly browse, purchase, and receive products while ensuring convenience, secure transactions, and access to a diverse range of items through independent services.',
    technologies: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Microservices', 'REST APIs'],
    type: 'Group' as const,
    role: 'Full Stack Developer',
    repositories: [
      { name: 'Frontend', url: 'https://github.com/didulasri/freshmart-frontend' },
      { name: 'Backend', url: 'https://github.com/didulasri/freshMart-backend' },
    ],
  },
  {
    title: 'EXMO - Faculty Access Control System',
    description: 'Developed a Faculty Access Control System for University of Moratuwa that integrates a microcontroller device with the RDM6300 RFID module and a web application. The system provides secure, automated access management for faculty facilities.',
    technologies: ['Microcontroller', 'RFID', 'Web Application', 'IoT', 'Access Control'],
    type: 'Individual' as const,
  },
];

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`py-20 md:py-32 ${theme === 'dark' ? 'bg-dark-card' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my recent work and contributions"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 p-8 rounded-2xl border-2 text-center ${
            theme === 'dark'
              ? 'bg-dark-bg border-primary/20'
              : 'bg-white border-gray-300'
          }`}
        >
          <p className={`font-mono text-base ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Want to see more? Check out my{' '}
            <a
              href="https://github.com/didulasri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-bold"
            >
              GitHub profile
            </a>
            {' '}for additional projects and contributions.
          </p>
        </div>
      </div>
    </section>
  );
}
