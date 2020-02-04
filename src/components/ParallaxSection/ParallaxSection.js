import React from "react";

const ParallaxSection = ({ url}) => {
  const backgroundImage={
    backgroundImage:`url(${url})`
  }
  return <div style={backgroundImage} className="Parallax-section"></div>;
};

export { ParallaxSection };
