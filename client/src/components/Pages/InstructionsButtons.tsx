import React from 'react';

import contentIndex from '../../content/contentIndex';

const InstructionsButtons = ({
  setCurrentPage,
}: {
  setCurrentPage: setCurrentPage;
}) =>
  contentIndex.instructionsButtons.map((button) => {
    return (
      <div
        key={button.title}
        className="instructions-button"
        onClick={() => setCurrentPage(button.path)}
      >
        {button.title}
      </div>
    );
  });

export default InstructionsButtons;
