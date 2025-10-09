import React, { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import styles from './Solution.module.css';
import banner from '../../assets/Img/bannerpage.png';
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
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{t('solution.technologySolutions')}</h2>
      <button
        onClick={() => scroll('left')}
        className={styles.scrollButtonLeft}
      >
        <FiChevronLeft className={styles.icon} />
      </button>
      <div ref={scrollRef} className={styles.solutionsContainer}>
        {technologySolutionsData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`${styles.solutionCard} ${isExpanded ? styles.expanded : ''}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className={styles.solutionImage}
              />
              <div className={styles.solutionTitle}>{item.title}</div>
              <div className={`${styles.solutionOverlay} ${isExpanded ? styles.overlayVisible : ''}`}>
                <div className={styles.solutionDescription}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => scroll('right')}
        className={styles.scrollButtonRight}
      >
        <FiChevronRight className={styles.icon} />
      </button>
    </section>
  );
};

const Product = () => {
  const { t } = useTranslation();
  const products = t('solution.productList', { returnObjects: true });
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{t('solution.products')}</h2>
      <p className={styles.sectionDescription}>{t('solution.productsDescription')}</p>
      <ul className={styles.productList}>
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
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{t('solution.partnersClients')}</h2>
      <div className={styles.partnersContainer}>
        {partnersLogos.map((logo, index) => (
          <div key={index} className={styles.partnerLogo}>
            <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
          </div>
        ))}
      </div>
      <div className={styles.clientsGrid}>
        {clients.map((column, colIndex) => (
          <ul key={colIndex} className={styles.clientList}>
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
    <div className={styles.container}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className={styles.bannerOverlay}></div>
        <h1 className={styles.bannerTitle}>{t('solution.title')}</h1>
      </div>
      <TechnologySolutions />
      <Product />
      <PartnersClients />
    </div>
  );
};

export default Solution;