import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { HERO_SLIDES, HOTLINE_PRIMARY, HOTLINE_PRIMARY_TEL } from '../data/garageData';
import { GkpImage, SkewedStripes } from './BrandMotifs';

export const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const scrollToServices = () => {
    const el = document.getElementById('dich-vu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /* 2) HERO — height 764 desktop, min 560 mobile */
    <section
      id="top"
      aria-label="Garage Gia Khánh Performance – Giới thiệu"
      className="relative w-full min-h-[560px] md:h-[640px] lg:h-[764px] bg-[#040A18] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Photo Slides */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            idx === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={idx !== activeSlide}
        >
          <GkpImage
            src={slide.image}
            alt={slide.alt}
            style={{ objectPosition: slide.objectPosition || 'center center' }}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Horizontal Scrim Overlay */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, #040A18 0%, #040A18 38%, rgba(4,10,24,0.88) 42%, rgba(4,10,24,0.35) 54%, rgba(4,10,24,0) 66%)',
        }}
        aria-hidden="true"
      />
      {/* Mobile / Tablet Scrim Overlay for guaranteed 4.5:1 contrast */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(4,10,24,0.86) 0%, rgba(4,10,24,0.72) 55%, rgba(4,10,24,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Vertical Blue Tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,74,190,0.22) 0%, rgba(11,74,190,0) 40%, rgba(4,10,24,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Faint Radial Blue Glow Behind Text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(640px 440px at 24% 48%, rgba(30,140,255,0.16) 0%, transparent 72%)',
        }}
        aria-hidden="true"
      />

      {/* Content Block aligned to 1398px container */}
      <div className="relative z-10 container-gkp h-full flex flex-col justify-center py-14 md:py-0">
        <div className="w-full max-w-[720px] text-center md:text-left">
          {/* GARAGE */}
          <p className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[60px] font-extrabold italic leading-none tracking-[2px] text-chrome">
            GARAGE
          </p>

          {/* GIA KHÁNH */}
          <h1 className="mt-1 text-[44px] sm:text-[52px] md:text-[72px] lg:text-[98px] xl:text-[112px] font-black italic leading-[1.02] tracking-[-1px] whitespace-nowrap">
            <span className="text-chrome">GIA </span>
            <span
              className="text-electric-blue"
              style={{ filter: 'drop-shadow(0 0 14px rgba(30,140,255,0.55))' }}
            >
              KHÁNH
            </span>
          </h1>

          {/* PERFORMANCE + 3 skewed stripes */}
          <div className="mt-1.5 flex items-center justify-center md:justify-start gap-4 md:gap-[22px]">
            <span className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[48px] font-extrabold italic leading-none tracking-[1.5px] text-chrome">
              PERFORMANCE
            </span>
            <SkewedStripes width={13} height={40} gap={7} className="hidden sm:inline-flex" />
            <SkewedStripes width={9} height={26} gap={5} className="inline-flex sm:hidden" />
          </div>

          {/* Tagline */}
          <p className="mt-7 md:mt-[44px] text-[14px] sm:text-[16px] lg:text-[19px] font-bold uppercase tracking-[1px] lg:tracking-[1.4px] text-white flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1">
            <span>SỬA CHỮA</span>
            <span className="text-[#1E8CFF]" aria-hidden="true">•</span>
            <span>BẢO DƯỠNG</span>
            <span className="text-[#1E8CFF]" aria-hidden="true">•</span>
            <span>NÂNG CẤP XE CAO CẤP</span>
          </p>

          {/* 90x3 px gradient bar */}
          <div
            className="mt-4 mx-auto md:mx-0 w-[90px] h-[3px]"
            style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
            aria-hidden="true"
          />

          {/* Description */}
          <p className="mt-4 mx-auto md:mx-0 max-w-[470px] text-[15.5px] lg:text-[18px] leading-[1.7] text-[#C5D3EC]">
            Chuyên tất cả các dòng xe từ xe Châu Á đến xe Châu Âu.
          </p>

          {/* Dual CTAs */}
          <div className="mt-7 md:mt-[34px] flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5 sm:gap-[18px]">
            <button
              type="button"
              onClick={scrollToServices}
              className="btn-gkp-blue w-full sm:w-auto h-[50px] md:h-[54px] px-[30px] rounded-[10px] inline-flex items-center justify-center gap-2 text-[15px] md:text-[16px] font-bold uppercase tracking-[0.5px] text-white cursor-pointer whitespace-nowrap"
            >
              <span>KHÁM PHÁ DỊCH VỤ</span>
              <span className="text-lg leading-none" aria-hidden="true">›</span>
            </button>

            <a
              href={HOTLINE_PRIMARY_TEL}
              className="btn-gkp-outline w-full sm:w-auto h-[50px] md:h-[54px] px-[28px] rounded-[10px] inline-flex items-center justify-center gap-2.5 text-[15px] md:text-[16px] font-bold uppercase tracking-[0.5px] text-white whitespace-nowrap tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#3AA0FF]" strokeWidth={2.2} />
              <span>GỌI NGAY {HOTLINE_PRIMARY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"
        role="tablist"
        aria-label="Chọn ảnh trình chiếu"
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ảnh trình chiếu ${idx + 1}`}
              onClick={() => setActiveSlide(idx)}
              className={`h-[8px] rounded-full transition-all duration-300 cursor-pointer ${
                isActive ? 'w-[26px] bg-[#1E8CFF]' : 'w-[8px] bg-white/50 hover:bg-white/80'
              }`}
            />
          );
        })}
      </div>

      {/* Bottom 4 px gradient bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[4px] z-20 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0B2A66 0%, #1E8CFF 50%, #E3262E 100%)' }}
        aria-hidden="true"
      />
    </section>
  );
};
