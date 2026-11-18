import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Coins, Monitor, Phone, ShieldCheck, Wrench, X } from 'lucide-react';
import { FEATURED_SERVICES, HOTLINE_PRIMARY, HOTLINE_PRIMARY_TEL, ServiceItem } from '../data/garageData';
import { GARAGE_IMAGES } from '../assets/images';
import { GkpImage, Reveal, SectionHeader } from './BrandMotifs';

const ABOUT_FEATURES = [
  {
    id: 'kt-chuyen-sau',
    title: 'Kỹ Thuật Chuyên Sâu',
    description: 'Đội ngũ chuyên xe Đức, xử lý từ lỗi nhỏ đến động cơ – hộp số.',
    Icon: Wrench,
  },
  {
    id: 'thiet-bi-hien-dai',
    title: 'Trang Thiết Bị Hiện Đại',
    description: 'Máy chẩn đoán, thiết bị coding chuyên dụng cho từng dòng xe.',
    Icon: Monitor,
  },
  {
    id: 'tu-van-minh-bach',
    title: 'Tư Vấn Minh Bạch',
    description: 'Báo giá rõ ràng trước khi thực hiện, không phát sinh ngoài ý khách.',
    Icon: ShieldCheck,
  },
  {
    id: 'chi-phi-hop-ly',
    title: 'Chi Phí Hợp Lý',
    description: 'Phụ tùng nguồn gốc rõ ràng, giá hợp lý, bảo hành minh bạch.',
    Icon: Coins,
  },
];

export const AboutAndServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookService = () => {
    setSelectedService(null);
    const contactEl = document.getElementById('lien-he');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 3) ABOUT — height 673, bg linear-gradient(180deg,#E9EFF9,#F5F8FC 60%,#fff) */}
      <section
        id="gioi-thieu"
        className="relative py-14 md:py-16 lg:py-0 lg:min-h-[673px] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #E9EFF9 0%, #F5F8FC 60%, #FFFFFF 100%)',
        }}
      >
        {/* Faint diagonal blue shape on the left */}
        <div
          className="absolute top-0 left-0 w-[44%] h-full pointer-events-none opacity-45"
          style={{
            background: 'linear-gradient(135deg, rgba(30,140,255,0.09) 0%, transparent 70%)',
            clipPath: 'polygon(0 0, 72% 0, 35% 100%, 0 100%)',
          }}
          aria-hidden="true"
        />

        <div className="container-gkp relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[40px] items-center">
            {/* Left slanted photo 692x520 with offset blue-navy frame */}
            <Reveal className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[692px] aspect-[692/520]">
                {/* Offset (-12px, +12px) frame behind photo */}
                <div
                  className="absolute -left-3 top-3 w-full h-full about-slant-clip pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #1E8CFF 0%, #0B2A66 100%)',
                  }}
                  aria-hidden="true"
                />
                {/* Main Slanted Photo */}
                <div className="relative w-full h-full about-slant-clip overflow-hidden shadow-[0_20px_44px_rgba(10,26,58,0.18)] bg-[#0A1A3A]">
                  <GkpImage
                    src={GARAGE_IMAGES.aboutMechanicHood}
                    alt="Kỹ thuật viên Garage Gia Khánh Performance kiểm tra động cơ xe sang"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Right column */}
            <Reveal delayMs={100} className="lg:col-span-6 lg:pl-4">
              {/* Eyebrow: two small skewed bars (#0B5BE0 + red) */}
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1" aria-hidden="true">
                  <span className="block w-[5px] h-[16px] -skew-x-[22deg] bg-[#0B5BE0]" />
                  <span className="block w-[5px] h-[16px] -skew-x-[22deg] bg-[#E3262E]" />
                </span>
                <span className="text-[14px] md:text-[15px] font-extrabold uppercase text-[#0B5BE0] tracking-[0.8px]">
                  GARAGE GIA KHÁNH PERFORMANCE
                </span>
              </div>

              {/* H2 */}
              <h2 className="mt-2.5 text-[26px] md:text-[32px] lg:text-[35px] font-extrabold uppercase text-[#0A1A3A] leading-[1.2] tracking-[0.5px] text-balance">
                GIẢI PHÁP CHĂM SÓC XE TOÀN DIỆN
              </h2>

              {/* P1 */}
              <p className="mt-4 text-[15.5px] leading-[1.75] text-[#1B2A47]">
                <strong className="font-bold text-[#0A1A3A]">Garage Gia Khánh Performance</strong> là đơn vị chuyên cung cấp các dịch vụ{' '}
                <strong className="font-bold text-[#0A1A3A]">sửa chữa, bảo dưỡng, nâng cấp và độ xe ô tô cao cấp</strong>, đặc biệt tập trung vào hai thương hiệu xe sang đến từ Đức:{' '}
                <strong className="font-bold text-[#0A1A3A]">BMW</strong> và{' '}
                <strong className="font-bold text-[#0A1A3A]">Mercedes-Benz</strong>.
              </p>

              {/* P2 */}
              <p className="mt-3 text-[15.5px] leading-[1.75] text-[#5B6B88]">
                Với định hướng mang đến những giải pháp chăm sóc và nâng cấp ô tô chuyên sâu, Gia Khánh Performance không chỉ chú trọng đến khả năng vận hành mà còn đề cao tính thẩm mỹ, sự an toàn và trải nghiệm lái của từng khách hàng.
              </p>

              {/* Button */}
              <div className="mt-5">
                <a
                  href="#quy-trinh"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quy-trinh')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-gkp-blue inline-flex items-center justify-center gap-2 h-[46px] px-7 rounded-[10px] text-[14.5px] font-bold uppercase tracking-[0.5px] text-white whitespace-nowrap"
                >
                  <span>KHÁM PHÁ THÊM</span>
                  <span className="text-lg leading-none" aria-hidden="true">›</span>
                </a>
              </div>

              {/* 2x2 Feature Grid */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-[34px] gap-y-[22px]">
                {ABOUT_FEATURES.map(({ id, title, description, Icon }) => (
                  <div key={id} className="flex items-start gap-4">
                    <div
                      className="w-[74px] sm:w-[84px] h-[52px] sm:h-[56px] shrink-0 -skew-x-[14deg] rounded-[6px] flex items-center justify-center shadow-[0_8px_18px_rgba(11,63,184,0.28)]"
                      style={{
                        background: 'linear-gradient(180deg, #2E9BFF 0%, #0B3FB8 100%)',
                      }}
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6 text-white skew-x-[14deg]" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[15.5px] font-extrabold text-[#0A1A3A] leading-snug">
                        {title}
                      </h3>
                      <p className="mt-1 text-[13.5px] leading-[1.55] text-[#5B6B88]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4) FEATURED SERVICES — DARK */}
      <section
        id="dich-vu"
        className="py-16 md:py-20 lg:py-[72px]"
        style={{
          background: 'radial-gradient(900px 500px at 50% 0, #0B2A66, #050B1A 60%, #030814)',
        }}
      >
        <div className="container-gkp">
          <Reveal>
            <SectionHeader title="DỊCH VỤ NỔI BẬT" dark />
          </Reveal>

          {/* 3x3 grid (2 cols tablet, 1 col mobile) */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] xl:gap-x-[30px] gap-y-[24px] xl:gap-y-[28px]">
            {FEATURED_SERVICES.map((service, idx) => (
              <Reveal key={service.id} delayMs={(idx % 3) * 70}>
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="group relative w-full h-[260px] md:h-[320px] xl:h-[350px] rounded-[4px] overflow-hidden border border-[rgba(160,190,240,0.28)] shadow-[0_18px_40px_rgba(0,0,0,0.45)] text-left cursor-pointer transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#1E8CFF]"
                >
                  <GkpImage
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    style={{ objectPosition: service.objectPosition || 'center center' }}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Bottom overlay gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(5,14,40,0.05) 40%, rgba(3,8,20,0.94) 100%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Bottom Content */}
                  <div className="absolute bottom-[3px] left-0 right-0 px-5 pb-4 pt-6 flex items-end justify-between gap-3">
                    <div>
                      <span className="block text-[13px] font-semibold tracking-[2px] text-[#7CC0FF] tabular-nums">
                        {service.index}
                      </span>
                      <h3 className="mt-1 text-[16px] md:text-[18px] font-bold uppercase tracking-[1px] text-white leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <span
                      className="w-[34px] h-[34px] shrink-0 rounded-full border border-white/60 flex items-center justify-center text-white transition-all duration-200 group-hover:bg-[#1E8CFF] group-hover:border-[#1E8CFF]"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>

                  {/* 3 px gradient line at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
                    aria-hidden="true"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="relative w-full max-w-2xl rounded-xl bg-[#050E24] border border-[rgba(160,190,240,0.28)] shadow-2xl overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Đóng chi tiết dịch vụ"
              className="absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/25 flex items-center justify-center text-white hover:bg-[#E3262E] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-56 sm:h-64 w-full relative">
              <GkpImage
                src={selectedService.image}
                alt={selectedService.alt}
                style={{ objectPosition: selectedService.objectPosition || 'center center' }}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 35%, #050E24 100%)',
                }}
              />
            </div>

            <div className="px-6 pb-6 -mt-8 relative">
              <span className="text-[13px] font-bold tracking-[2px] text-[#7CC0FF] tabular-nums">
                DỊCH VỤ {selectedService.index}
              </span>
              <h3 id="service-modal-title" className="mt-1 text-[22px] sm:text-[26px] font-extrabold uppercase">
                {selectedService.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#C8D6F0]">
                {selectedService.summary}
              </p>

              <ul className="mt-4 space-y-2.5">
                {selectedService.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#1E8CFF] shrink-0 mt-1" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleBookService}
                  className="btn-gkp-blue h-[46px] px-6 rounded-[10px] inline-flex items-center justify-center gap-2 text-[14px] font-bold uppercase text-white cursor-pointer"
                >
                  <span>ĐẶT LỊCH TƯ VẤN NGAY ›</span>
                </button>
                <a
                  href={HOTLINE_PRIMARY_TEL}
                  className="btn-gkp-red h-[46px] px-6 rounded-[10px] inline-flex items-center justify-center gap-2 text-[14px] font-bold uppercase text-white tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>GỌI {HOTLINE_PRIMARY}</span>
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
