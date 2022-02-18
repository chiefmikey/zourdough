import React from 'react';

import GlutenFreeButtons from './GlutenFreeButtons';

const GlutenFree = ({ setCurrentPage }: { setCurrentPage: setCurrentPage }) => {
  return (
    <div className="gluten-free-container">
      <GlutenFreeButtons setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default GlutenFree;
