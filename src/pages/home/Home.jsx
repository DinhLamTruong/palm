import React from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThreeDSlider from '../../components/ThreeDSlider';

import bannerImage from '../../assets/Img/banner.png';
import since2007 from '../../assets/Img/since2007.png';
import communityservice from '../../assets/Img/communityservice.svg';
import idea from '../../assets/Img/idea.svg';
import growup from '../../assets/Img/growup.svg';
import palmcap from '../../assets/Img/palmcap.png';
import mobile from '../../assets/Img/mobile.png';
import logo_gtel from '../../assets/Img/logo_gtel.svg';
import bocauservice from '../../assets/Img/bocauservice.png';
import icons_arrow_left from '../../assets/Img/icons_arrow_left.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${styles.banner} relative`}>
        <img src={bannerImage} alt="" className={styles.bannerImg} />
        <NavLink to="/about" className={styles.contactButton}>
          <button className={styles.bannerButton}>
            {t('home.discoverNow')}
          </button>
          <h4 className="flex flex-col absolute left-30 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-5xl shadow p-3 font-medium leading-[1.25]">
            <span>{t('home.bannerLine1')}</span>
            <span>{t('home.bannerLine2')}</span>
          </h4>
        </NavLink>
      </div>
      <div className={styles.containerSince}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{t('home.established2007')}</h2>
            <p className={styles.cardText}>{t('home.aboutText1')}</p>
            <p className={styles.cardText}>{t('home.aboutText2')}</p>
            <div className="flex justify-center mt-6">
              <NavLink
                to="/about"
                className="inline-flex items-center px-6 py-2 border-2 border-red-600 text-red-600 font-bold rounded-full uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all"
                aria-label={t('home.aboutUs')}
              >
                <span className="text-xl">{t('home.aboutUs')}</span>
                <img src={icons_arrow_left} className='ml-4' />
              </NavLink>
            </div>
          </div>
          <div className={styles.cardImage}>
            <img
              src={since2007}
              alt="Hình ảnh mạng lưới công nghệ"
              className={styles.cardImageImg}
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* Mục tiêu & Tầm nhìn Section */}
        <section className={styles.section} id="goals">
          <h2 className={`${styles.sectionTitle} font-bold`}>
            {t('home.goalsVision')}
          </h2>
          <div className={styles.goalsGrid}>
            <div className={styles.goalCard}>
              <img
                src={communityservice}
                alt="Community Services"
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>
                {t('home.serveCommunity')}
              </h3>
              <p className={styles.goalCardText}>
                {t('home.serveCommunityText')}
              </p>
            </div>
            <div className={styles.goalCard}>
              <img
                src={idea}
                alt="Creating New Ideas"
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>{t('home.innovate')}</h3>
              <p className={styles.goalCardText}>{t('home.innovateText')}</p>
            </div>
            <div className={styles.goalCard}>
              <img
                src={growup}
                alt="Development & Improvement"
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>
                {t('home.sustainableDevelopment')}
              </h3>
              <p className={styles.goalCardText}>
                {t('home.sustainableDevelopmentText')}
              </p>
            </div>
          </div>
        </section>
        {/* Giải pháp nổi bật Section */}
        <ThreeDSlider />

        {/* Đối tác chiến lược Section */}
        <section className={`${styles.section} mt-12`} id="partners">
          <h2 className={`${styles.sectionTitle} font-bold`}>
            {t('home.strategicPartners')}
          </h2>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>
              <img
                src={palmcap}
                alt="Palms Capital"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src={mobile}
                alt="Mobifone"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src={logo_gtel}
                alt="Viettel"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src={bocauservice}
                alt="Techcombank"
                className={styles.partnerLogoImg}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
