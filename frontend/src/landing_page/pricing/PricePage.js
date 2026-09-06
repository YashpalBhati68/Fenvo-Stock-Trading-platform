import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PricePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OpenAccount />
      <Brokerage />
      <Footer />
    </>
  );
}
export default PricePage;
