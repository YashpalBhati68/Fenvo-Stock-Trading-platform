import React from "react";

function Stats() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-5 mt-5">
          <h2 className="pb-4">Trust with confidence</h2>
          <div className="row pb-4">
            <h4>Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="row pb-4">
            <h4>No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className="row pb-4">
            <h4>The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="row pb-4">
            <h4>Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        <div className="col-7 mb-5">
          <div className="row mt-5 mb-5">
            <img
              src="/media/images/ecosystem.png"
              alt="ecosystem image of zerodha"
            />
          </div>
          <div className="row text-center">
            <div className="col-6">
              <a href="" style={{ textDecoration: "none", fontWeight: "600" }}>
                Explore our products{" "}
              </a>
            </div>
            <div className="col-6 ">
              <a href="" style={{ textDecoration: "none", fontWeight: "600" }}>
                Try kit demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
