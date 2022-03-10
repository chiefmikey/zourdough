import Img from 'react-cool-img';

import contentIndex from '../../../content/contentIndex';

const icon = '/public/assets/img/zourdough-icon.png';

const SliderGallery = ({ changePage }: { changePage: changePage }) => {
  return (
    <>
      {contentIndex.sliderGalleryContent.map((sliderCard) => {
        return (
          <div
            key={sliderCard.title}
            className="home-slider-card"
            onClick={() => changePage(sliderCard.path)}
          >
            <Img
              src={sliderCard.image}
              placeholder={icon}
              error={icon}
              alt="Slider Gallery Card"
              className="home-slider-card-image"
            />
            {sliderCard.title}
          </div>
        );
      })}
    </>
  );
};

export default SliderGallery;
