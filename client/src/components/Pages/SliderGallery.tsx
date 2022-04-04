import Img from 'react-cool-img';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import contentIndex from '../../../content/contentIndex';

const icon = '/public/assets/img/zourdough-icon.png';

const SliderGallery = ({ changePage }: { changePage: changePage }) => {
  const galleryContent = contentIndex.sliderGalleryContent.map((sliderCard) => {
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
  });

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {galleryContent[0]}
    </Carousel>
  );
};

export default SliderGallery;
