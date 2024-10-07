import React from "react";
import AboutEthiopia from "../components/aboutEthiopia/aboutEthiopia";
import Footer from '../components/footer/footer';
import HeroSection from "../components/heroSection/heroSection";
import PopularDestinations from "../components/popularDestination/popularDestination";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutEthiopia />
      <PopularDestinations />
      <Footer />
    </div>
  );
};

export default Home;
