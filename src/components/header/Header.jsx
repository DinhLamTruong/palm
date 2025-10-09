import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css'; // Import CSS module
import VietnamFlag from '../../assets/Img/VN.png';
import EnglishFlag from '../../assets/Img/EN.png';
import Logo from '../../assets/Img/logo.png';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false); // Close menu on language change (mobile)
  };

  const currentLng = (i18n.language || 'en').split('-')[0];
  const isVI = currentLng === 'vi';
  const otherLng = isVI ? 'en' : 'vi';
  const otherLabel = isVI ? 'EN' : 'VI';
  const currentFlag = isVI ? VietnamFlag : EnglishFlag;
  const currentAlt = isVI ? t('header.vietnamFlagAlt') : t('header.englishFlagAlt');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerPalm}>
        <div className={styles.logo}>
          <img
            src={Logo}
            className={styles.logoPalmtek}
            alt={t('header.logoAlt')}
          />
        </div>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
        >
          <span className={styles.hamburgerIcon}></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            {t('nav.home')}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.about')}
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.solutions')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.contact')}
          </NavLink>
        </nav>

        {/* Language Switcher */}
        <div className={styles.flag}>
          <img
            src={currentFlag}
            alt={currentAlt}
            className={styles.flagIcon}
            onClick={() => changeLanguage(otherLng)}
          />
          <button
            onClick={() => changeLanguage(otherLng)}
            className={styles.languageButton}
            aria-label={t('header.changeLanguageTo', { lng: otherLabel })}
          >
            {otherLabel}
          </button>
        </div>
      </div>
    </header>
  );
}