import React from "react";

function Team() {
  return (
    <div className="container" style={{ marginBottom: "5%" }}>
      <div className="row">
        <h2 className="text-center">People</h2>
      </div>
      <div
        className="row p-5  text-muted"
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        <div className="col-6 p-2 text-center">
          <img
            src="/media/images/Yashpal bhati.jpeg"
            alt=""
            style={{ height: "90%", width: "70%", borderRadius: "100%" }}
          />
          <h4 className="mt-3">Yashpal Bhati</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6  d-flex flex-column  d-flex flex-column justify-content-center">
          <p>
            Yashpal bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on&nbsp; 
            <a href="" className="text-decoration-none">
               Homepage&nbsp;
            </a>
            /&nbsp;
            <a href="" className="text-decoration-none">
              TradingQnA&nbsp;
            </a>
            /&nbsp;
            <a href="" className="text-decoration-none">
              Twitter&nbsp;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
