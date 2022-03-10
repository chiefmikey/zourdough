import OurStartersButtons from './OurStartersButtons';

const OurStarters = ({ changePage }: { changePage: changePage }) => {
  return (
    <div className="our-starters-container">
      <span className="our-starters-title">CHECK OUT OUR STARTERS</span>
      <div className="our-starters-divider" />
      <OurStartersButtons changePage={changePage} />
    </div>
  );
};

export default OurStarters;
