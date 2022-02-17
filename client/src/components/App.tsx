import React from 'react';

import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';

const App = () => {
  return (
    <div className="app-container">
      <div className="logo">
        <img
          src="/zourdough/public/assets/img/zourdough-logo.png"
          alt="Zourdough Sourdough"
        />
      </div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
