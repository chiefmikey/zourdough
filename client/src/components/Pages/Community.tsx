import React from 'react';

import CommunityButtons from './CommunityButtons';

const Community = ({ setCurrentPage }: { setCurrentPage: setCurrentPage }) => {
  return (
    <div className="community-container">
      <CommunityButtons setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Community;
