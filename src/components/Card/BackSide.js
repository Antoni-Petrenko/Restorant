import React from "react";
import { Link } from "react-router-dom";

const BackSide = ({ gfree, classic }) => {
  return (
    <div className="Card__side Card__side--back">
      <Link to={classic} className="Card__button">
        klasyczne
      </Link>
      <Link to={gfree} className="Card__button">
        glutenfree
      </Link>
    </div>
  );
};

export { BackSide };
