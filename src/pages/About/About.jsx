
import React, { useState, useRef } from 'react';
import styles from './About.module.css';
import bannerImage from '../../assets/Img/bannerpage.png';
import bgAbout from '../../assets/Img/bgabout.avif';
import bannerAbout from '../../assets/Img/banner_ab.png';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  const milestonesRef = useRef([]);
  const [activeYear, setActiveYear] = useState('2007');

  const years = [
    '2007',
    '2008',
    '2009',
    '2010',
    '2012',
    '2013',
    '2015',
    '2019',
    '2020',
    '2023',
    '2025',
  ];

const handleYearClick = year => {
  setActiveYear(year);
  const index = years.indexOf(year);
  if (milestonesRef.current[index]) {
    const element = milestonesRef.current[index];
    const yOffset = 150; // Khoảng cách từ top của viewport (px)
    const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};

  return (
    <div
      className={`${styles.mainContainer} min-h-screen`}
      style={{ backgroundImage: `url(${bgAbout})` }}
    >
      <div
        className={styles.banner}
        style={{ position: 'relative', textAlign: 'center' }}
      >
        <img
          src={bannerImage}
          alt="Banner"
          style={{ width: '100%' }}
        />
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '3rem',
            fontWeight: '500',
            margin: 0,
          }}
        >
          {t('about.title')}
        </h1>
      </div>

      {/* Section 1 */}
      <section className={styles.section1}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <p>{t('about.aboutText1')}</p>
            <p>{t('about.aboutText2')}</p>
            <p>{t('about.aboutText3')}</p>
          </div>
          <div className={styles.imageContent}>
            <img
              src={bannerAbout}
              className={styles.image}
              alt="Technology"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.section2}>
        <div className={styles.visionContent}>
          <h2 className={styles.visionTitle}>
            {t('about.visionTitle')}
          </h2>
          <p className={styles.visionText}>{t('about.visionText1')}</p>
          <p className={styles.visionText}>{t('about.visionText2')}</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <h1 className={styles.timelineHeader}>
            {t('about.journeyTitle')} <span className={styles.timelineHeaderHighlight}>PalmTek</span>
          </h1>
          <div className={styles.timelineWrapper}>
            {/* Left: Milestones */}
            <div className={styles.timelineLeft}>
              {years.map((year, index) => {
                const milestone = t(`about.timeline.${year}`, {
                  returnObjects: true,
                });
                return (
                  <div
                    key={year}
                    ref={el => (milestonesRef.current[index] = el)}
                    className={`${styles.milestone} ${activeYear === year ? styles.active : ''}`}
                    data-year={year}
                  >
                    
                    <div
                      className={`${styles.milestoneYear} ${activeYear === year ? styles.red : styles.gray}`}
                    >
                      {year}
                    </div>
                   
                    <div className={styles.milestoneContent}>
                      <h2 className={styles.milestoneTitle}>{milestone.title}</h2>
                      {Array.isArray(milestone.content) ? (
                        milestone.content.map((p, i) => <p key={i} className={styles.milestoneText}>{p}</p>)
                      ) : (
                        <p className={styles.milestoneText}>{milestone.content}</p>
                      )}
                    </div>
               
                  </div>
                  
                );
              })}
            </div>

            {/* Right: Year markers */}
            <div className={styles.timelineRight}>
              <div className={styles.yearLine}></div>
              {years.map(year => (
                <div
                  key={year}
                  className={`${styles.yearMarker} ${activeYear === year ? styles.active : ''}`}
                  data-year={year}
                  onClick={() => handleYearClick(year)}
                >
                  <div className={styles.dot}></div>
                  <div className={styles.yearLabel}>{year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
