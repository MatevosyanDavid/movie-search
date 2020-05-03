import React from 'react';

import './index.css';

const Footer = () => (
  <footer>
    <div>
      <span>Movies Search</span>
      <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
      <span>powered by D.M.</span>
    </div>
  </footer>
);

export default Footer;
