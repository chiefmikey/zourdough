import contentIndex from '../../../content/contentIndex';

const InstructionsButtons = ({ changePage }: { changePage: changePage }) => {
  return (
    <>
      {contentIndex.instructionsButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="instructions-button"
            onClick={() => changePage(button.path)}
          >
            <div className="instructions-button-title">{button.title}</div>
            <div className="instructions-button-description">
              {button.description}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InstructionsButtons;
