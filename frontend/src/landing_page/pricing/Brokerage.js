import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row border-top mt-5 p-5">
        <div className="col-8" style={{ lineHeight: "2" }}>
          <h4 className="text-center fs-5 mb-4">
            <a href="" className="text-decoration-none ">
              Brokerage Calculator
            </a>
          </h4>
          <ul className="text-muted" style={{ fontSize: "13px" }}>
            <li>
              Call & trade and RMS auto-squareoff: Additional charges of ₹ 50 +
              GST per order.
            </li>
            <li>Digital contract note will be send via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Corier charges apply.
            </li>
            <li>
              For NRI account(non-PIS) 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account(PIS) 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed
              order.{" "}
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center fs-5 mb-4">
            <a href="" className="text-decoration-none">
              List of charges
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Brokerage;
