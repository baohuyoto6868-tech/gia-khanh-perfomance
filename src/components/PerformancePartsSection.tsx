import React from 'react';
import { PERFORMANCE_BRANDS } from '../data/garageData';
import { Reveal } from './BrandMotifs';

export const PerformancePartsSection: React.FC = () => {
  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection =
      document.getElementById('dang-ky-nhan-tin') || document.getElementById('lien-he');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('contact-name') as HTMLInputElement | null;
      if (nameInput) {
        window.setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
      }
    }
  };

  return (
    /* NEW SECTION — THƯƠNG HIỆU SẢN PHẨM (#do-choi-xe) */
    <section
      id="do-choi-xe"
      aria-label="Thương hiệu sản phẩm"
      className="w-full bg-[#EEF2F9] py-[56px] md:py-[68px] xl:pt-[86px] xl:pb-[95px]"
    >
      <div className="w-full max-w-[1814px] mx-auto px-[16px] md:px-[32px] xl:px-[58px]">
        {/* Section Title + Subtitle */}
        <Reveal className="text-center">
          <h2 className="inline-flex items-center justify-center gap-3 md:gap-4 text-[22px] sm:text-[26px] md:text-[31px] font-bold uppercase tracking-[1.6px] md:tracking-[2.2px] leading-tight text-[#0A1A3A]">
            {/* Left ornament: #0B5BE0 + #1E8CFF */}
            <span className="inline-flex items-center gap-[4px] shrink-0" aria-hidden="true">
              <span className="block w-[5px] h-[20px] md:h-[24px] -skew-x-[22deg] bg-[#0B5BE0]" />
              <span className="block w-[5px] h-[20px] md:h-[24px] -skew-x-[22deg] bg-[#1E8CFF]" />
            </span>

            <span>THƯƠNG HIỆU SẢN PHẨM</span>

            {/* Right ornament: #1E8CFF + #E3262E */}
            <span className="inline-flex items-center gap-[4px] shrink-0" aria-hidden="true">
              <span className="block w-[5px] h-[20px] md:h-[24px] -skew-x-[22deg] bg-[#1E8CFF]" />
              <span className="block w-[5px] h-[20px] md:h-[24px] -skew-x-[22deg] bg-[#E3262E]" />
            </span>
          </h2>

          <p className="mt-2.5 text-[14px] md:text-[16px] tracking-[0.4px] text-[#5B6B88] max-w-2xl mx-auto">
            Chuyên sửa chữa, bảo dưỡng, nâng cấp và độ làm đẹp ô tô
          </p>
        </Reveal>

        {/* 6 Logo-Only Cards: ≥1200 -> 6 cols (gap 23px), 768-1199 -> 3x2, <768 -> 2x3 (gap 12px) */}
        <div className="mt-8 md:mt-10 xl:mt-[44px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-[12px] md:gap-[20px] xl:gap-[23px]">
          {PERFORMANCE_BRANDS.map((brand, idx) => (
            <Reveal key={brand.id} delayMs={idx * 80}>
              <a
                href="#dang-ky-nhan-tin"
                onClick={handleCardClick}
                aria-label={brand.ariaLabel}
                title={brand.ariaLabel}
                className={`group flex items-center justify-center w-full h-[110px] md:h-[140px] xl:h-[160px] rounded-[12px] shadow-[0_6px_18px_rgba(10,26,58,0.10)] transition-[transform,box-shadow] duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(10,26,58,0.18)] focus-visible:outline-2 focus-visible:outline-[#1E8CFF] ${
                  brand.darkCard ? 'bg-[#000000]' : 'bg-[#FFFFFF]'
                }`}
              >
                {brand.logoImage ? (
                  <img
                    src={brand.logoImage}
                    alt={brand.ariaLabel}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-[72%] max-h-[68px] md:max-h-[80px] xl:max-h-[90px] object-contain"
                  />
                ) : (
                  <div
                    className={`w-[74%] h-[58px] md:h-[74px] xl:h-[86px] rounded-[8px] flex items-center justify-center px-3 ${
                      brand.darkCard
                        ? 'bg-white/10 text-white'
                        : 'bg-[#F2F5FB] text-[#0A1A3A]'
                    }`}
                  >
                    <span className="font-extrabold uppercase tracking-[1.6px] text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] leading-none text-center select-none whitespace-nowrap">
                      {brand.name}
                    </span>
                  </div>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
