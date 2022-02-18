import React from 'react';

import InTheNewsButtons from './InTheNewsButtons';

const InTheNews = ({ setCurrentPage }: { setCurrentPage: setCurrentPage }) => {
  return (
    <div className="in-the-news-container">
      <InTheNewsButtons setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default InTheNews;
