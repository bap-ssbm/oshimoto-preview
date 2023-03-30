import React from "react";
import peoplepics from "./porfolioPplPics";
import PorfolioPic from "./portfolio-pic";

function createPortfolio(picture) {
  return (
    <PorfolioPic
      key={picture.id}
      imgURL={picture.imgURL}
      description={picture.description}
    />
  );
}
function Porfolio() {
  return <main>{peoplepics.map(createPortfolio)}</main>;
}
export default Porfolio;
