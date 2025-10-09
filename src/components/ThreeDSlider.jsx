import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'; // For responsive breakpoints
import styles from './ThreeDSlider.module.css';

import Lake from '../assets/Img/V-Lake.jpg';
import Transform from '../assets/Img/V-Transform.jpg';
import Lang from '../assets/Img/V-Lang.jpg';
import Lab from '../assets/Img/V-Lab.jpg';
import Azur from '../assets/Img/V-Azur.jpg';

const ThreeDSlider = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Responsive breakpoints using react-responsive
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Dynamic Swiper configuration
  const swiperConfig = {
    slidesPerView: isMobile ? 1 : isTablet ? 1.5 : 2,
    spaceBetween: isMobile ? 20 : isTablet ? 60 : 120,
  };

  const images = [
    {
      src: Lake,
      title: t('home.solutions.vLake.title'),
      text: t('home.solutions.vLake.text'),
      alt: t('home.solutions.vLake.alt'),
    },
    {
      src: Transform,
      title: t('home.solutions.vTransform.title'),
      text: t('home.solutions.vTransform.text'),
      alt: t('home.solutions.vTransform.alt'),
    },
    {
      src: Lang,
      title: t('home.solutions.vLang.title'),
      text: t('home.solutions.vLang.text'),
      alt: t('home.solutions.vLang.alt'),
    },
    {
      src: Lab,
      title: t('home.solutions.vLab.title'),
      text: t('home.solutions.vLab.text'),
      alt: t('home.solutions.vLab.alt'),
    },
    {
      src: Azur,
      title: t('home.solutions.vAzur.title'),
      text: t('home.solutions.vAzur.text'),
      alt: t('home.solutions.vAzur.alt'),
    },
  ];

  const handleClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sectionTitle}>{t('home.featuredSolutions')}</h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={swiperConfig.slidesPerView}
        spaceBetween={swiperConfig.spaceBetween}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: isMobile ? 80 : isTablet ? 100 : 120,
          modifier: 2,
          slideShadows: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.swiper}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleClick(index)}
              className={`${styles.slide} ${
                activeIndex === index ? styles.activeSlide : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={styles.slideImage}
                loading="lazy"
              />
              <div className={styles.slideContent}>
                <h3 className={styles.slideTitle}>{item.title}</h3>
                <p className={styles.slideText}>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThreeDSlider;