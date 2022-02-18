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

const App = ({ history }: { history: BrowserHistory }) => {
  const [currentPage, setCurrentPage] = useState('/');
  const [pageToRender, setPageToRender] = useState(<Home />);

  const pageSelector = useCallback((path: string, changePage: changePage) => {
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
      case '/inthenews':
        setPageToRender(<InTheNews changePage={changePage} />);
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
    const url = `/${history.location.pathname.split('/')[1]}`;
    pageSelector(url, changePage);
  }, [pageSelector, history, changePage]);

  useEffect(() => {
    window.addEventListener('popstate', onBackButtonEvent);

    console.log('hey');
    const url = `/${history.location.pathname.split('/')[1]}`;
    if (url !== currentPage) {
      pageSelector(url, changePage);
    }
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, [currentPage, history, pageSelector, changePage]);

  return (
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
      <Footer />
    </div>
  );
};

export default App;
