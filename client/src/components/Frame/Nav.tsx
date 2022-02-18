import React from 'react';

import NavButtons from './NavButtons';

const Nav = ({ setCurrentPage }: { setCurrentPage: setCurrentPage }) => {
  return (
    <div className="nav-container">
      <div className="nav-divider"></div>
      <div className="nav-buttons-container">
        <NavButtons setCurrentPage={setCurrentPage} />
        <div className="nav-etsy-link">
          <img src="" alt="Etsy Link" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
