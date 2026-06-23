import React from "react";

function Hero() {
  return (
    <div className="container " style={{marginBottom: "8%" }}>
      <div
        className="row text-center "
        style={{ marginTop: "15%", marginBottom: "10%" }}
      >
        <h2>Charges</h2>
        <h4 className="text-muted">List of all charges and taxes</h4>
      </div>
      <div className="row">
        <div className="col text-center text-muted">
          <img src="/media/images/pricing0.svg" style={{ width: "80%" }} />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col text-center text-muted">
          <img
            src="/media/images/intradayTrades.svg"
            style={{ width: "80%" }}
          />
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center text-muted">
          <img src="/media/images/pricing0.svg" style={{ width: "80%" }} />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
