import React from "react";

const FooterContact = () => {
  return (
    <ul className="Footer__section">
      <h4 className="Footer__section-heading">Kontakt:</h4>
      <li className="Footer__section-items">
        <a href="tel:126873848">12 687 38 48</a>
      </li>
      <li className="Footer__section-items">
        <a href="https://www.google.com/maps/dir//Stradomska+23,+33-332+Krak%C3%B3w,+Poland/@50.05225,19.9407083,17z/data=!4m10!1m2!7m1!2e1!4m6!1m1!4e2!1m2!1m1!1s0x47165b6b90e8654f:0xb53442e2ce1677e1!3e0">
          Stradomska 23,33-332 Kraków
        </a>
      </li>
      <li className="Footer__section-items">
        <a href="mailto:pizzaloft@wp.pl">pizzaloft@wp.pl</a>
      </li>
    </ul>
  );
};

export { FooterContact };
