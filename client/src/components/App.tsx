import { BrowserHistory } from 'history';
import React, { useEffect, useState, ReactElement } from 'react';

import Footer from './Frame/Footer';
import Nav from './Frame/Nav';
import Home from './Pages/Home';
import Instructions from './Pages/Instructions';

let previousPage: string;

const App = ({ history }: { history: BrowserHistory }) => {
  const [currentPage, setCurrentPage] = useState('/');
  const [pageToRender, setPageToRender] = useState<ReactElement>(<Home />);

  useEffect(() => {
    console.log('hey');
    const pageSelector = (path: string) => {
      switch (path) {
        case '/':
          setPageToRender(<Home />);
          previousPage = path;
          history.replace(path);
          break;
        case '/starter-instructions':
          setPageToRender(<Instructions setCurrentPage={setCurrentPage} />);
          previousPage = path;
          history.replace(path);
          break;
        default:
          setPageToRender(<Home />);
          previousPage = '/';
          history.replace('/');
      }
    };
    const url = `/${history.location.pathname.split('/')[1]}`;
    if (
      currentPage !== previousPage &&
      currentPage !== undefined &&
      previousPage !== undefined
    ) {
      pageSelector(currentPage);
      window.history.pushState(undefined, '', currentPage);
    } else if (url !== currentPage) {
      console.log(url);
      pageSelector(url);
    }
  }, [currentPage, history]);

  return (
    <div className="app-container">
      <div className="logo">
        <img
          src="public/assets/img/zourdough-logo.png"
          alt="Zourdough Sourdough"
        />
      </div>
      <Nav setCurrentPage={setCurrentPage} />
      {pageToRender}
      <Footer />
    </div>
  );
};

export default App;
