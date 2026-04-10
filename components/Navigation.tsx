'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Connect', href: '#connect' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? theme === 'dark'
            ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#home')}
              className="hover:scale-105 transition-transform text-white text-5xl"
              style={{ fontFamily: "'Parisienne', cursive" }}
            >
              D
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`font-mono text-sm transition-all relative group ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      style={{ bottom: '-4px' }}
                    />
                  </button>
                );
              })}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border-2 transition-all ${theme === 'dark'
                  ? 'border-primary text-primary hover:bg-primary hover:text-dark-bg'
                  : 'border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-white'
                  }`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border-2 ${theme === 'dark'
                  ? 'border-primary text-primary'
                  : 'border-dark-bg text-dark-bg'
                  }`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={theme === 'dark' ? 'text-white' : 'text-dark-bg'}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden ${theme === 'dark' ? 'bg-dark-bg' : 'bg-white'
            }`}
          style={{ paddingTop: '80px' }}
        >
          <div className="flex flex-col items-center gap-8 p-8">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-mono text-2xl transition-all relative group ${theme === 'dark' ? 'text-white' : 'text-dark-bg'
                    }`}
                  style={{
                    animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    style={{ bottom: '-4px' }}
                  />
                </button>
              );
            })}

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/didulasri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:scale-110 transition-transform"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/didulasri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:scale-110 transition-transform"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:diduladdsl@gmail.com"
                className="text-primary hover:scale-110 transition-transform"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
