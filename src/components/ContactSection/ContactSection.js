import React from "react";

const ContactSection = ({ children }) => {
  return (
    <section className="Contact-section">
      <h2 className="Contact-section__heading">Kontakt</h2>
      {children}
    </section>
  );
};

export { ContactSection };
