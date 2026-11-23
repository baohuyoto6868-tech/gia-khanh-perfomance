import React, { useEffect, useState } from 'react';
import { CarFront, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import {
  GALLERY_ITEMS,
  PROJECTS_LIST,
  ProjectCategory,
  ProjectItem,
} from '../data/garageData';
import { GkpImage, Reveal, SectionHeader, SkewedStripes } from './BrandMotifs';

const FILTER_TABS: ProjectCategory[] = ['XE CHÂU ÂU', 'XE CHÂU Á', 'BẢO DƯỠNG', 'NÂNG CẤP'];

const DarkProjectPlaceholder: React.FC<{ title: string; className?: string }> = ({
  title,
  className = '',
}) => (
  <div
    className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1D42] via-[#06122B] to-[#030814] text-center p-6 ${className}`}
    role="img"
    aria-label={`Hình ảnh đang cập nhật – ${title}`}
  >
    <CarFront className="w-11 h-11 text-[#7CC0FF]/70 mb-3" strokeWidth={1.6} />
    <span className="text-[16px] font-extrabold italic uppercase tracking-[2px] text-chrome">
      {title}
    </span>
    <span className="mt-1.5 text-[12px] font-medium tracking-[0.4px] text-[#8FA2C7]">
      Hình ảnh thực tế đang cập nhật
    </span>
  </div>
);

export const ProjectsMarqueeGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('XE CHÂU ÂU');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleProjects = showAllProjects
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter((p) => p.categories.includes(activeTab)).slice(0, 3);

  const handleTabClick = (tab: ProjectCategory) => {
    setActiveTab(tab);
    setShowAllProjects(false);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % GALLERY_ITEMS.length));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex]);

  return (
    <>
      {/* 8) FEATURED PROJECTS — Top 398px dark, rest white; photos straddle boundary */}
      <section id="du-an" className="relative bg-white pb-14 md:pb-16">
        {/* Top 398px Dark Backdrop */}
        <div
          className="relative h-[380px] sm:h-[398px] w-full overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #06183F 0%, #0B2A66 100%)',
          }}
        >
          {/* Diagonal stripe texture */}
          <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" aria-hidden="true" />
          {/* Blue radial glow top-right */}
          <div
            className="absolute -top-20 right-0 w-[620px] h-[420px] pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(30,140,255,0.28) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="container-gkp relative z-10 pt-12 md:pt-[52px]">
            <Reveal>
              <SectionHeader title="DỰ ÁN TIÊU BIỂU" dark />
            </Reveal>

            {/* Filter Tabs */}
            <div
              className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
              role="tablist"
              aria-label="Lọc dự án theo dòng xe và hạng mục"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeTab === tab && !showAllProjects;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleTabClick(tab)}
                    className={`h-[44px] px-5 sm:px-6 rounded-[8px] text-[13.5px] sm:text-[14.5px] font-bold uppercase tracking-[0.6px] whitespace-nowrap cursor-pointer transition-all duration-200 ${
                      isActive
                        ? 'btn-gkp-blue text-white'
                        : 'bg-white/10 border-[1.5px] border-white/30 text-white hover:bg-white/20 hover:border-white/55'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Cards straddling the dark/white boundary */}
        <div className="container-gkp relative z-20 -mt-[142px] sm:-mt-[152px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] xl:gap-[30px]">
            {visibleProjects.map((project, idx) => (
              <Reveal key={project.id} delayMs={idx * 75}>
                <article className="group flex flex-col items-center text-center">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full h-[260px] sm:h-[300px] xl:h-[332px] rounded-[10px] overflow-hidden shadow-[0_18px_34px_rgba(4,10,24,0.35)] bg-[#040A18] cursor-pointer transition-transform duration-300 group-hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#1E8CFF]"
                  >
                    {project.image ? (
                      <GkpImage
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <DarkProjectPlaceholder
                        title={project.title}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[5px]"
                      style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
                      aria-hidden="true"
                    />
                  </button>

                  <h3 className="mt-5 text-[18px] font-extrabold uppercase text-[#0A1A3A] tracking-[0.4px]">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-[390px] text-[14.5px] leading-[1.6] text-[#5B6B88]">
                    {project.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-9 text-center">
            <button
              type="button"
              onClick={() => {
                setShowAllProjects((prev) => !prev);
                if (showAllProjects) {
                  setActiveTab('XE CHÂU ÂU');
                }
              }}
              className="btn-gkp-blue h-[46px] px-7 rounded-[10px] inline-flex items-center justify-center gap-2 text-[14.5px] font-bold uppercase tracking-[0.5px] text-white cursor-pointer whitespace-nowrap"
            >
              <span>{showAllProjects ? 'THU GỌN DỰ ÁN TIÊU BIỂU' : 'XEM TẤT CẢ DỰ ÁN'}</span>
              <span className="text-lg leading-none" aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* 9) BRAND MARQUEE — height 130, white */}
      <section
        aria-label="Thương hiệu Gia Khánh Performance"
        className="marquee-wrapper h-[92px] sm:h-[110px] lg:h-[130px] bg-white border-y border-[#EEF2F9] overflow-hidden flex items-center"
      >
        <div className="animate-gkp-marquee items-center">
          {[0, 1, 2, 3, 4, 5].map((itemIdx) => (
            <div
              key={itemIdx}
              className="inline-flex items-center gap-5 sm:gap-7 px-6 sm:px-10 select-none shrink-0"
              aria-hidden={itemIdx > 0}
            >
              <span className="text-[42px] sm:text-[58px] lg:text-[76px] font-black italic tracking-[1px] leading-none whitespace-nowrap">
                <span className="text-marquee-blue">GIA KHÁNH </span>
                <span className="text-[#B7C2D6]">PERFORMANCE</span>
              </span>
              <SkewedStripes
                width={14}
                height={46}
                gap={7}
                className="hidden sm:inline-flex"
              />
              <SkewedStripes
                width={10}
                height={30}
                gap={5}
                className="inline-flex sm:hidden"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 10) WORKSHOP GALLERY — white, 3x2 photos */}
      <section id="hinh-anh-xuong" className="py-14 md:py-16 lg:py-[66px] bg-white">
        <div className="container-gkp">
          <Reveal>
            <SectionHeader title="HÌNH ÁNH XƯỞNG DỊCH VỤ" />
          </Reveal>

          {/* 3x2 desktop/tablet, 2 cols mobile, gaps 6 (h) / 8 (v) */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-x-[6px] gap-y-[8px]">
            {GALLERY_ITEMS.map((item, idx) => (
              <Reveal key={item.id} delayMs={(idx % 3) * 60}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Xem phóng to: ${item.alt}`}
                  className="group relative w-full h-[180px] sm:h-[260px] lg:h-[310px] xl:h-[350px] rounded-[8px] overflow-hidden shadow-[0_8px_22px_rgba(10,26,58,0.1)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E8CFF]"
                >
                  <GkpImage
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Faint blue multiply overlay for color harmony */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: 'rgba(11, 74, 190, 0.10)', mixBlendMode: 'multiply' }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-[#040A18]/0 group-hover:bg-[#040A18]/30 transition-colors duration-200 flex items-center justify-center">
                    <span className="w-11 h-11 rounded-full bg-white/90 text-[#0A1A3A] flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-lg">
                      <ZoomIn className="w-5 h-5" strokeWidth={2} />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="relative w-full max-w-xl rounded-xl bg-white border border-[#DCE4F2] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Đóng chi tiết dự án"
              className="absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-[#E3262E] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 w-full bg-[#040A18]">
              {selectedProject.image ? (
                <GkpImage
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <DarkProjectPlaceholder title={selectedProject.title} />
              )}
            </div>

            <div className="p-6">
              <div className="text-[12.5px] font-bold uppercase tracking-[1px] text-[#0B5BE0]">
                {selectedProject.categories.join(' · ')}
              </div>
              <h3 id="project-modal-title" className="mt-1 text-[22px] font-extrabold uppercase text-[#0A1A3A]">
                {selectedProject.title}
              </h3>
              <p className="mt-2 text-[15px] text-[#5B6B88]">{selectedProject.description}</p>
              <ul className="mt-4 space-y-2">
                {selectedProject.details.map((detail) => (
                  <li key={detail} className="text-[14.5px] text-[#1B2A47] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E8CFF] mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="h-[4px] w-full"
              style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
            />
          </div>
        </div>
      )}

      {/* Gallery Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#02060F]/92 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Phóng to hình ảnh xưởng dịch vụ"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Đóng trình xem ảnh"
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white flex items-center justify-center hover:bg-[#E3262E] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
            }}
            aria-label="Ảnh trước"
            className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white flex items-center justify-center hover:bg-[#1E8CFF] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <GkpImage
              src={GALLERY_ITEMS[lightboxIndex].image}
              alt={GALLERY_ITEMS[lightboxIndex].alt}
              className="w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-center text-[14.5px] sm:text-[15.5px] text-[#C8D6F0]">
              {GALLERY_ITEMS[lightboxIndex].caption}
            </p>
            <span className="mt-1 text-xs font-semibold text-[#7CC0FF] tabular-nums">
              {lightboxIndex + 1} / {GALLERY_ITEMS.length}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
            }}
            aria-label="Ảnh tiếp theo"
            className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white flex items-center justify-center hover:bg-[#1E8CFF] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
};
