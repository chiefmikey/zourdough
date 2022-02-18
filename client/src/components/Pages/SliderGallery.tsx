import React from 'react';

import contentIndex from '../../../content/contentIndex';

const SliderGallery = () => {
  return (
    <>
      {contentIndex.sliderGalleryContent.map((sliderCard) => {
        return (
          <div key={sliderCard.title} className="home-slider-card">
            <a href={sliderCard.path}>
              <div className="home-slider-card-image">
                <img src={sliderCard.image} alt="Slider Gallery Card" />
              </div>
              {sliderCard.title}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default SliderGallery;
