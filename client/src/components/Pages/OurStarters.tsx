import React from 'react';

import OurStartersButtons from './OurStartersButtons';

const OurStarters = ({
  setCurrentPage,
}: {
  setCurrentPage: setCurrentPage;
}) => {
  return (
    <div className="our-starters-container">
      <div className="our-starters-title">CHECK OUT OUR STARTERS</div>
      <div className="our-starters-divider" />
      <OurStartersButtons setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default OurStarters;
