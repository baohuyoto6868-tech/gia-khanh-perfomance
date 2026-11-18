import React, { useEffect, useRef, useState } from 'react';
import { CarFront } from 'lucide-react';

interface SkewedStripesProps {
  width?: number;
  height?: number;
  gap?: number;
  className?: string;
}

export const SkewedStripes: React.FC<SkewedStripesProps> = ({
  width = 13,
  height = 40,
  gap = 7,
  className = '',
}) => (
  <span
    className={`inline-flex items-center shrink-0 ${className}`}
    style={{ gap: `${gap}px` }}
    aria-hidden="true"
  >
    <span
      className="block -skew-x-[22deg]"
      style={{ width: `${width}px`, height: `${height}px`, backgroundColor: '#12307A' }}
    />
    <span
      className="block -skew-x-[22deg]"
      style={{ width: `${width}px`, height: `${height}px`, backgroundColor: '#1E8CFF' }}
    />
    <span
      className="block -skew-x-[22deg]"
      style={{ width: `${width}px`, height: `${height}px`, backgroundColor: '#E3262E' }}
    />
  </span>
);

interface BrandLogoProps {
  heightClass?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  heightClass = 'h-[72px] md:h-[80px]',
  className = '',
}) => (
  <div
    className={`inline-flex items-center select-none bg-black px-2 py-1 mix-blend-screen ${heightClass} ${className}`}
    aria-label="Garage Gia Khánh Performance"
  >
    <svg
      viewBox="0 0 360 110"
      className="h-full w-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Garage Gia Khánh Performance"
    >
      <defs>
        <linearGradient id="logoChrome" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="52%" stopColor="#9AA6BA" />
          <stop offset="100%" stopColor="#E8ECF3" />
        </linearGradient>
        <linearGradient id="logoBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5DB6FF" />
          <stop offset="100%" stopColor="#0B5BE0" />
        </linearGradient>
        <linearGradient id="logoBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E8CFF" />
          <stop offset="100%" stopColor="#E3262E" />
        </linearGradient>
      </defs>

      {/* Stylized Automotive Speed Silhouette */}
      <path
        d="M26 26C78 10 170 6 254 19L234 25C166 15 86 18 32 31L26 26Z"
        fill="url(#logoChrome)"
        opacity="0.9"
      />

      {/* GARAGE */}
      <text
        x="22"
        y="41"
        fill="url(#logoChrome)"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="800"
        fontStyle="italic"
        letterSpacing="3.5"
      >
        GARAGE
      </text>

      {/* GIA KHÁNH */}
      <text
        x="16"
        y="76"
        fontFamily="Inter, sans-serif"
        fontSize="39"
        fontWeight="900"
        fontStyle="italic"
        letterSpacing="-0.5"
      >
        <tspan fill="url(#logoChrome)">GIA </tspan>
        <tspan fill="url(#logoBlue)">KHÁNH</tspan>
      </text>

      {/* PERFORMANCE + Three Skewed Stripes */}
      <text
        x="18"
        y="99"
        fill="url(#logoChrome)"
        fontFamily="Inter, sans-serif"
        fontSize="17.5"
        fontWeight="800"
        fontStyle="italic"
        letterSpacing="2.2"
      >
        PERFORMANCE
      </text>

      {/* Three Skewed Stripes under/beside PERFORMANCE */}
      <g transform="translate(212, 83) skewX(-22)">
        <rect x="0" y="0" width="9" height="18" fill="#12307A" />
        <rect x="13" y="0" width="9" height="18" fill="#1E8CFF" />
        <rect x="26" y="0" width="9" height="18" fill="#E3262E" />
      </g>

      {/* Subtle bottom accent line */}
      <rect x="18" y="105" width="248" height="2.2" fill="url(#logoBar)" opacity="0.85" />
    </svg>
  </div>
);

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle = 'Chuyên sửa chữa, bảo dưỡng, nâng cấp và độ làm đẹp ô tô – xe máy',
  dark = false,
  align = 'center',
}) => {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <h2
        className={`inline-flex items-center justify-center gap-3 md:gap-4 text-[22px] sm:text-[26px] md:text-[31px] font-bold uppercase tracking-[1.6px] md:tracking-[2.2px] leading-tight ${
          dark ? 'text-white' : 'text-[#0A1A3A]'
        }`}
      >
        {/* Left skewed bars */}
        <span className="inline-flex items-center gap-[5px] shrink-0" aria-hidden="true">
          <span className="block w-[5px] h-[20px] md:h-[24px] -skew-x-[22deg] bg-[#0B5BE0]" />
          <span className="block w-[5px] h-[20px] md:h-[24px] -skew-x-[22deg] bg-[#1E8CFF]" />
        </span>

        <span className="text-balance">{title}</span>

        {/* Right skewed bars (last bar on right is red #E3262E) */}
        <span className="inline-flex items-center gap-[5px] shrink-0" aria-hidden="true">
          <span className="block w-[5px] h-[20px] md:h-[24px] -skew-x-[22deg] bg-[#1E8CFF]" />
          <span className="block w-[5px] h-[20px] md:h-[24px] -skew-x-[22deg] bg-[#E3262E]" />
        </span>
      </h2>

      {subtitle && (
        <p
          className={`mt-2.5 text-[14px] md:text-[16px] tracking-[0.4px] max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-[#BFD0EE]' : 'text-[#5B6B88]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={`reveal-fade-up ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

interface GkpImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

export const GkpImage: React.FC<GkpImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  ...rest
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1A3A] via-[#06132E] to-[#040A18] text-[#7CC0FF] p-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <CarFront className="w-8 h-8 mb-2 opacity-70" strokeWidth={1.75} />
        <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`gkp-photo ${className}`}
      {...rest}
    />
  );
};
