import React, { useEffect, useState } from 'react';
import { ChevronDown, MapPin, Menu, Phone, X } from 'lucide-react';
import {
  ADDRESS_TEXT,
  HOTLINE_PRIMARY,
  HOTLINE_PRIMARY_TEL,
  HOTLINE_SECONDARY,
  HOTLINE_SECONDARY_TEL,
  MEGA_MENU_COLUMNS,
} from '../data/garageData';
import { BrandLogo } from './BrandMotifs';

export const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 38);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setMegaOpen(false);
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* 0) TOP BAR — height 38, bg #02060F, border-bottom 1px #12306B */}
      <div className="hidden md:block h-[38px] bg-[#02060F] border-b border-[#12306B]">
        <div className="container-gkp h-full flex items-center justify-between text-[13px] lg:text-[14px]">
          <div className="flex items-center gap-6 lg:gap-[36px] min-w-0">
            <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
              <Phone className="w-4 h-4 text-[#3AA0FF]" strokeWidth={2} aria-hidden="true" />
              <span className="font-bold text-white tabular-nums">
                <a href={HOTLINE_PRIMARY_TEL} className="hover:text-[#7CC0FF] transition-colors">
                  {HOTLINE_PRIMARY}
                </a>
                <span className="mx-1.5 text-[#5B6B88]">-</span>
                <a href={HOTLINE_SECONDARY_TEL} className="hover:text-[#7CC0FF] transition-colors">
                  {HOTLINE_SECONDARY}
                </a>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-[#C8D6F0] truncate">
              <MapPin className="w-4 h-4 text-[#3AA0FF] shrink-0" strokeWidth={2} aria-hidden="true" />
              <span className="truncate">{ADDRESS_TEXT}</span>
            </div>
          </div>

          <a
            href="#cuu-ho"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#cuu-ho');
            }}
            className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[1px] text-white uppercase whitespace-nowrap shrink-0 hover:text-[#7CC0FF] transition-colors"
          >
            <span
              className="w-2 h-2 rounded-full bg-[#E3262E] shadow-[0_0_10px_3px_rgba(227,38,46,0.75)]"
              aria-hidden="true"
            />
            <span>CỨU HỘ LƯU ĐỘNG 24/7</span>
          </a>
        </div>
      </div>

      {/* 1) NAVIGATION — height 95, sticky on scroll */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'h-[72px] bg-[#040B1D]/90 backdrop-blur-md shadow-[0_8px_28px_rgba(2,6,15,0.65)]'
            : 'h-[72px] md:h-[95px] bg-gradient-to-b from-[#050E24] to-[#02060F]'
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="container-gkp h-full flex items-center justify-between gap-4">
          {/* Logo left */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-[#1E8CFF] rounded"
            aria-label="Trang chủ Garage Gia Khánh Performance"
          >
            <BrandLogo
              heightClass={
                isScrolled
                  ? 'h-[52px] md:h-[60px] transition-all duration-200'
                  : 'h-[56px] md:h-[80px] transition-all duration-200'
              }
            />
          </a>

          {/* Desktop 5-item centered menu */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-[58px]" aria-label="Menu chính">
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
            >
              <button
                type="button"
                onClick={() => {
                  setMegaOpen((prev) => !prev);
                }}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className="relative inline-flex items-center gap-1.5 py-2 text-[13px] lg:text-[14.5px] font-semibold uppercase tracking-[1.2px] lg:tracking-[1.6px] text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E8CFF]"
              >
                <span>DỊCH VỤ</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#1E8CFF] transition-transform duration-200 ${
                    megaOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2.5}
                />
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E8CFF]" />
              </button>
            </div>

            <a
              href="#du-an"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#du-an');
              }}
              className="py-2 text-[13px] lg:text-[14.5px] font-semibold uppercase tracking-[1.2px] lg:tracking-[1.6px] text-[#CFDBF2] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              DỰ ÁN
            </a>
            <a
              href="#cuu-ho"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#cuu-ho');
              }}
              className="py-2 text-[13px] lg:text-[14.5px] font-semibold uppercase tracking-[1.2px] lg:tracking-[1.6px] text-[#CFDBF2] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              CỨU HỘ
            </a>
            <a
              href="#tin-tuc"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#tin-tuc');
              }}
              className="py-2 text-[13px] lg:text-[14.5px] font-semibold uppercase tracking-[1.2px] lg:tracking-[1.6px] text-[#CFDBF2] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#lien-he');
              }}
              className="py-2 text-[13px] lg:text-[14.5px] font-semibold uppercase tracking-[1.2px] lg:tracking-[1.6px] text-[#CFDBF2] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Desktop Right Red Pill CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href={HOTLINE_PRIMARY_TEL}
              className="btn-gkp-red inline-flex items-center justify-center gap-2 h-[42px] lg:h-[46px] px-4 lg:px-6 rounded-[30px] text-[14px] lg:text-[15.5px] font-bold text-white tracking-[0.5px] whitespace-nowrap shrink-0 tabular-nums"
              aria-label={`Gọi ngay ${HOTLINE_PRIMARY}`}
            >
              <Phone className="w-4 h-4 fill-white/15" strokeWidth={2} />
              <span>{HOTLINE_PRIMARY}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Call Icon + Hamburger */}
          <div className="flex md:hidden items-center gap-2.5 shrink-0">
            <a
              href={HOTLINE_PRIMARY_TEL}
              className="btn-gkp-red inline-flex items-center justify-center w-11 h-11 rounded-full text-white"
              aria-label={`Gọi hotline ${HOTLINE_PRIMARY}`}
            >
              <Phone className="w-5 h-5" strokeWidth={2} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={mobileMenuOpen}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 1px bottom line gradient transparent -> #1E8CFF -> transparent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #1E8CFF 50%, transparent 100%)',
          }}
        />

        {/* DỊCH VỤ 4-column Mega-Menu */}
        {megaOpen && (
          <div
            className="hidden md:block absolute left-0 right-0 top-full bg-[#040A18]/98 backdrop-blur-xl border-b border-[#1E8CFF]/40 shadow-[0_24px_50px_rgba(2,6,15,0.85)]"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="container-gkp py-8 grid grid-cols-4 gap-8">
              {MEGA_MENU_COLUMNS.map((col) => (
                <div key={col.title} className="space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#12306B]">
                    <span className="w-1 h-4 -skew-x-[22deg] bg-[#1E8CFF]" aria-hidden="true" />
                    <h3 className="text-[14px] font-bold uppercase tracking-[1px] text-white">
                      {col.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        {item.isPhone ? (
                          <a
                            href={item.href}
                            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#FF6A70] hover:text-white transition-colors tabular-nums"
                          >
                            <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                            <span>{item.label}</span>
                          </a>
                        ) : (
                          <a
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.href);
                            }}
                            className="block text-[14px] text-[#C8D6F0] hover:text-[#7CC0FF] hover:translate-x-1 transition-all"
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[#040A18]/98 backdrop-blur-xl border-b border-[#12306B] shadow-2xl px-4 py-6">
            <nav className="flex flex-col space-y-2" aria-label="Menu di động">
              <a
                href="#dich-vu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#dich-vu');
                }}
                className="flex items-center justify-between min-h-[44px] px-3 rounded-lg text-[15px] font-bold uppercase tracking-[1.2px] text-white bg-white/5 border border-[#1E8CFF]/40"
              >
                <span>DỊCH VỤ</span>
                <ChevronDown className="w-4 h-4 text-[#1E8CFF]" />
              </a>
              <a
                href="#du-an"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#du-an');
                }}
                className="flex items-center min-h-[44px] px-3 rounded-lg text-[15px] font-semibold uppercase tracking-[1.2px] text-[#CFDBF2] hover:bg-white/5 hover:text-white"
              >
                DỰ ÁN
              </a>
              <a
                href="#cuu-ho"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#cuu-ho');
                }}
                className="flex items-center min-h-[44px] px-3 rounded-lg text-[15px] font-semibold uppercase tracking-[1.2px] text-[#CFDBF2] hover:bg-white/5 hover:text-white"
              >
                CỨU HỘ
              </a>
              <a
                href="#tin-tuc"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#tin-tuc');
                }}
                className="flex items-center min-h-[44px] px-3 rounded-lg text-[15px] font-semibold uppercase tracking-[1.2px] text-[#CFDBF2] hover:bg-white/5 hover:text-white"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#lien-he');
                }}
                className="flex items-center min-h-[44px] px-3 rounded-lg text-[15px] font-semibold uppercase tracking-[1.2px] text-[#CFDBF2] hover:bg-white/5 hover:text-white"
              >
                LIÊN HỆ
              </a>

              <div className="pt-3 border-t border-[#12306B]">
                <a
                  href={HOTLINE_PRIMARY_TEL}
                  className="btn-gkp-red w-full h-[48px] rounded-[30px] inline-flex items-center justify-center gap-2.5 text-[16px] font-bold text-white uppercase tracking-wide tabular-nums"
                >
                  <Phone className="w-5 h-5" strokeWidth={2} />
                  <span>GỌI NGAY {HOTLINE_PRIMARY}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
