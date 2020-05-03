import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

import './index.css';

const Loader = () => (
  <div className="center">
    <HashLoader
      size={100}
      color={"#ffffff"}
    />
  </div>
);

export default Loader;
