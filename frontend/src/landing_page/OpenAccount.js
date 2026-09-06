import React from "react";
import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-5 pt-5 mb-5">
      <div className="row">
        <h2>Open a Fenvo account</h2>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="mt-4 btn btn-primary fs-5"
          style={{ width: "20%", margin: " 0 auto" }}
          onClick={() => {
            // window.location.href = "http://localhost:3000/signup";
            navigate("/signup");
          }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}
export default OpenAccount;
