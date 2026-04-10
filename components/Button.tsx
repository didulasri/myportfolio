'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useTheme } from './ThemeProvider';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const { theme } = useTheme();

  const baseStyles = 'font-mono font-semibold transition-all duration-300 rounded-lg border-2 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: theme === 'dark' 
      ? 'bg-primary text-dark-bg border-primary hover:bg-transparent hover:text-primary glow-effect'
      : 'bg-primary text-dark-bg border-primary hover:bg-dark-bg hover:text-primary',
    secondary: theme === 'dark'
      ? 'bg-transparent text-primary border-primary hover:bg-primary hover:text-dark-bg'
      : 'bg-transparent text-dark-bg border-dark-bg hover:bg-dark-bg hover:text-white',
    ghost: theme === 'dark'
      ? 'bg-transparent text-white border-transparent hover:border-primary hover:text-primary'
      : 'bg-transparent text-dark-bg border-transparent hover:border-dark-bg',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
