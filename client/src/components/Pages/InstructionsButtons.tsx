import React from 'react';

import contentIndex from '../../../content/contentIndex';

const InstructionsButtons = ({ changePage }: { changePage: changePage }) => {
  return (
    <>
      {contentIndex.instructionsButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="instructions-button"
            onClick={() => changePage(button.path)}
          >
            {button.title}
          </div>
        );
      })}
    </>
  );
};

export default InstructionsButtons;
