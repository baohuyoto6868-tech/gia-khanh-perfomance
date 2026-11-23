import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  CheckSquare,
  ClipboardCheck,
  MessageSquareText,
  Phone,
  X,
} from 'lucide-react';
import { HOTLINE_PRIMARY, HOTLINE_PRIMARY_TEL, NEWS_ITEMS, NewsItem } from '../data/garageData';
import { GARAGE_IMAGES } from '../assets/images';
import { GkpImage, Reveal, SectionHeader } from './BrandMotifs';

const PROCESS_STEPS = [
  {
    step: '01',
    titleLine1: 'Tiếp nhận',
    titleLine2: '& Kiểm tra',
    description: 'Ghi nhận tình trạng xe, kiểm tra bằng thiết bị chẩn đoán.',
    Icon: ClipboardCheck,
  },
  {
    step: '02',
    titleLine1: 'Tư vấn',
    titleLine2: '& Báo giá',
    description: 'Báo giá minh bạch trước khi thực hiện, khách đồng ý mới làm.',
    Icon: MessageSquareText,
  },
  {
    step: '03',
    titleLine1: 'Thực hiện',
    titleLine2: '& Bàn giao',
    description: 'Thi công đúng quy trình, kiểm tra lại và bàn giao xe.',
    Icon: CheckSquare,
  },
];

export const ProcessAndNews: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <>
      {/* 11) PROCESS — height 530 desktop */}
      <section
        id="quy-trinh"
        className="relative min-h-[530px] py-14 lg:py-0 flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(100deg, #05153A 0%, #0A2B6E 60%, #0B3A8F 100%)',
        }}
      >
        {/* Diagonal stripe texture */}
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" aria-hidden="true" />

        {/* Right Slanted Photo (desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[34%] xl:w-[660px] pointer-events-none">
          <div className="w-full h-full process-slant-clip overflow-hidden relative">
            <GkpImage
              src={GARAGE_IMAGES.processMercedesSunset}
              alt="Ô tô vận hành trên đường lúc hoàng hôn sau khi hoàn tất quy trình bảo dưỡng"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {/* Soft navy gradient on top-right / left blend */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(11,58,143,0.45) 0%, rgba(5,21,58,0.12) 45%, rgba(5,21,58,0.35) 100%)',
              }}
            />
          </div>
        </div>

        {/* Left Area (≈1312px on 1814 canvas) */}
        <div className="container-gkp relative z-10 py-6 lg:py-12">
          <div className="w-full lg:w-[76%] xl:w-[1040px]">
            <Reveal className="text-center">
              <SectionHeader title="QUY TRÌNH DỊCH VỤ CHUYÊN NGHIỆP" subtitle="" dark />
              <p className="mt-3 max-w-[680px] mx-auto text-[15px] md:text-[16px] leading-[1.65] text-[#C9D8F2]">
                Tại <strong className="font-bold text-white">Gia Khánh Performance</strong>, mỗi chiếc xe đều được tiếp nhận, tư vấn và thực hiện theo quy trình rõ ràng, minh bạch từ đầu đến cuối.
              </p>
            </Reveal>

            {/* 3 Circular SVG Steps (wrap 3 -> 2 -> 1) */}
            <div className="mt-9 flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 sm:gap-10 xl:gap-[62px]">
              {PROCESS_STEPS.map(({ step, titleLine1, titleLine2, description, Icon }, idx) => (
                <Reveal key={step} delayMs={idx * 90}>
                  <div className="relative w-[250px] h-[250px] flex items-center justify-center shrink-0">
                    {/* 250px SVG Ring */}
                    <svg
                      viewBox="0 0 250 250"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="125"
                        cy="125"
                        r="116"
                        fill="none"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="6"
                      />
                      {/* Blue arc from 12 o'clock to 3 o'clock */}
                      <circle
                        cx="125"
                        cy="125"
                        r="116"
                        fill="none"
                        stroke="#1E8CFF"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="182 729"
                        strokeDashoffset="0"
                        transform="rotate(-90 125 125)"
                      />
                      {/* Red arc from 3 o'clock to ~5 o'clock */}
                      <circle
                        cx="125"
                        cy="125"
                        r="116"
                        fill="none"
                        stroke="#E3262E"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="122 729"
                        strokeDashoffset="-186"
                        transform="rotate(-90 125 125)"
                      />
                    </svg>

                    {/* 214px White Disc */}
                    <div className="relative z-10 w-[214px] h-[214px] rounded-full bg-white shadow-[0_16px_36px_rgba(2,6,15,0.38)] flex flex-col items-center justify-center text-center px-5">
                      <Icon className="w-[42px] h-[42px] text-[#0B5BE0]" strokeWidth={1.8} />
                      <h3 className="mt-2.5 text-[16.5px] font-extrabold text-[#0A1A3A] leading-[1.22]">
                        <span className="block">{titleLine1}</span>
                        <span className="block">{titleLine2}</span>
                      </h3>
                      <p className="mt-1.5 text-[12.5px] leading-[1.45] text-[#5B6B88]">
                        {description}
                      </p>
                    </div>

                    {/* 46px Number Badge on Left Edge */}
                    <div
                      className="absolute -left-[6px] top-1/2 -translate-y-1/2 z-20 w-[46px] h-[46px] rounded-full border-[3px] border-white flex items-center justify-center text-[15px] font-extrabold text-white shadow-[0_6px_16px_rgba(11,91,224,0.45)] tabular-nums"
                      style={{
                        background: 'linear-gradient(180deg, #2E9BFF 0%, #0B5BE0 100%)',
                      }}
                    >
                      {step}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12) NEWS — height 726 */}
      <section
        id="tin-tuc"
        className="py-14 md:py-16 lg:py-[66px]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F6FB 100%)',
        }}
      >
        <div className="container-gkp">
          <Reveal>
            <SectionHeader title="KIẾN THỨC Ô TÔ & TIN TỨC" />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-[20px]">
            {NEWS_ITEMS.map((article, idx) => (
              <Reveal key={article.id} delayMs={idx * 70}>
                <article className="group relative bg-white rounded-[10px] overflow-hidden shadow-[0_14px_30px_rgba(10,26,58,0.12)] flex flex-col min-h-[492px] transition-transform duration-200 hover:-translate-y-1">
                  {/* Image 320px high */}
                  <div className="h-[260px] sm:h-[300px] xl:h-[320px] w-full overflow-hidden bg-[#0A1A3A]">
                    <GkpImage
                      src={article.image}
                      alt={article.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex-1 px-6 pt-5 pb-6 flex flex-col">
                    <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#5B6B88] tabular-nums">
                      <Calendar className="w-4 h-4 text-[#0B5BE0]" strokeWidth={2} />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="mt-2.5 text-[19px] font-extrabold text-[#0A1A3A] leading-snug group-hover:text-[#0B5BE0] transition-colors">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-[1.6] text-[#5B6B88] flex-1">
                      {article.excerpt}
                    </p>

                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedArticle(article)}
                        className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0B5BE0] hover:text-[#0B3A8F] cursor-pointer"
                      >
                        <span>Đọc thêm</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
                      </button>
                    </div>
                  </div>

                  {/* 4px bottom gradient line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[4px]"
                    style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* News Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={() => setSelectedArticle(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="news-modal-title"
        >
          <div
            className="relative w-full max-w-2xl rounded-xl bg-white border border-[#DCE4F2] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              aria-label="Đóng bài viết"
              className="absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#E3262E] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-56 sm:h-64 w-full shrink-0">
              <GkpImage
                src={selectedArticle.image}
                alt={selectedArticle.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#5B6B88] tabular-nums">
                <Calendar className="w-4 h-4 text-[#0B5BE0]" />
                <span>{selectedArticle.date}</span>
              </div>
              <h3 id="news-modal-title" className="mt-2 text-[22px] sm:text-[24px] font-extrabold text-[#0A1A3A]">
                {selectedArticle.title}
              </h3>

              <div className="mt-4 space-y-3 text-[15px] leading-[1.7] text-[#1B2A47]">
                {selectedArticle.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE4F2] flex flex-wrap items-center justify-between gap-3">
                <span className="text-[13.5px] font-semibold text-[#5B6B88]">
                  Cần kiểm tra xe trực tiếp? Liên hệ kỹ thuật viên:
                </span>
                <a
                  href={HOTLINE_PRIMARY_TEL}
                  className="btn-gkp-red h-[42px] px-5 rounded-full inline-flex items-center gap-2 text-[13.5px] font-bold text-white tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>{HOTLINE_PRIMARY}</span>
                </a>
              </div>
            </div>

            <div
              className="h-[4px] w-full shrink-0"
              style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
            />
          </div>
        </div>
      )}
    </>
  );
};
