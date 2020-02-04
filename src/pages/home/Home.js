import React from "react";
import AboutUs from "../../components/AboutUsSection";
import ParallaxSection from "../../components/ParallaxSection";
import loft from "../../img/loftSmall.png";
import telephone from "../../img/telephone.jpg";
import local2 from "../../img/local2.jpg";
import MenuSection from "../../components/MenuSection";
import Contact from "../../components/ContactSection";

const Home = () => {
  return (
    <main>
      <AboutUs />
      <ParallaxSection url={loft} />
      <MenuSection />
      <ParallaxSection url={telephone} />
      <Contact />
      <ParallaxSection url={local2} />
    </main>
  );
};



export default Home;
