import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.3em]',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Simple, refined 'M' text emblem */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-lg p-[1.5px] bg-gradient-to-tr from-[#7B2CBF] via-[#A437B8] to-[#E8C477] shadow-sm`}
      >
        <div className="w-full h-full bg-[#0B0B0F] rounded-[6px] flex items-center justify-center">
          <span
            className={`font-serif font-bold text-[#E8C477] select-none ${
              size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-lg'
            }`}
          >
            M
          </span>
        </div>
      </div>

      {/* Brand typography: Warm gold lettering + crisp white */}
      <div className="flex flex-col select-none">
        <span
          className={`font-serif tracking-wide font-bold text-[#E8C477] uppercase leading-tight ${titleSizes[size]}`}
          style={{ letterSpacing: '0.04em' }}
        >
          Marjoribanks
        </span>
        {showTagline && (
          <span
            className={`font-sans font-medium text-white/90 uppercase ${subSizes[size]}`}
          >
            Joinery
          </span>
        )}
      </div>
    </div>
  );
};
