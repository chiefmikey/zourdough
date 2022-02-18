import React from 'react';

import contentIndex from '../../../content/contentIndex';

const InTheNewsButtons = ({ changePage }: { changePage: changePage }) => {
  return (
    <>
      {contentIndex.inTheNewsButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="in-the-news-button"
            onClick={() => changePage(button.path)}
          >
            {button.title}
          </div>
        );
      })}
    </>
  );
};

export default InTheNewsButtons;
