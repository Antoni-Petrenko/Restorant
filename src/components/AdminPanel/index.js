import React from "react";
import { AsideNavigation } from "./AsideNavigation";
import "./styles.scss";
import { Route } from "react-router-dom";
import DrinksMenu from "./Menu/DrinksMenu";
import PizzaMenu from "./Menu/PizzaMenu";

const AdminPanel = () => {
  return (
    <>
      <AsideNavigation />
      <Route path="/admin-panel/pizza-menu" component={PizzaMenu} />
      <Route path="/admin-panel/bar-menu" component={DrinksMenu} />
      <Route
        path="/admin-panel/page-info"
        component={() => (
          <h1 className="message">this page is under development!</h1>
        )}
      />
    </>
  );
};

export default AdminPanel;
