import React from 'react';

import InstructionsButtons from './InstructionsButtons';

const Instructions = ({
  setCurrentPage,
}: {
  setCurrentPage: setCurrentPage;
}) => {
  return (
    <div className="instructions-container">
      <InstructionsButtons setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Instructions;
