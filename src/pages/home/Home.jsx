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
        <img
          src={bannerImage}
          alt=""
          className={`${styles.bannerImg} !h-[380px]`}
        />
        <NavLink to="/about" className={`${styles.contactButton}`}>
          <button className={styles.bannerButton}>
            {t('home.discoverNow')}
          </button>
        </NavLink>
        <span className="flex flex-col absolute left-36 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-4xl text-white shadow p-3 font-medium leading-[1.45]">
          <p>{t('home.bannerLine1')}</p>
          <p>{t('home.bannerLine2')}</p>
        </span>
      </div>
      <div className={styles.containerSince}>
        <div className={`${styles.card} !h-120`}>
          <div className={styles.cardContent}>
            <h2 className={`${styles.cardText} !text-[20px]`}>{t('home.established2007')}</h2>
            <p className={`${styles.cardText} !text-[25px]`}>{t('home.aboutText1')}</p>
            <p className={`${styles.cardText} !text-[25px]`}>{t('home.aboutText2')}</p>
            <div className="flex justify-center mt-6">
              <NavLink
                to="/about"
                className="inline-flex items-center w-[195px] h-[40px] px-5 py-1.5 border-2 border-red-600 text-red-600 font-bold rounded-full uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all"
                aria-label={t('home.aboutUs')}
              >
                <span className="text-[15px]">{t('home.aboutUs')}</span>
                <img src={icons_arrow_left} className="ml-2" />
              </NavLink>
            </div>
          </div>
          <div className={styles.cardImage}>
            <img
              src={since2007}
              alt="Hình ảnh mạng lưới công nghệ"
              className={`${styles.cardImageImg} !h-80 mt-10`}
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* Mục tiêu & Tầm nhìn Section */}
        <section className={styles.section} id="goals">
          <h2 className={`${styles.sectionTitle} !text-3xl`}>
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
          <h2 className={`${styles.sectionTitle} !text-3xl`}>
            {t('home.strategicPartners')}
          </h2>
          <div className={styles.partnersGrid}>
            <div className={`${styles.partnerLogo} !w-40 !h-20`}>
              <img
                src={palmcap}
                alt="Palms Capital"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={`${styles.partnerLogo} !w-40 !h-20`}>
              <img
                src={mobile}
                alt="Mobifone"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={`${styles.partnerLogo} !w-40 !h-20`}>
              <img
                src={logo_gtel}
                alt="Viettel"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={`${styles.partnerLogo} !w-40 !h-20`}>
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
