import React from "react";

const Nav = ({ children }) => {
  return (
    <nav className="navigation__nav ">
      <ul className="navigation__list">
        <div className="navigation__logo">
          <h1>
            Pizza<span>Loft</span>
          </h1>
        </div>
        {children}
      </ul>
    </nav>
  );
};

export { Nav };
