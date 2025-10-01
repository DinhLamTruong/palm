// Layout.jsx
import React from 'react';
import styles from './global.css';
import Logo from '../../assets/Img/logo.png'; // Adjust path as needed
import VietnamFlag from '../../assets/img/vietnam.png'; // Adjust path as needed

const Layout = ({ children }) => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerpalm}>
          <div className={styles.logo}>
            <img src={Logo} className={styles.logopalmtek} alt="Logo" />
          </div>
          <nav className={styles.nav}>
            <a href="#home">Trang chủ</a>
            <a href="#about">Về chúng tôi</a>
            <a href="#solutions">Giải pháp</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <div className={styles.flag}>
            <img src={VietnamFlag} alt="" />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <img className={styles.logofooter} src={Logo} alt="" />
              </div>
            </div>
            <div className={styles.companyInfo}>
              <h3>CÔNG TY CỔ PHẦN PALMTEK INNOVATION</h3>
              <p>Thành viên Palms Capital Group</p>
              <p>
                <strong>Địa chỉ:</strong> Tầng 1, CT1 Yên Hòa Parkview, Số 03 Vũ Phạm Hàm,<br />
                P. Yên Hòa, Q. Cầu Giấy, Hà Nội
              </p>
              <p><strong>Liên hệ:</strong> + 84 28 2200 2989</p>
              <p><strong>Email:</strong> info@palmscapital.vn</p>
            </div>
          </div>

          <div className={styles.footerCenter}>
            <a href="#about">Về chúng tôi</a>
            <a href="#solutions">Giải pháp</a>
            <a href="#contact">Liên hệ</a>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.newsletter}>
              <h3>Đăng ký email để nhận tin tức mới nhất từ PalmTek</h3>
              <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                <input type="email" placeholder="Nhập email của bạn..." required />
                <button type="submit">Đăng ký</button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2007 PalmTek</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;