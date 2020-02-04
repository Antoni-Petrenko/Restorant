import React from "react";
import { FooterContact } from "./FooterContact";
import { SocialMedia } from "./SocialMedia";
import { PageMap } from "./PageMap";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">
      <h3 className="Footer__heading">
        Pizza<span>Loft</span>:
      </h3>
      <Route path="/menu" component={FooterContact} />
      <Route path="/menu" component={SocialMedia} />
      <Route exact path="/" component={PageMap} />
    </footer>
  );
};

export { Footer };
