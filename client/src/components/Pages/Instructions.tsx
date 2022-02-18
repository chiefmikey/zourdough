import React from 'react';

import InstructionsButtons from './InstructionsButtons';

const Instructions = ({ changePage }: { changePage: changePage }) => {
  return (
    <div className="instructions-container">
      <InstructionsButtons changePage={changePage} />
    </div>
  );
};

export default Instructions;
