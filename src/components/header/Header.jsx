import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VietnamFlag from '../../assets/Img/VN.png'; // Adjust path as needed
import EnglishFlag from '../../assets/Img/EN.png'; // Adjust path as needed
import Logo from '../../assets/Img/logo.png'; // Adjust path as needed

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const currentLng = (i18n.language || 'en').split('-')[0];
  const isVI = currentLng === 'vi';
  const otherLng = isVI ? 'en' : 'vi';
  const otherLabel = isVI ? 'EN' : 'VI';
  const currentFlag = isVI ? VietnamFlag : EnglishFlag;
  const currentAlt = isVI ? 'Vietnam Flag' : 'English Flag';

  return (
    <>
      <header className="header">
        <div className="headerpalm">
          <div className="logo">
            <img src={Logo} className="logopalmtek !w-30 !h-10" alt="Logo" />
          </div>
          <nav className="nav text-[22px]">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { color: '#d32f2f', fontWeight: 'bold' }
                  : { color: 'black' }
              }
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive
                  ? { color: '#d32f2f', fontWeight: 'bold' }
                  : { color: 'black' }
              }
            >
              {t('nav.about')}
            </NavLink>
            <NavLink
              to="/solutions"
              style={({ isActive }) =>
                isActive
                  ? { color: '#d32f2f', fontWeight: 'bold' }
                  : { color: 'black' }
              }
            >
              {t('nav.solutions')}
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive
                  ? { color: '#d32f2f', fontWeight: 'bold' }
                  : { color: 'black' }
              }
            >
              {t('nav.contact')}
            </NavLink>
          </nav>

          <div
            className="flag"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {/* Hiển thị icon của ngôn ngữ hiện tại */}
            <img
              src={currentFlag}
              alt={currentAlt}
              style={{
                cursor: 'pointer',
                width: 38,
                height: 28,
                objectFit: 'cover',
              }}
              onClick={() => changeLanguage(otherLng)} // click đổi sang ngôn ngữ khác
            />
            {/* Hiển thị chữ ngôn ngữ để đổi sang (EN hoặc VI) */}
            <button
              onClick={() => changeLanguage(otherLng)}
              style={{
                marginLeft: 10,
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
                fontWeight: '600',
              }}
              aria-label={`Change language to ${otherLng}`}
            >
              {otherLabel}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
