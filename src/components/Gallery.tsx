import React, { useState } from 'react';
import { Eye, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { siteImages } from '../assets/images';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenQuote: (service?: string) => void;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wardrobes' | 'Kitchens' | 'Shelving' | 'Woodwork';
  categoryLabel: string;
  image: string;
  description: string;
  dimensions: string;
  materials: string;
  aspect: string;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Illustrative portfolio gallery items using our generated high-fidelity photography
  const galleryItems: GalleryItem[] = [
    {
      id: 'gallery-wardrobes',
      title: 'Floor-to-Ceiling Bespoke Wardrobes',
      category: 'Wardrobes',
      categoryLabel: 'Fitted Storage',
      image: siteImages.wardrobes,
      description:
        'Sleek contemporary full-height wardrobe system with integrated illuminated shelving niches, seamless push-latch upper units, and solid oak accent handles.',
      dimensions: 'Full ceiling height (2.7m), 6-door flush profile',
      materials: 'Matte architectural lacquer, natural European oak, concealed soft-close runners',
      aspect: 'Featured Storage',
    },
    {
      id: 'gallery-kitchen',
      title: 'Modern Handcrafted Kitchen Island & Cabinetry',
      category: 'Kitchens',
      categoryLabel: 'Kitchen Joinery',
      image: siteImages.kitchen,
      description:
        'Tailored solid oak cabinetry with precision fluted vertical island detailing, open floating timber display shelving, and bespoke larder units.',
      dimensions: 'Custom island (3.2m x 1.1m) + perimeter run',
      materials: 'Natural quarter-sawn oak, fluted timber profiles, warm brass hardware',
      aspect: 'Bespoke Kitchen',
    },
    {
      id: 'gallery-shelving',
      title: 'Integrated Alcove Library & Media Shelving',
      category: 'Shelving',
      categoryLabel: 'Custom Shelving',
      image: siteImages.shelving,
      description:
        'Architectural multi-bay alcove library unit with integrated flush LED channel illumination and low-profile base cupboards for concealed media equipment.',
      dimensions: 'Made to fit chimney breast alcove (3.4m width)',
      materials: 'Solid white oak edging, concealed cable conduits, dimmable warm 2700K LED',
      aspect: 'Living Woodwork',
    },
    {
      id: 'gallery-hero-cabinetry',
      title: 'Architectural Wall Unit & Ribbed Woodwork',
      category: 'Woodwork',
      categoryLabel: 'Bespoke Joinery',
      image: siteImages.hero,
      description:
        'Bespoke living area display cabinet featuring ribbed oak panelling, integrated niche lighting, and concealed touch-to-open lower storage cupboards.',
      dimensions: 'Floor-to-ceiling architectural installation',
      materials: 'Fumed European oak, timber acoustic battening, flush magnetic latches',
      aspect: 'Feature Wall',
    },
    {
      id: 'gallery-workshop-craft',
      title: 'Precision Timber Bench Craftsmanship',
      category: 'Woodwork',
      categoryLabel: 'Interior Woodwork',
      image: siteImages.about,
      description:
        'Demonstration of traditional joinery bench craft: hand-cut dovetail joints, mortise and tenon assemblies, and precise hand-planed timber surfaces.',
      dimensions: 'Custom commission specifications',
      materials: 'Seasoned hardwood, traditional hide/PVA jointing, hand-rubbed hardwax oils',
      aspect: 'Workshop Bench',
    },
  ];

  const categories = ['All', 'Wardrobes', 'Kitchens', 'Shelving', 'Woodwork'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contact = document.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0B0B0F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#E8C477] uppercase mb-3">
            <span>Portfolio & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-serif">
            Made With Care. Built to Last.
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Explore examples of bespoke fitted wardrobes, modern kitchens, custom shelving, and detailed interior joinery.
          </p>
        </div>

        {/* Filter Tabs (Interactive filter controls per design constitution) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] text-white shadow-md shadow-[#7B2CBF]/40 border border-[#E8C477]/30'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group bg-[#1C1B22] rounded-xl overflow-hidden border border-white/10 hover:border-[#A437B8]/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with Consistent Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity"
                  aria-hidden="true"
                />

                {/* Floating Category Pill in Image (Subtle tag) */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 bg-[#0B0B0F]/80 backdrop-blur-md text-[#E8C477] rounded border border-[#E8C477]/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Quick View Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#A437B8]/90 text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#E8C477] transition-colors font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <Layers className="w-3.5 h-3.5 text-[#A437B8]" />
                    <span>Click to view details</span>
                  </span>
                  <span className="text-[#E8C477] group-hover:translate-x-0.5 transition-transform">
                    Inspect →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrative Notice per Prompt Requirements */}
        <div className="text-center mb-12">
          <p className="text-xs text-white/50 max-w-xl mx-auto italic">
            Illustrative portfolio representation of joinery styles, materials, and bespoke craftsmanship capabilities. Every commission is custom-designed and built to exact dimensions.
          </p>
        </div>

        {/* CTA below Gallery per prompt */}
        <div className="text-center pt-4">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] border border-white/10 max-w-2xl mx-auto w-full">
            <div className="text-left sm:text-left flex-1">
              <h4 className="text-lg font-bold text-white font-serif mb-1">
                Have a bespoke project in mind?
              </h4>
              <p className="text-xs text-white/70">
                Discuss custom dimensions, timber choices, and request a no-obligation quote.
              </p>
            </div>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] hover:from-[#6A24A6] hover:to-[#932EAA] rounded-lg shadow-md transition-all active:scale-95 border border-[#E8C477]/30 whitespace-nowrap shrink-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8C477]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
