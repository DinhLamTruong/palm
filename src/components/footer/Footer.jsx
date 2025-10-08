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
      <footer className="footer !text-gray-700">
        <div className="footerContent">
          <div className="footerLeft">
            <div className="logo !w-[300px]">
              <div className="logoIcon">
                <img className="logofooter !w-[140px] !h-[40px]" src={Logo} alt="" />
              </div>
            </div>
            <div className="companyInfo !w-[386px]">
              <h3 className="text-[#000000] !mb-0 ">
                {t('footer.companyName')}
              </h3>
              <p className="!text-[#000000] leading-[1.2]">
                {t('footer.memberOf')}
              </p>
              <p className="!text-[#000000] !font-normal">
                <strong>{t('footer.address')}</strong>{' '}
                {t('footer.addressValue')}
              </p>
              <p className="!text-[#000000] !font-normal">
                <strong>{t('footer.contact')}</strong>{' '}
                {t('footer.contactValue')}
              </p>
              <p className="!text-[#000000] !font-normal">
                <strong>{t('footer.email')}</strong> {t('footer.emailValue')}
              </p>
            </div>
          </div>

          <div className="footerCenter min-w-[300px]">
            <a className="!text-base !font-normal" href="#about">
              {t('footer.aboutUs')}
            </a>
            <a className="!text-base !font-normal" href="#solutions">
              {t('footer.solutions')}
            </a>
            <a className="!text-base !font-normal" href="#contact">
              {t('footer.contact1')}
            </a>
          </div>

          <div className="footerRight">
            <div className="newsletter">
              <h3 className="!text-[15px] font-bold min-w-[500px]">
                {t('footer.newsletterTitle')}
              </h3>
              <form
                className="newsletterForm"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  className="text-black placeholder-black"
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
          <p className="!text-[#333333] !font-normal">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </>
  );
}
