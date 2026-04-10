'use client';

import { useTheme } from './ThemeProvider';
import SectionTitle from './SectionTitle';
import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

const skills = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'Python', 'TypeScript'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'React Native', 'HTML/CSS', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { category: 'Tools & Others', items: ['Git', 'Docker', 'SonarQube', 'Microservices', 'Groq LLM'] },
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'BSc. (Hons) in Information Technology',
    detail: 'University of Moratuwa (2022-2026)',
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Software Engineer Intern',
    detail: 'AASA IT Solutions (Apr-Oct 2025)',
  },
  {
    icon: Code2,
    title: 'Focus Areas',
    description: 'Full-Stack Development',
    detail: 'Building scalable, production-ready apps',
  },
  {
    icon: Award,
    title: 'Achievements',
    description: 'High Standards',
    detail: 'Clean code, maintainable solutions',
  },
];

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 md:py-32 ${theme === 'dark' ? 'bg-dark-card' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background and expertise"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Profile Summary */}
          <div className="space-y-6">

            <div className={`space-y-4 font-mono text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
              <p>
                I'm an early-career software engineer with hands-on experience designing, building,
                and maintaining production-ready applications. I'm comfortable working across the full
                development lifecycle, from understanding requirements to delivering reliable, scalable solutions.
              </p>
              <p>
                Known for taking ownership of tasks, learning new systems quickly, and writing maintainable
                code that aligns with real business needs. I actively seek opportunities where high standards,
                continuous learning, and meaningful impact are valued.
              </p>
              <p>
                Currently in my final year at University of Moratuwa, I've contributed to various projects
                ranging from AI-powered conversational commerce to hospital management systems, always
                focusing on clean architecture and best practices.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 rounded-xl border-2 transition-all hover:scale-105 hover:border-primary ${theme === 'dark'
                      ? 'bg-dark-bg border-dark-border'
                      : 'bg-white border-gray-200'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-primary mb-4" size={32} />
                  <h4 className={`font-display font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-dark-bg'
                    }`}>
                    {item.title}
                  </h4>
                  <p className={`font-mono text-sm mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {item.description}
                  </p>
                  <p className="font-mono text-xs text-primary">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`p-8 md:p-12 rounded-2xl border-2 ${theme === 'dark'
            ? 'bg-dark-bg border-primary/20'
            : 'bg-white border-gray-300'
          }`}>
          <h3 className={`font-display text-2xl md:text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-dark-bg'
            }`}>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="font-display font-bold text-lg text-primary mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg font-mono text-sm border transition-all hover:scale-105 ${theme === 'dark'
                          ? 'bg-dark-card border-dark-border text-gray-300 hover:border-primary'
                          : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-dark-bg'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
