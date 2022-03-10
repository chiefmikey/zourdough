import contentIndex from '../../../content/contentIndex';

const OurStartersButtons = ({ changePage }: { changePage: changePage }) => {
  return (
    <>
      {contentIndex.ourStartersButtons.map((button) => {
        return (
          <div
            key={button.title}
            className="our-starters-button"
            onClick={() => changePage(button.path)}
          >
            {button.title}
          </div>
        );
      })}
    </>
  );
};

export default OurStartersButtons;
