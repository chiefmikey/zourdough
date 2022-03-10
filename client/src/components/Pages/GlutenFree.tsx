import GlutenFreeButtons from './GlutenFreeButtons';

const GlutenFree = ({ changePage }: { changePage: changePage }) => {
  return (
    <div className="gluten-free-container">
      <GlutenFreeButtons changePage={changePage} />
    </div>
  );
};

export default GlutenFree;
