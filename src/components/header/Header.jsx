import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { color: '#d32f2f', fontWeight: 'bold' }
                  : { color: 'black' }
              }
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive
                  ? { color: '#d32f2f', fontWeight: 'bold' }
                  : { color: 'black' }
              }
            >
              Về chúng tôi
            </NavLink>
            <NavLink
              to="/solutions"
              style={({ isActive }) =>
                isActive
                  ? { color: '#d32f2f', fontWeight: 'bold' }
                  : { color: 'black' }
              }
            >
              Giải pháp
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive
                  ? { color: '#d32f2f', fontWeight: 'bold' }
                  : { color: 'black' }
              }
            >
              Liên hệ
            </NavLink>
          </nav>
          <div className="flag">
            <img src={VietnamFlag} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
