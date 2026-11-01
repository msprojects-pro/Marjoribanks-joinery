import React from 'react';
import { Mail, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B0B0F] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <BrandLogo size="md" />
            
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm pt-2">
              Marjoribanks Joinery undertakes all aspects of joinery and carpentry, with an emphasis on quality workmanship, competitive prices, and reliable service.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/50 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#E8C477]" />
              <span>Serving Edinburgh & the Central Belt, Scotland</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-[#E8C477] uppercase tracking-[0.2em] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#E8C477] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold text-[#E8C477] uppercase tracking-[0.2em] mb-4">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs text-white/80 mb-5">
              <div>
                <span className="text-white/40 block text-[11px] mb-0.5">Email</span>
                <a
                  href="mailto:MJoinery20@gmail.com"
                  className="hover:text-[#E8C477] font-medium transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A437B8]" />
                  <span>MJoinery20@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="text-white/40 block text-[11px] mb-0.5">Location</span>
                <span className="text-white/80">Edinburgh, Scotland, UK</span>
              </div>
            </div>

            <h5 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">
              Social Profiles
            </h5>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/marjoribanks.joinery"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 text-xs text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>

              <a
                href="https://www.tiktok.com/@marjoribanks.joinery"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 text-xs text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>TikTok</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Marjoribanks Joinery. All rights reserved. Edinburgh, Scotland.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-white/60 hover:text-[#E8C477] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
