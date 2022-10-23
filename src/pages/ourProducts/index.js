import React from "react";
import PageWrapper from "../../hoc/PageWrapper";
import "./OurProducts.css";
const OurProducts = () => {
  return (
    <PageWrapper>
      <div className="our_products_container">
        <div className="our_products_body_title"> OUR PRODUCTS</div>
        <div className="our_products_product_list">
          <div className="our_products_product_list_tile">HMS</div>
        </div>
        <div className="our_products_body_image_slider">
          Image Slide on product here . The above bar is a product button kind
          of thing which displays the product name with icon and a tool tip on
          hover.
        </div>
      </div>
    </PageWrapper>
  );
};

export default OurProducts;
