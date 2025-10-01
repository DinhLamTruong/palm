import React from 'react';
import Logo from '../../assets/Img/logo.png'; // Adjust path as needed

export default function Footer() {
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
              <h3>CÔNG TY CỔ PHẦN PALMTEK INNOVATION</h3>
              <p>Thành viên Palms Capital Group</p>
              <p>
                <strong>Địa chỉ:</strong> Tầng 1, CT1 Yên Hòa Parkview, Số 03 Vũ
                Phạm Hàm,
                <br />
                P. Yên Hòa, Q. Cầu Giấy, Hà Nội
              </p>
              <p>
                <strong>Liên hệ:</strong> + 84 28 2200 2989
              </p>
              <p>
                <strong>Email:</strong> info@palmscapital.vn
              </p>
            </div>
          </div>

          <div className="footerCenter">
            <a href="#about">Về chúng tôi</a>
            <a href="#solutions">Giải pháp</a>
            <a href="#contact">Liên hệ</a>
          </div>

          <div className="footerRight">
            <div className="newsletter">
              <h3>Đăng ký email để nhận tin tức mới nhất từ PalmTek</h3>
              <form
                className="newsletterForm"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  required
                />
                <button type="submit">Đăng ký</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p>© 2007 PalmTek</p>
        </div>
      </footer>
    </>
  );
}
