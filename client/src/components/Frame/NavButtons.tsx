import React from 'react';

import contentIndex from '../../content/contentIndex';

const NavButtons = ({ setCurrentPage }: { setCurrentPage: setCurrentPage }) => {
  return (
    <>
      {contentIndex.navButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="nav-button"
            onClick={() => setCurrentPage(button.path)}
          >
            {button.title}
          </div>
        );
      })}
    </>
  );
};

export default NavButtons;
