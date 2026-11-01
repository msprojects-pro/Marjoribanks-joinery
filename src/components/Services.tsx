import React from 'react';
import {
  Compass,
  Hammer,
  DoorClosed,
  CookingPot,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services: ServiceItem[] = [
    {
      id: 'bespoke-joinery',
      title: 'Bespoke Joinery',
      description:
        'Architectural timber installations tailored precisely to your property’s structural contours, character, and individual style.',
      features: [
        'Made-to-measure timber solutions',
        'Traditional & contemporary styles',
        'Precision architectural detailing',
      ],
      icon: Compass,
      tag: 'Tailored Craft',
    },
    {
      id: 'carpentry',
      title: 'Carpentry',
      description:
        'All aspects of interior carpentry from internal doors and skirtings to structural floor timbering and fine architectural mouldings.',
      features: [
        'Internal doors, linings & frames',
        'Skirtings, architraves & mouldings',
        'Solid structural woodwork',
      ],
      icon: Hammer,
      tag: 'Essential Carpentry',
    },
    {
      id: 'fitted-storage',
      title: 'Fitted Storage & Wardrobes',
      description:
        'Floor-to-ceiling wardrobes, bespoke alcove units, and integrated media cabinetry engineered to maximise every inch of living space.',
      features: [
        'Seamless floor-to-ceiling wardrobes',
        'Victorian alcoves & chimney-breast storage',
        'Custom interior drawer configurations',
      ],
      icon: DoorClosed,
      tag: 'Space Maximisation',
    },
    {
      id: 'kitchen-joinery',
      title: 'Kitchen Joinery',
      description:
        'Handcrafted kitchen cabinetry, architectural island detailing, tailored larder units, and precise worktop fitting for high-end homes.',
      features: [
        'Custom cabinetry & solid fronts',
        'Tailored islands & fluted panels',
        'Integrated pantry & larder storage',
      ],
      icon: CookingPot,
      tag: 'Heart of the Home',
    },
    {
      id: 'interior-woodwork',
      title: 'Interior Woodwork',
      description:
        'Decorative wall panelling, bespoke timber slat walls, custom radiator enclosures, and refined timber finishes that elevate your rooms.',
      features: [
        'Wainscoting & shaker wall panelling',
        'Modern acoustic & aesthetic slat walls',
        'Tailored radiator covers & casings',
      ],
      icon: Layers,
      tag: 'Feature Details',
    },
    {
      id: 'custom-projects',
      title: 'Custom Woodworking Projects',
      description:
        'One-off timber commissions, bespoke study nooks, freestanding timber dining pieces, and specialised architectural woodwork.',
      features: [
        'Bespoke home office & study desks',
        'Unique architectural timber elements',
        'Hand-selected hardwoods & softwoods',
      ],
      icon: Sparkles,
      tag: 'Unique Commissions',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F4F7] text-[#1C1B22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#A437B8] uppercase mb-3">
            <span>Our Joinery Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1B22] mb-4 font-serif">
            Joinery Tailored to Your Home
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Quality workmanship and carefully considered solutions for your space.
          </p>
        </div>

        {/* Sophisticated Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 border border-black/[0.06] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7B2CBF] via-[#A437B8] to-[#E8C477] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#A437B8]/10 text-[#A437B8] flex items-center justify-center group-hover:bg-[#A437B8] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 font-sans">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1C1B22] mb-3 group-hover:text-[#7B2CBF] transition-colors font-serif">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Feature points */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A437B8] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    type="button"
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-[#1C1B22] bg-slate-50 group-hover:bg-[#A437B8]/10 group-hover:text-[#A437B8] rounded-lg transition-colors border border-black/[0.04]"
                  >
                    <span>Enquire about this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear illustrative statement per prompt instructions */}
        <div className="text-center">
          <p className="text-xs text-slate-500 max-w-2xl mx-auto italic">
            Note: These categories represent illustrative examples of joinery and carpentry capabilities. Each project is quoted and undertaken to the specific requirements of your home or premises.
          </p>
        </div>

      </div>
    </section>
  );
};
