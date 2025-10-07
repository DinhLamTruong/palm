// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main><Outlet /></main>
      <Footer />
    </>
  );
};

export default Layout;
