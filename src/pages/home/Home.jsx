import React from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThreeDSlider from '../../components/ThreeDSlider';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${styles.banner} relative`}>
        <img
          src="src/assets/Img/banner.png"
          alt=""
          className={styles.bannerImg}
        />
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
            <NavLink to="/about" className={styles.cardButton}>
              <button className="mt-6">{t('home.aboutUs')}</button>
            </NavLink>
          </div>
          <div className={styles.cardImage}>
            <img
              src="src/assets/Img/since2007.png"
              alt="Hình ảnh mạng lưới công nghệ"
              className={styles.cardImageImg}
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* Mục tiêu & Tầm nhìn Section */}
        <section className={styles.section} id="goals">
          <h2 className={`${styles.sectionTitle} font-bold`}>{t('home.goalsVision')}</h2>
          <div className={styles.goalsGrid}>
            <div className={styles.goalCard}>
              <img
                src="src/assets/Img/communityservice.svg"
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
                src="src/assets/Img/idea.svg"
                alt="Creating New Ideas"
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>{t('home.innovate')}</h3>
              <p className={styles.goalCardText}>{t('home.innovateText')}</p>
            </div>
            <div className={styles.goalCard}>
              <img
                src="src/assets/Img/growup.svg"
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
          <h2 className={`${styles.sectionTitle} font-bold`}>{t('home.strategicPartners')}</h2>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>
              <img
                src="src/assets/Img/palmcap.png"
                alt="Palms Capital"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src="src/assets/Img/mobile.png"
                alt="Mobifone"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src="src/assets/Img/logo_gtel.svg"
                alt="Viettel"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src="src/assets/Img/bocauservice.png"
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
