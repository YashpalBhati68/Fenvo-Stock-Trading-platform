import React from "react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-5 pt-5">
      <div className="row">
        <img
          src="/media/images/homeHero.png"
          alt="image of hero section of home page"
          className="mb-5"
          style={{ width: "80%", margin: "0 auto" }}
        />
        <h2>Invest in everything</h2>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="mt-4 btn btn-primary fs-5"
          style={{ width: "20%", margin: " 0 auto" }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up for free{" "}
        </button>
      </div>
    </div>
  );
}
export default Hero;
