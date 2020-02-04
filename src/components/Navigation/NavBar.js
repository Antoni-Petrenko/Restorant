import React from "react";

const NavBar = ({ children, isActive, handleClick }) => {
  let toggleClass = "navigation__toggle";
  if (isActive) toggleClass += " active";

  return (
    <div className="navigation">
      <div className={toggleClass} onClick={handleClick}>
        <span className="navigation__icon"></span>
      </div>
      <div className="navigation__background"></div>
      {children}
    </div>
  );
};

export { NavBar };
