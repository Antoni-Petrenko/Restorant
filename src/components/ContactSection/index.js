import React from "react";
import { ContactSection } from "./ContactSection";
import { Map } from "./Map";
import { Address } from "./Address";
import MonogramAnd from "../Monogram";
import "./styles.scss";

const Contact = () => {
  return (
    <ContactSection>
      <MonogramAnd />
      <Map />
      <Address />
    </ContactSection>
  );
};

export default Contact;
