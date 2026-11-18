import { GARAGE_IMAGES } from '../assets/images';

export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  objectPosition?: string;
}

export interface MegaMenuColumn {
  title: string;
  targetHref: string;
  items: { label: string; href: string; isPhone?: boolean }[];
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  image: string;
  alt: string;
  objectPosition?: string;
  summary: string;
  highlights: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  image: string;
  alt: string;
  category: string;
  summary: string;
  specs: string[];
}

export type ProjectCategory = 'BMW' | 'MERCEDES-BENZ' | 'BẢO DƯỠNG' | 'NÂNG CẤP';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  categories: ProjectCategory[];
  featuredDefault: boolean;
  details: string[];
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  content: string[];
}

export const HOTLINE_PRIMARY = '0934 100 197';
export const HOTLINE_PRIMARY_TEL = 'tel:0934100197';
export const HOTLINE_SECONDARY = '0902 671 097';
export const HOTLINE_SECONDARY_TEL = 'tel:0902671097';
export const ADDRESS_TEXT = 'Quốc lộ 56, Long Giao, Cẩm Mỹ, Đồng Nai';
export const EMAIL_TEXT = 'giakhanhperformance@gmail.com';
export const WEBSITE_TEXT = 'http://giakhanhperformance.com/';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: GARAGE_IMAGES.heroBmwGarage,
    alt: 'BMW 3-Series màu đen trong xưởng dịch vụ hiện đại tại Garage Gia Khánh Performance',
    objectPosition: 'center center',
  },
  {
    id: 2,
    image: GARAGE_IMAGES.projectBmwShowroom,
    alt: 'BMW 3-Series M Sport màu trắng nâng cấp và chăm sóc tại Garage Gia Khánh Performance',
    objectPosition: '70% center',
  },
  {
    id: 3,
    image: GARAGE_IMAGES.projectMercedesCclass,
    alt: 'Mercedes-Benz C-Class bảo dưỡng chuyên sâu tại xưởng Gia Khánh Performance',
    objectPosition: '75% center',
  },
  {
    id: 4,
    image: GARAGE_IMAGES.projectAudiAvant,
    alt: 'Audi A4 Avant kiểm tra tổng thể và cân chỉnh vận hành tại Garage Gia Khánh Performance',
    objectPosition: '75% center',
  },
  {
    id: 5,
    image: GARAGE_IMAGES.processMercedesSunset,
    alt: 'Mercedes-Benz C-Class vận hành ổn định sau khi hoàn tất quy trình bảo dưỡng',
    objectPosition: '65% center',
  },
];

export const MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    title: 'Sửa chữa – Bảo dưỡng',
    targetHref: '#dich-vu',
    items: [
      { label: 'Bảo dưỡng định kỳ', href: '#dich-vu' },
      { label: 'Chẩn đoán lỗi', href: '#dich-vu' },
      { label: 'Động cơ – Hộp số', href: '#dich-vu' },
      { label: 'Điện – Điều hòa', href: '#dich-vu' },
      { label: 'Phanh – Treo – Lái', href: '#dich-vu' },
      { label: 'Đồng – Sơn', href: '#dich-vu' },
    ],
  },
  {
    title: 'Nâng cấp – Độ xe',
    targetHref: '#dich-vu',
    items: [
      { label: 'Coding – Retrofit', href: '#dich-vu' },
      { label: 'Ánh sáng – Đèn', href: '#dich-vu' },
      { label: 'Màn hình – Âm thanh', href: '#dich-vu' },
      { label: 'Camera – An toàn', href: '#dich-vu' },
      { label: 'Mâm – Lốp', href: '#dich-vu' },
      { label: 'Nâng cấp hiệu suất', href: '#dich-vu' },
    ],
  },
  {
    title: 'Chăm sóc xe',
    targetHref: '#dich-vu',
    items: [
      { label: 'Phục hồi – Đánh bóng sơn', href: '#dich-vu' },
      { label: 'Phủ Ceramic – PPF', href: '#dich-vu' },
      { label: 'Dán phim cách nhiệt', href: '#dich-vu' },
      { label: 'Vệ sinh nội thất', href: '#dich-vu' },
      { label: 'Vệ sinh khoang máy', href: '#dich-vu' },
    ],
  },
  {
    title: 'Cứu hộ 24/7',
    targetHref: '#cuu-ho',
    items: [
      { label: 'Cứu hộ tại chỗ', href: '#cuu-ho' },
      { label: 'Vận chuyển xe', href: '#cuu-ho' },
      { label: 'Gọi ngay 0934 100 197', href: HOTLINE_PRIMARY_TEL, isPhone: true },
    ],
  },
];

export const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: 'bao-duong-dinh-ky',
    index: '01',
    title: 'BẢO DƯỠNG ĐỊNH KỲ',
    image: GARAGE_IMAGES.aboutMechanicHood,
    alt: 'Kỹ thuật viên kiểm tra khoang động cơ trong quy trình bảo dưỡng định kỳ xe Đức',
    objectPosition: 'center center',
    summary: 'Bảo dưỡng theo đúng cấp km khuyến cáo của BMW, Mercedes-Benz, Audi với dầu nhớt và phụ tùng tiêu chuẩn OEM.',
    highlights: [
      'Thay dầu động cơ, lọc nhớt, lọc gió động cơ và lọc điều hòa chính hãng',
      'Kiểm tra tổng thể hệ thống làm mát, dây curoa, phanh, lốp và ắc quy',
      'Reset đèn bảo dưỡng và lưu lịch sử chăm sóc điện tử',
    ],
  },
  {
    id: 'chan-doan-loi',
    index: '02',
    title: 'CHẨN ĐOÁN LỖI',
    image: GARAGE_IMAGES.serviceDiagnosticTablet,
    alt: 'Máy chẩn đoán lỗi chuyên dụng kết nối đọc dữ liệu trực tiếp khoang động cơ',
    objectPosition: 'center center',
    summary: 'Đọc lỗi chuyên sâu toàn bộ các hộp điều khiển ECU, TCU, ABS, túi khí bằng thiết bị chuyên hãng.',
    highlights: [
      'Phân tích dữ liệu động (Live Data) và xác định chính xác nguyên nhân gốc rễ',
      'Kiểm tra rò rỉ áp suất nạp, hệ thống đánh lửa và phun xăng trực tiếp',
      'Báo cáo tình trạng rõ ràng bằng thông số kỹ thuật trước khi xử lý',
    ],
  },
  {
    id: 'sua-chua-dong-co',
    index: '03',
    title: 'SỬA CHỮA ĐỘNG CƠ',
    image: GARAGE_IMAGES.serviceEngineGearbox,
    alt: 'Động cơ xe sang được tháo lắp kiểm tra chi tiết trên giá chuyên dụng',
    objectPosition: '22% center',
    summary: 'Xử lý triệt để các bệnh đặc trưng trên động cơ Đức: hao nhớt, rò nước làm mát, rung giật, đại tu động cơ.',
    highlights: [
      'Thay phớt xupap, gioăng nắp máy, bộ phận tăng áp và hệ thống van hằng nhiệt',
      'Vệ sinh họng nạp, xupap bằng phương pháp bắn hạt óc chó (Walnut Blasting)',
      'Siết lực chuẩn theo tài liệu kỹ thuật hãng và chạy thử kiểm định',
    ],
  },
  {
    id: 'sua-chua-hop-so',
    index: '04',
    title: 'SỬA CHỮA HỘP SỐ',
    image: GARAGE_IMAGES.serviceEngineGearbox,
    alt: 'Cụm bánh răng hộp số xe sang đang được kỹ thuật viên kiểm tra dung sai',
    objectPosition: '78% center',
    summary: 'Bảo dưỡng thay dầu hộp số tuần hoàn và đại tu hộp số tự động ZF, 7G-Tronic, 9G-Tronic, DSG.',
    highlights: [
      'Thay dầu hộp số tự động, cacte lọc nhớt và reset chỉ số thích nghi',
      'Xử lý hiện tượng giật số, trượt số, vào số trễ hoặc báo lỗi vỉ mạch điều khiển',
      'Cân chỉnh mechatronic và kiểm tra nhiệt độ dầu theo chuẩn nhà sản xuất',
    ],
  },
  {
    id: 'coding-retrofit',
    index: '05',
    title: 'CODING & RETROFIT',
    image: GARAGE_IMAGES.galleryAmbientInterior,
    alt: 'Nội thất xe sang nâng cấp đèn viền ambient và tính năng coding chuyên sâu',
    objectPosition: 'center center',
    summary: 'Kích hoạt tính năng ẩn và nâng cấp trang bị chính hãng cho BMW, Mercedes-Benz, Audi, Porsche.',
    highlights: [
      'Mở khóa CarPlay không dây, bản đồ, nhận diện biển báo và tính năng an toàn ẩn',
      'Retrofit vô lăng thể thao, cụm đồng hồ kỹ thuật số, cốp điện, đá cốp',
      'Lập trình đèn viền nội thất, cửa hít và hệ thống âm thanh vòm',
    ],
  },
  {
    id: 'mam-va-lop',
    index: '06',
    title: 'MÂM VÀ LỐP',
    image: GARAGE_IMAGES.galleryBrakeCalipers,
    alt: 'Cụm phanh hiệu suất cao và phụ kiện bánh xe cao cấp trong xưởng dịch vụ',
    objectPosition: 'center center',
    summary: 'Cung cấp mâm forged, lốp run-flat/performance chính hãng cùng dịch vụ cân bằng động và cân chỉnh thước lái.',
    highlights: [
      'Thay mâm đa chấu hợp kim nhẹ chuẩn thông số offset (ET) từng dòng xe',
      'Cân mâm bấm chì chính xác cao giúp xe chạy đầm chắc ở tốc độ cao',
      'Nâng cấp hệ thống phanh đĩa khoan lỗ và heo phanh hiệu suất cao',
    ],
  },
  {
    id: 'dong-son',
    index: '07',
    title: 'ĐỒNG SƠN',
    image: GARAGE_IMAGES.serviceBodyPaint,
    alt: 'Kỹ thuật viên sơn xe cao cấp trong phòng sơn tiêu chuẩn hiện đại',
    objectPosition: 'center center',
    summary: 'Phục hồi thân vỏ chuẩn phom gốc, pha màu vi tính chính xác tuyệt đối và sơn sấy trong phòng kín.',
    highlights: [
      'Gò nắn thân vỏ hợp kim nhôm và thép cường lực theo đúng khe hở tiêu chuẩn',
      'Hệ thống sơn gốc nước cao cấp cho bề mặt bóng sâu, bền màu lâu dài',
      'Đánh bóng hiệu chỉnh bề mặt sơn và phủ bảo vệ Ceramic / PPF',
    ],
  },
  {
    id: 'anh-sang-man-hinh-camera',
    index: '08',
    title: 'ÁNH SÁNG · MÀN HÌNH · CAMERA',
    image: GARAGE_IMAGES.serviceHeadlightLed,
    alt: 'Cụm đèn pha LED công nghệ cao với dải định vị ban ngày sắc nét',
    objectPosition: 'center center',
    summary: 'Nâng cấp bi-LED/Laser, màn hình Android liền camera 360 và hệ thống hỗ trợ lái an toàn sắc nét.',
    highlights: [
      'Lắp đặt bi-LED, bi-Laser giữ nguyên đường cắt sáng chuẩn không gây chói xe đối diện',
      'Nâng cấp màn hình giải trí trung tâm giữ nguyên hệ điều hành zin của xe',
      'Hệ thống camera 360 độ, cảnh báo điểm mù và cảm biến áp suất lốp TPMS',
    ],
  },
  {
    id: 'dien-may-gam',
    index: '09',
    title: 'ĐIỆN · MÁY · GẦM',
    image: GARAGE_IMAGES.heroBmwGarage,
    alt: 'Xe sang nâng cầu kiểm tra hệ thống điện, máy và khung gầm tại xưởng',
    objectPosition: '78% center',
    summary: 'Kiểm tra và phục hồi hệ thống treo khí nén, giảm xóc điện tử, thước lái và hệ thống điện thân xe.',
    highlights: [
      'Thay thế càng A, rotuyn, cao su chân máy và giảm xóc chính hãng',
      'Xử lý rò rỉ bóng hơi phuộc điện tử, lỗi hệ thống lái trợ lực điện EPS',
      'Kiểm tra máy phát, củ đề, hộp cầu chì và xử lý chập chờn điện thân xe',
    ],
  },
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'mam-xe-cao-cap',
    name: 'MÂM XE CAO CẤP',
    image: GARAGE_IMAGES.productForgedWheel,
    alt: 'Mâm xe hợp kim đa chấu màu đen thể thao cao cấp',
    category: 'Mâm & Ngoại thất',
    summary: 'Mâm hợp kim Forged / Flow-Forming siêu nhẹ, thiết kế đa chấu thể thao chuẩn thông số cho BMW, Mercedes-Benz, Audi.',
    specs: [
      'Kích thước đa dạng từ 18 inch đến 21 inch',
      'Tối ưu trọng lượng quay giúp tăng độ nhạy lái và tản nhiệt phanh',
      'Lắp đặt chuẩn PCD, CB không rung lắc ở dải tốc độ cao',
    ],
  },
  {
    id: 'lop-xe',
    name: 'LỐP XE',
    image: GARAGE_IMAGES.productPerformanceTire,
    alt: 'Lốp xe hiệu suất cao bám đường vượt trội',
    category: 'Lốp & Vận hành',
    summary: 'Các dòng lốp Performance & Run-Flat cao cấp giúp bám đường ướt tối ưu, êm ái và giảm ồn khoang cabin.',
    specs: [
      'Cấu trúc gai lốp thoát nước nhanh, ổn định thân xe khi vào cua',
      'Tùy chọn lốp chống xịt Run-Flat chuẩn cho xe sang châu Âu',
      'Miễn phí công lắp đặt, thay van và cân bằng động bánh xe',
    ],
  },
  {
    id: 'den-anh-sang',
    name: 'ĐÈN & ÁNH SÁNG',
    image: GARAGE_IMAGES.productBiledLens,
    alt: 'Cụm bi-LED projector nâng cấp ánh sáng ô tô viền xanh dương',
    category: 'Hệ thống chiếu sáng',
    summary: 'Giải pháp nâng cấp bi-LED và bi-Laser hiệu suất cao, tăng cường tầm nhìn ban đêm và giữ thẩm mỹ nguyên bản.',
    specs: [
      'Ánh sáng cắt gọn sắc nét, chiếu xa rộng mà không gây chói mắt xe ngược chiều',
      'Tản nhiệt nhôm CNC bền bỉ, giữ nguyên hệ thống điện zin cắm giắc',
      'Căn chỉnh góc chiếu bằng máy chuyên dụng tại xưởng',
    ],
  },
  {
    id: 'man-hinh-camera',
    name: 'MÀN HÌNH & CAMERA',
    image: GARAGE_IMAGES.productAndroidHeadunit,
    alt: 'Màn hình Android giải trí ô tô sắc nét tích hợp bản đồ dẫn đường',
    category: 'Giải trí & An toàn',
    summary: 'Màn hình giải trí chuẩn tỷ lệ xe sang tích hợp Apple CarPlay không dây, dẫn đường trực tuyến và camera 360.',
    specs: [
      'Hiển thị song song giao diện nguyên bản của xe và hệ điều hành Android',
      'Hỗ trợ camera 360 độ góc rộng quan sát toàn cảnh khi đỗ xe',
      'Lắp đặt cắm giắc zin 100%, không cắt nối dây điện nguyên bản',
    ],
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'bmw-3-series',
    title: 'BMW 3 SERIES',
    description: 'Bảo dưỡng định kỳ, coding và nâng cấp tiện ích theo yêu cầu của chủ xe.',
    image: GARAGE_IMAGES.projectBmwShowroom,
    alt: 'BMW 3 Series màu trắng hoàn thiện bảo dưỡng và nâng cấp tại xưởng',
    categories: ['BMW', 'BẢO DƯỠNG', 'NÂNG CẤP'],
    featuredDefault: true,
    details: [
      'Bảo dưỡng cấp 40.000 km toàn bộ hệ thống dầu nhớt, lọc và dung dịch làm mát',
      'Coding kích hoạt Apple CarPlay không dây, đèn chào mừng và đồng hồ thể thao',
      'Cân chỉnh thước lái, kiểm tra gầm và phủ bảo vệ bề mặt sơn',
    ],
  },
  {
    id: 'mercedes-c-class',
    title: 'MERCEDES-BENZ C-CLASS',
    description: 'Chẩn đoán, chăm sóc và nâng cấp ánh sáng – nội thất cho dòng xe sang.',
    image: GARAGE_IMAGES.projectMercedesCclass,
    alt: 'Mercedes-Benz C-Class màu bạc trong phòng chăm sóc xe',
    categories: ['MERCEDES-BENZ', 'NÂNG CẤP'],
    featuredDefault: true,
    details: [
      'Chẩn đoán chuyên sâu hệ thống điện và cảm biến bằng phần mềm Xentry',
      'Nâng cấp hệ thống đèn viền nội thất 64 màu và cụm đèn pha Multibeam hiệu suất cao',
      'Vệ sinh chi tiết khoang nội thất da và đánh bóng hiệu chỉnh sơn',
    ],
  },
  {
    id: 'audi-a4-avant',
    title: 'AUDI A4 AVANT',
    description: 'Kiểm tra tổng thể, bảo dưỡng và cân chỉnh vận hành chuyên sâu.',
    image: GARAGE_IMAGES.projectAudiAvant,
    alt: 'Audi A4 Avant màu xám xi măng kiểm tra kỹ thuật tại garage',
    categories: ['BẢO DƯỠNG', 'NÂNG CẤP'],
    featuredDefault: true,
    details: [
      'Bảo dưỡng hộp số ly hợp kép S-Tronic và thay dầu cầu Quattro',
      'Kiểm tra hệ thống treo đa liên kết và thay thế cao su gầm tiêu chuẩn OEM',
      'Cân bằng động 4 bánh và kiểm tra vận hành thực tế trên đường',
    ],
  },
  {
    id: 'bmw-workshop-lift',
    title: 'BMW 330I M SPORT',
    description: 'Kiểm tra gầm máy toàn diện, thay phanh hiệu suất cao và bảo dưỡng hộp số ZF.',
    image: GARAGE_IMAGES.heroBmwGarage,
    alt: 'BMW 330i M Sport trên cầu nâng kiểm tra kỹ thuật',
    categories: ['BMW', 'BẢO DƯỠNG'],
    featuredDefault: false,
    details: [
      'Thay dầu hộp số ZF 8 cấp cùng lọc nhớt hộp số nguyên cụm',
      'Nâng cấp má phanh, đĩa phanh thông gió và thay dầu phanh DOT4',
      'Kiểm tra hệ thống làm mát turbo và cảm biến động cơ',
    ],
  },
  {
    id: 'mercedes-sunset-touring',
    title: 'MERCEDES-BENZ C300 AMG',
    description: 'Bảo dưỡng cấp lớn, phục hồi hệ thống treo và cân chỉnh góc đặt bánh xe.',
    image: GARAGE_IMAGES.processMercedesSunset,
    alt: 'Mercedes-Benz C300 AMG vận hành ổn định sau bảo dưỡng',
    categories: ['MERCEDES-BENZ', 'BẢO DƯỠNG'],
    featuredDefault: false,
    details: [
      'Kiểm tra và thay thế chân máy, chân số giảm rung động',
      'Bảo dưỡng định kỳ động cơ và hệ thống điều hòa chuyên sâu',
      'Kiểm tra chạy thử thực tế đảm bảo độ êm ái tối đa',
    ],
  },
  {
    id: 'ambient-retrofit-package',
    title: 'GÓI RETROFIT NỘI THẤT & PHANH',
    description: 'Nâng cấp nội thất ambient light, vô lăng carbon và cụm phanh đa piston.',
    image: GARAGE_IMAGES.galleryAmbientInterior,
    alt: 'Nâng cấp nội thất thể thao và ánh sáng viền xe sang',
    categories: ['NÂNG CẤP', 'BMW', 'MERCEDES-BENZ'],
    featuredDefault: false,
    details: [
      'Thi công hệ thống LED viền nội thất đồng bộ điều khiển trên màn hình zin',
      'Nâng cấp vô lăng bọc da Nappa kết hợp sợi carbon thể thao',
      'Kiểm tra an toàn hệ thống điện sau lắp đặt theo tiêu chuẩn kỹ thuật',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: GARAGE_IMAGES.heroBmwGarage,
    alt: 'Khu vực cầu nâng và tiếp nhận sửa chữa xe Đức tại Garage Gia Khánh Performance',
    caption: 'Khu vực xưởng dịch vụ với hệ thống cầu nâng chuyên dụng và trang thiết bị hiện đại',
  },
  {
    id: 'gal-2',
    image: GARAGE_IMAGES.aboutMechanicHood,
    alt: 'Kỹ thuật viên bảo dưỡng khoang động cơ xe sang tại xưởng',
    caption: 'Kiểm tra và bảo dưỡng khoang động cơ tỉ mỉ theo đúng quy trình kỹ thuật',
  },
  {
    id: 'gal-3',
    image: GARAGE_IMAGES.galleryAmbientInterior,
    alt: 'Không gian nội thất xe sang nâng cấp ghế da và đèn viền ambient xanh dương',
    caption: 'Nâng cấp nội thất cao cấp, bọc da thể thao và hệ thống đèn viền ambient',
  },
  {
    id: 'gal-4',
    image: GARAGE_IMAGES.serviceDiagnosticTablet,
    alt: 'Thiết bị chẩn đoán điện tử kết nối kiểm tra lỗi động cơ xe Đức',
    caption: 'Chẩn đoán lỗi chuyên sâu và đọc thông số động trực tiếp bằng thiết bị chuyên hãng',
  },
  {
    id: 'gal-5',
    image: GARAGE_IMAGES.galleryBrakeCalipers,
    alt: 'Cụm heo phanh màu đỏ và đĩa phanh đục lỗ hiệu suất cao',
    caption: 'Cung cấp và lắp đặt cụm phanh hiệu suất cao, đĩa phanh tản nhiệt chuẩn hãng',
  },
  {
    id: 'gal-6',
    image: GARAGE_IMAGES.serviceBodyPaint,
    alt: 'Phòng sơn tiêu chuẩn phục hồi thẩm mỹ ngoại thất xe sang',
    caption: 'Phòng sơn sấy chuyên nghiệp đảm bảo độ bóng sâu và chuẩn mã màu gốc',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-phanh',
    date: '18/11/2026',
    title: 'Dấu hiệu cần kiểm tra hệ thống phanh',
    excerpt: 'Tiếng kêu lạ, bàn đạp mềm, xe kéo lệch… là những dấu hiệu cần kiểm tra phanh ngay.',
    image: GARAGE_IMAGES.galleryBrakeCalipers,
    alt: 'Kiểm tra đĩa phanh và cụm heo phanh trên xe sang',
    content: [
      'Hệ thống phanh là trang bị an toàn quan trọng bậc nhất trên mọi mẫu xe, đặc biệt với các dòng xe Đức có công suất lớn như BMW hay Mercedes-Benz.',
      'Nếu bạn nhận thấy tiếng rít kim loại khi đạp phanh, bàn đạp phanh có cảm giác hụt hoặc sâu hơn bình thường, vô lăng bị rung lắc khi hãm tốc độ cao, hoặc xe có xu hướng nhao sang một bên khi rà phanh — đó là dấu hiệu má phanh đã mòn đến giới hạn hoặc đĩa phanh bị cong vênh.',
      'Tại Garage Gia Khánh Performance, đội ngũ kỹ thuật viên khuyến nghị kiểm tra độ dày má phanh, đĩa phanh và nồng độ ẩm dầu phanh mỗi 10.000 km hoặc trước những chuyến đi xa để đảm bảo an toàn tuyệt đối.',
    ],
  },
  {
    id: 'news-hop-so',
    date: '18/11/2026',
    title: 'Khi nào nên bảo dưỡng hộp số',
    excerpt: 'Hộp số giật, trượt hoặc đã đến mốc km khuyến nghị? Tìm hiểu thời điểm thay dầu hợp lý.',
    image: GARAGE_IMAGES.serviceEngineGearbox,
    alt: 'Kiểm tra và bảo dưỡng hộp số tự động xe Đức',
    content: [
      'Nhiều chủ xe thường lầm tưởng dầu hộp số tự động dùng trọn đời xe. Tuy nhiên, trong điều kiện vận hành nóng ẩm và giao thông đô thị tại Việt Nam, dầu hộp số xuống cấp nhanh hơn rất nhiều.',
      'Các chuyên gia kỹ thuật tại Gia Khánh Performance khuyến nghị nên thay dầu hộp số tự động định kỳ mỗi 50.000 – 60.000 km (kèm cacte lọc dầu đối với hộp số ZF, 7G-Tronic, 9G-Tronic).',
      'Việc bảo dưỡng đúng hạn giúp hộp số chuyển số mượt mà, bảo vệ các lá côn và van điện từ Mechatronic, tránh chi phí sửa chữa lớn về sau.',
    ],
  },
  {
    id: 'news-nang-cap',
    date: '18/11/2026',
    title: 'Những lưu ý khi nâng cấp xe Đức',
    excerpt: 'Coding, độ đèn, mâm lốp… những điều cần biết trước khi nâng cấp BMW, Mercedes.',
    image: GARAGE_IMAGES.processMercedesSunset,
    alt: 'Mercedes-Benz vận hành trên đường sau khi nâng cấp đúng kỹ thuật',
    content: [
      'Hệ thống điện và mạng giao tiếp CAN-BUS trên BMW, Mercedes-Benz hay Audi có tính bảo mật và đồng bộ rất cao. Vì vậy, mọi hạng mục nâng cấp đều cần tuân thủ đúng chuẩn kỹ thuật để không phát sinh lỗi hệ thống.',
      'Khi nâng cấp màn hình, camera 360 hoặc hệ thống đèn chiếu sáng, nên ưu tiên giải pháp cắm giắc zin 100% và không cắt trích dây điện gốc. Đối với coding và retrofit trang bị chính hãng, cần sao lưu dữ liệu hộp điều khiển trước khi lập trình.',
      'Lựa chọn đơn vị có máy chẩn đoán chuyên hãng và kinh nghiệm thực chiến với xe Đức sẽ giúp chiếc xe vừa đẹp hơn, tiện nghi hơn mà vẫn giữ nguyên sự ổn định bền bỉ.',
    ],
  },
];
