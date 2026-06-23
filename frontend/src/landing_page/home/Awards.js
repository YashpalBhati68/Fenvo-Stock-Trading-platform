import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
            <img src="/media/images/largestBroker.svg" />
        </div>
        <div className="col-6 mt-4 p-4">
            <h2>Largest stock broker in India</h2>
            <p>2+ milllons zerodha clients contribute to over 15% of all retail orders
               volumnes in india daily by trading and investing in:
             </p>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li><p>Futures and options</p></li>
                        <li><p>Commodity derivates</p></li>
                        <li><p>Currency Derivates</p></li>
                    </ul>
                </div>
                <div className="col-6">
                    <li><p>Stocks & IPOs</p></li>
                    <li><p>Direct mutual Funds</p></li>
                    <li><p>Bonds and Govt. Securities</p></li>
                </div>
            </div>
            <img style={{width:"90%"}} src="/media/images/pressLogos.png"/>
        </div>
      </div>
    </div>
  );
}
export default Awards;
