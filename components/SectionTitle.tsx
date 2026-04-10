'use client';

import { useTheme } from './ThemeProvider';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, align = 'left' }: SectionTitleProps) {
  const { theme } = useTheme();

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignments[align]}`}>
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-dark-bg'
        }`}>
        <span >{title}</span>
      </h2>
      {subtitle && (
        <p className={`font-mono text-sm md:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
