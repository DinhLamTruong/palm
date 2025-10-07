import React, { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import banner from '../../assets/Img/bannerpage.png'; // Adjust path as needed
import img1 from '../../assets/partnersClients/1.png';
import img2 from '../../assets/partnersClients/2.png';
import img3 from '../../assets/partnersClients/3.png';
import img4 from '../../assets/partnersClients/4.png';
import img5 from '../../assets/partnersClients/5.png';
import img6 from '../../assets/partnersClients/6.png';

import img1Slu from '../../assets/imgsSolution/1.png';
import img2Slu from '../../assets/imgsSolution/2.png';
import img3Slu from '../../assets/imgsSolution/3.png';
import img4Slu from '../../assets/imgsSolution/4.png';
import img5Slu from '../../assets/imgsSolution/5.png';

const partnersLogos = [
  { src: img1, alt: 'Mobifone' },
  { src: img2, alt: 'Gtel' },
  { src: img3, alt: 'O Cau' },
  { src: img4, alt: 'UNITT' },
  { src: img5, alt: 'N' },
  { src: img6, alt: 'Network Optix' },
];

const TechnologySolutions = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const scrollRef = useRef(null);

  const technologySolutionsData = [
    {
      title: t('solution.solutions.camera.title'),
      description: t('solution.solutions.camera.description'),
      imageUrl: img1Slu,
    },
    {
      title: t('solution.solutions.security.title'),
      description: t('solution.solutions.security.description'),
      imageUrl: img2Slu,
    },
    {
      title: t('solution.solutions.nlp.title'),
      description: t('solution.solutions.nlp.description'),
      imageUrl: img3Slu,
    },
    {
      title: t('solution.solutions.cloud.title'),
      description: t('solution.solutions.cloud.description'),
      imageUrl: img4Slu,
    },
    {
      title: t('solution.solutions.custom.title'),
      description: t('solution.solutions.custom.description'),
      imageUrl: img5Slu,
    },
  ];

  const handleClick = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const scroll = direction => {
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
      <h2 className="text-5xl font-bold mb-10">
        {t('solution.technologySolutions')}
      </h2>

      {/* Nút trái */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow p-3 hover:bg-gray-100"
      >
        <FiChevronLeft className="text-xl" />
      </button>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-hidden scrollbar-hide scroll-smooth"
      >
        {technologySolutionsData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative min-w-[240px] h-[360px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer group transition-all duration-700 ${
                isExpanded ? 'scale-110 z-10' : ''
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[360px] object-cover brightness-75 transition duration-300 group-hover:brightness-50"
              />
              <div className="absolute left-4 bottom-4 transition-all group-hover:z-100 transform group-hover:-translate-y-70 text-white font-semibold text-sm md:text-base transition-opacity duration-700">
                {item.title}
              </div>
              <div
                className={`absolute inset-0 bg-black/20 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-700 p-4 flex items-center transform translate-y-4 group-hover:translate-y-0 ${
                  isExpanded ? 'opacity-100 translate-y-0' : ''
                }`}
              >
                <div
                  className={`group-hover:mt-20 max-h-60 overflow-y-auto text-white text-sm md:text-base pr-2 transform transition-all duration-500 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 custom-scrollbar`}
                  style={{ scrollbarGutter: 'stable' }}
                >
                  <p className="whitespace-pre-line leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Nút phải */}
      <button
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow p-3 hover:bg-gray-100"
      >
        <FiChevronRight className="text-xl" />
      </button>
    </section>
  );
};

const Product = () => {
  const { t } = useTranslation();
  const products = t('solution.productList', { returnObjects: true });
  return (
    <section className="my-12 px-6 max-w-7xl mx-auto leading-[0.72]">
      <h2 className="text-5xl font-bold mb-4 leading-[0.72] mb-10">
        {t('solution.products')}
      </h2>
      <p className="mb-4 text-2xl">{t('solution.productsDescription')}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-800 text-2xl ml-10">
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </section>
  );
};

const PartnersClients = () => {
  const { t } = useTranslation();
  const clients = t('solution.clients', { returnObjects: true });

  return (
    <section className="my-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl leading-[0.72] font-bold mb-14">
        {t('solution.partnersClients')}
      </h2>
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
        {clients.map((column, colIndex) => (
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
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative h-100 flex items-center justify-center text-white text-3xl font-semibold"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative font-medium text-6xl z-10">
          {t('solution.title')}
        </h1>
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
