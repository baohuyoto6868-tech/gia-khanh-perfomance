import React from 'react';

interface PartnerBrand {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center gap-2">
        <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="27" stroke="#1B2A47" strokeWidth="3.2" />
          <circle cx="32" cy="32" r="24" stroke="#5B6B88" strokeWidth="1" />
          <path
            d="M32 6L35.5 29.5L55 45L32 35.5L9 45L28.5 29.5L32 6Z"
            fill="#1B2A47"
          />
        </svg>
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#1B2A47]">
          MERCEDES-BENZ
        </span>
      </div>
    ),
  },
  {
    id: 'bmw',
    name: 'BMW',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center gap-2">
        <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="27" fill="#1B2A47" />
          <circle cx="32" cy="32" r="18.5" fill="#FFFFFF" stroke="#8C99B0" strokeWidth="1.5" />
          <path d="M32 13.5A18.5 18.5 0 0 0 13.5 32H32V13.5Z" fill="#0B5BE0" className="brand-accent-fill" />
          <path d="M32 50.5A18.5 18.5 0 0 0 50.5 32H32V50.5Z" fill="#0B5BE0" className="brand-accent-fill" />
          <text
            x="32"
            y="11"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="6.5"
            fontWeight="800"
            fontFamily="Inter, sans-serif"
            letterSpacing="1.5"
          >
            BMW
          </text>
        </svg>
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#1B2A47]">
          BMW
        </span>
      </div>
    ),
  },
  {
    id: 'audi',
    name: 'Audi',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center gap-2">
        <svg viewBox="0 0 116 44" className="w-24 h-10" fill="none" aria-hidden="true">
          <circle cx="23" cy="22" r="14" stroke="#1B2A47" strokeWidth="3.2" />
          <circle cx="46" cy="22" r="14" stroke="#1B2A47" strokeWidth="3.2" />
          <circle cx="69" cy="22" r="14" stroke="#1B2A47" strokeWidth="3.2" />
          <circle cx="92" cy="22" r="14" stroke="#1B2A47" strokeWidth="3.2" />
        </svg>
        <span className="text-[11px] font-bold tracking-[2.4px] uppercase text-[#1B2A47]">
          AUDI
        </span>
      </div>
    ),
  },
  {
    id: 'land-rover',
    name: 'Land Rover',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center gap-2">
        <svg viewBox="0 0 120 60" className="w-28 h-12" fill="none" aria-hidden="true">
          <ellipse cx="60" cy="30" rx="52" ry="23" fill="#0E5A38" className="brand-accent-fill" stroke="#1B2A47" strokeWidth="2.5" />
          <ellipse cx="60" cy="30" rx="47" ry="18.5" stroke="#D5DBE5" strokeWidth="1.2" />
          <text
            x="60"
            y="28"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="900"
            fontFamily="Inter, sans-serif"
            letterSpacing="1.8"
          >
            LAND
          </text>
          <text
            x="60"
            y="41"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="900"
            fontFamily="Inter, sans-serif"
            letterSpacing="1.8"
          >
            ROVER
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: 'mini',
    name: 'MINI',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center gap-1.5">
        <svg viewBox="0 0 140 54" className="w-32 h-12" fill="none" aria-hidden="true">
          <path d="M8 19H46L41 24H12L8 19ZM14 26H43L40 30H18L14 26ZM21 32H44L42 36H25L21 32Z" fill="#1B2A47" />
          <path d="M132 19H94L99 24H128L132 19ZM126 26H97L100 30H122L126 26ZM119 32H96L98 36H115L119 32Z" fill="#1B2A47" />
          <circle cx="70" cy="27" r="18" fill="#1B2A47" />
          <circle cx="70" cy="27" r="14.5" stroke="#FFFFFF" strokeWidth="1.5" />
          <text
            x="70"
            y="30.5"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="900"
            fontFamily="Inter, sans-serif"
            letterSpacing="1.2"
          >
            MINI
          </text>
        </svg>
        <span className="text-[11px] font-bold tracking-[2.4px] uppercase text-[#1B2A47]">
          MINI
        </span>
      </div>
    ),
  },
  {
    id: 'porsche',
    name: 'Porsche',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center gap-1.5">
        <svg viewBox="0 0 64 70" className="w-11 h-12" fill="none" aria-hidden="true">
          <path
            d="M12 10H52V38C52 52 32 62 32 62C32 62 12 52 12 38V10Z"
            fill="#C99A2E"
            stroke="#1B2A47"
            strokeWidth="2.6"
          />
          <rect x="16" y="14" width="32" height="7" fill="#1B2A47" />
          <rect x="17" y="24" width="14" height="14" fill="#E3262E" />
          <rect x="33" y="24" width="14" height="14" fill="#1B2A47" />
          <rect x="17" y="40" width="14" height="11" fill="#1B2A47" />
          <rect x="33" y="40" width="14" height="11" fill="#E3262E" />
        </svg>
        <span className="text-[11px] font-bold tracking-[2.2px] uppercase text-[#1B2A47]">
          PORSCHE
        </span>
      </div>
    ),
  },
];
