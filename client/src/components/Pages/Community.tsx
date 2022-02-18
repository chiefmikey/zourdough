import React from 'react';

import CommunityButtons from './CommunityButtons';

const Community = ({ changePage }: { changePage: changePage }) => {
  return (
    <div className="community-container">
      <CommunityButtons changePage={changePage} />
    </div>
  );
};

export default Community;
