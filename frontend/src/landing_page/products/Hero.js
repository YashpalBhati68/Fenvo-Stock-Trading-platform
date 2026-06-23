import React from "react";

function Hero() {
  return (
    <div className="container text-center border-bottom" style={{ marginTop: "12%"}}>
      <div className="row text-muted " style={{ marginBottom: "1%"}}>
        <h1 className="fs-3 ">Zerodha Products</h1>
        <h4 className="fs-4 ">Sleek, modern, and intuitive trading platforms</h4>
        <p className="mt-3 fw-semibold" style={{ marginBottom: "8%"}}>
          Check out our&nbsp;
          <a href="" className="text-decoration-none">
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}
export default Hero;
