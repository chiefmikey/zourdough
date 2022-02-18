import React from 'react';

import contentIndex from '../../content/contentIndex';

const CommunityButtons = ({
  setCurrentPage,
}: {
  setCurrentPage: setCurrentPage;
}) =>
  contentIndex.communityButtons.map((button) => {
    return (
      <div
        key={button.title}
        className="community-button"
        onClick={() => setCurrentPage(button.path)}
      >
        {button.title}
      </div>
    );
  });

export default CommunityButtons;
