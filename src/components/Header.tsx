import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0F]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#0B0B0F] border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand mark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A437B8] rounded-md transition-opacity hover:opacity-95"
            aria-label="Marjoribanks Joinery Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: Desktop clean single-line nav links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-white/80"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#E8C477] transition-colors py-1 relative group focus:outline-none focus-visible:text-[#E8C477]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#A437B8] to-[#E8C477] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action button & Mobile toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] hover:from-[#6A24A6] hover:to-[#932EAA] rounded-lg shadow-md shadow-[#7B2CBF]/30 hover:shadow-lg hover:shadow-[#A437B8]/40 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C477] whitespace-nowrap shrink-0 border border-[#E8C477]/30"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8C477]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A437B8]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0F]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#E8C477]">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] rounded-lg shadow-md active:scale-95 transition-all border border-[#E8C477]/30"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#E8C477]" />
              </button>

              <a
                href="mailto:MJoinery20@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#A437B8]" />
                <span>MJoinery20@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
