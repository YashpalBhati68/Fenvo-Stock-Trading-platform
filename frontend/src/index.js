import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
// import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricePage";
import ProductPage from "./landing_page/products/ProductsPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
// import Signin from "./landing_page/signup/Signin";
import Login from './landing_page/auth/Login.js';
import Signup from './landing_page/auth/SignUp.js';
import Profile from './landing_page/profile/Profile.js';
import PrivateRoute from './landing_page/auth/PrivateRoute.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<HomePage />}></Route> */}
      <Route path='/' element={
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      } />
      {/* <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>,
);

