import React from 'react';

import contentIndex from '../../content/contentIndex';

const InTheNewsButtons = ({
  setCurrentPage,
}: {
  setCurrentPage: setCurrentPage;
}) => {
  return (
    <>
      {contentIndex.inTheNewsButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="in-the-news-button"
            onClick={() => setCurrentPage(button.path)}
          >
            {button.title}
          </div>
        );
      })}
    </>
  );
};

export default InTheNewsButtons;
