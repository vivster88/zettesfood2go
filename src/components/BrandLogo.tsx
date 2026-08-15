import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'light';
}

export default function BrandLogo({ className = '', size = 'md', variant = 'full' }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const isLight = variant === 'light';

  return (
    <div className={`relative inline-flex items-center gap-3 ${className}`}>
      {/* Circular Emblem Vector */}
      <div className={`relative flex-shrink-0 ${sizeClasses[size]} transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring */}
          <circle cx="100" cy="100" r="96" stroke={isLight ? "#FFFFFF" : "#5B2A86"} strokeWidth="4" />
          <circle cx="100" cy="100" r="90" fill={isLight ? "rgba(255,255,255,0.08)" : "#FFF9F5"} stroke="#D71920" strokeWidth="2" strokeDasharray="4 2" />

          {/* Inner Brand Circle */}
          <circle cx="100" cy="100" r="76" fill={isLight ? "#32124F" : "#5B2A86"} />

          {/* Decorative Stars / Dots */}
          <circle cx="42" cy="100" r="3.5" fill="#D71920" />
          <circle cx="158" cy="100" r="3.5" fill="#D71920" />

          {/* Center Brand Iconography: Heart & Golden Sizzle / Fork Motif */}
          <path
            d="M100 68 C90 55 70 60 70 76 C70 94 100 114 100 114 C100 114 130 94 130 76 C130 60 110 55 100 68 Z"
            fill="#D71920"
            opacity="0.95"
          />
          <path
            d="M92 78 Q100 88 108 78"
            stroke="#FFF9F5"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Center Text "ZETTE'S" */}
          <text
            x="100"
            y="132"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="2"
          >
            ZETTE'S
          </text>

          {/* Subtext "FOOD 2 GO" */}
          <text
            x="100"
            y="148"
            textAnchor="middle"
            fill="#FEE2E2"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="10"
            letterSpacing="2.5"
          >
            FOOD 2 GO
          </text>

          {/* Top Arch Label: Special Longganisa */}
          <path id="textPathTop" d="M 30 100 A 70 70 0 0 1 170 100" fill="none" />
          <text fill={isLight ? "#FFFFFF" : "#5B2A86"} fontSize="9.5" fontWeight="800" letterSpacing="2.2" fontFamily="'Plus Jakarta Sans', sans-serif">
            <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
              SPECIAL LONGGANISA
            </textPath>
          </text>

          {/* Bottom Arch Label: Good Food Good Mood */}
          <path id="textPathBottom" d="M 170 100 A 70 70 0 0 1 30 100" fill="none" />
          <text fill={isLight ? "#FCA5A5" : "#D71920"} fontSize="8.5" fontWeight="700" letterSpacing="1.8" fontFamily="'Caveat', cursive, sans-serif">
            <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
              Made with Love • Packed with Flavor
            </textPath>
          </text>
        </svg>
      </div>

      {variant !== 'compact' && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-black tracking-tight text-lg leading-tight ${isLight ? 'text-white' : 'text-[#32124F]'}`}>
            ZETTE'S
          </span>
          <span className={`font-sans text-[10px] tracking-[0.25em] font-extrabold uppercase ${isLight ? 'text-red-400' : 'text-[#D71920]'}`}>
            Food 2 Go
          </span>
        </div>
      )}
    </div>
  );
}
