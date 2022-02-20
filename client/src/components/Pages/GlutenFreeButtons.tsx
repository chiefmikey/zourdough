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
            <div className="gluten-free-button-title">{button.title}</div>
            <div className="gluten-free-button-description">
              {button.description}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GlutenFreeButtons;
