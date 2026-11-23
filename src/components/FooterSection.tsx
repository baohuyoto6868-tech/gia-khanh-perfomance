import React, { useEffect, useState } from 'react';
import {
  ArrowUp,
  CalendarCheck,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldAlert,
} from 'lucide-react';
import {
  ADDRESS_TEXT,
  EMAIL_TEXT,
  HOTLINE_PRIMARY,
  HOTLINE_PRIMARY_TEL,
  HOTLINE_SECONDARY,
  HOTLINE_SECONDARY_TEL,
  WEBSITE_TEXT,
} from '../data/garageData';
import { GARAGE_IMAGES } from '../assets/images';
import { BrandLogo, GkpImage } from './BrandMotifs';

export const FooterSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = name.trim();
    const cleanedPhone = phone.replace(/[\s.-]/g, '');
    const vnPhoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$|^0[2][0-9]{9}$/;

    if (!trimmedName) {
      setErrorMsg('Vui lòng nhập họ tên của Quý khách.');
      return;
    }

    if (!cleanedPhone || !vnPhoneRegex.test(cleanedPhone)) {
      setErrorMsg('Vui lòng nhập số điện thoại Việt Nam hợp lệ (VD: 0934100197).');
      return;
    }

    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <>
      {/* 13) FOOTER — height 480 desktop, bg #02060F */}
      <footer
        id="lien-he"
        className="relative bg-[#02060F] text-white overflow-hidden pb-[56px] md:pb-0"
        style={{
          backgroundImage:
            'radial-gradient(700px 400px at 20% 20%, #0B2A66 0%, #040C20 55%, #02060F 100%)',
        }}
      >
        {/* Dark photo strip on far right (210px wide on desktop) */}
        <div className="hidden xl:block absolute top-0 right-0 bottom-0 w-[210px] pointer-events-none overflow-hidden">
          <GkpImage
            src={GARAGE_IMAGES.heroBmwGarage}
            alt="Cầu nâng sửa chữa ô tô tại Garage Gia Khánh Performance"
            loading="lazy"
            className="w-full h-full object-cover opacity-50"
            style={{ filter: 'saturate(0.7) brightness(0.6) hue-rotate(155deg)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #06183F 0%, rgba(2,6,15,0.25) 45%, rgba(2,6,15,0.65) 100%)',
            }}
          />
        </div>

        <div className="container-gkp relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-stretch justify-between gap-10 lg:gap-8">
            {/* Col 1: Logo + Contact Info */}
            <div className="lg:w-[33%] py-10 lg:py-[42px] flex flex-col justify-between">
              <div>
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-block"
                  aria-label="Về đầu trang"
                >
                  <BrandLogo heightClass="h-[82px] md:h-[96px]" />
                </a>

                <h2 className="mt-5 text-[16px] font-extrabold uppercase tracking-[0.8px] text-white">
                  THÔNG TIN LIÊN HỆ
                </h2>
                <div
                  className="mt-2 w-[46px] h-[3px]"
                  style={{ background: 'linear-gradient(90deg, #1E8CFF 0%, #E3262E 100%)' }}
                  aria-hidden="true"
                />

                <ul className="mt-5 space-y-3 text-[14.5px] leading-[1.6] text-[#C8D6F0]">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#1E8CFF] shrink-0 mt-1" strokeWidth={2} />
                    <span>Địa chỉ: {ADDRESS_TEXT}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#1E8CFF] shrink-0 mt-1" strokeWidth={2} />
                    <span>
                      Điện thoại:{' '}
                      <strong className="font-bold text-white tabular-nums">
                        <a href={HOTLINE_PRIMARY_TEL} className="hover:text-[#7CC0FF] transition-colors">
                          {HOTLINE_PRIMARY}
                        </a>
                        {' - '}
                        <a href={HOTLINE_SECONDARY_TEL} className="hover:text-[#7CC0FF] transition-colors">
                          {HOTLINE_SECONDARY}
                        </a>
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#1E8CFF] shrink-0 mt-1" strokeWidth={2} />
                    <a
                      href={`mailto:${EMAIL_TEXT}`}
                      className="hover:text-white transition-colors break-all"
                    >
                      Email: {EMAIL_TEXT}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-[#1E8CFF] shrink-0 mt-1" strokeWidth={2} />
                    <a
                      href={WEBSITE_TEXT}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors break-all"
                    >
                      Website: {WEBSITE_TEXT}
                    </a>
                  </li>
                </ul>
              </div>

              <p className="mt-7 text-[12.5px] text-[#8FA2C7]">
                © <strong className="font-bold text-white">GIA KHÁNH PERFORMANCE</strong>. Designed by{' '}
                <strong className="font-bold text-white">NASANI</strong>
              </p>
            </div>

            {/* Col 2: Google Map + Social Links */}
            <div className="lg:w-[34%] lg:max-w-[464px] py-0 lg:py-[42px] flex flex-col justify-between">
              <div>
                <h2 className="text-[14px] font-extrabold uppercase tracking-[0.8px] text-white">
                  VỊ TRÍ TRÊN GOOGLE MAPS
                </h2>

                <div className="mt-3.5 relative w-full h-[208px] rounded-[12px] overflow-hidden border-2 border-[#12307A] bg-[#071636]">
                  <iframe
                    title="Bản đồ vị trí Garage Gia Khánh Performance"
                    src="https://maps.google.com/maps?q=Qu%E1%BB%91c+l%E1%BB%99+56,+Long+Giao,+C%E1%BA%A9m+M%E1%BB%B9,+%C4%90%E1%BB%93ng+Nai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                  {/* Subtle blue tint */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: 'rgba(11, 74, 190, 0.08)', mixBlendMode: 'multiply' }}
                    aria-hidden="true"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Qu%E1%BB%91c+l%E1%BB%99+56,+Long+Giao,+C%E1%BA%A9m+M%E1%BB%B9,+%C4%90%E1%BB%93ng+Nai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[13.5px] font-semibold text-[#9CC8FF] underline hover:text-white transition-colors"
                >
                  Mở trên Google Maps →
                </a>
              </div>

              <div className="mt-6">
                <p className="text-[13.5px] font-bold text-[#C8D6F0]">Liên kết MXH</p>
                <div className="mt-3 flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Garage Gia Khánh Performance"
                    className="w-[40px] h-[40px] rounded-full bg-[#12307A] hover:bg-[#1E8CFF] text-white flex items-center justify-center transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Garage Gia Khánh Performance"
                    className="w-[40px] h-[40px] rounded-full bg-[#12307A] hover:bg-[#E3262E] text-white flex items-center justify-center transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.75 12 4.75 12 4.75s-5.93 0-7.64.49A2.75 2.75 0 0 0 2.42 7.2 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.95c1.71.49 7.64.49 7.64.49s5.93 0 7.64-.49a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.42-4.81ZM10 15.1V8.9L15.5 12 10 15.1Z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok Garage Gia Khánh Performance"
                    className="w-[40px] h-[40px] rounded-full bg-[#12307A] hover:bg-[#1E8CFF] text-white flex items-center justify-center transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .593.046.877.136V9.4a6.33 6.33 0 0 0-.877-.06A6.34 6.34 0 0 0 3.14 15.68 6.34 6.34 0 0 0 15.81 16V9.25a8.16 8.16 0 0 0 4.77 1.52V7.34c-.34 0-.67-.22-.99-.65Z" />
                    </svg>
                  </a>

                  {/* Zalo */}
                  <a
                    href="https://zalo.me/0934100197"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Zalo Garage Gia Khánh Performance"
                    className="w-[40px] h-[40px] rounded-full bg-[#12307A] hover:bg-[#0B5BE0] text-white flex items-center justify-center text-[11px] font-extrabold tracking-tight transition-colors"
                  >
                    Zalo
                  </a>
                </div>
              </div>
            </div>

            {/* Col 3: ĐĂNG KÝ NHẬN TIN full-height panel (width 404 desktop) */}
            <div
              id="dang-ky-nhan-tin"
              className="w-full lg:w-[360px] xl:w-[404px] shrink-0 border-t-[4px] border-[#1E8CFF] px-6 sm:px-8 py-8 lg:py-9 flex flex-col justify-center"
              style={{
                background: 'linear-gradient(180deg, #0B2A66 0%, #06183F 100%)',
              }}
            >
              <h2 className="text-[24px] sm:text-[26px] font-black uppercase text-white text-center tracking-[0.5px]">
                ĐĂNG KÝ NHẬN TIN
              </h2>
              <p className="mt-2 text-[13px] leading-[1.55] text-[#BFD0EE] text-center">
                Để lại thông tin, chúng tôi sẽ liên hệ tư vấn cho Quý khách trong thời gian sớm nhất.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-2.5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Nhập họ tên
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập họ tên"
                    required
                    className="w-full h-[38px] px-3.5 rounded-[6px] bg-white text-[#1B2A47] placeholder:text-[#7D8CA6] text-[13.5px] focus:outline-2 focus:outline-[#1E8CFF]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="sr-only">
                    Nhập số điện thoại
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Nhập số điện thoại"
                    required
                    className="w-full h-[38px] px-3.5 rounded-[6px] bg-white text-[#1B2A47] placeholder:text-[#7D8CA6] text-[13.5px] focus:outline-2 focus:outline-[#1E8CFF]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Nhập email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                    className="w-full h-[38px] px-3.5 rounded-[6px] bg-white text-[#1B2A47] placeholder:text-[#7D8CA6] text-[13.5px] focus:outline-2 focus:outline-[#1E8CFF]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Nhập nội dung tin nhắn
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập nội dung tin nhắn"
                    className="w-full h-[106px] px-3.5 py-2.5 rounded-[6px] bg-white text-[#1B2A47] placeholder:text-[#7D8CA6] text-[13.5px] resize-none focus:outline-2 focus:outline-[#1E8CFF]"
                  />
                </div>

                {errorMsg && (
                  <p className="text-[12.5px] font-semibold text-[#FF8A8F]" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="btn-gkp-red w-[204px] h-[48px] rounded-[30px] inline-flex items-center justify-center gap-2 text-[15px] font-bold uppercase tracking-[0.8px] text-white cursor-pointer"
                  >
                    <Send className="w-4 h-4" strokeWidth={2.2} />
                    <span>GỬI NGAY</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Success Toast */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#040A18] border border-[#1E8CFF] text-white shadow-2xl"
        >
          <CheckCircle2 className="w-5 h-5 text-[#1E8CFF] shrink-0" />
          <span className="text-[14px] font-semibold">
            Đã gửi thông tin thành công! Gia Khánh Performance sẽ liên hệ Quý khách sớm nhất.
          </span>
        </div>
      )}

      {/* Floating Desktop Widgets (Right Side) */}
      <div className="hidden md:flex fixed right-5 bottom-7 z-40 flex-col items-center gap-3">
        <a
          href={HOTLINE_PRIMARY_TEL}
          aria-label={`Gọi ngay ${HOTLINE_PRIMARY}`}
          title={`Gọi ngay ${HOTLINE_PRIMARY}`}
          className="btn-gkp-red w-12 h-12 rounded-full flex items-center justify-center text-white"
        >
          <Phone className="w-5 h-5" strokeWidth={2.2} />
        </a>

        <a
          href="https://zalo.me/0934100197"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin qua Zalo"
          title="Nhắn tin qua Zalo"
          className="btn-gkp-blue w-12 h-12 rounded-full flex items-center justify-center text-white text-[12px] font-extrabold tracking-tight"
        >
          Zalo
        </a>

        {showScrollTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Lên đầu trang"
            title="Lên đầu trang"
            className="w-12 h-12 rounded-full bg-[#0A1A3A] border border-white/25 text-white flex items-center justify-center shadow-lg hover:bg-[#1E8CFF] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" strokeWidth={2.2} />
          </button>
        )}
      </div>

      {/* Mobile Fixed Bottom Action Bar (56px high) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-[56px] bg-[#02060F]/95 backdrop-blur-md border-t border-[#12306B] grid grid-cols-4">
        <a
          href={HOTLINE_PRIMARY_TEL}
          className="flex flex-col items-center justify-center gap-0.5 text-white hover:text-[#FF6A70]"
        >
          <Phone className="w-4 h-4 text-[#E3262E]" strokeWidth={2.2} />
          <span className="text-[11px] font-bold">Gọi</span>
        </a>

        <a
          href="https://zalo.me/0934100197"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-white hover:text-[#7CC0FF]"
        >
          <MessageCircle className="w-4 h-4 text-[#1E8CFF]" strokeWidth={2.2} />
          <span className="text-[11px] font-bold">Zalo</span>
        </a>

        <a
          href="#lien-he"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('lien-he')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center gap-0.5 text-white hover:text-[#7CC0FF]"
        >
          <CalendarCheck className="w-4 h-4 text-[#7CC0FF]" strokeWidth={2.2} />
          <span className="text-[11px] font-bold">Đặt lịch</span>
        </a>

        <a
          href="#cuu-ho"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('cuu-ho')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center gap-0.5 text-white hover:text-[#FF6A70]"
        >
          <ShieldAlert className="w-4 h-4 text-[#E3262E]" strokeWidth={2.2} />
          <span className="text-[11px] font-bold">Cứu hộ</span>
        </a>
      </div>
    </>
  );
};
