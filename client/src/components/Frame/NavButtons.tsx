import React from 'react';

import contentIndex from '../../content/contentIndex';

const NavButtons = ({ changePage }: { changePage: changePage }) => {
  return (
    <>
      {contentIndex.navButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="nav-button"
            onClick={() => changePage(button.path)}
          >
            {button.title}
          </div>
        );
      })}
    </>
  );
};

export default NavButtons;
