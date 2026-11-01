import React from 'react';
import { ShieldCheck, BadgePercent, Clock4, Compass, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Quality Workmanship',
      description:
        'Uncompromising focus on material selection, grain matching, accurate joints, and smooth finishing. Built to endure everyday use with lasting structural integrity.',
      icon: ShieldCheck,
      features: ['Precision-measured joinery', 'Durable, quality materials', 'Neat, refined finishes'],
    },
    {
      title: 'Competitive Prices',
      description:
        'Honest, clear quotations with no hidden costs. We provide detailed estimates so you know exactly what is included in your bespoke joinery project.',
      icon: BadgePercent,
      features: ['Free, detailed estimates', 'Transparent breakdowns', 'No hidden surcharges'],
    },
    {
      title: 'Reliable Service',
      description:
        'We value your time and property. Dependable scheduling, consistent communication, and a clean, courteous workspace maintained throughout the build.',
      icon: Clock4,
      features: ['Agreed project timelines', 'Proactive communication', 'Clean & tidy workspace'],
    },
    {
      title: 'Edinburgh & Central Belt',
      description:
        'Local joinery service operating across Edinburgh, Lothians, Fife, and the wider Central Belt. Readily available for consultations and on-site measurements.',
      icon: Compass,
      features: ['Local on-site consultations', 'Knowledge of Scottish properties', 'Flexible project visits'],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F4F7] text-[#1C1B22] border-b border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#A437B8] uppercase mb-3">
            <span>Our Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1B22] mb-4 font-serif">
            Why Choose Marjoribanks Joinery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Delivering thoughtful craftsmanship, dependable communication, and genuine value for every client.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-7 border border-black/[0.06] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#A437B8]/10 text-[#A437B8] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1C1B22] mb-3 font-serif">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {pillar.features.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A437B8] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
