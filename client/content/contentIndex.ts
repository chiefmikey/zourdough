import communityButtons from './community/communityButtons';
import glutenFreeButtons from './glutenFree/glutenFreeButtons';
import navButtons from './header/navButtons';
import inTheNewsButtons from './inTheNews/inTheNewsButtons';
import instructionsButtons from './instructions/instructionsButtons';
import instructionsContent from './instructions/instructionsContent';
import ourStartersButtons from './ourStarters/ourStartersButtons';
import ourStartersContent from './ourStarters/ourStartersContent';
import sliderGalleryContent from './slider/sliderGalleryContent';

const contentIndex = {
  // Header navigation buttons
  navButtons,
  // Instructions + recipes page links
  instructionsButtons,
  // Instructions + recipes posts content
  instructionsContent,
  // Home page slider gallery content
  sliderGalleryContent,
  // Gluten free page links
  glutenFreeButtons,
  // In the news page links
  inTheNewsButtons,
  // Community page links
  communityButtons,
  // Our starters page links
  ourStartersButtons,
  // Our starters product page content
  ourStartersContent,
};

export default contentIndex;
