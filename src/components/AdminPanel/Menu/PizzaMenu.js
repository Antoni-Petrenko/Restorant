import React from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import Menu from "./Menu";

const PizzaMenu = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <nav className={"menu-navigation"}>
        <NavLink className={"menu-navigation__button"} to={`${url}/glutenfree`}>
          Gluten Free
        </NavLink>
        <NavLink className={"menu-navigation__button"} to={`${url}/regular`}>
          Zwykła pizza
        </NavLink>
      </nav>
      <Route path={`${url}/glutenfree`} component={Menu} />
      <Route path={`${url}/regular`} component={Menu} />
    </>
  );
};

export default PizzaMenu;
