import React from "react";
import { Link } from "react-router-dom";

const Question2 = ({ history, location }) => {
  return (
    <div className="qestion">
      <Link className="button" to={`${location.pathname}/classic`}>
        Klasyczna pizza
      </Link>
      <Link className="button" to={`${location.pathname}/vegetarian`}>
        Wegetariańska
      </Link>
      <Link className="button" to={`${location.pathname}/vegan`}>
        Wegańska
      </Link>
      <a
        className="button"
        href="/"
        onClick={e => {
          e.preventDefault();
          history.goBack();
        }}
      >
        Back
      </a>
    </div>
  );
};

export default Question2;
