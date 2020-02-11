import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Question1 = () => {
  return (
    <div className="question">
      <Link className="question__button" to="/menu/glutenfree/pizza">
        Gluten free
      </Link>
      <Link className="question__button" to="/menu/regular/pizza">
        Zwykła
      </Link>
      <Link className="question__button" to="/">
        Wróć
      </Link>
    </div>
  );
};

export default Question1;
