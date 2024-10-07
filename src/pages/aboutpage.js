import React from "react";
import AboutUs from '../components/aboutUs/aboutUs';
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";

const About = () => {
  return (
    <div>
      <div style={{background: 'black'}}>
        <NavBar />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
