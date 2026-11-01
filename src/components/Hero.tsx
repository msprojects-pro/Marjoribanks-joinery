import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { siteImages } from '../assets/images';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImagePath = siteImages.hero;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#0B0B0F] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-white/5"
    >
      {/* Subtle luxury ambient glow in the background (restrained, elegant) */}
      <div
        className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-gradient-to-br from-[#7B2CBF]/15 via-[#A437B8]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[320px] h-[320px] bg-[#E8C477]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout: Left Column = Narrative & CTAs, Right Column = Marquee Architectural Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (58% desktop space) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small label: BESPOKE JOINERY • EDINBURGH (clean text, no pill box per design constitution) */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#E8C477] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#E8C477]" aria-hidden="true" />
              <span>Bespoke Joinery</span>
              <span className="text-[#A437B8]" aria-hidden="true">•</span>
              <span>Edinburgh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 max-w-2xl text-balance">
              Exceptional Joinery.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#E8C477]">
                Beautifully Crafted.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-white/75 font-normal leading-relaxed max-w-xl mb-8">
              Quality joinery and carpentry across Edinburgh and the Central Belt.
              Thoughtful craftsmanship, reliable service, and solutions tailored
              to your home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenQuote}
                type="button"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] hover:from-[#6A24A6] hover:to-[#932EAA] rounded-lg shadow-lg shadow-[#7B2CBF]/30 hover:shadow-[#A437B8]/50 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C477] border border-[#E8C477]/30 whitespace-nowrap"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#E8C477]" />
              </button>

              <a
                href="#gallery"
                onClick={(e) => scrollToSection(e, '#gallery')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white/90 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg border border-white/15 hover:border-[#E8C477]/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* Supporting Statement & Trust Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A437B8]" />
                <span className="font-medium text-white/80">Quality Workmanship • Reliable Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E8C477]" />
                <span>Serving Edinburgh & Central Belt</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A437B8]" />
                <span>Competitive Pricing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Photograph with Luxury Architectural Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative hairline frame with subtle champagne-gold border */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/10 via-white/5 to-[#A437B8]/20 shadow-2xl shadow-black/80">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-[1/1] xl:aspect-[5/4] bg-[#1C1B22]">
                  
                  {/* Zero-broken image fallback container */}
                  <div className="absolute inset-0 bg-[#1C1B22] flex items-center justify-center p-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[#A437B8]/20 flex items-center justify-center text-[#E8C477]">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <span className="text-xs text-white/50 font-medium">Bespoke Cabinetry & Joinery</span>
                    </div>
                  </div>

                  {/* Primary High-Resolution Architectural Photo */}
                  <img
                    src={heroImagePath}
                    alt="Luxury bespoke fitted oak cabinetry and architectural joinery in a contemporary Edinburgh home"
                    className={`w-full h-full object-cover transition-opacity duration-700 relative z-10 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />

                  {/* Subtle darkening gradient at base for legibility */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0B0F]/90 via-[#0B0B0F]/30 to-transparent z-20 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Refined Image Caption Card */}
                  <div className="absolute bottom-3 left-3 right-3 z-30 p-3.5 rounded-lg bg-[#0B0B0F]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white tracking-wide">
                        Bespoke Cabinetry & Wall Storage
                      </p>
                      <p className="text-[11px] text-[#E8C477]">
                        Handcrafted detailing & tailored architectural timber
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-[#A437B8]/25 text-white rounded border border-[#A437B8]/40 shrink-0">
                      Edinburgh
                    </span>
                  </div>

                </div>
              </div>

              {/* Decorative subtle corner accent */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#E8C477]/40 rounded-tr-xl pointer-events-none hidden sm:block"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#A437B8]/40 rounded-bl-xl pointer-events-none hidden sm:block"
                aria-hidden="true"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
