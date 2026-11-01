import React, { useState } from 'react';
import { ShieldCheck, Clock, BadgePoundSterling, MapPin, Check } from 'lucide-react';
import { siteImages } from '../assets/images';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const aboutImage = siteImages.about;

  const highlights = [
    {
      title: 'Quality Workmanship',
      description:
        'Every cut, rebate, and joint is made with meticulous precision, using quality timbers and proven woodworking techniques.',
      icon: ShieldCheck,
    },
    {
      title: 'Reliable Service',
      description:
        'Punctual arrivals, clear communication from consultation to completion, and clean, respectful treatment of your property.',
      icon: Clock,
    },
    {
      title: 'Competitive Prices',
      description:
        'Transparent, fair quotations tailored strictly to your project specifications, with no unexpected surprises.',
      icon: BadgePoundSterling,
    },
    {
      title: 'Edinburgh & the Central Belt',
      description:
        'Dedicated service covering Edinburgh, the Lothians, and surrounding Central Belt areas for domestic and commercial projects.',
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-[#1C1B22] border-b border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop Craft Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer border decoration with champagne gold detail */}
              <div className="relative rounded-2xl overflow-hidden p-2 bg-[#F5F4F7] border border-black/[0.06] shadow-xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src={aboutImage}
                    alt="Master joiner crafting bespoke woodwork at a traditional workbench in workshop"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0B0B0F]/90 backdrop-blur-md p-3.5 rounded-lg border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#E8C477]">
                        Dedicated Joinery Craft
                      </p>
                      <p className="text-[11px] text-white/75">
                        Focused on precision, durability & clean finishes
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#A437B8]/20 flex items-center justify-center text-[#A437B8] shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent dot pattern / line */}
              <div
                className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-[#A437B8]/30 rounded-br-2xl pointer-events-none hidden sm:block"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Narrative & 4 Highlight Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#A437B8] uppercase mb-3">
              <span>About Marjoribanks Joinery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1B22] mb-6 font-serif leading-tight">
              Craftsmanship That Makes a Difference
            </h2>

            {/* Prompt exact copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              At Marjoribanks Joinery, quality workmanship and reliable service are at the heart of every project. Serving Edinburgh and the Central Belt, the business undertakes a wide range of joinery and carpentry work, with an approach focused on your requirements and the details that matter.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F5F4F7] border border-black/[0.04] flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#A437B8]/15 text-[#A437B8] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1C1B22]">
                        {h.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Primary Action Button */}
            <div>
              <button
                onClick={onOpenQuote}
                type="button"
                className="inline-flex items-center gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B0B0F] hover:bg-[#1C1B22] rounded-lg shadow-md transition-colors active:scale-95 border border-[#E8C477]/30"
              >
                <span>Request a Free Quote</span>
                <span className="text-[#E8C477]">→</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
