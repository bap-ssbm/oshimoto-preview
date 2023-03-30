import React from "react";
// import $ from "jquery";

// let width = $(window).width();

function CreatePortfolio(props) {
  return (
    <div style={{backgroundImage: `url(${props.imgURL})` }} className="porftolio-pic">
      <div >
      </div>
    </div>
  );
}

export default CreatePortfolio;
