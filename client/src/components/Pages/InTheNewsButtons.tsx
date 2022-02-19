import React from 'react';

import contentIndex from '../../../content/contentIndex';

const InTheNewsButtons = () => {
  return (
    <>
      {contentIndex.inTheNewsButtons.map((button) => {
        return (
          <a
            href={button.path}
            key={button.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="in-the-news-button">
              <div className="in-the-news-button-title">{button.title}</div>
              <div className="in-the-news-button-description">
                {button.description}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default InTheNewsButtons;
