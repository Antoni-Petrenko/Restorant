import React from "react";
import { MenuSection } from "./MenuSection";
import { NavLink, Route } from "react-router-dom";

const SwitchMenuNav = ({
  url,
  firstProduct = {},
  secProduct = {},
  firstProductName = "",
  secProductName = ""
}) => {
  return (
    <>
      <nav className={"menu-navigation"}>
        <NavLink
          className={"menu-navigation__button"}
          to={`${url}/${firstProductName}`}
        >
          {firstProductName}
        </NavLink>
        <NavLink
          className={"menu-navigation__button"}
          to={`${url}/${secProductName}`}
        >
          {secProductName}
        </NavLink>
      </nav>

      <Route path={`${url}/${firstProductName}`}>
        <MenuSection menu={firstProduct}  />
      </Route>
      <Route path={`${url}/${secProductName}`}>
        <MenuSection menu={secProduct} />
      </Route>
    </>
  );
};

export { SwitchMenuNav };
