import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, X } from 'lucide-react';
import {
  HOTLINE_PRIMARY,
  HOTLINE_PRIMARY_TEL,
  PRODUCTS_LIST,
  ProductItem,
} from '../data/garageData';
import { GkpImage, Reveal, SectionHeader } from './BrandMotifs';
import { GARAGE_IMAGES } from '../assets/images';
import { PARTNER_BRANDS } from './PartnerLogos';

export const RescueBrandsProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleRescueClick = () => {
    const contactEl = document.getElementById('lien-he');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 5) RESCUE BANNER — height 470 desktop */}
      <section
        id="cuu-ho"
        className="relative min-h-[420px] lg:h-[470px] overflow-hidden flex items-center bg-diagonal-stripes"
        style={{
          background:
            'linear-gradient(100deg, #030C22 0%, #061A47 40%, #0B3A8F 100%)',
        }}
      >
        {/* Subtle diagonal stripe texture overlay */}
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" aria-hidden="true" />

        {/* 2 px top divider gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #1E8CFF 35%, #E3262E 68%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Right Tow Truck Photo anchored right with left-edge fade mask */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[54%] xl:w-[914px] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              WebkitMaskImage:
                'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.92) 38%, rgba(0,0,0,1) 100%)',
              maskImage:
                'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.92) 38%, rgba(0,0,0,1) 100%)',
            }}
          >
            <GkpImage
              src={GARAGE_IMAGES.rescueTowTruck}
              alt="Xe cứu hộ sàn trượt chuyên dụng vận chuyển mọi dòng xe 24/7"
              loading="lazy"
              className="w-full h-full object-cover opacity-35 lg:opacity-95"
            />
          </div>
          {/* Mobile dark contrast scrim */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                'linear-gradient(90deg, rgba(3,12,34,0.92) 0%, rgba(6,26,71,0.75) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        <div className="container-gkp relative z-10 py-12 lg:py-0">
          <Reveal className="lg:pl-[52px] max-w-[680px]">
            <h2 className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1 leading-none">
              <span className="text-[32px] sm:text-[42px] lg:text-[56px] font-black uppercase text-white tracking-[0.5px]">
                CỨU HỘ LƯU ĐỘNG
              </span>
              <span className="text-[40px] sm:text-[52px] lg:text-[68px] font-black italic text-red-gradient leading-none">
                24/7
              </span>
            </h2>

            {/* 96x4 gradient bar */}
            <div
              className="mt-4 w-[96px] h-[4px]"
              style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
              aria-hidden="true"
            />

            <p className="mt-4 max-w-[520px] text-[16px] md:text-[20px] leading-[1.6] text-[#D3E0F6]">
              Hỗ trợ kiểm tra, xử lý sự cố và tư vấn kỹ thuật khi xe gặp vấn đề trên đường.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={handleRescueClick}
                className="btn-gkp-red h-[52px] md:h-[54px] px-[30px] rounded-[10px] inline-flex items-center justify-center gap-2 text-[15px] md:text-[16px] font-bold uppercase tracking-[0.5px] text-white cursor-pointer whitespace-nowrap"
              >
                <span>LIÊN HỆ CỨU HỘ</span>
                <span className="text-lg leading-none" aria-hidden="true">›</span>
              </button>

              <a
                href={HOTLINE_PRIMARY_TEL}
                className="btn-gkp-outline h-[52px] md:h-[54px] px-[28px] rounded-[10px] inline-flex items-center justify-center gap-2.5 text-[15px] md:text-[16px] font-bold uppercase tracking-[0.5px] text-white whitespace-nowrap tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#3AA0FF]" strokeWidth={2.2} />
                <span>{HOTLINE_PRIMARY}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6) BRANDS & PARTNERS — height 378, auto-scrolling carousel (6 cards visible on desktop) */}
      <section
        aria-label="Thương hiệu xe và đối tác"
        className="py-14 md:py-16 lg:py-[58px]"
        style={{
          background: 'linear-gradient(180deg, #EEF2F9 0%, #F6F8FC 100%)',
        }}
      >
        <div className="container-gkp">
          <Reveal>
            <SectionHeader title="THƯƠNG HIỆU XE & ĐỐI TÁC" />
          </Reveal>

          {/* Auto-scrolling carousel inside 1398px container (6 cards visible on desktop: 6*216 + 5*20 = 1396px) */}
          <div className="mt-9 brands-marquee-wrapper overflow-hidden py-2">
            <div className="animate-brands-marquee gap-[16px] lg:gap-[20px]">
              {[0, 1].map((dupIdx) => (
                <div
                  key={dupIdx}
                  className="flex items-center gap-[16px] lg:gap-[20px] shrink-0"
                  aria-hidden={dupIdx === 1}
                >
                  {PARTNER_BRANDS.map((brand) => (
                    <div
                      key={`${dupIdx}-${brand.id}`}
                      className="group w-[164px] sm:w-[196px] lg:w-[216px] h-[108px] sm:h-[132px] shrink-0 bg-white rounded-[12px] border border-[#DCE4F2] shadow-[0_6px_18px_rgba(10,26,58,0.05)] flex items-center justify-center p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(11,91,224,0.12)]"
                      title={brand.name}
                    >
                      <div className="grayscale contrast-[1.15] opacity-[0.88] transition-all duration-200 group-hover:grayscale-[0.25] group-hover:opacity-100 scale-90 sm:scale-100">
                        {brand.renderLogo()}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7) PRODUCTS — height 656, white */}
      <section id="san-pham" className="py-14 md:py-16 lg:py-[62px] bg-white">
        <div className="container-gkp">
          <Reveal>
            <SectionHeader title="SẢN PHẨM & GIẢI PHÁP NÂNG CẤP XE" />
          </Reveal>

          {/* Desktop 4 cols, Tablet 2 cols, Mobile horizontal scroll-snap */}
          <div className="mt-10 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {PRODUCTS_LIST.map((product, idx) => (
              <Reveal
                key={product.id}
                delayMs={idx * 65}
                className="w-[78vw] sm:w-[300px] md:w-auto shrink-0 snap-start"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="group relative w-full h-[414px] bg-white rounded-[12px] border border-[#DCE4F2] shadow-[0_8px_22px_rgba(10,26,58,0.06)] overflow-hidden flex flex-col text-left cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(10,26,58,0.12)] focus-visible:outline-2 focus-visible:outline-[#1E8CFF]"
                >
                  {/* Top 300px product image area */}
                  <div
                    className="h-[300px] w-full flex items-center justify-center p-6 overflow-hidden"
                    style={{
                      background: 'radial-gradient(circle, #FFFFFF 0%, #E9F0FB 100%)',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Info */}
                  <div className="flex-1 px-6 py-4 flex flex-col justify-center">
                    <h3 className="text-[17px] font-extrabold uppercase text-[#0A1A3A] tracking-[0.3px]">
                      {product.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-[#0B5BE0] group-hover:translate-x-1 transition-transform">
                      <span>Xem chi tiết</span>
                      <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                    </span>
                  </div>

                  {/* 4 px bottom gradient line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[4px]"
                    style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
                    aria-hidden="true"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <div
            className="relative w-full max-w-xl rounded-xl bg-white border border-[#DCE4F2] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Đóng chi tiết sản phẩm"
              className="absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full bg-[#0A1A3A]/10 flex items-center justify-center text-[#0A1A3A] hover:bg-[#E3262E] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="h-60 w-full flex items-center justify-center p-6"
              style={{ background: 'radial-gradient(circle, #FFFFFF 0%, #E9F0FB 100%)' }}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.alt}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="p-6">
              <span className="text-[12.5px] font-bold uppercase tracking-[1.2px] text-[#0B5BE0]">
                {selectedProduct.category}
              </span>
              <h3 id="product-modal-title" className="mt-1 text-[22px] font-extrabold uppercase text-[#0A1A3A]">
                {selectedProduct.name}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[#5B6B88]">
                {selectedProduct.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {selectedProduct.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2.5 text-[14.5px] text-[#1B2A47]">
                    <CheckCircle2 className="w-4 h-4 text-[#0B5BE0] shrink-0 mt-1" strokeWidth={2} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(null);
                    document.getElementById('lien-he')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-gkp-blue h-[46px] px-6 rounded-[10px] inline-flex items-center justify-center text-[14px] font-bold uppercase text-white cursor-pointer"
                >
                  NHẬN TƯ VẤN & BÁO GIÁ ›
                </button>
                <a
                  href={HOTLINE_PRIMARY_TEL}
                  className="btn-gkp-red h-[46px] px-6 rounded-[10px] inline-flex items-center justify-center gap-2 text-[14px] font-bold uppercase text-white tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>{HOTLINE_PRIMARY}</span>
                </a>
              </div>
            </div>

            <div
              className="h-[4px] w-full"
              style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
            />
          </div>
        </div>
      )}
    </>
  );
};
