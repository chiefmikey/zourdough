import NavButtons from './NavButtons';

const Nav = ({ changePage }: { changePage: changePage }) => {
  return (
    <div className="nav-container">
      <div className="nav-divider"></div>
      <div className="nav-buttons-container">
        <NavButtons changePage={changePage} />
        <div className="nav-etsy-link">
          <img src="" alt="Etsy Link" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
