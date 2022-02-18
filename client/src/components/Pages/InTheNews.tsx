import React from 'react';

import InTheNewsButtons from './InTheNewsButtons';

const InTheNews = ({ changePage }: { changePage: changePage }) => {
  return (
    <div className="in-the-news-container">
      <InTheNewsButtons changePage={changePage} />
    </div>
  );
};

export default InTheNews;
