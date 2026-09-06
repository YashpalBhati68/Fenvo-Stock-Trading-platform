import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // const { closeBuyWindow } = useContext(GeneralContext);

  const generalContext = useContext(GeneralContext);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const handleBuyClick = async () => {
    try {
      await axios.post(`${BACKEND_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      generalContext.closeBuyWindow();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="buy-container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buy-buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <Link className="buy-btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>

          <Link to="" className="buy-btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
