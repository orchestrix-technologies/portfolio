import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('theme-light');
    } else {
      root.classList.remove('theme-light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-[100] p-3 rounded-full bg-[var(--ox-card-bg)] backdrop-blur-md border border-[var(--ox-card-border)] text-[var(--ox-text)] hover:bg-[var(--ox-accent-glow)] transition-all duration-300 group shadow-lg"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}
