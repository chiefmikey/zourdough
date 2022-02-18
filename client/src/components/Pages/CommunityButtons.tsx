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
            {button.title}
          </div>
        );
      })}
    </>
  );
};

export default CommunityButtons;
