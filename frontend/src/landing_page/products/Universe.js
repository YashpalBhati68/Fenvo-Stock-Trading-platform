import React from "react";

function Universe() {
  return (
    <div className="container" style={{ marginBottom: "10%" }}>
      <div className="row text-center mt-5 mb-5">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div
        className="row text-center justify-content-center"
        style={{ marginBottom: "5%" }}
      >
        <div className="col-3">
          <img
            src="\media\images\zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="p-3 text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <img src="\media\images\sensibullLogo.svg" style={{ width: "60%" }} />
          <p className="p-3 text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <img src="\media\images\goldenpiLogo.png" style={{ width: "40%" }} />
          <p className="p-3 text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div
        className="row text-center justify-content-center"
        style={{ marginBottom: "5%" }}
      >
        <div className="col-3">
          <img src="\media\images\streakLogo.png" style={{ width: "50%" }} />
          <p className="p-3 text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <img src="\media\images\smallcaseLogo.png" style={{ width: "50%" }} />
          <p className="p-3 text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <img src="\media\images\dittoLogo.png" style={{ width: "30%" }} />
          <p className="p-3 text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="row">
        <button
          className="btn btn-primary text-center p-3"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for Free
        </button>
      </div>
    </div>
  );
}
export default Universe;
