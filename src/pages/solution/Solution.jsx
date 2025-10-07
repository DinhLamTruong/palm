import React, { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const technologySolutionsData = [
  {
    title: 'Hệ thống quản lý camera giám sát - tích hợp AI',
    description: `PalmTek mang đến các giải pháp bảo mật toàn diện, giúp doanh nghiệp phòng ngừa, phát hiện và ứng phó kịp thời với các mối đe dọa mạng. Ứng dụng công nghệ hiện đại kết hợp hệ thống giám sát thông minh, chúng tôi bảo vệ dữ liệu và hạ tầng số, đảm bảo hoạt động liên tục.`,
    imageUrl: '/src/pages/solution/imgs/1.png',
  },
  {
    title: 'Giải pháp an toàn an ninh mạng',
    description: `Giải pháp an toàn an ninh mạng của chúng tôi giúp bảo vệ hệ thống khỏi các cuộc tấn công mạng, đảm bảo an toàn thông tin và duy trì sự ổn định cho doanh nghiệp.`,
    imageUrl: '/src/pages/solution/imgs/2.png',
  },
  {
    title: 'Xử lý ngôn ngữ tự nhiên',
    description: `Công nghệ xử lý ngôn ngữ tự nhiên giúp tự động hóa các tác vụ liên quan đến ngôn ngữ, nâng cao hiệu quả giao tiếp và phân tích dữ liệu.`,
    imageUrl: '/src/pages/solution/imgs/3.png',
  },
  {
    title: 'Điện toán đám mây',
    description: `Dịch vụ điện toán đám mây của chúng tôi cung cấp khả năng mở rộng linh hoạt, bảo mật cao và tối ưu chi phí cho doanh nghiệp.`,
    imageUrl: '/src/pages/solution/imgs/4.png',
  },
  {
    title: 'Nền tảng phần mềm tùy chỉnh',
    description: `Phát triển nền tảng phần mềm tùy chỉnh đáp ứng chính xác nhu cầu kinh doanh, giúp tối ưu quy trình và nâng cao hiệu suất.`,
    imageUrl: '/src/pages/solution/imgs/5.png',
  },
];

const partnersLogos = [
  { src: '/src/pages/solution/partnersCLients/1.png', alt: 'Mobifone' },
  { src: '/src/pages/solution/partnersCLients/2.png', alt: 'Gtel' },
  { src: '/src/pages/solution/partnersCLients/3.png', alt: 'O Cau' },
  { src: '/src/pages/solution/partnersCLients/4.png', alt: 'UNTIT' },
  { src: '/src/pages/solution/partnersCLients/5.png', alt: 'N' },
  { src: '/src/pages/solution/partnersCLients/6.png', alt: 'Network Optix' },
];

const clientsList = [
  [
    'Bộ công an',
    'Bộ Thông tin và Truyền thông',
    'Bộ ngoại giao',
    'Bộ Văn hoá Thể thao và Du lịch',
    'Bộ Công thương',
    'Bộ Tài chính',
    'Thông tấn xã Việt Nam',
    'Đại học Quốc gia Hà Nội',
    'Hội tự động hoá Việt Nam',
  ],
  [
    'Nhà xuất bản Giáo dục',
    'Nhà xuất bản Trẻ',
    'Nhà xuất bản Kim Đồng',
    'Nhà xuất bản Văn học',
    'Nhà xuất bản Chính trị Quốc gia - Sự thật',
    'Trường Đại học Lao động - Xã hội',
    'Trường Đại học Khoa học và Nhân văn',
    'Hội Nhà văn Việt Nam',
  ],
  [
    'Tỉnh ủy - UBND tỉnh thừa thiên huế',
    'Tỉnh ủy - UBND tỉnh Quảng Ninh',
    'Sở Thông tin và Truyền thông Hà Nội',
    'Sở Thông tin và Truyền thông TP. Hồ Chí Minh',
    'Sở Thông tin và Truyền thông Thừa Thiên Huế',
    'Sở Thông tin và Truyền thông Quảng Ninh',
    'Cục Tin học - Thống kê Bộ Tài chính',
    'Trung tâm Biên phiên dịch - Bộ Ngoại giao',
  ],
];

const TechnologySolutions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const scrollRef = useRef(null);

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="my-12 px-6 max-w-7xl mx-auto relative">
      <h2 className="text-5xl font-bold mb-10">Giải Pháp Công Nghệ</h2>

      {/* Nút trái */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow p-3 hover:bg-gray-100"
      >
        <FiChevronLeft className="text-xl" />
      </button>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {technologySolutionsData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative min-w-[337px] h-[503px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer group transition-all duration-700 ${
                isExpanded ? 'scale-110 z-10' : ''
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover brightness-75 transition duration-300 group-hover:brightness-50"
              />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base transition-opacity duration-300">
                {item.title}
              </div>
              <div
                className={`absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-700 p-4 flex items-center transform translate-y-4 group-hover:translate-y-0 ${
                  isExpanded ? 'opacity-100 translate-y-0' : ''
                }`}
              >
                <p className="text-white text-sm md:text-base whitespace-pre-line transition-all duration-700">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

        {/* Nút phải */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow p-3 hover:bg-gray-100"
      >
        <FiChevronRight className="text-xl" />
      </button>
    </section>
  );
};

const Product = () => {
  return (
    <section className="my-12 px-6 max-w-7xl mx-auto leading-[0.72]">
      <h2 className="text-5xl font-bold mb-4 leading-[0.72] mb-10">Sản Phẩm</h2>
      <p className="mb-4 text-2xl">
        PalmTek cung cấp thiết bị an ninh chuyên dụng với công nghệ hiện đại, đảm bảo hiệu quả và độ tin cậy cao.
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-800 text-2xl ml-10">
        <li>Hệ thống giám sát camera</li>
        <li>Camera nhiệt tầm xa</li>
        <li>Camera soi khe hẹp</li>
        <li>Thiết bị nghe âm thanh quang học từ xa</li>
        <li>Radar nhìn xuyên tường</li>
        <li>Thiết bị chống drone (anti-drone)</li>
      </ul>
    </section>
  );
};

const PartnersClients = () => {
  return (
    <section className="my-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl leading-[0.72] font-bold mb-14">Đối tác và Khách hàng</h2>
      <div className="flex space-x-6 mb-6 overflow-x-auto scrollbar-hide">
        {partnersLogos.map((logo, index) => (
          <div
            key={index}
            // className="flex-shrink-0 border rounded-lg p-2 bg-white shadow-md"
            style={{
              minWidth: '50px',
              // height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={logo.src} alt={logo.alt} className="sobject-contain" />
          </div>
        ))}
      </div>
      <div className="bg-white border rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-lg font-medium text-gray-700">
        {clientsList.map((column, colIndex) => (
          <ul key={colIndex} className="space-y-1">
            {column.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative h-120 flex items-center justify-center text-white text-3xl font-semibold"
        style={{
          backgroundImage: "url('/src/assets/Img/bannerpage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative font-medium text-6xl z-10">Giải pháp</h1>
      </div>

      {/* Technology Solutions */}
      <TechnologySolutions />

      {/* Product Section */}
      <Product />

      {/* Partners and Clients */}
      <PartnersClients />
    </div>
  );
};

export default Solution;
