import React from 'react';

import NavButtons from './NavButtons';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-divider"></div>
      <div className="nav-buttons-container">
        <NavButtons />
      </div>
    </div>
  );
};

export default Nav;
