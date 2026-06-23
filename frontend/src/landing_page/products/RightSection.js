import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container text-muted mb-5">
      <div className="row ">
        <div className="col-4  p-3 fs-6 d-flex flex-column justify-content-center">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div className="d-flex gap-5 mb-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo →
            </a>
          </div>
        </div>

        <div className="col-2 d-flex gap-1"></div>

        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}
export default RightSection;
