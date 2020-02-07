import React from "react";
import { connect } from "react-redux";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import { RegularPizzaMenu } from "./RegularPizzaMenu";
import { GlutenfreePizzaMenu } from "./GlutenfreePizzaMenu";

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
      <Route path={`${url}/glutenfree`} component={GlutenfreePizzaMenu} />
      <Route path={`${url}/regular`} component={RegularPizzaMenu} />
    </>
  );
};

export default connect()(PizzaMenu);
