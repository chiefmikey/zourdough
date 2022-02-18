import React from 'react';

import NavButtons from './NavButtons';

const Nav = ({ setCurrentPage }) => {
  return (
    <div className="nav-container">
      <div className="nav-divider"></div>
      <div className="nav-buttons-container">
        <NavButtons setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Nav;
