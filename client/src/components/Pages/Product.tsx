import React from 'react';

import contentIndex from '../../../content/contentIndex';

const Product = ({
  changePage,
  subPath,
}: {
  changePage: changePage;
  subPath: string;
}) => {
  const productContent = (
    contentIndex.ourStartersContent as {
      [key: string]: { [key: string]: string };
    }
  )[subPath];
  console.log(subPath);
  if (!productContent) {
    return <div>Product not found</div>;
  }
  console.log('Product Content', productContent);
  return (
    <div className="product-container">
      <div className="product-title">
        <div className="product-ui-container">
          <div className="product-ui-image">
            <img src="" alt="Sourdough Product" />
          </div>
          <div className="product-ui-content">
            <div className="product-ui-content-discount"></div>
            <div className="product-ui-content-price"></div>
            <div className="product-ui-content-button"></div>
            <div className="product-ui-content-disclaimer"></div>
          </div>
          <div className="product-description"></div>
        </div>
      </div>
      <div
        className="back-button"
        onClick={() => changePage('/starters')}
      ></div>
    </div>
  );
};

export default Product;
