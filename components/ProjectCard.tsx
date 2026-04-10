'use client';

import { useTheme } from './ThemeProvider';
import { ExternalLink, Github, Users, User } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  type: 'Individual' | 'Group';
  role?: string;
  repository?: string;
  repositories?: { name: string; url: string }[];
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  type,
  role,
  repository,
  repositories,
  featured = false,
}: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`group relative p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
        featured
          ? 'border-primary bg-gradient-to-br from-primary/5 to-transparent'
          : theme === 'dark'
          ? 'bg-dark-card border-dark-border hover:border-primary'
          : 'bg-white border-gray-200 hover:border-dark-bg'
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 -right-3 px-4 py-1 bg-primary text-dark-bg font-mono text-xs font-bold rounded-full">
          Featured
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className={`font-display text-xl md:text-2xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-dark-bg'
          }`}>
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {type === 'Individual' ? (
              <User className="text-primary" size={16} />
            ) : (
              <Users className="text-accent-cyan" size={16} />
            )}
            <span className={`font-mono text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {type} {role && `• ${role}`}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={`font-mono text-sm leading-relaxed mb-6 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className={`px-3 py-1 rounded-lg font-mono text-xs border ${
              theme === 'dark'
                ? 'bg-dark-bg border-primary/30 text-primary'
                : 'bg-gray-50 border-gray-300 text-gray-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {repository && (
          <a
            href={`https://github.com/didulasri/${repository}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-mono text-sm transition-all hover:scale-105 ${
              theme === 'dark'
                ? 'border-primary text-primary hover:bg-primary hover:text-dark-bg'
                : 'border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-white'
            }`}
          >
            <Github size={16} />
            View Code
          </a>
        )}
        {repositories && repositories.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-mono text-sm transition-all hover:scale-105 ${
              theme === 'dark'
                ? 'border-primary text-primary hover:bg-primary hover:text-dark-bg'
                : 'border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-white'
            }`}
          >
            <Github size={16} />
            {repo.name}
          </a>
        ))}
      </div>
    </div>
  );
}
