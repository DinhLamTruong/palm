import React from 'react';
import VietnamFlag from '../../assets/Img/vietnam.png'; // Adjust path as needed
import Logo from '../../assets/Img/logo.png'; // Adjust path as needed

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="headerpalm">
          <div className="logo">
            <img src={Logo} className="logopalmtek" alt="Logo" />
          </div>
          <nav className="nav">
            <a href="#home">Trang chủ</a>
            <a href="#about">Về chúng tôi</a>
            <a href="#solutions">Giải pháp</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <div className="flag">
            <img src={VietnamFlag} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
