import React from "react";
import Header from "../components/layouts/Header.layout";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Intership from "../components/Intership";
import Verfiy from "../components/Verfiy";
import Perks from '../components/Perks'
import FAQ from "../components/FAQ";
import Footer from "../components/layouts/Footer.layout";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Intership />
      <Perks/>
      <FAQ/>
      <Footer/>
      {/* <Verfiy />
      <Contact /> */}
    </>
  );
};

export default LandingPage;
