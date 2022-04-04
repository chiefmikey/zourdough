import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import SliderGallery from './SliderGallery';

const Home = ({ changePage }: { changePage: changePage }) => {
  return (
    <div className="home-container">
      <div
        className="home-banner"
        style={{
          backgroundImage: `url('/docs/public/assets/img/zourdough-banner.jpg')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="home-banner-color">
          <div className="home-banner-text">
            <span className="home-banner-line-1">THE WORLD'S BEST</span>
            <span className="home-banner-line-2">SOURDOUGH STARTERS</span>
            <span className="home-banner-line-3">MY WORLD ANYWAYS...</span>
          </div>
        </div>
      </div>
      <div className="home-read-more">
        <div className="home-read-more-line-1">
          <div className="home-read-more-arrow">
            <FaArrowRight />
          </div>
          <span className="home-read-more-text">LOOKING FOR INSTRUCTIONS?</span>
          <div className="home-read-more-arrow">
            <FaArrowLeft />
          </div>
        </div>
        <span className="home-read-more-line-2">
          DISCOVER THE TEN CHAPTERS OF SOURDOUGH INSANITY
        </span>
        <span className="home-read-more-button" onClick={() => changePage}>
          READ MORE
        </span>
      </div>
      <div className="home-talent">
        <span className="home-talent-line-1">GET TO KNOW THE TALENT</span>
        <span className="home-talent-line-2">
          SHOP OUR UNIQUE SOURDOUGH STARTERS
        </span>
        <SliderGallery changePage={changePage} />
      </div>
    </div>
  );
};

export default Home;
