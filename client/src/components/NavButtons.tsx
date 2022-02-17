import React from 'react';

import contentIndex from '../content/contentIndex';

const NavButtons = () =>
  contentIndex.navButtons.map((button) => {
    return (
      <div key={button.title} className="nav-button">
        <a href={button.path}>{button.title}</a>
      </div>
    );
  });

export default NavButtons;
