"use client";

import { useTheme } from "./ThemeProvider";
import SectionTitle from "./SectionTitle";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const experience = {
  company: "AASA IT Solutions",
  role: "Software Engineer Intern",
  location: "Colombo, Sri Lanka",
  period: "April 2025 - October 2025",
  description:
    "Contributed as a full-stack developer to the Irrigation Department ERP System",
  responsibilities: [
    "Developed React.js frontend and Spring Boot backend for workflows supporting storekeepers, HODs, irrigation engineers, and administrative staff",
    "Built and enhanced RESTful APIs for core modules including item management, stock handling, engineer management, approvals, material requests, and user management",
    "Enhanced code quality and maintainability by identifying technical debt, refactoring, and following clean-code best practices using SonarQube",
    "Collaborated with cross-functional teams to deliver features aligned with business requirements",
  ],
  technologies: ["React.js", "Spring Boot", "SonarQube", "Java", "JavaScript"],
};

const education = {
  degree: "BSc. (Hons) in Information Technology",
  university: "University of Moratuwa",
  period: "June 2022 - July 2026",
  highlights: [
    "Focus on Software Engineering and Full-Stack Development",
    "Active participant in technical projects and hackathons",
    "Strong foundation in Data Structures, Algorithms, and Software Architecture",
  ],
};

const previousEducation = {
  school: "St. Thomas College - Matara",
  period: "2011 - 2019",
  achievement: "G.C.E. Advanced Level - Physical Science Stream: A A B",
};

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className={`py-20 md:py-32 ${theme === "dark" ? "bg-dark-bg" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey and academic background"
          align="center"
        />

        <div className="space-y-12">
          {/* Professional Experience */}
          <div
            className={`p-8 md:p-12 rounded-2xl border-2 transition-all hover:border-primary ${
              theme === "dark"
                ? "bg-dark-card border-dark-border"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border-2 border-primary">
                <Briefcase className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3
                  className={`font-display text-2xl md:text-3xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-dark-bg"
                  }`}
                >
                  {experience.role}
                </h3>
                <p className="font-display text-xl text-primary mb-3">
                  {experience.company}
                </p>
                <div
                  className={`flex flex-wrap gap-4 font-mono text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {experience.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            <p
              className={`font-mono text-base mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {experience.description}
            </p>

            <div className="space-y-3 mb-6">
              {experience.responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p
                    className={`font-mono text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs border ${
                    theme === "dark"
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-gray-100 border-gray-300 text-dark-bg"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* University */}
            <div
              className={`p-8 rounded-2xl border-2 transition-all hover:border-primary ${
                theme === "dark"
                  ? "bg-dark-card border-dark-border"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent-cyan/10 border-2 border-accent-cyan">
                  <svg
                    className="w-8 h-8 text-accent-cyan"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-display text-xl md:text-2xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-dark-bg"
                    }`}
                  >
                    {education.degree}
                  </h3>
                  <p className="font-display text-lg text-accent-cyan mb-2">
                    {education.university}
                  </p>
                  <p
                    className={`font-mono text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {education.period}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {education.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle
                      className="text-accent-cyan mt-1 flex-shrink-0"
                      size={16}
                    />
                    <p
                      className={`font-mono text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* School */}
            <div
              className={`p-8 rounded-2xl border-2 transition-all hover:border-primary ${
                theme === "dark"
                  ? "bg-dark-card border-dark-border"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent-purple/10 border-2 border-accent-purple">
                  <svg
                    className="w-8 h-8 text-accent-purple"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-display text-xl md:text-2xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-dark-bg"
                    }`}
                  >
                    {previousEducation.school}
                  </h3>
                  <p
                    className={`font-mono text-sm mb-3 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {previousEducation.period}
                  </p>
                </div>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-dark-bg" : "bg-white"
                }`}
              >
                <p
                  className={`font-mono text-sm font-semibold ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {previousEducation.achievement}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
