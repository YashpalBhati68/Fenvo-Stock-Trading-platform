import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container text-muted    mb-5" style={{ marginTop: "10%" }}>
      <div className="row " style={{ marginTop: "10%" }}>
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-2 d-flex gap-1"></div>
        <div className="col-4  p-3 fs-6 d-flex flex-column justify-content-center">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div className="d-flex gap-5 mb-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo → 
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More →
            </a>
          </div>
          <div className="d-flex gap-5 mb-3">
            <a href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
