import React from 'react';

import contentIndex from '../../../content/contentIndex';

const CommunityButtons = ({ changePage }: { changePage: changePage }) => {
  return (
    <>
      {contentIndex.communityButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="community-button"
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

export default CommunityButtons;
