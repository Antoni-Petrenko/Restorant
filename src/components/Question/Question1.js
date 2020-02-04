import React from "react";
import { Link } from "react-router-dom";

const Question1 = ({ history }) => {
  return (
    <div className="qestion">
      <Link className='button' to="/menu/glutenfree/pizza">Gluten free</Link>
      <Link className='button' to="/menu/regular/pizza">Zwykła</Link>
      <a
      className='button'
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

export default Question1;
