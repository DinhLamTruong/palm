import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/Img/logo.png'; // Adjust path as needed

export default function Footer() {
  const { t } = useTranslation();

  const handleNewsletterSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <footer className="footer">
        <div className="footerContent">
          <div className="footerLeft">
            <div className="logo">
              <div className="logoIcon">
                <img className="logofooter" src={Logo} alt="" />
              </div>
            </div>
            <div className="companyInfo">
              <h3>{t('footer.companyName')}</h3>
              <p>{t('footer.memberOf')}</p>
              <p>
                <strong>{t('footer.address')}</strong> {t('footer.addressValue')}
              </p>
              <p>
                <strong>{t('footer.contact')}</strong> {t('footer.contactValue')}
              </p>
              <p>
                <strong>{t('footer.email')}</strong> {t('footer.emailValue')}
              </p>
            </div>
          </div>

          <div className="footerCenter">
            <a href="#about">{t('footer.aboutUs')}</a>
            <a href="#solutions">{t('footer.solutions')}</a>
            <a href="#contact">{t('footer.contact1')}</a>
          </div>

          <div className="footerRight">
            <div className="newsletter">
              <h3 className='font-bold min-w-[500px]'>{t('footer.newsletterTitle')}</h3>
              <form
                className="newsletterForm"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  required
                />
                <button type="submit">{t('footer.subscribe')}</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </>
  );
}
