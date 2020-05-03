import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Body from 'pages/body';
import Footer from 'pages/footer';
import Header from 'pages/header';

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
