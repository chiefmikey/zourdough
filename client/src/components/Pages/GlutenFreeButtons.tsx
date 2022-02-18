import React from 'react';

import contentIndex from '../../../content/contentIndex';

const GlutenFreeButtons = ({ changePage }: { changePage: changePage }) => {
  return (
    <>
      {contentIndex.glutenFreeButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="gluten-free-button"
            onClick={() => changePage(button.path)}
          >
            {button.title}
          </div>
        );
      })}
    </>
  );
};

export default GlutenFreeButtons;
