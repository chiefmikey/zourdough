import React from 'react';

import OurStartersButtons from './OurStartersButtons';

const OurStarters = ({ changePage }: { changePage: changePage }) => {
  return (
    <div className="our-starters-container">
      <div className="our-starters-title">CHECK OUT OUR STARTERS</div>
      <div className="our-starters-divider" />
      <OurStartersButtons changePage={changePage} />
    </div>
  );
};

export default OurStarters;
