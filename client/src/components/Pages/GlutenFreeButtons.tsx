import React from 'react';

import contentIndex from '../../content/contentIndex';

const GlutenFreeButtons = ({
  setCurrentPage,
}: {
  setCurrentPage: setCurrentPage;
}) =>
  contentIndex.glutenFreeButtons.map((button) => {
    return (
      <div
        key={button.title}
        className="gluten-free-button"
        onClick={() => setCurrentPage(button.path)}
      >
        {button.title}
      </div>
    );
  });

export default GlutenFreeButtons;
