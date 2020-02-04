import React from "react";
import MonogramAnd from "../Monogram";
const AboutUs = ({ heading, paragraph }) => {
  return (
    <section id="about-us" className="About-us-section">
      <h2 className="About-us-section__heading">{heading}</h2>
      <MonogramAnd />
      <p className="About-us-section__paragraph">{paragraph}</p>
    </section>
  );
};

export { AboutUs };
