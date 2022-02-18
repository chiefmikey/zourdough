import React from 'react';

import SliderGallery from './SliderGallery';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="home-banner-line-1">THE WORLD'S BEST</div>
        <div className="home-banner-line-2">SOURDOUGH STARTERS</div>
        <div className="home-banner-line-3">MY WORLD ANYWAYS...</div>
      </div>
      <div className="home-read-more">
        <div className="home-read-more-line-1">
          <img src="" alt="Right Arrow" />
          LOOKING FOR INSTRUCTIONS?
          <img src="" alt="Left Arrow" />
        </div>
        <div className="home-read-more-line-2">
          DISCOVER THE TEN CHAPTERS OF SOURDOUGH INSANITY
        </div>
        <div className="home-read-more-button">READ MORE</div>
      </div>
      <div className="home-dotted-divider"></div>
      <div className="home-talent">
        <div className="home-talent-line-1">GET TO KNOW THE TALENT</div>
        <div className="home-talent-line-2">
          SHOP OUR UNIQUE SOURDOUGH STARTERS
        </div>
        <SliderGallery />
      </div>
    </div>
  );
};

export default Home;
