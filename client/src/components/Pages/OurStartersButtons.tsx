import React from 'react';

import contentIndex from '../../content/contentIndex';

const OurStartersButtons = ({
  setCurrentPage,
}: {
  setCurrentPage: setCurrentPage;
}) =>
  contentIndex.ourStartersButtons.map((button) => {
    return (
      <div
        key={button.title}
        className="our-starters-button"
        onClick={() => setCurrentPage(button.path)}
      >
        {button.title}
      </div>
    );
  });

export default OurStartersButtons;
