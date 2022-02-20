import { BrowserHistory } from 'history';
import React, { useEffect, useState, useCallback } from 'react';

import Footer from './Frame/Footer';
import Nav from './Frame/Nav';
import Community from './Pages/Community';
import GlutenFree from './Pages/GlutenFree';
import HelpMe from './Pages/HelpMe';
import Home from './Pages/Home';
import InTheNews from './Pages/InTheNews';
import Instructions from './Pages/Instructions';
import OurStarters from './Pages/OurStarters';
import Product from './Pages/Product';

const App = ({ history }: { history: BrowserHistory }) => {
  const [currentPage, setCurrentPage] = useState('/');
  const [pageToRender, setPageToRender] = useState(<Home />);

  const pageSelector = useCallback((path: string, changePage: changePage) => {
    const rootPath = path.split('/')[1];
    const subPath = path.split('/')[2];
    if (rootPath === 'post') {
      setPageToRender(<Post subPath={subPath} />);
    } else if (rootPath === 'starters') {
      setPageToRender(<Product changePage={changePage} subPath={subPath} />);
    } else {
      switch (path) {
        case '/':
          setPageToRender(<Home />);
          break;
        case '/starter-instructions':
          setPageToRender(<Instructions changePage={changePage} />);
          break;
        case '/help-me':
          setPageToRender(<HelpMe />);
          break;
        case '/gluten-free':
          setPageToRender(<GlutenFree changePage={changePage} />);
          break;
        case '/in-the-news':
          setPageToRender(<InTheNews />);
          break;
        case '/community':
          setPageToRender(<Community changePage={changePage} />);
          break;
        case '/starters':
          setPageToRender(<OurStarters changePage={changePage} />);
          break;
        default:
          setPageToRender(<Home />);
      }
    }
  }, []);

  const changePage: changePage = useCallback(
    (path: string) => {
      history.push(path);
      pageSelector(path, changePage);
      setCurrentPage(path);
    },
    [pageSelector, history],
  );

  const onBackButtonEvent = useCallback(() => {
    const url = history.location.pathname;
    pageSelector(url, changePage);
  }, [pageSelector, history, changePage]);

  useEffect(() => {
    window.addEventListener('popstate', onBackButtonEvent);
    const url = history.location.pathname;
    if (url !== currentPage) {
      pageSelector(url, changePage);
    }
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, [currentPage, history, pageSelector, changePage, onBackButtonEvent]);

  return (
    <>
      <div className="app-container">
        <div className="logo" onClick={() => changePage('/')}>
          <img
            src="public/assets/img/zourdough-logo.png"
            alt="Zourdough Sourdough"
            draggable="false"
          />
        </div>
        <Nav changePage={changePage} />
        {pageToRender}
      </div>
      <Footer />
    </>
  );
};

export default App;
