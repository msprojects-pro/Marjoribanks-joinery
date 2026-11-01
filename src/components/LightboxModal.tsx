import React, { useEffect } from 'react';
import { X, Layers, Ruler, Sparkles, ArrowRight } from 'lucide-react';
import { GalleryItem } from './Gallery';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onEnquire: (serviceName: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onEnquire,
}) => {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative w-full max-w-4xl bg-[#1C1B22] rounded-2xl border border-white/15 shadow-2xl overflow-hidden z-10 text-white my-6">
        
        {/* Header Bar */}
        <div className="px-5 py-4 bg-[#0B0B0F] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#A437B8]/20 text-[#E8C477] rounded border border-[#A437B8]/30">
              {item.categoryLabel}
            </span>
            <span className="text-xs text-white/50 hidden sm:inline">• Edinburgh & Central Belt</span>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close project view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Visual */}
          <div className="lg:col-span-7 bg-black relative flex items-center justify-center aspect-[4/3] lg:aspect-auto">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover max-h-[520px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#1C1B22]">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-white/5 text-[#E8C477] flex items-center justify-center shrink-0 mt-0.5">
                    <Ruler className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block">
                      Dimensions & Profile
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      {item.dimensions}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-white/5 text-[#A437B8] flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block">
                      Materials & Hardware
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      {item.materials}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-white/5 text-[#E8C477] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block">
                      Craft Standard
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      Quality Workmanship • Reliable Service
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEnquire(item.categoryLabel);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] hover:from-[#6A24A6] hover:to-[#932EAA] rounded-lg shadow-md transition-all border border-[#E8C477]/30"
              >
                <span>Request a Quote for Similar Work</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8C477]" />
              </button>

              <p className="text-[10px] text-white/40 text-center italic">
                Illustrative example. Each commission is custom-quoted.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
