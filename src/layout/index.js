import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Body from 'pages/body';
import Header from 'pages/header';

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  );
}

export default Layout;
