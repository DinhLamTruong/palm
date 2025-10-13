import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import bannerImage from '../../assets/Img/bannerpage.png';
import img1 from '../../assets/partnersClients/1.png';
import img2 from '../../assets/partnersClients/2.png';
import img3 from '../../assets/partnersClients/3.png';
import img4 from '../../assets/partnersClients/4.png';
import img5 from '../../assets/partnersClients/5.png';
import img6 from '../../assets/partnersClients/6.png';
import img1Slu from '../../assets/imgsSolution/1.jpg';
import img2Slu from '../../assets/imgsSolution/2.jpg';
import img3Slu from '../../assets/imgsSolution/3.jpg';
import img4Slu from '../../assets/imgsSolution/4.jpg';
import img5Slu from '../../assets/imgsSolution/5.jpg';
import img6Slu from '../../assets/imgsSolution/6.jpg';

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
    {
      title: t('solution.solutions.iot.title'),
      description: t('solution.solutions.iot.description'),
      imageUrl: img6Slu,
    },
  ];

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
    <section className="my-16 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-[23px] font-bold mb-8 leading-tight">
        {t('solution.technologySolutions')}
      </h2>
      <button
        onClick={() => scroll('left')}
        className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 transition z-10"
      >
        <FiChevronLeft className="text-xl" />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth no-scrollbar"
      >
        {technologySolutionsData.map((item, index) => (
          <div
            key={index}
            className="group min-w-[240px] w-[240px] h-[360px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer relative transition-transform duration-700 hover:scale-110 hover:z-10"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[360px] object-cover brightness-75 group-hover:brightness-50 transition"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-40 opacity-0 transition-all duration-700 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 flex flex-col">
              <div className="p-4 pb-2">
                <h3 className="text-white pt-5 font-semibold text-xl">{item.title}</h3>
              </div>
              <div className="flex-1 overflow-y-auto px-4 pb-4 transform transition-all duration-500 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-white text-base whitespace-pre-line leading-relaxed text-left">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-4 bottom-4 text-white font-semibold text-xl transition-opacity duration-300 group-hover:opacity-0 pointer-events-none z-20">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 transition z-10"
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
    <section className="my-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-[23px] font-bold mb-8 leading-tight">
        {t('solution.products')}
      </h2>
      <p className="text-2xl mb-4">{t('solution.productsDescription')}</p>
      <ul className="list-disc list-inside ml-10 text-2xl">
        {products.map((product, index) => (
          <li key={index} className="mb-1">{product}</li>
        ))}
      </ul>
    </section>
  );
};

const PartnersClients = () => {
  const { t } = useTranslation();
  const clients = t('solution.clients', { returnObjects: true });

  return (
    <section className="my-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-[23px] font-bold mb-8 leading-tight">
        {t('solution.partnersClients')}
      </h2>
      <div className="flex gap-6 mb-6 overflow-x-auto no-scrollbar">
        {partnersLogos.map((logo, index) => (
          <div key={index} className="min-w-[50px] flex items-center justify-center">
            <img src={logo.src} alt={logo.alt} className="object-contain" />
          </div>
        ))}
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 text-lg font-medium">
        {clients.map((column, colIndex) => (
          <ul key={colIndex} className="m-0">
            {column.map((client, index) => (
              <li key={index} className="mb-1">{client}</li>
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
    <div className="min-h-screen bg-cover bg-center bg-fixed">
      <div className="relative text-center mt-20 overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-[400px] object-cover block"
        />
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-2xl font-medium text-shadow-lg whitespace-nowrap"
        >
          {t('solution.title')}
        </h1>
      </div>
      <TechnologySolutions />
      <Product />
      <PartnersClients />
    </div>
  );
};

export default Solution;