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
      {/* Banner Section */}
      <div className={`${styles.banner} ${styles.relative} ${styles.overflowXHidden}`}>
        <img
          src={bannerImage}
          alt={t('home.bannerAlt')}
          className={`${styles.bannerImg} ${styles.widthFull} ${styles.objectCover} ${styles.height380}`}
        />
        <NavLink to="/about" className={styles.contactButton}>
          <button className={styles.bannerButton}>
            {t('home.discoverNow')}
          </button>
        </NavLink>
        <span
          className={`${styles.flex} ${styles.flexCol} ${styles.absolute} ${styles.left12} ${styles.xlLeft36} ${styles.xxlLeft36} ${styles.topHalf} ${styles.translateYNeg50} ${styles.z10} ${styles.cursorPointer} ${styles.text2xl} ${styles.xxlText4xl} ${styles.textWhite} ${styles.shadow} ${styles.p3} ${styles.fontMedium} ${styles.leading145}`}
        >
          <p>{t('home.bannerLine1')}</p>
          <p>{t('home.bannerLine2')}</p>
        </span>
      </div>

      {/* Since 2007 Section */}
      <div className={styles.containerSince}>
        <div className={`${styles.card} ${styles.height160}`}>
          <div className={styles.cardContent}>
            <h2
              className={`${styles.cardText} ${styles.text17} ${styles.xlText17} ${styles.xxlText17}`}
            >
              {t('home.established2007')}
            </h2>
            <p
              className={`${styles.cardText} ${styles.text20} ${styles.xlText20} ${styles.xxlText20}`}
            >
              {t('home.aboutText1')}
            </p>
            <p
              className={`${styles.cardText} ${styles.text20} ${styles.xlText20} ${styles.xxlText20}`}
            >
              {t('home.aboutText2')}
            </p>
            <div className={`${styles.flex} ${styles.justifyCenter} ${styles.mt6}`}>
              <NavLink
                to="/about"
                className={`${styles.inlineFlex} ${styles.itemsCenter} ${styles.w195} ${styles.h40} ${styles.px5} ${styles.py1_5} ${styles.border2} ${styles.borderRed600} ${styles.textRed600} ${styles.fontBold} ${styles.roundedFull} ${styles.uppercase} ${styles.trackingWider} ${styles.hoverBgRed600} ${styles.hoverTextWhite} ${styles.transitionAll}`}
                aria-label={t('home.aboutUs')}
              >
                <span
                  className={`${styles.flex1} ${styles.text15} ${styles.xlText15} ${styles.xxlText15}`}
                >
                  {t('home.aboutUs')}
                </span>
                <img src={icons_arrow_left} alt={t('home.arrowLeftAlt')} />
              </NavLink>
            </div>
          </div>
          <div
            className={`${styles.cardImage} ${styles.ml0} ${styles.mdMl20} ${styles.lgMl20} ${styles.xlMl20} ${styles.xxlMl20}`}
          >
            <img
              src={since2007}
              alt={t('home.since2007Alt')}
              className={`${styles.cardImageImg} ${styles.height300} ${styles.xlHeight400} ${styles.xxlHeight400} ${styles.maxWidthFull} ${styles.mt14}`}
            />
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className={styles.container}>
        <section className={styles.section} id="goals">
          <h2
            className={`${styles.sectionTitle} ${styles.text3xl} ${styles.flex} ${styles.justifyStart} ${styles.fontBold}`}
          >
            {t('home.goalsVision')}
          </h2>
          <div className={styles.goalsGrid}>
            <div className={`${styles.goalCard} ${styles.hoverBgFF0061}`}>
              <img
                src={communityservice}
                alt={t('home.communityServiceAlt')}
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>{t('home.serveCommunity')}</h3>
              <p className={styles.goalCardText}>{t('home.serveCommunityText')}</p>
            </div>
            <div
              className={`${styles.goalCard} ${styles.hoverGradient4FC3F7to29B6F6} ${styles.transitionAll300} ${styles.p4} ${styles.roundedLg}`}
            >
              <img
                src={idea}
                alt={t('home.ideaAlt')}
                className={`${styles.goalCardImg} ${styles.pointerEventsNone}`}
              />
              <h3 className={styles.goalCardTitle}>{t('home.innovate')}</h3>
              <p className={styles.goalCardText}>{t('home.innovateText')}</p>
            </div>
            <div className={`${styles.goalCard} ${styles.hoverBg6DC786}`}>
              <img
                src={growup}
                alt={t('home.growUpAlt')}
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>{t('home.sustainableDevelopment')}</h3>
              <p className={styles.goalCardText}>{t('home.sustainableDevelopmentText')}</p>
            </div>
          </div>
        </section>

        {/* ThreeDSlider Component */}
        <ThreeDSlider />

        {/* Partners Section */}
        <section className={`${styles.section} ${styles.mt12}`} id="partners">
          <h2 className={`${styles.sectionTitle} ${styles.text3xl}`}>
            {t('home.strategicPartners')}
          </h2>
          <div className={`${styles.flex} ${styles.justifyCenter} ${styles.mb6} ${styles.gap4}`}>
            <div className={`${styles.partnerLogo} ${styles.w40} ${styles.h20}`}>
              <img
              style={{ maxHeight: '70px', width: '155px' }}
                src={palmcap}
                alt={t('home.palmcapAlt')}
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={`${styles.partnerLogo} ${styles.w40} ${styles.h20}`}>
              <img
                src={mobile}
                alt={t('home.mobifoneAlt')}
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={`${styles.partnerLogo} ${styles.w40} ${styles.h20}`}>
              <img
                src={logo_gtel}
                alt={t('home.viettelAlt')}
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={`${styles.partnerLogo} ${styles.w40} ${styles.h20}`}>
              <img
                src={bocauservice}
                alt={t('home.techcombankAlt')}
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