import React from "react";
import { FaFacebookSquare, FaInstagram, FaGooglePlusG } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="Footer__section">
      <h4 className="Footer__section-heading">Social Media:</h4>
      <li className="Footer__social-items">
        <a href="https://www.facebook.com/publoft/">
          <FaFacebookSquare />
        </a>
      </li>
      <li className="Footer__social-items">
        <a href="https://www.instagram.com/pizza_loft_/">
          <FaInstagram />
        </a>
      </li>
      <li className="Footer__social-items">
        <a href="https://www.google.com/search?sxsrf=ACYBGNRQcxxEp-PZiSUYi_F0vaSzal9-qA:1579975324019&q=pizza+loft+google+krakow&spell=1&sa=X&ved=2ahUKEwjDlcTfqp_nAhVSkMMKHaIqCSoQBSgAegQIDxAC#lkt=overview&trex=m_t:lcl_akp,rc_f:,rc_ludocids:15569408318147242409,rc_q:Pizza%2520Loft,ru_q:Pizza%2520Loft">
          <FaGooglePlusG />
        </a>
      </li>
    </ul>
  );
};

export { SocialMedia };
